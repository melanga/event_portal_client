import { Stack, Typography, Button, TextField, Box } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/NavBar';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsernameError(false);
        setPasswordError(false);

        if (username === '') {
            setUsernameError(true);
        }
        if (password === '') {
            setPasswordError(true);
        }
        if (username && password) {
            console.log(username, password);
        }
    };

    const flexContainer = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    };

    return (
        <Box sx={{ bgcolor: 'lightcyan', minHeight: '100vh' }}>
            <Navbar />
            <Stack
                mt={15}
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h6">LOG IN</Typography>
                <br />
                <br />

                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    style={flexContainer}
                >
                    <TextField
                        onChange={(e) => setUsername(e.target.value)}
                        label="Username"
                        variant="outlined"
                        error={usernameError}
                    />

                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        type="password"
                        variant="outlined"
                        error={passwordError}
                    />
                    <br />
                    <br />

                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        sx={{ color: '#fff', borderRadius: '50px' }}
                    >
                        Log In
                    </Button>
                </form>

                <Box mt={2.5}>
                    New Here?
                    <Button href="/register">Register!</Button>
                </Box>
            </Stack>
        </Box>
    );
}
