import { Box } from '@mui/material';
import React from 'react';
import HeroSection from '../Components/HomeComponents/HeroSection';
import Navigation from '../Components/Shared/Navigation';

const Home = () => {
     return (
          <Box>
               <Box sx={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)', bgcolor: '#FBD062' }}>
                    <Navigation />
                    <HeroSection />
               </Box>
          </Box>
     );
};

export default Home;