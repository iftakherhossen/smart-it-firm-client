import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ReactStars from 'react-stars';

const Review = ({ comment }) => {
     const { name, designation, review, ratings, userImg, hidden } = comment;

     return (
          <Grid item xs={12} sx={{ p: { xs: 0, md: 1.5 } }}> 
               {
                    hidden === false && <Card sx={{ display: 'flex', borderRadius: 5, bgcolor: '#DEDEDE', p: 1, mx: 'auto' }}>
                         <CardContent sx={{ width: { xs: 1, md: '75%' }, wordWrap: 'wrap', mr: 1.5, textAlign: { xs: 'center', md: 'left' } }}>
                              <Typography component="div" variant="h5" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold' }}>
                                   {name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" component="div" sx={{ fontFamily: 'Macondo, cursive', mr: 2, mb: 1.5 }}>
                                   {designation}
                              </Typography>                         
                              <Typography variant="body1" component="div" sx={{ fontFamily: 'Macondo, cursive', fontSize: 17 }}>
                                   <strong><q>{review}</q></strong>
                              </Typography>
                              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                   <ReactStars
                                        count={5}
                                        value={ratings}
                                        size={28}
                                        color1={'#eee'}
                                        color2={'#111430'}
                                        edit={false}
                                        half={true}
                                   />
                              </Box>
                         </CardContent>
                         <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                              <CardMedia
                                   component="img"
                                   sx={{ width: 120, height: 120, borderRadius: 25, mr: 1.5 }}
                                   image={userImg}
                                   alt={name}
                                   draggable="false"
                              />
                         </Box>
                    </Card>
               }
          </Grid>
     );
};

export default Review;