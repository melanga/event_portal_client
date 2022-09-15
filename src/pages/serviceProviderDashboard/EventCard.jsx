import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Chip } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { getServiceProviderEvents } from '../../api/reducers/serviceProvicerDashboardSlice';

export default function EventCard({ event, budgetForm, setBudgetForm }) {
    const [service_confirmed, setServiceConfirmed] = useState(false);
    const { token, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        if (event.c_confirmed && event.sp_confirmed) {
            setServiceConfirmed(true);
        }
    }, [event.c_confirmed, event.sp_confirmed]);

    const confirmEvent = () => {
        console.log('confirming service provider');
        if (event) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios
                .put(
                    `http://localhost:3000/api/v1/events/${event.event_id}/service_providers/${event.service_provider_id}/sp_confirmed`,
                    { sp_confirmed: !event.sp_confirmed },
                    config
                )
                .then((res) => {
                    if (res.status === 200) {
                        toast.success('event confirmed');
                        dispatch(getServiceProviderEvents(user.id));
                    } else {
                        toast.error('something went wrong');
                    }
                });
        }
    };
    return (
        <Box key={event.id}>
            <Card
                sx={{
                    minWidth: '100%',
                    m: 2,
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#f5f5f5',
                    boxShadow: 0,
                    borderRadius: '10px',
                }}
            >
                <CardContent>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box>
                            <h3 className="eventBidCardCategory">
                                {event.category}
                            </h3>
                            <h2 className="eventBidCardName">{event.name}</h2>
                            <h3 className="eventBidCardLocation">
                                {event.location}
                            </h3>
                            <p className="eventBidCardDescription">
                                {event.description}
                            </p>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'space-evenly'}
                        >
                            <Chip
                                sx={{
                                    backgroundColor: service_confirmed
                                        ? '#4caf50'
                                        : '#f44336',
                                    color: 'white',
                                }}
                                onClick={() =>
                                    setBudgetForm({
                                        ...budgetForm,
                                        event: event,
                                        open: true,
                                    })
                                }
                                label={event.budget}
                                icon={<ShoppingCartIcon />}
                            ></Chip>
                            <Chip
                                onClick={confirmEvent}
                                label={event.sp_confirmed ? 'deny' : 'confirm'}
                                icon={
                                    event.sp_confirmed ? (
                                        <ClearIcon />
                                    ) : (
                                        <CheckIcon />
                                    )
                                }
                            ></Chip>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        size="large"
                        sx={{
                            borderRadius: '50px',
                            maxHeight: '50px',
                            textTransform: 'none',
                            justifyContent: 'center',
                            color: '#00ADB5',
                            border: '2px solid #00ADB5',
                        }}
                        textDecoration="none"
                        endIcon={<MessageIcon color="inherit" />}
                        href=""
                    >
                        <h3 className="eventCardButton">Contact</h3>
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}
