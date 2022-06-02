import { Backdrop, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Grid, IconButton, Modal, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TelegramIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import {LinkedinShareButton,TelegramShareButton,TwitterShareButton} from "react-share";
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import toast from 'react-hot-toast';
import moment from "moment";

const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
     bgcolor: 'white',
     boxShadow: 24,
     border: 0,
     py: 4,
     px: 5,
     textAlign: 'center',
     fontFamily: 'Macondo, cursive'
};

const Article = ({ article }) => {
     const { title, description, public_reactions_count, url, social_image, tag_list, created_at, comments_count } = article;
     const account = ['@iftakher_hossen'];
     const [success, setSuccess] = useState(false);
     const [open, setOpen] = useState(false);

     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const handleCopyLink = () => {
          navigator.clipboard.writeText(url);
          toast.success('Link copied successfully!', {
               style: {
               borderRadius: '10px',
               background: '#333',
               color: '#fff',
               },
          })
     }

     success && toast.success('Shared Successfully!', {
          style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          },
     })

     return (
          <>
               <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ m: { xs: 1, sm: 1 } }}>
                         <CardMedia
                              component="img"
                              height="200"
                              image={social_image}
                              alt="Blog Feature Photo"
                              draggable="false"
                         />
                         <CardContent sx={{ textAlign: 'left', pb: 0 }}>
                              <Typography sx={{ fontSize: 22, fontWeight: 600, textOverflow: 'ellipsis', fontFamily: 'Macondo, cursive' }}>{title}</Typography>
                              <Typography variant="body1" sx={{ fontWeight: 500, mt: 0.5, fontFamily: 'Macondo, cursive' }}>
                                   {description.slice(0, 35)}...
                              </Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right', mt: 2, mb: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'baseline', fontFamily: 'Macondo, cursive' }}>
                                   <AccessTimeIcon sx={{ fontSize: 13, mr: 0.8 }} /> <span style={{ marginTop: -2 }}>{moment(created_at).fromNow()}</span>
                              </Typography>
                              <Stack direction="row" sx={{pb: 1}}>
                                   {
                                        tag_list.map(tag => <Chip label={tag} variant="outlined" key={tag} sx={{ fontWeight: 500, m: 0.5, fontFamily: 'Macondo, cursive' }} size="small" />)
                                   }
                              </Stack>
                         </CardContent>
                         <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                   <Box sx={{ display: 'flex', alignItems: 'flex-start', fontWeight: 500 }}>
                                        <FavoriteIcon sx={{ color: '#707070', fontSize: 20, mr: 1 }} /> <span>{public_reactions_count}</span>
                                   </Box>
                                   <Box sx={{ display: 'flex', alignItems: 'flex-start', mx: 1, fontWeight: 500 }}>
                                        <CommentIcon sx={{ color: '#707070', fontSize: 20, mr: 1 }} /> <span>{comments_count}</span>
                                   </Box>
                              </Box>
                              <Box>
                                   <IconButton aria-label="share" sx={{ mr: 1 }} onClick={handleOpen}>
                                        <ShareIcon sx={{ fontSize: 20 }} />
                                   </IconButton>
                                   <IconButton aria-label="share" href={url} target="_blank">
                                        <OpenInNewIcon sx={{ fontSize: 21 }} />
                                   </IconButton>
                              </Box>
                         </CardActions>
                    </Card>
               </Grid>

               {/* Modal */}
               <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
               >
                    <Box sx={style}>
                         <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontFamily: 'Macondo, cursive' }}>
                              Share Article <b>{title}</b>
                         </Typography>  
                         <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <IconButton  aria-label="copy-link" onClick={handleCopyLink}>
                                   <ContentCopyIcon sx={{ fontSize: 22 }} />
                              </IconButton> &nbsp; &nbsp;
                              <TelegramShareButton title={title} url={url}>
                                   <TelegramIcon size={35} round={true} />
                              </TelegramShareButton> &nbsp; &nbsp;
                              <TwitterShareButton title={title} via={url} hashtags={tag_list} related={account}>
                                   <TwitterIcon size={36} round={true} />
                              </TwitterShareButton> &nbsp; &nbsp;
                              <LinkedinShareButton title={title} summary={description} source={url}>
                                   <LinkedinIcon size={36} round={true} />
                              </LinkedinShareButton>
                         </Box>
                    </Box>
               </Modal>
          </>
     );
};

export default Article;