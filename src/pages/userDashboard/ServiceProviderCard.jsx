import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Chip } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getEventServiceProviders } from '../../api/reducers/eventSlice';

export default function ServiceProviderCard({ service_provider }) {
    const [service_confirmed, setServiceConfirmed] = useState(false);
    const { token } = useSelector((state) => state.auth);
    const { event } = useSelector((state) => state.event);
    const dispatch = useDispatch();
    useEffect(() => {
        if (service_provider.c_confirmed && service_provider.sp_confirmed) {
            setServiceConfirmed(true);
        }
    }, [service_provider.c_confirmed, service_provider.sp_confirmed]);

    const removeServiceProviderFromEvent = () => {
        if (event && service_provider) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios
                .delete(
                    `http://localhost:3000/api/v1/events/${event.id}/service_providers/${service_provider.service_provider_id}`,
                    config
                )
                .then((res) => {
                    if (res.status === 200) {
                        toast.success('service provider removed from event');
                        dispatch(getEventServiceProviders(event.id));
                    } else {
                        toast.error('something went wrong');
                    }
                });
        }
    };

    const confirmServiceProvider = () => {
        console.log('confirming service provider');
        if (event && service_provider) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios
                .put(
                    `http://localhost:3000/api/v1/events/${event.id}/service_providers/${service_provider.service_provider_id}/c_confirmed`,
                    { c_confirmed: !service_provider.c_confirmed },
                    config
                )
                .then((res) => {
                    if (res.status === 200) {
                        toast.success('service provider confirmed');
                        dispatch(getEventServiceProviders(event.id));
                    } else {
                        toast.error('something went wrong');
                    }
                });
        }
    };

    return (
        <Box padding={2}>
            <Card
                sx={{
                    minWidth: '100%',
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#f5f5f5',
                    boxShadow: 2,
                    borderRadius: '15px',
                    '&:hover': {
                        backgroundColor: '#B2DFDB',
                    },
                }}
            >
                <CardContent>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box>
                            <h3 className="eventBidCardCategory">
                                {service_provider.category}
                            </h3>
                            <h2 className="eventBidCardName">
                                {service_provider.service_title}
                            </h2>
                            <h3 className="eventBidCardLocation">
                                {service_provider.first_name +
                                    ' ' +
                                    service_provider.last_name}
                            </h3>
                            <h3 className="eventBidCardLocation">
                                {service_provider.location}
                            </h3>
                            <p className="eventBidCardDescription">
                                {service_provider.description}
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
                                label={'event.SPBudget'}
                                icon={<ShoppingCartIcon />}
                            ></Chip>
                            <Chip
                                onClick={removeServiceProviderFromEvent}
                                label={'remove'}
                                icon={<PersonRemoveIcon />}
                            ></Chip>
                            <Chip
                                onClick={confirmServiceProvider}
                                label={
                                    service_provider.c_confirmed
                                        ? 'deny'
                                        : 'confirm'
                                }
                                icon={
                                    service_provider.c_confirmed ? (
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
                    >
                        <h3 className="eventCardButton">Contact</h3>
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}
