import React, { useState } from 'react';
import { Typography, CssBaseline, AppBar, Button, Drawer, List, Toolbar, Divider } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../hooks/useAuth';
import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import ReviewModal from './ReviewModal';
import HireUsModal from './HireUsModal';
import Profile from '../Shared/Profile';

const drawerWidth = 280;

const DashboardHome = props => {
     const { window } = props;
     const [mobileOpen, setMobileOpen] = useState(false);
     const { user, admin, logOut } = useAuth();
     const [openReviewModal, setOpenReviewModal] = useState(false);
     const [openHireUsModal, setOpenHireUsModal] = useState(false);
     const [openProfileModal, setOpenProfileModal] = React.useState(false);      

     const handleReviewModalOpen = () => setOpenReviewModal(true);
     const handleReviewModalClose = () => setOpenReviewModal(false);     
     const handleHireUsModalOpen = () => setOpenHireUsModal(true);
     const handleHireUsModalClose = () => setOpenHireUsModal(false);
     const handleOpenProfile = () => setOpenProfileModal(true);
     const handleCloseProfile = () => setOpenProfileModal(false);

     const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
     };
     
     const drawer = (
          <div style={{ backgroundColor: '#FBD062', color: 'white', height: '100%', border: 0, px: 'auto' }}>
               <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Toolbar />
                    <List sx={{ height: admin ? '80%' : '70%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                         <NavLink to="/dashboard" style={{ color: '#111430', textDecoration: 'none' }}>
                              <Button color="inherit" sx={{ fontSize: 19, width: '100%', fontWeight: 'bold', py: 1, px: 3, fontFamily: 'Macondo, cursive' }}>
                                   Services
                              </Button>
                         </NavLink>
                         <Button color="inherit" sx={{ fontSize: 19, width: '100%', fontWeight: 'bold', py: 1, my: 1, px: 3, fontFamily: 'Macondo, cursive', color: '#111430' }} onClick={handleHireUsModalOpen}>
                              Hire Us
                         </Button>
                         <Button color="inherit" sx={{ fontSize: 19, width: '100%', fontWeight: 'bold', py: 1, px: 3, fontFamily: 'Macondo, cursive', color: '#111430' }} onClick={handleReviewModalOpen}>
                              Review Us
                         </Button>
                         <Link to="/dashboard/payment" style={{ color: '#111430', textDecoration: 'none' }}>
                              <Button color="inherit" sx={{ fontSize: 19, width: '100%', fontWeight: 'bold', py: 1, px: 3, my: 1, fontFamily: 'Macondo, cursive' }}>
                                   Payment
                              </Button>
                         </Link>

                         {
                              admin && <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                   <Divider sx={{ my: 3, mx: 'auto', width: '90%' }} />
                                   <Link to="/dashboard/manage-orders" style={{ color: '#111430', textDecoration: 'none' }}>
                                        <Button color="inherit" sx={{ fontSize: 18, width: '100%', fontWeight: 'bold', py: 1, px: 3, fontFamily: 'Macondo, cursive' }}>Manage Orders</Button>
                                   </Link>
                                   <Link to="/dashboard/manage-services" style={{ color: '#111430', textDecoration: 'none' }}>
                                        <Button color="inherit" sx={{ fontSize: 18, width: '100%', fontWeight: 'bold', py: 1, px: 3, my: 1, fontFamily: 'Macondo, cursive' }}>Manage Services</Button>
                                   </Link>
                                   <Link to="/dashboard/manage-projects" style={{ color: '#111430', textDecoration: 'none' }}>
                                        <Button color="inherit" sx={{ fontSize: 18, width: '100%', fontWeight: 'bold', py: 1, px: 3, fontFamily: 'Macondo, cursive' }}>Manage Projects</Button>
                                   </Link>
                                   <Link to="/dashboard/manage-clients" style={{ color: '#111430', textDecoration: 'none' }}>
                                        <Button color="inherit" sx={{ fontSize: 18, width: '100%', fontWeight: 'bold', py: 1, px: 3, my: 1, fontFamily: 'Macondo, cursive' }}>Manage Clients</Button>
                                   </Link>                                   
                                   <Link to="/dashboard/manage-team" style={{ color: '#111430', textDecoration: 'none' }}>
                                        <Button color="inherit" sx={{ fontSize: 18, width: '100%', fontWeight: 'bold', py: 1, px: 3, fontFamily: 'Macondo, cursive' }}>Manage Team</Button>
                                   </Link>                                   
                                   <Link to="/dashboard/manage-reviews" style={{ color: '#111430', textDecoration: 'none' }}>
                                        <Button color="inherit" sx={{ fontSize: 18, width: '100%', fontWeight: 'bold', py: 1, px: 3, my: 1, fontFamily: 'Macondo, cursive' }}>Manage Reviews</Button>
                                   </Link>                                   
                              </Box>
                         }
                    </List>
                    <Divider />
                    <Box sx={{ width: '80%', mt: 2, display: 'flex', justifyContent: 'space-evenly'}}>
                         <Link to="/">
                              <IconButton sx={{ color: 'black' }} onClick={logOut}>
                                   <HomeIcon sx={{ fontSize: 34 }} />
                              </IconButton>
                         </Link>
                         <IconButton sx={{ color: 'black' }} onClick={logOut}>
                              <LogoutIcon sx={{ fontSize: 30 }} />
                         </IconButton>
                    </Box>
                    <Toolbar />
               </Box>
          </div>
     );

     const container = window !== undefined ? () => window().document.body : undefined;  
     
     return (
          <div>
               <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                         position="fixed"
                         sx={{
                              width: { sm: `calc(100% - ${drawerWidth}px)` },
                              ml: { sm: `${drawerWidth}px` },
                              boxShadow: 'none'
                         }}
                    >
                         <Toolbar sx={{ bgcolor: '#FBD062', color: 'black' }}>
                              <IconButton
                                   color="inherit"
                                   aria-label="open drawer"
                                   edge="start"
                                   onClick={handleDrawerToggle}
                                   sx={{ mr: 2, display: { sm: 'none' } }}
                              >
                                   <MenuIcon />
                              </IconButton>
                              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                   <Typography variant="h5" noWrap component="div" sx={{ textAlign: 'left', fontFamily: 'Macondo, cursive', fontSize: 30 }}>
                                        <strong>Dashboard</strong>
                                        
                                   </Typography>
                                   {
                                        user?.email && <Typography variant="body2" sx={{ color: 'black', fontFamily: 'Macondo, cursive', fontSize: 18 }}>Welcome, <b onClick={handleOpenProfile} style={{ cursor: 'pointer' }}>{user.displayName}</b></Typography>
                                   }
                              </Box>
                         </Toolbar>
                    </AppBar>
                    <Box
                         component="nav"
                         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                         aria-label="mailbox folders"
                    >
                         <Drawer
                              container={container}
                              variant="temporary"
                              open={mobileOpen}
                              onClose={handleDrawerToggle}
                              ModalProps={{
                                   keepMounted: true, // Better open performance on mobile.
                              }}
                              sx={{
                                   display: { xs: 'block', sm: 'none' },
                                   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                         >
                              {drawer}
                         </Drawer>
                         <Drawer
                              variant="permanent"
                              sx={{
                                   display: { xs: 'none', sm: 'block' },
                                   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                              open
                         >
                              {drawer}
                         </Drawer>
                    </Box>
                    <Box
                         component="main"
                         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                         <Toolbar />
                         <Outlet />
                    </Box>
               </Box>

               <ReviewModal
                    openReviewModal={openReviewModal}
                    handleReviewModalClose={handleReviewModalClose}
               />                    
               <HireUsModal
                    openHireUsModal={openHireUsModal}
                    handleHireUsModalClose={handleHireUsModalClose}
               />   
               <Profile 
                    openProfileModal={openProfileModal}
                    handleCloseProfile={handleCloseProfile}
               />                 
          </div>
     );
}

DashboardHome.propTypes = {
     /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
     window: PropTypes.func,
};

export default DashboardHome;