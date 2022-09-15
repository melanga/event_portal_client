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
import { ImageUpload } from './ImageUpload';
import { ImageData } from '../../sampleData/ImageData';

const UpdateServiceProvider = () => {
    const { id } = useParams();
    const { service_provider } = useSelector((state) => state.service_provider);
    const { event } = useSelector((state) => state.event);
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getServiceProvider(id));
    }, [dispatch, id]);

    const updateServiceProvider = async () => {
        console.log('update service provider');
    };

    return (
        <Box sx={{ backgroundColor: '#f5f5f5' }} className="SPMainContainer">
            <Grid container mt={3} mb={3} className="SPDisplayContainer">
                <Grid item sm={12} md={8} className="SPDisplayContent">
                    <p className="SDPDIsplayGallery">Edit info</p>
                    <h1 className="SPDisplayTitle">
                        {service_provider.service_title}
                        <IconButton aria-label="contact" sx={{ color: '#fff' }}>
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
                        {ImageData[id].map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
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
            <ImageUpload />
            <Footer />
        </Box>
    );
};

export default UpdateServiceProvider;
