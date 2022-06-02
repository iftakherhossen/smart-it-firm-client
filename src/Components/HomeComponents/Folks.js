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
                         <Folk />
                    </Box>
               </Container>
          </div>
     );
};

export default OurTeam;