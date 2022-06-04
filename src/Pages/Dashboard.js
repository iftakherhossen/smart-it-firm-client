import { Backdrop, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DashboardHome from '../Components/DashboardComponents/DashboardHome';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
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
                         sx={{ color: 'black', zIndex: -1 }}
                         open={open}
                         onClick={handleClose}
                    >
                         <CircularProgress color="inherit" />
                    </Backdrop> : <Box>
                         <DashboardHome />
                    </Box>
                    
               }
          </div>
     );
};

export default Dashboard;