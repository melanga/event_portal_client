import { Box, ListItem, ListItemButton, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import InputAdornment from '@mui/material/InputAdornment';
import Chats from '../../sampleData/chats.json';
import { useSelector } from 'react-redux';

const UDRightBar = () => {
    const { service_providers } = useSelector((state) => state.event);
    //SEARCH FILTER-----------------------------------
    const [searchFilter, setSearchFilter] = useState('');

    return (
        <Box>
            {/* FOR DESKTOP----------------------------------------------------- */}
            <Box
                bgcolor="#F5F5F5"
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
                    placeholder="Search Your Chats Here"
                    id="searchEvent"
                    sx={{
                        borderRadius: '50px',
                        textAlign: 'center',
                    }}
                />
                <Box mt={3} style={{ maxHeight: 400, overflow: 'auto' }}>
                    <List>
                        {service_providers
                            .filter((chat) => {
                                if (searchFilter === '') {
                                    return chat;
                                } else if (
                                    chat.name
                                        .toLowerCase()
                                        .includes(searchFilter.toLowerCase())
                                ) {
                                    return chat;
                                } else {
                                    return null;
                                }
                            })
                            .map((chat) => (
                                <ListItem
                                    key={chat.service_provider_id}
                                    disablePadding={true}
                                    disableGutters={true}
                                >
                                    <ListItemButton
                                        sx={{
                                            borderRadius: '15px',
                                            '&:hover': {
                                                backgroundColor: '#B2DFDB',
                                            },
                                        }}
                                    >
                                        {/*<ListItemAvatar>*/}
                                        {/*    <Avatar src={chat.avatar} />*/}
                                        {/*</ListItemAvatar>*/}
                                        <p>{chat.first_name}</p>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                    </List>
                </Box>
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
                        {Chats.filter((chat) => {
                            if (searchFilter === '') {
                                return chat;
                            } else if (
                                chat.name
                                    .toLowerCase()
                                    .includes(searchFilter.toLowerCase())
                            ) {
                                return chat;
                            } else {
                                return null;
                            }
                        }).map((chat) => (
                            <ListItem
                                key={chat.name}
                                disablePadding
                                disableGutters
                            >
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar src={chat.avatar} />
                                    </ListItemAvatar>
                                    <p>{chat.name}</p>
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
