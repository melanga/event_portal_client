import { Stack, Typography, Button, Box } from '@mui/material';
import React from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Box bgcolor="lightcyan" minHeight="100vh">
            <Stack rowGap={4} justifyContent="center" alignItems="center">
                <Typography mb={2} variant="h6" mt={15}>
                    SIGN IN
                </Typography>
                <Button
                    component={Link}
                    to={'/register/customer'}
                    size="large"
                    variant="contained"
                    endIcon={<SearchSharpIcon />}
                    sx={{ borderRadius: '50px' }}
                >
                    I am Searching a Service
                </Button>
                <Button
                    component={Link}
                    to={'/register/service_provider'}
                    size="large"
                    variant="contained"
                    endIcon={<SettingsSharpIcon />}
                    sx={{ borderRadius: '50px' }}
                >
                    I/ We provide a service
                </Button>
                <Typography>
                    Already Registered?
                    <Button component={Link} to={'/login'}>
                        Log in
                    </Button>
                </Typography>
            </Stack>
        </Box>
    );
};

export default Register;
