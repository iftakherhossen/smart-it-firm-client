import * as React from 'react';
import { Backdrop, Box, Modal, Fade, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import PersonIcon from '@mui/icons-material/Person';

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

const Profile = ({ openProfileModal, handleCloseProfile }) => {
     const  { user } = useAuth(); 
     const [userDetails, setUserDetails] = React.useState([]);

     React.useEffect(() => {
          fetch('https://smart-it-firm.herokuapp.com/users/')
               .then(res => res.json())
               .then(data => setUserDetails(data));
     }, [])

     const findUser = (email) => userDetails.find(user => {
          return user.email === email;
     });    

     const findByEmail = findUser(user.email);
     const designation = findByEmail?.designation;

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
                                        <Typography id="transition-modal-title" variant="h6" component="h4" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold', textAlign: 'left', textTransform: 'capitalize', display: 'flex', alignItems: 'center' }}>
                                             <PersonIcon sx={{ fontSize: 20, mr: 0.5 }} /> {designation}
                                        </Typography>
                                   </Box>
                              </Box>
                         </Box>
                    </Fade>
               </Modal>
          </div>
     );
}

export default Profile;