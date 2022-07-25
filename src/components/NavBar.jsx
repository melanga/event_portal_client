import {
    AppBar,
    Box,
    Toolbar,
    styled,
    Typography,
    Button,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    ButtonGroup,
} from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../images/logo.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cyan } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#222831',
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
        <AppBar position="sticky">
            <StyledToolbar>
                <Box padding="20px">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img src={logo} alt="Logo" height="50px" />
                    </Link>
                </Box>
                <Fullscreen>
                    <Box>
                        <Button sx={{ color: '#fff' }}>
                            <Typography>Home</Typography>
                        </Button>
                        <Button sx={{ color: '#fff' }}>
                            <Typography>Events</Typography>
                        </Button>
                        <Button sx={{ color: '#fff' }}>
                            <Typography>Services</Typography>
                        </Button>
                        <Button sx={{ color: '#fff' }}>
                            <Typography>About Us</Typography>
                        </Button>

                        <Button
                            href={'/login'}
                            sx={{ color: '#fff', borderRadius: '50px' }}
                            variant="contained"
                            ml={1}
                            startIcon={<PersonIcon />}
                        >
                            Log In
                        </Button>
                    </Box>
                </Fullscreen>
                <Mobilescreen>
                    <Accordion
                        sx={{
                            backgroundColor: '#222831',
                            color: 'white',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon sx={{ color: cyan[500] }} />
                            }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            color="primary"
                        >
                            <Typography>MENU</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical outlined button group"
                            >
                                <Button
                                    sx={{ color: '#fff' }}
                                    variant="outlined"
                                >
                                    Home
                                </Button>
                                <Button
                                    sx={{ color: '#fff' }}
                                    variant="outlined"
                                >
                                    Events
                                </Button>
                                <Button
                                    sx={{ color: '#fff' }}
                                    variant="outlined"
                                >
                                    Services
                                </Button>
                                <Button
                                    sx={{ color: '#fff' }}
                                    variant="outlined"
                                >
                                    About Us
                                </Button>

                                <Button
                                    href={'/login'}
                                    sx={{ color: '#fff' }}
                                    variant="contained"
                                    ml={1}
                                    startIcon={<PersonIcon />}
                                >
                                    Log In
                                </Button>
                            </ButtonGroup>
                        </AccordionDetails>
                    </Accordion>
                </Mobilescreen>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
