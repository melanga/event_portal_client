import { AppBar, Box, Toolbar, styled, Button } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cyan } from '@mui/material/colors';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
import logowhitebg from '../../images/logoWhitebg.png';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
});

const Fullscreen = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',

    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const Mobilescreen = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',

    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

const Navbar = () => {
    return (
        <AppBar position="static" elevation={0}>
            <StyledToolbar>
                <Box padding="10px">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img src={logowhitebg} alt="Logo" height="50px" />
                    </Link>
                </Box>
                <Fullscreen>
                    <Box>
                        <Button>
                            <h3 class="navbarButtons">Home</h3>
                        </Button>
                        <Button href="./">
                            <h3 class="navbarButtons">Events</h3>
                        </Button>
                        <Button>
                            <h3 class="navbarButtons">Services</h3>
                        </Button>
                        <Button>
                            <h3 class="navbarButtons">About</h3>
                        </Button>
                    </Box>
                    <Box>
                        <Link to="../Login" style={{ textDecoration: 'none' }}>
                            <Button
                                sx={{ color: '#00ADB5' }}
                                variant="text"
                                ml={1}
                                startIcon={<PersonIcon />}
                            >
                                <h3>Login</h3>
                            </Button>
                        </Link>
                    </Box>
                </Fullscreen>

                <Mobilescreen>
                    <Accordion
                        sx={{
                            color: '#222831',
                        }}
                        elevation={0}
                        disableGutters={true}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon sx={{ color: cyan[500] }} />
                            }
                            disableGutters={true}
                        >
                            <h3>MENU</h3>
                        </AccordionSummary>

                        <AccordionDetails>
                            <ButtonGroup orientation="vertical">
                                <Button
                                    sx={{ color: '#222831', fontWeight: 100 }}
                                    variant="outlined"
                                >
                                    Home
                                </Button>
                                <Button
                                    sx={{ color: '##222831' }}
                                    variant="outlined"
                                >
                                    Events
                                </Button>
                                <Button
                                    sx={{ color: '#222831' }}
                                    variant="outlined"
                                >
                                    Services
                                </Button>
                                <Button
                                    sx={{ color: '#222831f' }}
                                    variant="outlined"
                                >
                                    About Us
                                </Button>
                                <Link
                                    to="../SigninSearching"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        sx={{
                                            color: '#fff',
                                            backgroundColor: '#222831',
                                            elevation: 0,
                                        }}
                                        variant="contained"
                                        startIcon={<PersonIcon />}
                                    >
                                        <h4>Log In</h4>
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </AccordionDetails>
                    </Accordion>
                </Mobilescreen>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
