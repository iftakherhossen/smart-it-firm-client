import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Backdrop, Button, Card, Fade, Grid, IconButton, Modal, TextField, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

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

const ManageProjects = () => {
     const [projects, setProjects] = useState([]);
     const [deleteSuccess, setDeleteSuccess] = useState(false);
     const [open, setOpen] = useState(false);
     const [projectTitle, setProjectTitle] = useState('');
     const [projectImage, setProjectImage] = useState('');
     const [success, setSuccess] = useState(false);

     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);  

     useEffect(() => {
          fetch('https://smart-it-firm-server.herokuapp.com/projects')
               .then(res => res.json())
               .then(data => setProjects(data));
     }, []);

     const disable = projects.length > 5;

     const handleDelete = id => {
          Swal.fire({
               title: 'Are you sure?',
               text: "This review will be public!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    const url = `https://smart-it-firm-server.herokuapp.com/projects/${id}`;

                    fetch(url, {
                         method: 'DELETE',
                         mode: 'opaque'
                    })
                         .then(res => res.json())
                         .then(data => {
                             if (data.deletedCount) {
                                   const remaining = projects.filter(project => project._id !== id);
                                   setProjects(remaining);
                                   setDeleteSuccess(true);
                              }
                         })
                    
                    deleteSuccess && Swal.fire(
                         'Deleted!',
                         'Project Deleted Successfully!',
                         'success'
                    )
               }
          })
     };

     const handleAddService = e => {
          e.preventDefault();

          const formData = new FormData();
          formData.append('title', projectTitle);
          formData.append('image', projectImage);

          fetch('https://smart-it-firm-server.herokuapp.com/projects', {
               method: 'POST',
               mode: 'opaque',
               headers: {
                    'content-type': 'application/json',
                    'host': 'smart-it-firm-server.herokuapp.com',
                    'Access-Control-Allow-Origin': 'http://localhost:3000/'
               },
               body: formData
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         setSuccess(true)
                    }
                    success === true && Swal.fire(
                         'Done!',
                         'Project Image Details Added Successfully!',
                         'success'
                    )
               })
               .catch(error => {
                    console.log(error)
               });
     }

     return (
          <div>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
                    {
                         projects.map(({ _id, image }) => <Grid item xs={12} sm={6} md={4} key={_id}>
                              <img src={image} alt="thumbnail" className="thumbnail" draggable="false" style={{ cursor: 'auto', padding: '0 0' }} />
                              <Box sx={{ display: 'flex', alignItems: 'center', pl: 2 }}>
                                   <IconButton aria-label="Delete" disabled={!disable} onClick={() => handleDelete(_id)}>
                                        <DeleteIcon sx={{ color: disable === true ? 'red' : '#aaa', fontSize: 28 }} />
                                   </IconButton>
                              </Box>
                         </Grid>)
                    }
                    <Grid item xs={12} sm={6} md={4}>
                         <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: { xs: 1, md: 0 }, cursor: 'auto' }} className="thumbnail">
                              <Tooltip title="Add New Service">
                                   <IconButton aria-label="Add More Services" onClick={handleOpen} sx={{ boxShadow: 2 }}>
                                        <AddIcon sx={{ fontSize: 30 }} />
                                   </IconButton>
                              </Tooltip>
                         </Card>
                    </Grid>
               </Grid>

               {/* add project image details modal */}
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
                              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', fontSize: 28, fontFamily: 'Macondo, cursive', color: 'black', mb: 2 }}>Add New Project Details</Typography>
                              <Box>
                                   <form>
                                        <TextField
                                             id="standard-basic1"
                                             label="Project Title"
                                             name="title"
                                             variant="standard"
                                             required
                                             onChange={e => setProjectTitle(e.target.value)}
                                             sx={{ width: 1, mb: 2 }}
                                             autoFocus
                                        />
                                        <TextField
                                             id="standard-basic2"
                                             label="Project Image Link"
                                             variant="standard"
                                             name="image"
                                             required
                                             onChange={e => setProjectImage(e.target.value)}
                                             sx={{ width: 1, mb: 2 }}
                                        />
                                   </form>
                                   <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
                                        <Button onClick={handleAddService} variant="contained" type="submit" sx={{ fontFamily: 'Macondo, cursive', width: 100, fontSize: '1em', backgroundColor: '#FBD062', color: 'black', fontWeight: 'bold', display: 'flex', alignItems: 'center' }} className="hoverWhite" disabled={!projectImage || success}>
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

export default ManageProjects;