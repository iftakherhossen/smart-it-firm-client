import React from 'react';
import { Box, Card, CardContent, Chip, Grid, Tooltip, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PaidIcon from '@mui/icons-material/Paid';

const SingleService = ({ bookings }) => {
     const { service, details, appointment, status, borderColor, paymentStatus } = bookings;

     return (
          <Grid item xs={12} sm={12} md={4} sx={{ color: 'black' }}>
               <Card sx={{ height: '100%', padding: 'auto', color: 'black', textAlign: 'left', borderBottom: '3px solid', borderColor: `${borderColor}` }}>
                    <CardContent>
                         <Typography gutterBottom component="div" variant="h5" sx={{ mt: 1, fontFamily: 'Macondo, cursive', fontWeight: 'bold' }}>
                              {service}
                         </Typography>
                         <Typography gutterBottom component="div" sx={{ my: 1, fontSize: '1.1em', color: '#6A6C6D', fontFamily: 'Macondo, cursive' }}>
                              {details}
                         </Typography>
                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3, mb: 0 }}>
                              <Tooltip title="Appointment">
                                   <Chip 
                                        variant="outlined" 
                                        icon={<AccessTimeIcon sx={{ fontSize: 18, mb: 0.2 }} />} 
                                        label={appointment}
                                        sx={{ fontFamily: 'Macondo, cursive', fontSize: 16, border: '2px solid', borderColor: `${borderColor}` }} 
                                   />
                              </Tooltip>
                              <Box>
                                   {
                                        status ? <Tooltip title="Your contract is accepted!">
                                             <Chip 
                                                  variant="outlined" 
                                                  icon={<CheckCircleOutlineIcon sx={{ fontSize: 18, mb: 0.2 }} />} 
                                                  label="Accepted"
                                                  sx={{ fontFamily: 'Macondo, cursive', fontSize: 16, border: '2px solid', borderColor: `${borderColor}` }}
                                             />
                                        </Tooltip> : <Tooltip title="Your contract is not accepted yet!"><Chip 
                                                  variant="outlined" 
                                                  icon={<AccessTimeIcon sx={{ fontSize: 18, mb: 0.2 }} />} 
                                                  label="Pending" 
                                                  sx={{ fontFamily: 'Macondo, cursive', fontSize: 16, border: '2px solid', borderColor: 'red' }} 
                                             />
                                        </Tooltip>
                                   }                                                                      
                                   {
                                        paymentStatus && <Tooltip title="Payment Status">
                                             <Chip 
                                                  variant="outlined" 
                                                  icon={<PaidIcon sx={{ fontSize: 18, mb: 0.2 }} />} 
                                                  label="Paid" 
                                                  sx={{ fontFamily: 'Macondo, cursive', fontSize: 16, border: '2px solid', borderColor: `${borderColor}`, ml: 1 }}
                                             />
                                        </Tooltip>
                                   }                                   
                              </Box>
                         </Box>
                    </CardContent>
               </Card>
        </Grid>
     );
};

export default SingleService;