import React from 'react';
import { Stack, Typography } from '@mui/material';

const LandingPage = (props) => {
    return (
        <div>
            <Stack mt={20} ml={15}>
                <Typography variant="h3" fontStyle={'italic'}>
                    user is authenticated {props.isAuthenticated.toString()}
                </Typography>
            </Stack>
        </div>
    );
};

export default LandingPage;
