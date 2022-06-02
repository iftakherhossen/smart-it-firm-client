import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Review from './Review';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
     { width: 1, itemsToShow: 1,  },
     { width: 550, itemsToShow: 1, itemsToScroll: 1 },
     { width: 768, itemsToShow: 2, itemsToScroll: 1 },
     { width: 1200, itemsToShow: 2, itemsToScroll: 1 }
];

const Reviews = () => {
     const [reviews, setReviews] = useState([]);
     
     useEffect(() => {
          fetch('https://smart-it-firm.herokuapp.com/reviews')
          .then(res => res.json())
          .then(data => setReviews(data));
     }, []);


     return (
          <Box>
               <Box sx={{ mt: 12, textAlign: 'center', mb: 2 }}>
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontFamily: 'Macondo, cursive', color: 'black' }}>Happy Clients Feedback</Typography>
               </Box>
               <Box sx={{ mt: 5, mb: 12, px: { xs: 0, md: 10 } }} className="reviewWrapper">
                    <Grid container>
                         <Carousel breakPoints={breakPoints} itemsToScroll={1} dots={false} autoPlaySpeed={1000} style={{ cursor: 'grab', marginLeft: 0, marginTop: 20 }}>
                              {
                                   reviews.map(comment => <Review
                                        key={comment._id}                                          
                                        comment={comment}
                                   />)
                              }
                         </Carousel>
                    </Grid>
               </Box>
          </Box>
     );
};

export default Reviews;