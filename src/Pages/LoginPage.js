import { Backdrop, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Login from '../Components/LoginComponents/Login';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
     const { isLoading } = useAuth();
     const [open, setOpen] = React.useState(false);
     const handleClose = () => {
          setOpen(false);
     };
     const handleToggle = () => {
          isLoading && setOpen(!open);
     };

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
                         <Login />
                    </Box>
                    
               }
          </div>
     );
};

export default LoginPage;