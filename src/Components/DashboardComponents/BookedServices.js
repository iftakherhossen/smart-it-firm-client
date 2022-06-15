import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleService from './SingleService';

const BookedServices = () => {
     const { user } = useAuth();
     const [bookings, setBookings] = useState([]);

     useEffect(() => {
          fetch(`https://smart-it-firm-server.herokuapp.com/orders/${user.email}`)
               .then(res => res.json())
               .then(data => setBookings(data));
     }, [user.email]);

     return (
          <div>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
                    {
                         bookings.length === 0 ? <Box sx={{ height: { xs: '60%', md: '80vh' }, width: { xs: '55%', md: '100vw' }, overflow: 'hidden' }}>
                              <Box sx={{ height: { xs: '60%', md: '70vh' }, width: { xs: '60%', md: '80vw' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                   <Box sx={{ pl: { xs: 9, md: 10} }}>
                                        <img src="https://i.ibb.co/F61VsvP/2.png" alt="Not Found" draggable="false" />
                                   </Box>
                                   <Typography variant="h5" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold', textAlign: 'center' }}>You haven't booked any service yet!</Typography>
                              </Box>
                         </Box> : bookings.map(bookings => <SingleService
                              key={bookings._id}
                              bookings={bookings}
                         />)
                    }
               </Grid>
          </div>
     );
};

export default BookedServices;