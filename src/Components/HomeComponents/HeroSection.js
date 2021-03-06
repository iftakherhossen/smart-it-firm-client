import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
     return (
          <Container>
               <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ py: 20, display: 'flex', alignItems: 'center', mt: 8 }}>                    
                    <Grid item xs={12} sm={12} md={6} sx={{ padding: { xs: 3, md: '0 3rem 0 0' }, textAlign: 'left' }}>
                         <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                              <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Macondo, cursive', fontSize: 35 }}>
                                   Let's grow your brand <br /> to the next level
                              </Typography>
                              <Typography variant="body1" sx={{ fontWeight: 600, my: 3, fontFamily: 'Macondo, cursive', fontSize: 17 }}>
                                   We are here to help you to grow you business online. In the modern era you need a online business to grow and earn more profit. 
                              </Typography>
                              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                                   <Button variant="contained" sx={{ fontWeight: 700, mt: 2, bgcolor: '#111430', fontFamily: 'Macondo, cursive', letterSpacing: '2px' }}>
                                        Hire us
                                   </Button>
                              </Link>
                         </div>
                    </Grid>
                    
                    <Grid item xs={2} sm={12} md={6} sx={{ my: 3 }}>
                         <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                         <Box sx={{ display: 'flex', justifyContent: { md: 'flex-end' }, alignItems: 'center' }}>
                              <img src="https://i.ibb.co/TYp1h9k/Frame.png" alt="banner" style={{ width: '95%' }} className="heroImg" draggable="false" />
                         </Box>
                         </div>
                    </Grid>                    
               </Grid>
          </Container>
     );
};

export default HeroSection;