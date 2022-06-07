import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Card, CardContent, Chip, Grid, Tooltip, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PaidIcon from '@mui/icons-material/Paid';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import moment from 'moment';

const SingleOrder = ({ bookings, handleChangeStatus, handlePaymentStatus, handleDelete }) => {
     const { _id, name, service, details, appointment, status, borderColor, paymentStatus } = bookings;

     return (
          <Grid item xs={12} sm={12} md={6} sx={{ color: 'black' }}>
               <Card sx={{ height: '100%', padding: 'auto', color: 'black', textAlign: 'left', borderBottom: '3px solid', borderColor: `${borderColor}` }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                         <Box>
                              <Typography gutterBottom component="div" variant="h5" sx={{ mt: 1, fontFamily: 'Macondo, cursive', fontWeight: 'bold' }}>
                                   {service}
                              </Typography>
                              <Typography gutterBottom component="div" sx={{ my: 1, fontSize: '1.1em', color: '#6A6C6D', fontFamily: 'Macondo, cursive' }}>
                                   {details}
                              </Typography>
                         </Box>
                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3, mb: 0 }}>
                              <Tooltip title="Appointment Date">
                                   <Chip 
                                        variant="outlined" 
                                        icon={<AccessTimeIcon sx={{ fontSize: 18, mb: 0.2 }} />} 
                                        label={status ? 'Processing' : moment(appointment, "YYYYMMDD").fromNow()}
                                        sx={{ fontFamily: 'Macondo, cursive', fontSize: 16, border: '2px solid', borderColor: `${borderColor}` }} 
                                   />
                              </Tooltip>
                              <Box>
                                   {
                                        status ? <Tooltip title={`${name} contract is accepted!`}>
                                             <Chip 
                                                  variant="outlined" 
                                                  icon={<CheckCircleOutlineIcon sx={{ fontSize: 18, mb: 0.2 }} />} 
                                                  label={service === "Internship"  ? "Called For Interview" : "Accepted"} 
                                                  sx={{ fontFamily: 'Macondo, cursive', fontSize: 16, border: '2px solid', borderColor: `${borderColor}` }}
                                             />
                                        </Tooltip> : <Tooltip title={`${name} contract is not accepted yet!`}><Chip 
                                                  variant="outlined" 
                                                  icon={<AccessTimeIcon sx={{ fontSize: 18, mb: 0.2 }} />} 
                                                  label={service === "Internship"  ? "Call For Interview" : "Pending"}  
                                                  sx={{ fontFamily: 'Macondo, cursive', fontSize: 16, border: '2px solid', borderColor: 'red' }}
                                             />
                                        </Tooltip>
                                   }                                                                      
                                   {
                                        paymentStatus && <Tooltip title={`${name} paid the bill!`}>
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
                    <Box sx={{ width: '100%', mt: 2,  }}>
                         <BottomNavigation
                              showLabels
                         >
                              <BottomNavigationAction 
                                   label={service === "Internship"  ? "Reject" : "Delete"} 
                                   icon={<DeleteIcon />}
                                   sx={{ py: 0 }}
                                   onClick={() => handleDelete(_id)}                                   
                                   disabled={status}
                                   className="disabledNav"
                              />
                              {
                                   service === 'Internship' || <BottomNavigationAction 
                                        label="Payment"
                                        icon={<PaidIcon />}
                                        sx={{ py: 0 }}
                                        disabled={paymentStatus}
                                        className="disabledNav"
                                        onClick={() => handlePaymentStatus(_id)}
                                   />
                              }
                              <BottomNavigationAction 
                                   label={service === "Internship"  ? "Call For Interview" : "Status"}  
                                   icon={<CheckCircleIcon />}
                                   sx={{ py: 0 }}
                                   onClick={() => handleChangeStatus(_id)}
                                   disabled={status}
                                   className="disabledNav"
                              />
                         </BottomNavigation>
                    </Box>
               </Card>
        </Grid>
     );
};

export default SingleOrder;