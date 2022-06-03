import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Partners = () => {
     return (
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
               <Container>
                    <Box sx={{ textAlign: 'center', pt: 8 }}>
                         <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontFamily: 'Macondo, cursive', color: 'black' }}>Trusted By</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', mt: 0, mb: 16 }}>
                         <img src="https://i.ibb.co/RbY8TKg/airbnb.png" alt="Brands" style={{ width: 150, margin: '3rem 2rem 0' }} draggable="false" />
                         <img src="https://i.ibb.co/DptRk7Z/google.png" alt="Brands" style={{ width: 150, margin: '3rem 2rem 0' }} draggable="false" />
                         <img src="https://i.ibb.co/kqYVdQR/netflix.png" alt="Brands" style={{ width: 150, margin: '3rem 2rem 0' }} draggable="false" />
                         <img src="https://i.ibb.co/HV751yL/slack.png" alt="Brands" style={{ width: 150, margin: '3rem 2rem 0' }} draggable="false" />
                         <img src="https://i.ibb.co/Gn7cvM7/uber.png" alt="Brands" style={{ width: 150, margin: '3rem 2rem 0' }} draggable="false" />
                    </Box>
               </Container>
          </div>
     );
};

export default Partners;