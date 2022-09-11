import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import EventServiceProviderCard from './ServiceProviderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getEventServiceProviders } from '../../api/reducers/eventSlice';

const UDFeed = () => {
    const { event, service_providers } = useSelector((state) => state.event);
    const dispatch = useDispatch();

    useEffect(() => {
        if (event.id) {
            dispatch(getEventServiceProviders(event.id));
        }
    }, [dispatch, event]);

    return (
        <Box flex={12} p={3} backgroundColor="#fff">
            <h3 className="userFeedTitle">{event.name}</h3>
            <Box
                style={{
                    maxHeight: '100vh',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}
            >
                <Grid container spacing={1}>
                    {service_providers.length !== 0 &&
                        service_providers.map((service_provider) => (
                            <Grid
                                item
                                xs={12}
                                md={12}
                                key={service_provider.service_provider_id}
                            >
                                <EventServiceProviderCard
                                    service_provider={service_provider}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Box>
            {service_providers.length === 0 && (
                <p style={{ textAlign: 'center' }}>
                    Add service provider to your event
                </p>
            )}
        </Box>
    );
};

export default UDFeed;
