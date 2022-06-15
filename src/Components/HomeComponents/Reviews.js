import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Review from './Review';

const breakPoints = [
     { width: 1, itemsToShow: 1,  },
     { width: 550, itemsToShow: 1, itemsToScroll: 1 },
     { width: 768, itemsToShow: 2, itemsToScroll: 1 },
     { width: 1200, itemsToShow: 2, itemsToScroll: 1 }
];

const Reviews = () => {
     const [reviews, setReviews] = useState([]);
     
     useEffect(() => {
          fetch('https://smart-it-firm-server.herokuapp.com/reviews')
               .then(res => res.json())
               .then(data => setReviews(data));
     }, []);


     return (
          <Box>
               <Box sx={{ mt: 12, textAlign: 'center', mb: 2 }}>
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontFamily: 'Macondo, cursive', color: 'black' }}>Happy Clients Feedback</Typography>
               </Box>
               <Box sx={{ mt: 5, mb: 12, px: { xs: 0, md: 10 } }} className="reviewWrapper">
                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
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
                    </div>
               </Box>
          </Box>
     );
};

export default Reviews;