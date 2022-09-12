import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Box } from '@mui/system';
import { Button, Divider } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { useEffect, useState } from 'react';
import UpdateIcon from '@mui/icons-material/Update';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Options from '../../sampleData/events.json';
import { useDispatch, useSelector } from 'react-redux';
import {
    getServiceProviderBids,
    getServiceProviderEvents,
} from '../../api/reducers/serviceProvicerDashboardSlice';

export default function NestedList() {
    const { user } = useSelector((state) => state.auth);
    // const { events } = useSelector((state) => state.service_provider_dashboard);
    const [bidConfig, setBidConfig] = useState({
        location: '',
        category: '',
        user_id: '',
    });
    useEffect(() => {
        setBidConfig({
            location: user.location,
            category: user.category,
            user_id: user.id,
        });
    }, [user]);

    const dispatch = useDispatch();

    const handleItemClick = (type) => {
        if (type === 'All') {
            dispatch(getServiceProviderEvents(user.id));
        }
    };

    return (
        <div className="userDashboardEventContainer">
            <Box
                height="100vh"
                width={300}
                bgcolor={'#30353D'}
                p={2}
                // sx={{display:{xs:"none",md:"block"}}}
            >
                <h3 className="userDashboardTitle">My Bidded Events</h3>
                <Divider variant="middle" color="white" />
                <Box
                    sx={{
                        maxWidth: '100%',
                    }}
                    mt={2}
                    mb={2}
                    backgroundColor="#30353D"
                ></Box>

                <p className="userEventSubheading">Events You have Bidded</p>
                <Box mt={3} style={{ maxHeight: '30vh', overflow: 'auto' }}>
                    {/* USER Option LIST---------------------------------------------------- */}
                    <List>
                        {Options.map((option) => (
                            <ListItem key={option.id} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        handleItemClick(option.eventName);
                                    }}
                                >
                                    <p className="userEventListName">
                                        {option.eventName}
                                    </p>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <div display="flex" justifycontent="flex-end">
                    <Divider
                        color="white"
                        variant="middle"
                        sx={{ marginTop: 3 }}
                    />
                    {/* CREATE NEW EVENT BUTTON---------------------------------------------------- */}
                    <Button
                        fullWidth={true}
                        variant="contained"
                        size="medium"
                        sx={{
                            borderRadius: '50px',
                            maxHeight: '50px',
                            textTransform: 'none',
                            justifyContent: 'center',
                            color: '#fff',
                            backgroundColor: '#00ADB5',
                            marginTop: '20px',
                            '&:hover': {
                                backgroundColor: '#1A2027',
                                border: '2px solid #00ADB5',
                            },
                        }}
                        textDecoration="none"
                        href="/ServiceProviderDetails"
                        endIcon={<UpdateIcon color="inherit" />}
                    >
                        <h3 className="userCreateEventButton">
                            Update my Page
                        </h3>
                    </Button>

                    {/* SEARCH FOR NEW EVENT BUTTON---------------------------------------------------- */}
                    <Button
                        fullWidth={true}
                        variant="contained"
                        size="medium"
                        sx={{
                            borderRadius: '50px',
                            maxHeight: '50px',
                            textTransform: 'none',
                            justifyContent: 'center',
                            color: '#fff',
                            backgroundColor: '#00ADB5',
                            marginTop: '20px',
                            '&:hover': {
                                backgroundColor: '#1A2027',
                                border: '2px solid #00ADB5',
                            },
                        }}
                        textDecoration="none"
                        onClick={() =>
                            dispatch(getServiceProviderBids(bidConfig))
                        }
                        endIcon={<ManageSearchIcon color="inherit" />}
                    >
                        <h3 className="userCreateEventButton">
                            Search for New Events
                        </h3>
                    </Button>
                </div>
            </Box>
        </div>
    );
}
