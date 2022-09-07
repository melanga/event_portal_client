import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Stack, Tab, Tabs } from '@mui/material';
import CastleIcon from '@mui/icons-material/Castle';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
    filterServiceProvider,
    getCategories,
    searchServiceProvider,
} from '../../api/reducers/serviceProviderSlice';
import Filter from './Filter';

const Searchbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchServiceProvider(search));
        console.log(search, location, category);
    };
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.service_provider);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(searchServiceProvider(search));
    // }, [dispatch, search]);

    const [value, setValue] = React.useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="lg" justifycontent="center" align="center">
            <Box p={3}>
                <h2
                    className="SearchTitle"
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    Search Services Here...
                </h2>
                <Stack
                    sx={{
                        //   width: 500,
                        // maxWidth: '100%',
                        padding: '20px',
                    }}
                    direction="row"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                label="Quick Search"
                                id="SearchServices"
                                className="inputRounded"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                onSubmit={handleSubmit}
                                onInput={handleSubmit}
                                sx={{
                                    borderRadius: '50px',
                                    textAlign: 'center',
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <Button
                                            type="submit"
                                            onClick={handleSubmit}
                                            sx={{
                                                borderRadius: '50px',
                                                color: '#00ADB5',
                                            }}
                                        >
                                            <SearchIcon fontSize="large" />
                                        </Button>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                </Stack>

                <Stack id="Category">
                    <Box display="flex" width="100%">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={10}>
                                <Box bgcolor="#fff">
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                        scrollButtons
                                        allowScrollButtonsMobile
                                        aria-label="scrollable force tabs example"
                                        width="100%"
                                    >
                                        {categories.map((category) => {
                                            return (
                                                <Tab
                                                    onClick={() => {
                                                        dispatch(
                                                            filterServiceProvider(
                                                                {
                                                                    category:
                                                                        category.name,
                                                                }
                                                            )
                                                        );
                                                    }}
                                                    key={category.name}
                                                    icon={<CastleIcon />}
                                                    label={
                                                        <h4>{category.name}</h4>
                                                    }
                                                    sx={{
                                                        textTransform: 'none',
                                                    }}
                                                />
                                            );
                                        })}
                                        <Tab
                                            icon={<CastleIcon />}
                                            label={<h4>Other</h4>}
                                        />
                                    </Tabs>
                                </Box>
                            </Grid>
                            <Filter
                                onClick={handleOpen}
                                open={open}
                                onClose={handleClose}
                                onClick1={() => handleClose(true)}
                                onSubmit={handleSubmit}
                                category={setCategory}
                                location={setLocation}
                            />
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
};

export default Searchbar;
