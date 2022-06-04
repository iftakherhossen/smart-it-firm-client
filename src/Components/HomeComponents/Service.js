import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2';

const Service = ({ service, msdFont }) => {
     const { _id, name, image, description, available } = service;
     const [success, setSuccess] = useState(false);

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
                    fetch(`https://smart-it-firm.herokuapp.com/services/${id}`, {
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
          <Grid item xs={12} sm={6} md={4}>
               <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', minHeight: 300, mx: { xs: 1, md: 0 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                         <CardMedia
                              component="img"
                              image={image}
                              alt={name}
                              className="serviceImg"
                              draggable="false"
                         />
                    </Box>
                    <CardContent sx={{ textAlign: 'center' }}>
                         <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold' }}>
                              {name}
                         </Typography>
                         <Typography variant="body2" sx={{ fontFamily: 'Macondo, cursive', fontSize: msdFont && '1em' }}>
                              {description}
                         </Typography>
                         <IconButton aria-label="Visible" onClick={() => handleVisible(_id)} sx={{ mt: 3 }}>
                              {available ? <VisibilityOffIcon /> : <VisibilityIcon />}
                         </IconButton>
                    </CardContent>
               </Card>               
          </Grid>
     );
};

export default Service;