import { Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

const ManageTeam = () => {
     const [team, setTeam] = useState([]);
     const [admins, setAdmins] = useState([]);
     const [deleteSuccess, setDeleteSuccess] = useState(false);

     useEffect(() => {
          fetch('https://smart-it-firm.herokuapp.com/team')
               .then(res => res.json())
               .then(data => setTeam(data));
     }, []);

     useEffect(() => {
          fetch('https://smart-it-firm.herokuapp.com/users')
               .then(res => res.json())
               .then(data => setAdmins(data));
     }, []);
     

     const disable = team.length > 11;

     const handleDelete = id => {
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
                    const url = `https://smart-it-firm.herokuapp.com/team/${id}`;

                    fetch(url, {
                         method: 'DELETE'
                    })
                         .then(res => res.json())
                         .then(data => {
                             if (data.deletedCount) {
                                   const remaining = team.filter(member => member._id !== id);
                                   setTeam(remaining);
                                   setDeleteSuccess(true);
                              }
                         })
                    
                    deleteSuccess && Swal.fire(
                         'Removed!',
                         'Member Removed Successfully!',
                         'success'
                    )
               }
          })
     };

     return (
          <div style={{ padding: 2 }}>
               <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Macondo, cursive' }}>Developers</Typography>
               <Divider sx={{ mb: 2 }} />

               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
                    {
                         team.map(({ _id, image }) => <Grid item xs={4} sm={3} md={3} key={_id} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <img src={image} alt="member" className="member" draggable="false" style={{ cursor: 'auto' }} />
                              <Box sx={{ display: 'flex', alignItems: 'center', pl: 2 }}>
                                   <IconButton aria-label="Delete" disabled={!disable} onClick={() => handleDelete(_id)}>
                                        <DeleteIcon sx={{ color: disable === true ? 'red' : '#aaa', fontSize: 28 }} />
                                   </IconButton>
                              </Box>
                         </Grid>)
                    }
               </Grid>

               <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Macondo, cursive', mt: 5 }}>Admins</Typography>
               <Divider sx={{ mb: 2 }} />

               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2 }}>
                    {
                         admins.map(({ _id, displayName, email, userImg, role }) => <Grid item xs={4} sm={3} md={3} key={_id}>
                              {
                                   role === 'admin' && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Tooltip title={displayName}>
                                             <img src={userImg} alt="member" className="member" draggable="false" style={{ cursor: 'auto', borderRadius: '100%' }} />
                                        </Tooltip>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 2 }}>
                                             <IconButton aria-label="Delete" disabled={!disable} onClick={() => handleDelete(_id)}>
                                                  <DeleteIcon sx={{ color: disable === true ? 'red' : '#aaa', fontSize: 28 }} />
                                             </IconButton>
                                        </Box>  
                                   </Box>
                              } 
                         </Grid>)
                    }
               </Grid>
          </div>
     );
};

export default ManageTeam;