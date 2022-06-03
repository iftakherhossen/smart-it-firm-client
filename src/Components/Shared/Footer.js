import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <div>
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <Box sx={{ mt: 5, p: 2, textAlign: 'center' }}>
                    <Box sx={{ py: 1 }}>
                        <a href="https://www.facebook.com/smartitfirm/" style={{ color: '#aaa' }} className="smIcon"><FacebookIcon sx={{ fontSize: 28 }} /></a>
                        <a href="https://www.instagram.com/smartitfirm/" style={{ color: '#aaa' }} className="smIcon"><InstagramIcon sx={{ fontSize: 28, mx: 1 }} /></a>
                        <a href="https://twitter.com/smartitfirm" style={{ color: '#aaa' }} className="smIcon"><TwitterIcon sx={{ fontSize: 28 }} /></a>
                        <a href="mailto:info@smartitfirm.bd" style={{ color: '#aaa' }} className="smIcon"><EmailIcon sx={{ fontSize: 28, mx: 1 }} /></a>
                        <a href="tel:010000" style={{ color: '#aaa' }} className="smIcon"><PhoneIcon sx={{ fontSize: 25 }} /></a>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="subtitle1" sx={{ color: '#6A6C6D', fontFamily: 'Macondo, cursive' }}>© Smart IT Firm 2022, <a href="https://iftakher-hossen.vercel.app/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Iftakher Hossen</a>, a Programming Hero initiative.</Typography>
                </Box>
            </div>

            <ScrollToTop smooth color="white" style={{ backgroundColor: '#252930', border: 0, width: 45, height: 45, right: 100, bottom: 25, borderRadius: '50%', scrollBehavior: 'smooth' }} />
        
        </div>
    );
};

export default Footer;