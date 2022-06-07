import { Button, FormControl, Input, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const reviewModalStyle = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 650,
     bgcolor: 'white',
     border: '0',
     boxShadow: 24,
     py: 6,
     px: 5,
     textAlign: 'center',
};

const HireUsModal = ({ openHireUsModal, handleHireUsModalClose }) => {     
     const { user, isLoading } = useAuth();
     const initialInfo = {
          name: user.displayName,
          email: user.email,
     }
     const [orderDetails, setOrderDetails] = useState(initialInfo);
     const [services, setServices] = useState([]);
     const [service, setService] = useState('');
     const [borderColor, setBorderColor] = useState('');

     useEffect(() => {
          fetch('https://smart-it-firm.herokuapp.com/services')
               .then(res => res.json())
               .then(data => setServices(data));
     }, []);

     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;   
          
          if (field === 'service') {
               setService(value);
          }

          const newReviewData = { ...orderDetails };

          newReviewData[field] = value;
          setOrderDetails(newReviewData);
     };
      
     const handleHire = e => {
          // collect data
          const post = {
               ...orderDetails,
               borderColor
          }
          console.log(post);
          
          // send data to the server
          fetch('https://smart-it-firm.herokuapp.com/orders', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(post)
          })
               .then(res => res.json())
               .then(result => {
                    if (result.insertedId) {
                         handleHireUsModalClose();
                         Swal.fire(
                              'Done!',
                              'Thanks for your feedback!',
                              'success'
                         );
                    }
               })

          e.preventDefault();
     };

     return (
          <Modal
                    open={openHireUsModal}
                    onClose={handleHireUsModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box sx={reviewModalStyle}>
                         <Typography id="modal-modal-title" variant="h4" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold' }}>
                              Hire Us
                         </Typography>
                         <Typography id="modal-modal-title" variant="h6" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold', mb: 3 }}>
                              To get your work done!
                         </Typography>
                         <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: { xs: '70%', md: '80%' } }}>
                                   {!isLoading && <form onSubmit={handleHire}>
                                        <FormControl variant="standard" sx={{ mb: 2, width: '90%' }} required>
                                             <InputLabel id="demo-simple-select-standard-label">Service</InputLabel>
                                             <Select
                                                  labelId="demo-simple-select-standard-label"
                                                  id="demo-simple-select-standard"
                                                  onBlur={handleOnBlur}
                                                  label="Service"
                                                  name="service"
                                                  sx={{ textAlign: 'left' }}                                      
                                             >
                                                  <MenuItem sx={{ fontFamily: 'Macondo, cursive' }}>Select Your Service Type</MenuItem>
                                                  {
                                                       services.map(({ _id, name, borderColor }) => <MenuItem value={name} key={_id} sx={{ fontFamily: 'Macondo, cursive' }} onBlur={e => setBorderColor(borderColor)}>{name}</MenuItem>)
                                                  }
                                             </Select>
                                        </FormControl>
                                        
                                        <TextField 
                                             id="standard-basic2" 
                                             label="Details"
                                             multiline 
                                             rows={4} 
                                             variant="standard" 
                                             name="details"
                                             onBlur={handleOnBlur}
                                             sx={{ mb: 2, width: '90%', fontFamily: 'Macondo, cursive' }}
                                             required                                             
                                        />
                                        {
                                             service === 'Internship' ? <label htmlFor="contained-button-file">
                                                  <Input accept="image/*" id="contained-button-file" multiple type="file" sx={{ display: 'none' }} />
                                                  <Button variant="contained" component="span" sx={{ mt: 0.5, mb: 2, fontFamily: 'Macondo, cursive', fontWeight: 'bold' }}>
                                                       Upload your Resume
                                                  </Button>
                                             </label> : <TextField 
                                                  id="standard-basic3" 
                                                  label="Appointment Date" 
                                                  type="date"
                                                  variant="standard" 
                                                  required
                                                  name="appointment"
                                                  sx={{ mb: 2, width: '90%', fontFamily: 'Macondo, cursive' }}
                                                  onBlur={handleOnBlur}
                                                  autoFocus
                                                  disabled={service === 'Internship'}
                                             />
                                        }
                                        {
                                             service === 'Internship' ? <FormControl variant="standard" sx={{ mb: 2, width: '90%' }} required>
                                                  <InputLabel id="demo-simple-select-standard-label">Internship Type</InputLabel>
                                                  <Select
                                                       labelId="demo-simple-select-standard-label"
                                                       id="demo-simple-select-standard"
                                                       onBlur={handleOnBlur}
                                                       label="Meeting Type"
                                                       name="meetingType"
                                                       required    
                                                       sx={{ textAlign: 'left' }}                                    
                                                  >
                                                       <MenuItem value="Remote" sx={{ fontFamily: 'Macondo, cursive' }}>Remote</MenuItem>
                                                       <MenuItem value="Hybrid" sx={{ fontFamily: 'Macondo, cursive' }}>Hybrid</MenuItem>
                                                  </Select>
                                             </FormControl> :
                                             <FormControl variant="standard" sx={{ mb: 2, width: '90%' }} required>
                                                  <InputLabel id="demo-simple-select-standard-label">Meeting Type</InputLabel>
                                                  <Select
                                                       labelId="demo-simple-select-standard-label"
                                                       id="demo-simple-select-standard"
                                                       onBlur={handleOnBlur}
                                                       label="Meeting Type"
                                                       name="meetingType"
                                                       required    
                                                       sx={{ textAlign: 'left' }}                                    
                                                  >
                                                       <MenuItem value="Online" sx={{ fontFamily: 'Macondo, cursive' }}>Online</MenuItem>
                                                       <MenuItem value="Office" sx={{ fontFamily: 'Macondo, cursive' }}>In Office</MenuItem>
                                                  </Select>
                                             </FormControl>
                                        }
                                        
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
                                             <Button variant="contained" type="submit" color="primary" sx={{ fontFamily: 'Macondo, cursive', fontSize: 17, fontWeight: 'bold', width: 100, px: 3 }}>
                                                  Post
                                             </Button>
                                        </Box>
                                   </form>}
                              </Box>
                         </Box>
                    </Box>
               </Modal>  
     );
};

export default HireUsModal;