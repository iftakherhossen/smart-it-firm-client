import AddIcon from '@mui/icons-material/Add';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Backdrop, Box, Button, Card, Fade, Grid, IconButton, Input, Modal, TextField, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Service from '../HomeComponents/Service';

const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 600,
     bgcolor: 'white',
     border: '0',
     boxShadow: 24,
     borderRadius: 4,
     p: 5,
     textAlign: 'center',
};

const ManageServices = () => {
     const [services, setServices] = useState([]);
     const [name, setName] = useState('');
     const [description, setDescription] = useState('');
     const [colorCode, setColorCode] = useState('');
     const [image, setImage] = useState(null);
     const [error, setError] = useState('');
     const [success, setSuccess] = useState(false);
     const [open, setOpen] = useState(false);
     const msdFont = true;

     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);     
     
     useEffect(() => {
          fetch('https://smart-it-firm-server.herokuapp.com/services')
               .then(res => res.json())
               .then(data => setServices(data));
     }, []);
     
     const handleAddService = e => {
          e.preventDefault();

          // checking image
          if (!image) {
               setError('Upload a Picture!');
          }

          const formData = new FormData();
          formData.append('name', name);
          formData.append('description', description);
          formData.append('borderColor', colorCode);
          formData.append('image', image);

          fetch('https://smart-it-firm-server.herokuapp.com/services', {
               method: 'POST',
               mode: 'opaque',
               headers: {
                    'content-type': 'application/json'
               },
               body: formData
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         setSuccess(true)
                    }
               })
               .catch(error => {
                    setError("Image can't upload right now!", error)
               });
     }

     success === true && Swal.fire(
          'Done!',
          'Service Added Successfully!',
          'success'
     )
     error === true && Swal.fire(
          'Oops!',
          `Something went wrong! ${error}`,
          'error'
     )

     return (
          <div>
               <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>                              
                    {
                         services.map(service => <Service
                              key={service._id}
                              service={service}
                              msdFont={msdFont}
                         />)
                    }
                    {
                         msdFont && <Grid item xs={12} sm={6} md={4}>
                              <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100%', mx: { xs: 1, md: 0 } }}>
                                   <Tooltip title="Add New Service">
                                        <IconButton aria-label="Add More Services" onClick={handleOpen} sx={{ boxShadow: 3 }}>
                                             <AddIcon sx={{ fontSize: 45 }} />
                                        </IconButton>
                                   </Tooltip>
                              </Card>
                         </Grid>
                    }
               </Grid>


               {/* add service modal */}
               <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                         <Box sx={style}>
                              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', fontSize: 28, fontFamily: 'Macondo, cursive', color: 'black' }}>Add New Service</Typography>
                              <Box>
                                   <form>
                                        <TextField
                                             id="standard-basic1"
                                             label="Service Name"
                                             name="name"
                                             variant="standard"
                                             required
                                             onChange={e => setName(e.target.value)}
                                             sx={{ width: 1, mb: 2 }}
                                             autoFocus
                                        />
                                        <TextField
                                             id="standard-multiline-static"
                                             label="Service Description"
                                             multiline
                                             name="description"
                                             rows={4}
                                             variant="standard"
                                             required
                                             onChange={e => setDescription(e.target.value)}
                                             sx={{ width: 1, mb: 2 }}
                                        />
                                        <TextField
                                             id="standard-basic3"
                                             label="Color Code"
                                             variant="standard"
                                             name="borderColor"
                                             required
                                             onChange={e => setColorCode(e.target.value)}
                                             sx={{ width: 1, mb: 2 }}
                                        />
                                        <label htmlFor="contained-button-file">
                                             <Input 
                                                  accept="image/*" 
                                                  id="contained-button-file" 
                                                  multiple 
                                                  type="file" 
                                                  sx={{ display: 'none' }} 
                                                  name="image"
                                                  onChange={e => setImage(e.target.files[0])}
                                             />
                                             <Button variant="contained" component="span" sx={{ fontSize: '1em', backgroundColor: '#FBD062', color: 'black', fontFamily: 'Macondo, cursive', fontWeight: 'bold' }} className="hoverWhite">
                                                  <PhotoCamera sx={{ fontSize: 20 }} /> &nbsp; Upload Service Image
                                             </Button>
                                        </label>
                                   </form>
                                   <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
                                        <Button onClick={handleAddService} variant="contained" type="submit" sx={{ fontFamily: 'Macondo, cursive', width: 100, fontSize: '1em', backgroundColor: '#FBD062', color: 'black', fontWeight: 'bold', display: 'flex', alignItems: 'center' }} className="hoverWhite" disabled={!image || success}>
                                             Add 
                                        </Button>
                                   </Box>
                                   
                              </Box>
                         </Box>
                    </Fade>
               </Modal>
          </div>
     );
};

export default ManageServices;