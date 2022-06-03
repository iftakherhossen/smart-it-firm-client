import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Folk from './Folk';

const OurTeam = () => {
     return (
          <div id="team">
               <Container>
                    <Box sx={{ textAlign: 'center'}}>
                         <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontFamily: 'Macondo, cursive', color: 'black', mt: 5 }}>Our Dedicated Team</Typography>
                    </Box>
                    <Box sx={{ mt: 5, mb: 6 }}>
                         <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                              <Folk />
                         </div>
                    </Box>
               </Container>
          </div>
     );
};

export default OurTeam;