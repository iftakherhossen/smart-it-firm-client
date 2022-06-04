import { Backdrop, Box, CircularProgress } from '@mui/material';
import React from 'react';
import HeroSection from '../Components/HomeComponents/HeroSection';
import Folks from '../Components/HomeComponents/Folks';
import Projects from '../Components/HomeComponents/Projects';
import Reviews from '../Components/HomeComponents/Reviews';
import Services from '../Components/HomeComponents/Services';
import Footer from '../Components/Shared/Footer';
import Navigation from '../Components/Shared/Navigation';
import Articles from '../Components/HomeComponents/Articles';
import Partners from '../Components/HomeComponents/Partners';
import useAuth from '../hooks/useAuth';

const Home = () => {
     const { isLoading } = useAuth();
     const [open, setOpen] = React.useState(false);

     const handleClose = () => {
          setOpen(false);
     };
     const handleToggle = () => isLoading && setOpen(!open);
     
     return (
          <div>
               {
                    isLoading === true ? <Backdrop
                         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                         open={open}
                         onClick={handleClose}
                    >
                         <CircularProgress color="inherit" />
                    </Backdrop> : <Box>
                         <Navigation />
                         <Box sx={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)', bgcolor: '#FBD062' }}>                    
                              <HeroSection />                    
                         </Box>
                         <Services />
                         <Projects />
                         <Reviews />
                         <Folks />
                         <Articles />
                         <Partners />
                         <Footer />
                    </Box>
                    
               }
          </div>
     );
};

export default Home;