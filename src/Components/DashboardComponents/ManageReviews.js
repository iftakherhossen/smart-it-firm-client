import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ReactStars from 'react-stars';
import Swal from 'sweetalert2';

const ManageReviews = () => {
     const [reviews, setReviews] = useState([]);
     const [success, setSuccess] = useState(false);

     useEffect(() => {
          fetch('https://smart-it-firm.herokuapp.com/reviews')
               .then(res => res.json())
               .then(data => setReviews(data));
     }, []);

     const handleVisible = id => {
          Swal.fire({
               title: 'Are you sure?',
               text: "This review will be public!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://smart-it-firm.herokuapp.com/reviews/${id}`, {
                         method: 'PUT',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify()
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.modifiedCount) {
                                   setSuccess(true);
                              }
                         });
                    
                    success && Swal.fire(
                         'Done!',
                         'This review is now public!',
                         'success'
                    )
               }
          })
     };

     return (
          <div>
               <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
                    {
                         reviews.map(({ _id, name, designation, feedback, ratings, userImg, hidden }) => <Grid item xs={12} key={_id}>
                              <Card sx={{ maxWidth: '100%', bgcolor: '#eee', borderRadius: 3 }}>
                                   <CardHeader
                                        avatar={
                                             <Avatar aria-label="user avatar" src={userImg} alt={name} sx={{ height: 55, width: 55 }} />
                                        }
                                        action={
                                             <IconButton aria-label="Visible" onClick={() => handleVisible(_id)}>
                                                  {hidden === true ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                             </IconButton>
                                        }
                                        title={<Typography variant="h6" style={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold' }}>{name}</Typography>}
                                        subheader={<Typography variant="body2" style={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold', mt: 0 }}>{designation}</Typography>}
                                   />
                                   <CardContent sx={{ px: 4 }}>
                                        <Typography sx={{ fontSize: 19, fontFamily: 'Macondo, cursive', fontWeight: 'bold' }}>{feedback}</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                             <Tooltip title={ratings}>
                                                  <ReactStars
                                                       count={5}
                                                       value={ratings}
                                                       size={28}
                                                       color1={'#eee'}
                                                       color2={'#111430'}
                                                       edit={false}
                                                       half={true}
                                                  />
                                             </Tooltip>
                                        </Box>
                                   </CardContent>
                              </Card>
                         </Grid>)
                    }
               </Grid>
          </div>
     );
};

export default ManageReviews;