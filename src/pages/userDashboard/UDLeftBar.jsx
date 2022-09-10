import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, Divider, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../api/reducers/eventSlice';
import CreateEventDialog from './CreateEventDialog';

const UDLeftBar = () => {
    const dispatch = useDispatch();
    const { events } = useSelector((state) => state.event);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getEvents(user.id));
    }, [dispatch, user.id]);

    //SEARCH FILTER-----------------------------------
    const [searchFilter, setSearchFilter] = useState('');

    return (
        <div className="userDashboardEventContainer">
            <Box
                minHeight="100vh"
                width={300}
                bgcolor={'#30353D'}
                p={2}
                // sx={{display:{xs:"none",md:"block"}}}
            >
                <h3 className="userDashboardTitle">My Events</h3>
                <Divider variant="middle" color="white" />
                <Box
                    sx={{
                        maxWidth: '100%',
                    }}
                    mt={2}
                    mb={2}
                    backgroundColor="#30353D"
                >
                    {/* EVENT SEARCH BAR---------------------------------------------------- */}
                    <TextField
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="searchUserBar"
                        fullWidth={true}
                        placeholder="Search Your Events Here"
                        id="searchEvent"
                        sx={{
                            borderRadius: '50px',
                            textAlign: 'center',
                        }}
                    />
                </Box>

                {/* DIVIDER---------------------------------------------------- */}
                <Divider variant="middle" color="white" />

                <p className="userEventSubheading">Events You have created</p>
                <Box mt={3} style={{ maxHeight: '30vh', overflow: 'auto' }}>
                    {/* USER EVENT LIST---------------------------------------------------- */}
                    <List>
                        {events
                            .filter((event) => {
                                if (searchFilter === '') {
                                    return event;
                                } else if (
                                    event.name
                                        .toLowerCase()
                                        .includes(searchFilter.toLowerCase())
                                ) {
                                    return event;
                                } else {
                                    return null;
                                }
                            })
                            .map((event) => (
                                <ListItem key={event.id} disablePadding>
                                    <ListItemButton>
                                        <p className="userEventListName">
                                            {event.name}
                                        </p>
                                    </ListItemButton>
                                    <ListItemButton
                                        sx={{ alignItems: 'flex-end' }}
                                    >
                                        <div className="userEventCloseIcon">
                                            <ClearIcon color="error" />
                                        </div>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                    </List>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                    <Divider
                        color="white"
                        variant="middle"
                        sx={{ marginTop: 3 }}
                    />
                    {/* CREATE NEW EVENT BUTTON---------------------------------------------------- */}
                    <CreateEventDialog />
                </Box>
            </Box>
        </div>
    );
};

export default UDLeftBar;
