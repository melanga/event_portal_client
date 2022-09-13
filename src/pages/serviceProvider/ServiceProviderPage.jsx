import React, { useEffect } from 'react';
import { Button, Divider, Grid, Box } from '@mui/material';
import Footer from '../../components/Footer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceProvider } from '../../api/reducers/serviceProviderSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

const SPDisplay = () => {
    const { id } = useParams();
    const { service_provider } = useSelector((state) => state.service_provider);
    const { event } = useSelector((state) => state.event);
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getServiceProvider(id));
    }, [dispatch, id]);

    const addServiceProviderToEvent = async () => {
        if (event && id) {
            if (token) {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const response = await axios.put(
                    `http://localhost:3000/api/v1/events/${event.id}/service_providers/${id}`,
                    {},
                    config
                );
                // show error message if any
                if (response.data.error) {
                    console.log(response.data.error);
                } else {
                    toast.success(`Service Provider added to ${event.name}`);
                }
                console.log(response);
            } else {
                navigate('/login');
            }
        }
    };

    const ImageData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
        },
    ];

    return (
        <Box sx={{ backgroundColor: '#f5f5f5' }} className="SPMainContainer">
            <Grid container mt={3} mb={3} className="SPDisplayContainer">
                <Grid item sm={12} md={8} className="SPDisplayContent">
                    <h1 className="SPDisplayTitle">
                        {service_provider.service_title}
                        <IconButton
                            onClick={() => {
                                addServiceProviderToEvent();
                            }}
                            aria-label="contact"
                            sx={{ color: '#fff' }}
                        >
                            <QuestionAnswerIcon color="inherit" />
                        </IconButton>
                    </h1>
                    <p className="SDPDIsplayDescription">
                        {service_provider.description}
                    </p>

                    <Divider
                        sx={{
                            width: '100%',
                            height: '1px',
                            backgroundColor: '#00ADB5',
                            my: 2,
                        }}
                    />

                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Button
                                variant="text"
                                size="large"
                                sx={{
                                    borderRadius: '50px',
                                    maxHeight: '50px',
                                    textTransform: 'none',
                                    justifyContent: 'center',
                                    color: '#00ADB5',
                                }}
                                textDecoration="none"
                                startIcon={<MailOutlineIcon color="inherit" />}
                                href={`mailto:${service_provider.email}`}
                            >
                                <h3 className="SPDisplayButtons">
                                    {service_provider.email}
                                </h3>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button
                                variant="text"
                                size="large"
                                sx={{
                                    borderRadius: '50px',
                                    maxHeight: '50px',
                                    textTransform: 'none',
                                    justifyContent: 'center',
                                    color: '#00ADB5',
                                }}
                                textDecoration="none"
                                startIcon={<PhoneIcon color="inherit" />}
                                href={`tel:${service_provider.telephone_number}`}
                            >
                                <h3 className="SPDisplayButtons">
                                    {service_provider.telephone_number}
                                </h3>
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider
                        sx={{
                            width: '100%',
                            height: '1px',
                            backgroundColor: '#00ADB5',
                            my: 2,
                        }}
                    />
                    <p className="SDPDIsplayGallery">Gallery</p>

                    <ImageList sx={{ width: '100%', height: 450 }}>
                        <ImageListItem key="Subheader" cols={2}>
                            <ListSubheader component="div">
                                Recent Works
                            </ListSubheader>
                        </ImageListItem>
                        {ImageData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item sm={12} md={12} className="SPDisplayHomeButton">
                    <Button
                        component={Link}
                        to="/search"
                        variant="text"
                        size="large"
                        sx={{
                            borderRadius: '50px',
                            maxHeight: '50px',
                            textTransform: 'none',
                            justifyContent: 'center',
                            color: '#00ADB5',
                        }}
                        textDecoration="none"
                        startIcon={<ArrowBackIosNewIcon color="inherit" />}
                    >
                        <h3>Back to Home</h3>
                    </Button>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    );
};

export default SPDisplay;
