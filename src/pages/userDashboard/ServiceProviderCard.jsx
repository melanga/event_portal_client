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

export default function ServiceProviderCard({ service_provider }) {
    const [service_confirmed, setServiceConfirmed] = useState(false);
    useEffect(() => {
        if (service_provider.c_confirmed && service_provider.sp_confirmed) {
            setServiceConfirmed(true);
        }
    }, [service_provider.c_confirmed, service_provider.sp_confirmed]);
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
                    <Box display="flex" justifyContent="flex-end">
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
                    </Box>
                    <h3 className="eventBidCardCategory">
                        {service_provider.category}
                    </h3>
                    <h2 className="eventBidCardName">
                        {service_provider.first_name +
                            ' ' +
                            service_provider.last_name}
                    </h2>
                    <h3 className="eventBidCardLocation">
                        {service_provider.location}
                    </h3>
                    <p className="eventBidCardDescription">
                        {service_provider.description}
                    </p>
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
