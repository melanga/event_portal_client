import { Box, ListItem, ListItemButton, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import {
    getEventRequirements,
    reset,
} from '../../api/reducers/requirementSlice';
import { toast } from 'react-toastify';
import CreateRequirementDialog from './CreateRequirementDialog';

const UDRightBar = () => {
    const { event } = useSelector((state) => state.event);
    const { requirements, isError, message } = useSelector(
        (state) => state.requirement
    );

    const dispatch = useDispatch();
    useEffect(() => {
        if (event.id) {
            dispatch(getEventRequirements(event.id));
        }
    }, [event.id, dispatch]);

    // display error using toast if any
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        dispatch(reset());
    }, [dispatch, isError, message]);

    //SEARCH FILTER-----------------------------------
    const [searchFilter, setSearchFilter] = useState('');

    return (
        <Box>
            {/* FOR DESKTOP----------------------------------------------------- */}
            <Box
                bgcolor="#E0F2F1"
                flex={2}
                p={4}
                minHeight={'100%'}
                width={250}
                sx={{ display: { xs: 'none', md: 'block' } }}
            >
                <h3 className="userChatTitle">Requirements</h3>
                <TextField
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="searchUserBar"
                    fullWidth
                    endadornment={
                        <InputAdornment position="end">kg</InputAdornment>
                    }
                    placeholder="Search Your Requirements Here"
                    id="searchEvent"
                    sx={{
                        borderRadius: '50px',
                        textAlign: 'center',
                    }}
                />
                <Box mt={3} style={{ maxHeight: 400, overflow: 'auto' }}>
                    <List>
                        {requirements
                            .filter((requirement) => {
                                if (searchFilter === '') {
                                    return requirement;
                                } else if (
                                    requirement.title
                                        .toLowerCase()
                                        .includes(searchFilter.toLowerCase()) ||
                                    requirement.description
                                        .toLowerCase()
                                        .includes(searchFilter.toLowerCase())
                                ) {
                                    return requirement;
                                } else {
                                    return null;
                                }
                            })
                            .map((requirement) => (
                                <ListItem
                                    key={requirement.id}
                                    disablePadding={true}
                                    disableGutters={true}
                                    sx={{ paddingY: 1 }}
                                >
                                    <ListItemButton
                                        sx={{
                                            borderRadius: '15px',
                                            '&:hover': {
                                                backgroundColor: '#B2DFDB',
                                            },
                                            backgroundColor: '#80CBC4',
                                            boxShadow: 1,
                                        }}
                                    >
                                        {/*<ListItemAvatar>*/}
                                        {/*    <Avatar src={chat.avatar} />*/}
                                        {/*</ListItemAvatar>*/}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'left',
                                                alignItems: 'left',
                                                width: '100%',
                                            }}
                                        >
                                            <p>{requirement.title}</p>
                                            <p style={{ fontSize: '12px' }}>
                                                {requirement.description}
                                            </p>
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                    </List>
                </Box>
                <CreateRequirementDialog />
            </Box>

            {/* FOR MOBILE----------------------------------------------------------- */}
            <Box
                bgcolor="#F5F5F5"
                flex={12}
                p={4}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <h3 className="userChatTitle">Chats</h3>
                <TextField
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="searchUserBar"
                    fullWidth
                    placeholder="Search Your Chats Here"
                    id="searchEvent"
                    sx={{
                        borderRadius: '50px',
                        textAlign: 'center',
                    }}
                />
                <Box mt={3} style={{ maxHeight: 400, overflow: 'auto' }}>
                    <List>
                        {requirements
                            .filter((requirement) => {
                                if (searchFilter === '') {
                                    return requirement;
                                } else if (
                                    requirement.name
                                        .toLowerCase()
                                        .includes(searchFilter.toLowerCase())
                                ) {
                                    return requirement;
                                } else {
                                    return null;
                                }
                            })
                            .map((requirement) => (
                                <ListItem
                                    key={requirement.name}
                                    disablePadding
                                    disableGutters
                                >
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar src={requirement.avatar} />
                                        </ListItemAvatar>
                                        <p>{requirement.name}</p>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default UDRightBar;
