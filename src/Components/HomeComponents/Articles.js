import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Article from './Article';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const Articles = () => {
     const [articles, setArticles] = useState([]);

     useEffect(() => {
          fetch('https://dev.to/api/articles?username=iftakher_hossen')
               .then(res => res.json())
               .then(data => setArticles(data));
     }, [])

     const sortedArticles = articles.slice(0, 3);

     return (
          <Box>
               <Container>
                    <Box sx={{ textAlign: 'center', pt: 8 }}>
                         <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontFamily: 'Macondo, cursive', color: 'black' }}>Latest Articles</Typography>
                    </Box>
                    <Box sx={{ py: 5 }}>
                         <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                              <Grid container>
                                   {
                                        sortedArticles.map(article => <Article
                                             key={article.id}
                                             article={article}
                                        />)
                                   }
                              </Grid>
                         </div>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                         <Button variant="outlined" href="https://dev.to/iftakher_hossen" sx={{ m: 1, color: 'black', borderColor: 'black', fontFamily: 'Macondo, cursive', fontWeight: 'bold', display: 'flex', alignItems: 'center' }} style={{ color: 'black' }} size="large">
                              Read More <LogoDevIcon sx={{ ml: 1, color: 'black' }} />
                         </Button>
                    </Box>
               </Container>
          </Box>
     );
};

export default Articles;