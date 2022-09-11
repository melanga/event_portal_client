import { Box, Stack } from '@mui/material';
import React from 'react';
import UDLeftBar from './UDLeftBar';
import UDFeed from './UDFeed';
import UDRightBar from './UDRightBar';
// import UserNavbar from '../../components/UserNavbar';
import Footer from '../../components/Footer';

const UserDashboard = () => {
    return (
        <Box>
            {/*<UserNavbar />*/}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Stack direction="row" justifyContent="space-between">
                    <UDLeftBar />
                    <UDFeed />
                    <UDRightBar />
                </Stack>
            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Stack justifyContent="center">
                    <Box width={300} component="div">
                        <UDLeftBar />
                    </Box>

                    <UDFeed />
                    <UDRightBar />
                </Stack>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default UserDashboard;
