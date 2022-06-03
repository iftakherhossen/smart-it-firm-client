import * as React from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

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

const Contact = ({ open, handleClose }) => {
     const  { user } = useAuth();

     const handleSubmit = () => {
          handleClose();
          Swal.fire(
               'Sent!',
               'Your message has been sent successfully.',
               'success'
          )
     } 
     

     return (
          <div>
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
                              <Typography id="transition-modal-title" variant="h4" component="h2" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold', textAlign: 'center' }}>
                                   Contact With Us
                              </Typography>
                              <Box id="transition-modal-description" sx={{ mt: 2, px: 2 }}>
                                   <TextField
                                        id="standard-basic1"
                                        label="Name"
                                        variant="standard"
                                        required
                                        sx={{ width: 1, mb: 2 }}
                                        value={user.displayName}
                                   />
                                   <TextField
                                        id="standard-basic2"
                                        label="Email"
                                        type="email"
                                        variant="standard"
                                        required
                                        sx={{ width: 1, mb: 2 }}
                                        value={user.email}
                                   />
                                   <TextField
                                        id="standard-basic3"
                                        label="Subject"
                                        variant="standard"
                                        required
                                        sx={{ width: 1, mb: 2 }}
                                        autoFocus
                                   />
                                   <TextField
                                        id="standard-multiline-static"
                                        label="Comment\Advice"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        required
                                        sx={{ width: 1, mb: 2 }}
                                        autoFocus
                                   />
                                   <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                                        <Button onClick={handleSubmit} variant="contained" sx={{ fontFamily: 'Macondo, cursive', width: 140, fontSize: '1em', backgroundColor: '#7ab259', color: 'black', fontWeight: 'bold', display: 'flex', alignItems: 'center' }} className="hoverWhite">
                                             Send &nbsp; <SendIcon sx={{ fontSize: 20 }} />
                                        </Button>
                                   </Box>
                              </Box>
                         </Box>
                    </Fade>
               </Modal>
          </div>
     );
}

export default Contact;