import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function EventBidCard({
    event: eventBidData,
    bidForm,
    setBidForm,
}) {
    const { user } = useSelector((state) => state.auth);
    const handleClickOpen = () => {
        setBidForm({
            ...bidForm,
            open: true,
            event: eventBidData,
            req_id: eventBidData.id,
        });
    };

    const [price, setPrice] = useState(0);
    const [isBidded, setIsBidded] = useState(false);

    const getEventBidPrice = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        };
        const result = await axios.get(
            `http://localhost:3000/api/v1/requirements/${eventBidData.id}/bids/${user.id}`,
            config
        );
        return result.data;
    };

    useEffect(() => {
        getEventBidPrice().then((res) => {
            if (res.data) {
                setPrice(res.data.price);
            }
        });
    }, [getEventBidPrice]);

    useEffect(() => {
        if (price > 0) {
            setIsBidded(true);
        }
    }, [price]);

    return (
        <Box>
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
                    <Box>
                        <h3 className="eventBidCardCategory">
                            {eventBidData.category}
                        </h3>
                        <h2 className="eventBidCardName">
                            {eventBidData.title}
                        </h2>
                        <h3 className="eventBidCardLocation">
                            {eventBidData.location}
                        </h3>
                        <p className="eventBidCardDescription">
                            {eventBidData.description}
                        </p>
                        <p className="eventBidCardDescription">
                            Event name: {eventBidData.name}
                        </p>
                    </Box>
                </CardContent>
                <CardActions>
                    {isBidded ? (
                        <h3 className="eventBidCardPrice">Your bid: {price}</h3>
                    ) : (
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
                            onClick={handleClickOpen}
                        >
                            <h3 className="eventCardButton">Bid</h3>
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Box>
    );
}
