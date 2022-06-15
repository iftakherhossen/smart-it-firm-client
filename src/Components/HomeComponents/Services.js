import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
     const [services, setServices] = useState([]);
     
     useEffect(() => {
          fetch('https://smart-it-firm-server.herokuapp.com/services')
               .then(res => res.json())
               .then(data => setServices(data));
     }, []);


     return (
          <Box>
               <Box sx={{ mt: 12, textAlign: 'center' }}>
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontFamily: 'Macondo, cursive', color: 'black' }}>Services We Provide</Typography>
               </Box>
               <Box sx={{ mt: 5, mb: 12 }}>
                    <Container>
                         <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                              <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>                              
                                   {
                                        services.map(service => <Service
                                             key={service._id}
                                             service={service}
                                        />)
                                   }
                              </Grid>
                         </div>
                    </Container>
               </Box>
          </Box>
     );
};

export default Services;