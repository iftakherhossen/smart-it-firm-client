import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../hooks/useAuth';
import Register from '../Components/RegisterComponents/Register';

const RegisterPage = () => {
     const { isLoading } = useAuth();
     const [open, setOpen] = React.useState(false);
     const handleClose = () => {
          setOpen(false);
     };
     const handleToggle = () => isLoading && setOpen(!open);


     return (
          <div>
               {
                    isLoading === true ? <Backdrop
                         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                         open={open}
                         onClick={handleClose}
                    >
                         <CircularProgress color="inherit" />
                    </Backdrop> : <Box>
                         <Register />
                    </Box>
                    
               }
          </div>
     );
};

export default RegisterPage;