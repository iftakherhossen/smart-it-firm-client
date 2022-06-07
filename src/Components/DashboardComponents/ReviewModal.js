import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import ReactStars from 'react-rating-stars-component';

const reviewModalStyle = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 700,
     bgcolor: 'white',
     border: '0',
     boxShadow: 24,
     py: 6,
     px: 5,
     textAlign: 'center',
};

const ReviewModal = ({ openReviewModal, handleReviewModalClose }) => {     
     const [userDetails, setUserDetails] = useState([]);
     const [reviewData, setReviewData] = useState({});
     const [ratings, setRatings] = useState(0);
     const { user, isLoading } = useAuth();

     useEffect(() => {
          fetch('https://smart-it-firm.herokuapp.com/users/')
               .then(res => res.json())
               .then(data => setUserDetails(data));
     }, [])

     const findUser = (email) => userDetails.find(user => {
          return user.email === email;
     });
     
     const findByEmail = findUser(user.email);

     const handleOnBlur = e => {
          const name = findByEmail.displayName;
          const email = findByEmail.email;
          const userImg = findByEmail.userImg;
          const field = e.target.name;
          const value = e.target.value;          
          const newReviewData = { name, email, ...reviewData, userImg };

          newReviewData[field] = value;
          setReviewData(newReviewData);
     }

     const handleChange = value => {
          setRatings(value);
     }
      
     const handlePostReview = e => {
          // collect data
          const post = {
               ...reviewData,
               ratings
          }
          console.log(post);
          
          // send data to the server
          fetch('https://smart-it-firm.herokuapp.com/reviews', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(post)
          })
               .then(res => res.json())
               .then(result => {
                    if (result.insertedId) {
                         handleReviewModalClose();
                         Swal.fire(
                              'Done!',
                              'Thanks for your feedback!',
                              'success'
                         );
                    }
               })
          e.preventDefault();
     };

     return (
          <Modal
                    open={openReviewModal}
                    onClose={handleReviewModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box sx={reviewModalStyle}>
                         <Typography id="modal-modal-title" variant="h4" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 'bold', mb: 5 }}>
                              Write Feedback/Review
                         </Typography>
                         <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                              {!isLoading && <form onSubmit={handlePostReview}>
                                   <TextField 
                                        id="standard-basic1" 
                                        label="Designation" 
                                        variant="standard" 
                                        required
                                        name="designation"
                                        sx={{ mb: 2, width: '90%' }}
                                        onBlur={handleOnBlur}
                                        value={findByEmail?.designation}
                                   />
                                   <TextField 
                                        id="standard-basic2" 
                                        label="Review"
                                        multiline 
                                        rows={4} 
                                        variant="standard" 
                                        name="feedback"
                                        onBlur={handleOnBlur}
                                        sx={{ mb: 1, width: '90%' }}
                                        required
                                   />
                                   <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <ReactStars
                                             count={5}
                                             onChange={handleChange}
                                             size={40}
                                             isHalf={true}
                                             name="ratings"
                                             emptyIcon={<i className="far fa-star"></i>}
                                             halfIcon={<i className="fa fa-star-half-alt"></i>}
                                             fullIcon={<i className="fa fa-star"></i>}
                                             activeColor="#ffd700"
                                        />
                                   </Box>
                                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
                                        <Button variant="contained" type="submit" color="primary" sx={{ fontFamily: 'Macondo, cursive', fontSize: 17, fontWeight: 'bold', width: 100, px: 3 }}>
                                             Post
                                        </Button>
                                   </Box>
                              </form>}
                         </Box>
                    </Box>
               </Modal>  
     );
};

export default ReviewModal;