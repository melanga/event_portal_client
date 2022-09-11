import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, Divider, ListItemIcon, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteEvent,
    getEvents,
    reset,
    setEvent,
} from '../../api/reducers/eventSlice';
import CreateEventDialog from './CreateEventDialog';
import { toast } from 'react-toastify';
import ConfirmDialogBox from '../../components/ConfirmDialogBox';

const UDLeftBar = () => {
    const [confirmDialog, setConfirmDialog] = useState({
        open: false,
        title: '',
        subTitle: '',
        onConfirm: () => {},
    });
    const dispatch = useDispatch();
    const { event, events } = useSelector((state) => state.event);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getEvents(user.id));
    }, [dispatch, user.id]);

    // handle event delete
    const handleDelete = (id) => {
        dispatch(deleteEvent(id)).then(() => {
            toast.success('Event Deleted Successfully');
            dispatch(reset());
            dispatch(getEvents(user.id));
        });
    };

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
                            .filter((eachEvent) => {
                                if (searchFilter === '') {
                                    return eachEvent;
                                } else if (
                                    eachEvent.name
                                        .toLowerCase()
                                        .includes(searchFilter.toLowerCase())
                                ) {
                                    return eachEvent;
                                } else {
                                    return null;
                                }
                            })
                            .map((eachEvent) => (
                                <ListItem key={eachEvent.id} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            dispatch(setEvent(eachEvent));
                                        }}
                                    >
                                        <p
                                            className="userEventListName"
                                            // color={
                                            //     eachEvent.id === event.id
                                            //         ? 'white'
                                            //         : 'red'
                                            // }
                                            style={{
                                                color:
                                                    eachEvent.id === event.id
                                                        ? '#80CBC4'
                                                        : 'white',
                                            }}
                                            //color={'white'}
                                        >
                                            {eachEvent.name}
                                        </p>
                                    </ListItemButton>
                                    <ListItemIcon
                                        sx={{
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <div className="userEventCloseIcon">
                                            <ClearIcon
                                                // onClick={() => {
                                                //     handleDelete(eachEvent.id);
                                                // }}
                                                onClick={() => {
                                                    setConfirmDialog({
                                                        open: true,
                                                        title: `Are you sure to delete this event "${eachEvent.name}"?`,
                                                        subTitle:
                                                            "You can't undo this operation",
                                                        onConfirm: () => {
                                                            handleDelete(
                                                                eachEvent.id
                                                            );
                                                        },
                                                    });
                                                }}
                                                color="error"
                                            />
                                        </div>
                                    </ListItemIcon>
                                </ListItem>
                            ))}
                    </List>
                    <ConfirmDialogBox
                        data={confirmDialog}
                        setConfirmDialog={setConfirmDialog}
                    />
                    <CreateEventDialog />
                </Box>
            </Box>
        </div>
    );
};

export default UDLeftBar;
