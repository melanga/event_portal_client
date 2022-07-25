import React from 'react';
import { Stack, Typography } from '@mui/material';
import Navbar from '../components/NavBar';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Stack mt={20} ml={15}>
                <Typography variant="h3" fontStyle={'italic'}>
                    WEDDINGS, EXPOS, SEMINARS AND MORE...
                </Typography>
            </Stack>
        </div>
    );
};

export default LandingPage;
