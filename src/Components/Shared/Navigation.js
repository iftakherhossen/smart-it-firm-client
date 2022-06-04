import * as React from "react";
import { AppBar, Toolbar, IconButton, Container, Typography, Menu, Avatar, Button, Tooltip, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/system";
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';
import Contact from "./Contact";
const ResponsiveAppBar = () => {
     const { user } = useAuth();
     const [anchorElNav, setAnchorElNav] = React.useState(null);
     const [anchorElUser, setAnchorElUser] = React.useState(null);

     const handleOpenNavMenu = (event) => {
     setAnchorElNav(event.currentTarget);
     };
     const handleOpenUserMenu = (event) => {
     setAnchorElUser(event.currentTarget);
     };

     const handleCloseNavMenu = () => {
     setAnchorElNav(null);
     };

     const handleCloseUserMenu = () => {
     setAnchorElUser(null);
     };

     const [openContact, setOpenContact] = React.useState(false);
     const handleContactModalOpen = () => setOpenContact(true);
     const handleContactModalClose = () => setOpenContact(false);

     return (
          <AppBar position="fixed" sx={{ bgcolor: '#FBD062', boxShadow: 0 }}>
               <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">               
                    <Container maxWidth="xl">
                         <Toolbar disableGutters>
                              <Avatar src="./logo192.png" alt="logo" sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
                              <Typography
                                   variant="h5"
                                   noWrap
                                   sx={{
                                        mr: 2,
                                        display: { xs: "none", md: "flex" },
                                        fontSize: 28,
                                        fontWeight: 700,
                                        color: "black",
                                        textDecoration: "none",
                                        fontFamily: "Macondo, cursive",
                                   }}
                              >
                                   <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Smart IT firm</Link>
                              </Typography>

                              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                                   <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                   >
                                        <MenuIcon sx={{ color: 'black' }} />
                                   </IconButton>
                                   <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                             vertical: "bottom",
                                             horizontal: "left",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                             vertical: "top",
                                             horizontal: "left",
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                             display: { xs: "block", md: "none" }, textAlign: 'center'
                                        }}
                                   >
                                        <MenuItem>
                                             <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                                                  <Typography sx={{ px: 2, color: "black", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 17 }}>
                                                       Home
                                                  </Typography>
                                             </Link>  
                                        </MenuItem>
                                        <MenuItem>
                                             <HashLink to="/home#projects" style={{ color: 'black', textDecoration: 'none' }}>
                                                  <Typography sx={{ px: 2, color: "black", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 17 }}>
                                                       Projects
                                                  </Typography>
                                             </HashLink> 
                                        </MenuItem>
                                        <MenuItem>
                                             <HashLink to="/home#team" style={{ color: 'black', textDecoration: 'none' }}>
                                                  <Typography sx={{ px: 2, color: "black", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 17 }}>
                                                       Team
                                                  </Typography>
                                             </HashLink> 
                                        </MenuItem>
                                        <MenuItem>
                                             <Typography sx={{ px: 2, color: "black", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 17 }} onClick={handleContactModalOpen}>
                                                  Contact
                                             </Typography> 
                                        </MenuItem>
                                   </Menu>
                              </Box>
                              <Avatar src="./logo192.png" alt="logo" sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                              <Typography
                                   variant="h5"
                                   noWrap
                                   sx={{
                                        mr: 2,
                                        display: { xs: "flex", md: "none" },
                                        flexGrow: 1,
                                        fontWeight: 700,
                                        color: "black",
                                        textDecoration: "none",
                                        fontFamily: "Macondo, cursive",
                                   }}
                              >
                                   <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Smart IT firm</Link>
                              </Typography>
                              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end', mr: 3 }}>
                                   <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                                        <Button sx={{ my: 2, px: 2, color: "black", display: "block", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 17 }} className="navBtn">
                                             Home
                                        </Button>
                                   </Link>                         
                                   <HashLink to="/home#projects" style={{ color: 'black', textDecoration: 'none' }}>
                                        <Button sx={{ my: 2, mx: 1, color: "black", display: "block", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 17 }} className="navBtn">
                                             Projects
                                        </Button>
                                   </HashLink>
                                   <HashLink to="/home#team" style={{ color: 'black', textDecoration: 'none' }}>
                                        <Button sx={{ my: 2, color: "black", display: "block", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 17 }} className="navBtn">
                                             Team
                                        </Button>
                                   </HashLink>
                                   <Button sx={{ my: 2, mx: 1, color: "black", display: "block", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 17 }} className="navBtn" onClick={handleContactModalOpen}>
                                        Contact
                                   </Button>
                              </Box>

                              {
                                   user.email ? <Box sx={{ flexGrow: 0 }}>
                                        <Tooltip title="Open settings">
                                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                  <Avatar alt="Remy Sharp" src={user.photoURL} sx={{ width: 45, height: 45 }} />
                                             </IconButton>
                                        </Tooltip>
                                        <Menu
                                             sx={{ mt: "45px" }}
                                             id="menu-appbar"
                                             anchorEl={anchorElUser}
                                             anchorOrigin={{
                                                  vertical: "top",
                                                  horizontal: "right",
                                             }}
                                             keepMounted
                                             transformOrigin={{
                                                  vertical: "top",
                                                  horizontal: "right",
                                             }}
                                             open={Boolean(anchorElUser)}
                                             onClose={handleCloseUserMenu}
                                        >
                                             <MenuItem>
                                                  <Link to="/dashboard" style={{ color: 'black', textDecoration: 'none' }}>
                                                       <Typography sx={{ color: "black", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 16 }}>
                                                            Dashboard
                                                       </Typography>
                                                  </Link> 
                                             </MenuItem>
                                             <MenuItem>
                                                  <Typography sx={{ color: "black", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 16 }}>
                                                       Log Out
                                                  </Typography>
                                             </MenuItem>
                                        </Menu>
                                   </Box> : <Box>
                                        <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>
                                             <Button sx={{ my: 2, px: 3, pb: 0.4, color: "white", bgcolor: "#111430", fontFamily: "Macondo, cursive", fontWeight: 700, fontSize: 17 }} className="loginBtn">
                                                  Login
                                             </Button>
                                        </Link>
                                   </Box>
                              }
                         </Toolbar>
                    </Container>
               </div>


               <Contact
                    open={openContact}
                    handleClose={handleContactModalClose}
               />
          </AppBar>          
     );
};
export default ResponsiveAppBar;
