import { Box, Stack } from '@mui/material';
import React from 'react';
import UDleftbar from './SPleftbar';
import ServiceProviderFeed from './ServiceProviderFeed';
import UDrightbar from './SPrightbar';
import Footer from '../../components/Footer';

const ServiceProviderDashboard = () => {
    return (
        <Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Stack direction="row" justifyContent="space-between">
                    <UDleftbar />
                    <ServiceProviderFeed />
                    <UDrightbar />
                </Stack>
            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Stack justifyContent="center">
                    <Box width={300} component="div">
                        <UDleftbar />
                    </Box>

                    <ServiceProviderFeed />
                    <UDrightbar />
                </Stack>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default ServiceProviderDashboard;
