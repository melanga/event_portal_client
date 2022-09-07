import { Box, Button, Grid } from '@mui/material';
import Cardcomp from './Cardcomp.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentServiceProviders } from '../../api/reducers/serviceProviderSlice';
import { useEffect } from 'react';

const Feed = () => {
    const { service_providers } = useSelector(
        (state) => state.service_provider
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecentServiceProviders());
    }, [dispatch]);

    return (
        <Box minWidth={'100%'} p={2} mt={2} bgcolor="#F5F5F5">
            <h3 className="BrowseTitle">Browse Services</h3>
            <Grid
                container
                columns={4}
                justifyContent="space-evenly"
                alignItems="center"
            >
                {service_providers &&
                    service_providers.map((service_provider) => (
                        <Box key={service_provider.service_title} padding={5}>
                            <Cardcomp service_provider={service_provider} />
                        </Box>
                    ))}
            </Grid>
            <Box display="flex" justifyContent="center" mt={5}>
                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        borderRadius: '50px',
                        maxHeight: '50px',
                        textTransform: 'none',
                        color: '#00ADB5',
                        border: '2px solid #00ADB5',
                    }}
                >
                    <h3
                        className="viewMoreButton"
                        style={{ textDecoration: 'none' }}
                    >
                        View More...
                    </h3>
                </Button>
            </Box>
        </Box>
    );
};

export default Feed;
