import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonIcon from '@mui/icons-material/Person';
import { Backdrop, Box, Fade, IconButton, Modal, TextField, Tooltip, Typography } from '@mui/material';
import * as React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
};

const Profile = ({ openProfileModal, handleCloseProfile, handleOpenProfile }) => {
     const  { user } = useAuth(); 
     const [userDetails, setUserDetails] = React.useState([]);
     const [designation, setDesignation] = React.useState('');
     const [success, setSuccess] = React.useState(false);

     React.useEffect(() => {
          fetch('https://smart-it-firm-server.herokuapp.com/users/')
               .then(res => res.json())
               .then(data => setUserDetails(data));
     }, [])

     const findUser = (email) => userDetails.find(user => {
          return user.email === email;
     });    

     const findByEmail = findUser(user.email);

     const handleAddDesignation = id => {
          handleCloseProfile();
          Swal.fire({
               title: 'Are you sure?',
               text: "You can't change it later!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, Update it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://smart-it-firm-server.herokuapp.com/users/${id}`, {
                         method: 'PUT',
                         mode: 'opaque',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(designation)
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.modifiedCount) {
                                   setSuccess(true);
                              }
                         });
                    
                    success && Swal.fire(
                         'Done!',
                         'This review is now public!',
                         'success'
                    )
               }
               else {
                    handleOpenProfile();
               }               
          });
          
     };

     return (
          <div>
               <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openProfileModal}
                    onClose={handleCloseProfile}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                         timeout: 500,
                    }}
               >
                    <Fade in={openProfileModal}>
                         <Box sx={style}>
                              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                   <Box>
                                        <img 
                                             src={user.photoURL} 
                                             alt="Profile"
                                             width="100" 
                                             height="100"
                                             draggable="false"
                                             style={{ borderRadius: '100%' }}
                                        />
                                   </Box>
                                   <Box sx={{ px: 2, py: 1.5, textAlign: 'left' }}>
                                        <Typography id="transition-modal-title" variant="h5" component="h3" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold', textAlign: 'left' }}>
                                             {user.displayName}
                                        </Typography>
                                        {
                                             findByEmail?.designation ? <Typography id="transition-modal-title" variant="h6" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold', fontSize: 18, textAlign: 'left', textTransform: 'capitalize', display: 'flex', alignItems: 'center' }}>
                                                  <PersonIcon sx={{ fontSize: 20, mr: 0.5 }} /> {findByEmail?.designation}
                                             </Typography> : <Box sx={{ mt: 2 }}>
                                                  <TextField 
                                                       placeholder="Designation"
                                                       variant="standard"
                                                       size="small"
                                                       required
                                                       onBlur={(e) => setDesignation(e.target.value)}
                                                  />
                                                  <Tooltip title="Add Your Designation">
                                                       <IconButton aria-label="edit" onClick={() => handleAddDesignation(findByEmail._id)} className="disabledNav">
                                                            <DriveFileRenameOutlineIcon sx={{ color: 'black' }} />
                                                       </IconButton>
                                                  </Tooltip>
                                             </Box>
                                        }
                                   </Box>
                              </Box>
                         </Box>
                    </Fade>
               </Modal>
          </div>
     );
}

export default Profile;