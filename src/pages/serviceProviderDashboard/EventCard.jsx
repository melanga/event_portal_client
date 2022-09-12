import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Chip } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function EventCard({ event }) {
    return (
        <div>
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
                        <Box display="flex" justifyContent="flex-end">
                            <Chip
                                label={'your budget'}
                                icon={<ShoppingCartIcon />}
                            ></Chip>
                        </Box>
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
        </div>
    );
}
