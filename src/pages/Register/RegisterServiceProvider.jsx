import {
    Button,
    Container,
    Divider,
    Stack,
    Typography,
    Box,
    TextField,
} from '@mui/material';
import React, { useState } from 'react';
import LocalLocations from '../../resources/LocalLocations';
import Footer from '../../components/Footer';

export default function RegisterServiceProvider() {
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [companyNameError, setCompanyNameError] = useState(false);
    const [companyDescriptionError, setCompanyDescriptionError] =
        useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setCompanyDescriptionError(false);
        setCompanyNameError(false);
        setPasswordError(false);
        setConfirmPasswordError(false);
        setEmailError(false);
        setPhoneError(false);

        if (
            companyName &&
            companyDescription &&
            password &&
            confirmPassword &&
            email &&
            password === confirmPassword
        ) {
            console.log(
                companyName,
                companyDescription,
                email,
                password,
                confirmPassword,
                phone
            );
        }
        if (companyName === '') {
            setCompanyNameError(true);
        }
        if (companyDescription === '') {
            setCompanyDescriptionError(true);
        }
        if (password === '') {
            setPasswordError(true);
        }
        if (confirmPassword === '') {
            setConfirmPasswordError(true);
        }
        if (email === '') {
            setEmailError(true);
        }
        if (phone === '') {
            setPhoneError(true);
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError(true);
            alert('Password does not match');
        }
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'lightcyan' }}>
            <Container maxWidth="sm">
                <Box
                    sx={{ flexGrow: 1, bgcolor: '#fff' }}
                    p={5}
                    justifyContent="center"
                >
                    <Typography variant="h5" margin="20px">
                        Sign In
                    </Typography>
                    <Typography variant="body2" margin="15px">
                        as a Service Provider
                    </Typography>
                    <Divider variant="middle" />

                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            onChange={(e) => setCompanyName(e.target.value)}
                            fullWidth
                            label="Company Name"
                            variant="outlined"
                            error={companyNameError}
                            margin="dense"
                            required
                        />
                        <TextField
                            onChange={(e) =>
                                setCompanyDescription(e.target.value)
                            }
                            fullWidth
                            label="Company Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            error={companyDescriptionError}
                            margin="dense"
                            required
                        />
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            id="email"
                            label="e-mail"
                            variant="outlined"
                            margin="dense"
                            autoComplete="email"
                            required
                            error={emailError}
                        />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            type="password"
                            placeholder="password"
                            label="Enter a password"
                            margin="dense"
                            error={passwordError}
                            required
                        />
                        <TextField
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                            type="password"
                            placeholder="password"
                            label="Re-enter password"
                            margin="dense"
                            error={confirmPasswordError}
                            required
                        />
                        <TextField
                            onChange={(e) => setPhone(e.target.value)}
                            fullWidth
                            id="contactNumber"
                            label="Contact Number"
                            variant="outlined"
                            margin="dense"
                            error={phoneError}
                            required
                            mb={2}
                        />
                        <LocalLocations />
                        <Stack
                            mt={4}
                            justifyContent="space-between"
                            spacing={2}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    p: 1,
                                    borderRadius: '50px',
                                }}
                            >
                                Clear all
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    p: 2,
                                    borderRadius: '50px',
                                }}
                            >
                                Submit
                            </Button>
                            <Button
                                href={'/login'}
                                variant="text"
                                sx={{ p: 2, borderRadius: '50px' }}
                            >
                                <Typography variant="body1">
                                    Already have an account?
                                </Typography>
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
}
