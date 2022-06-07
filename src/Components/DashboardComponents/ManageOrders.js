import { Grid, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import SingleOrder from './SingleOrder';
import SingleService from './SingleService';

const ManageOrders = () => {
     const { user } = useAuth();
     const [bookings, setBookings] = useState([]);

     useEffect(() => {
          fetch(`https://smart-it-firm.herokuapp.com/orders`)
               .then(res => res.json())
               .then(data => setBookings(data));
     }, [user.email]);
     
     const [deleteSuccess, setDeleteSuccess] = useState(false);
     const [updateSuccess, setUpdateSuccess] = useState(false);
     const [paymentSuccess, setPaymentSuccess] = useState(false);

     const handleChangeStatus = (id) => {
          Swal.fire({
               title: 'Are you sure?',
               text: "Do you wanna accept the contract?",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Accept!'
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://smart-it-firm.herokuapp.com/orders/${id}`, {
                         method: 'PUT',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify()
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.modifiedCount) {
                                   setUpdateSuccess(true);
                              }
                         });
                    
                    updateSuccess && Swal.fire(
                         'Done!',
                         'Contract Accepted Successfully!',
                         'success'
                    )
               }
          })
     }

     const handlePaymentStatus = (id) => {
          Swal.fire({
               title: 'Are you sure?',
               text: "Do you wanna mark this contract payment is Done!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes I received it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://smart-it-firm.herokuapp.com/orders/paymentStatus/${id}`, {
                         method: 'PUT',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify()
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.modifiedCount) {
                                   setPaymentSuccess(true);
                              }
                         });
                    
                    updateSuccess && Swal.fire(
                         'Done!',
                         'Payment Marked Done Successfully!',
                         'success'
                    )
               }
          })
     }

     const handleDelete = id => {
          Swal.fire({
               title: 'Are you sure?',
               text: "This contract will be canceled!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    const url = `https://smart-it-firm.herokuapp.com/orders/${id}`;

                    fetch(url, {
                         method: 'DELETE'
                    })
                         .then(res => res.json())
                         .then(data => {
                             if (data.deletedCount) {
                                   const remaining = bookings.filter(contract => contract._id !== id);
                                   setBookings(remaining);
                                   setDeleteSuccess(true);
                              }
                         })
                    
                    deleteSuccess && Swal.fire(
                         'Canceled!',
                         'Contract Canceled Successfully!',
                         'success'
                    )
               }
          })
     }

     return (
          <div>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
                    {
                         bookings.map(bookings => <SingleOrder
                              key={bookings._id}
                              bookings={bookings}
                              handleChangeStatus={handleChangeStatus}
                              handlePaymentStatus={handlePaymentStatus}
                              handleDelete={handleDelete}
                         />)
                    }
               </Grid>
          </div>
     );
};

export default ManageOrders;