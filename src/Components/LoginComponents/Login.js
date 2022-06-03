import { Box, Button, CircularProgress, Fab, Grid, IconButton, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import GoogleButton from 'react-google-button';
import toast from 'react-hot-toast';
import GoBack from '@mui/icons-material/KeyboardBackspace';

const Login = () => {
     const [loginData, setLoginData] = useState({});
     const { user, loginUser, isLoading, success, authError, signInWithGoogle } = useAuth();

     const location = useLocation();
     let navigate = useNavigate();

     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          setLoginData(newLoginData);
     }
     const handleLogin = e => {
          loginUser(loginData.email, loginData.password, location, navigate);
          e.preventDefault();
     }

     user.email && success === true && toast.success(`Welcome, ${user.displayName}`);
     authError && toast.error({authError});

     return (          
          <Box sx={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGRlc2t8ZW58MHx8MHx8&w=1000&q=80")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
               <Box sx={{ bgcolor: '#282c34f5', height: '100vh' }}>
                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                         <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                              <Grid container sx={{ maxWidth: '55%', bgcolor: '#eee', boxShadow: 5, borderRadius: 5 }}>
                                   <Grid item xs={12} md={5} sx={{display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center'}}>
                                        <Box sx={{ my: 'auto', ps: { md: 5 }, position: 'absolute' }} className="signInImgWrapper">
                                             <Tooltip title="Go Back">
                                                  <Fab aria-label="go back" sx={{ bottom: 0 }} href="/">
                                                       <GoBack />
                                                  </Fab>
                                             </Tooltip>
                                             <img src="https://i.ibb.co/wRtj5wn/signup-image-removebg-preview.png" alt="SignUp" draggable="false" style={{ width: '100%', margin: '35px 0' }} className="signInImg" />                                              
                                        </Box>
                                   </Grid>
                                   <Grid item xs={12} md={7} sx={{ my: 5, display: 'flex', flexDirection: 'column', justifyContent: { xs: 'center', md: 'center' }, alignItems: 'center' }}>
                                        <Toolbar />
                                        <Box>
                                             <Box sx={{ maxWidth: '90%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                                                  <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Macondo, cursive' }}>Login</Typography>
                                             </Box>

                                             <Box sx={{ height: '100%', maxWidth: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                  {!isLoading && <form onSubmit={handleLogin}>
                                                       <TextField
                                                            variant='standard'
                                                            label='Email'
                                                            required
                                                            name="email"
                                                            type="email"
                                                            onBlur={handleOnBlur}
                                                            sx={{ width: 1, mb: 2, color: 'white' }}
                                                       />
                                                       <TextField 
                                                            variant='standard'
                                                            label='Password'
                                                            required
                                                            name="password"
                                                            onBlur={handleOnBlur}
                                                            type="password"
                                                            sx={{ width: 1, mb: 1 }}
                                                       />
                                                       <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                                                            <Typography variant="body2" sx={{ color: 'red', cursor: 'pointer', fontFamily: 'Macondo, cursive' }}>Forget Your Password?</Typography>
                                                       </Box>
                                                       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                            <Button type="submit" variant="contained" sx={{ px: 3, fontFamily: 'Macondo, cursive', fontWeight: 'bold' }} className="customBgColor" disabled={!loginData}>Login</Button>
                                                       </Box>
                                                  </form>}

                                                  {isLoading && <Box sx={{ display: 'flex' }}>
                                                       <CircularProgress color="inherit" />
                                                  </Box>}

                                                  <NavLink to="/register" style={{ textDecoration: 'none' }} className="customColor"><Typography sx={{ mt: 5, mb: 1, fontSize: 18, fontWeight: 600, fontFamily: 'Macondo, cursive' }}>New User? Register Now!</Typography></NavLink>

                                                  <GoogleButton
                                                       onClick={signInWithGoogle}
                                                       disabled={user.email}
                                                  />
                                             </Box>
                                        </Box>
                                        <Toolbar />                            
                                   </Grid>
                              </Grid>
                         </Box>
                    </div>
               </Box>            
          </Box>     
     );
};

export default Login;