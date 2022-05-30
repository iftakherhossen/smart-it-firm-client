import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <Box sx={{ mt: 5, p: 2, textAlign: 'center' }}>
                <Box sx={{ py: 1 }}>
                    <a href="https://www.facebook.com/smartitfirm/" style={{ color: '#aaa' }}><FacebookIcon sx={{ fontSize: 28 }} /></a>
                    <a href="https://www.instagram.com/smartitfirm/" style={{ color: '#aaa' }}><InstagramIcon sx={{ fontSize: 28, mx: 1 }} /></a>
                    <a href="https://twitter.com/smartitfirm" style={{ color: '#aaa' }}><TwitterIcon sx={{ fontSize: 28 }} /></a>
                    <a href="mailto:info@smartitfirm.bd" style={{ color: '#aaa' }}><EmailIcon sx={{ fontSize: 28, mx: 1 }} /></a>
                    <a href="tel:010000" style={{ color: '#aaa' }}><PhoneIcon sx={{ fontSize: 25 }} /></a>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="subtitle1" sx={{ color: '#6A6C6D', fontFamily: 'Macondo, cursive' }}>© Smart IT Firm 2022, Iftakher Hossen, a Programming Hero initiative.</Typography>
            </Box>
        </div>
    );
};

export default Footer;