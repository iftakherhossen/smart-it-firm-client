import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleService from './SingleService';

const BookedServices = () => {
     const { user } = useAuth();
     const [bookings, setBookings] = useState([]);

     useEffect(() => {
          fetch(`https://smart-it-firm.herokuapp.com/orders/${user.email}`)
               .then(res => res.json())
               .then(data => setBookings(data));
     }, [user.email]);

     return (
          <div>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
                    {
                         bookings.map(bookings => <SingleService
                              key={bookings._id}
                              bookings={bookings}
                         />)
                    }
                    
               </Grid>
          </div>
     );
};

export default BookedServices;