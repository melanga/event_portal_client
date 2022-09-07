import {
    Button,
    Divider,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import map from '../../images/map.png';

const BottomContent = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ flexGrow: 1 }} mt={5}>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={12} md={4}>
                    <Item
                        elevation={3}
                        sx={{
                            bgcolor: '#222831',
                            color: '#fff',
                            height: '100%',
                        }}
                    >
                        <Typography variant="h6">Top Services</Typography>
                        <Divider variant="middle" color="white" />
                        <List>
                            <ListItemButton>
                                <ListItemText primary="1. Weddings" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="2. Birthday Parties" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="3. Funerals" />
                            </ListItemButton>
                        </List>
                        <Button variant="contained" text-decoration="none">
                            See more...
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item
                        elevation={3}
                        sx={{
                            bgcolor: '#222831',
                            color: '#fff',
                            height: '100%',
                        }}
                    >
                        <Typography variant="h6">Overview</Typography>
                        <Divider variant="middle" color="white" />
                        <List>
                            <ListItemButton>
                                <ListItemText primary="About" align="center" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText
                                    primary="Services"
                                    align="center"
                                />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText
                                    primary="Terms of use"
                                    align="center"
                                />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText
                                    primary="Privacy policy"
                                    align="center"
                                />
                            </ListItemButton>
                        </List>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item
                        elevation={3}
                        sx={{
                            bgcolor: '#222831',
                            color: '#fff',
                            height: '100%',
                        }}
                    >
                        <Typography variant="h6">
                            Quick search the map
                        </Typography>
                        <Divider variant="middle" color="white" />
                        <Box mt={1}>
                            <img src={map} alt="Map" height="200vh" />
                        </Box>
                        <Button variant="contained" text-decoration="none">
                            Search
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BottomContent;
