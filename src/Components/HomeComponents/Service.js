import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Service = ({ service }) => {
     const { name, image, description } = service;

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
                    <CardContent sx={{ textAlign: 'center', mb: 1.5 }}>
                         <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold' }}>
                              {name}
                         </Typography>
                         <Typography variant="body2" sx={{ fontFamily: 'Macondo, cursive' }}>
                              {description}
                         </Typography>
                    </CardContent>
               </Card>
          </Grid>
     );
};

export default Service;