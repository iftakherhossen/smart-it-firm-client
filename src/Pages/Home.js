import { Box } from '@mui/material';
import React from 'react';
import HeroSection from '../Components/HomeComponents/HeroSection';
import Projects from '../Components/HomeComponents/Projects';
import Services from '../Components/HomeComponents/Services';
import Footer from '../Components/Shared/Footer';
import Navigation from '../Components/Shared/Navigation';

const Home = () => {
     return (
          <Box>
               <Navigation />
               <Box sx={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)', bgcolor: '#FBD062' }}>                    
                    <HeroSection />                    
               </Box>
               <Services />
               <Projects />
               <Footer />
          </Box>
     );
};

export default Home;