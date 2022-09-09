import * as React from 'react';
import Box from '@mui/material/Box';
import EventBidCard from './ServiceProviderCard';

const FeedLeftBar = () => {
    return (
        <div>
            <Box display={'flex'} flex={10} p={3}>
                <EventBidCard />
            </Box>
        </div>
    );
};

export default FeedLeftBar;
