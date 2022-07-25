import React from 'react';
import { Box, Typography } from '@mui/material';
import FooterLogo from '../images/footerLogo.png';

const Footer = () => {
    return (
        <Box
            bgcolor={'#1A2027'}
            p={2}
            color="#fff"
            display="flex"
            justifyContent="center"
            spacing={2}
            variant="row"
        >
            <img src={FooterLogo} alt="Logo" height="30px" />
            <Typography variant="h6">Event Portal</Typography>
            <Typography variant="body2">2022@EventPortal</Typography>
        </Box>
    );
};

export default Footer;
