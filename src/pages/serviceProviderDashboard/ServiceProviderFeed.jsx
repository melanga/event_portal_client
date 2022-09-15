import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import EventCard from './EventCard';
import { getServiceProviderEvents } from '../../api/reducers/serviceProvicerDashboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import EventBidCard from './EventBidCard';
import { BidFormDialog } from './BidFormDialog';
import { BudgetFormDialog } from './BudgetFormDialog';

const ServiceProviderFeed = () => {
    const { user } = useSelector((state) => state.auth);
    const { events, bidPage } = useSelector(
        (state) => state.service_provider_dashboard
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServiceProviderEvents(user.id));
    }, [dispatch, user.id]);

    // bid form
    const [bidForm, setBidForm] = React.useState({
        open: false,
        req_id: null,
        sp_id: user.id,
        event: {},
        price: 0,
    });

    const [budgetForm, setBudgetForm] = React.useState({
        open: false,
        sp_id: user.id,
        event: {},
        price: 0,
    });
    return (
        <Box flex={12} p={3} backgroundColor="#fff">
            <h3 className="userFeedTitle">Your Customer Events</h3>
            <Box
                style={{
                    maxHeight: '100vh',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        {events.length > 0 ? (
                            events.map((event) => {
                                if (bidPage) {
                                    return (
                                        <EventBidCard
                                            key={event.id}
                                            event={event}
                                            bidForm={bidForm}
                                            setBidForm={setBidForm}
                                        />
                                    );
                                } else {
                                    return (
                                        <EventCard
                                            key={event.event_id}
                                            event={event}
                                            budgetForm={budgetForm}
                                            setBudgetForm={setBudgetForm}
                                            user={user}
                                        />
                                    );
                                }
                            })
                        ) : (
                            <h3>No Events</h3>
                        )}
                        {/*<EventCard />*/}
                    </Grid>
                </Grid>
            </Box>
            <BidFormDialog bidForm={bidForm} setBidForm={setBidForm} />
            <BudgetFormDialog
                budgetForm={budgetForm}
                setBudgetForm={setBudgetForm}
            />
        </Box>
    );
};

export default ServiceProviderFeed;
