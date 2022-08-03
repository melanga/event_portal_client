import {
    Button,
    Container,
    Divider,
    Stack,
    Typography,
    Box,
    TextField,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import LocalLocations from '../../../resources/LocalLocations';
import Footer from '../../../components/Footer';

const form_initial = {
    service_title: '',
    description: '',
    category: '',
    first_name: '',
    last_name: '',
    email: '',
    telephone_number: '',
    location: '',
    password: '',
    c_password: '',
};
const form_initial_errors = {
    service_title: false,
    description: false,
    category: false,
    first_name: false,
    last_name: false,
    email: false,
    telephone_number: false,
    location: false,
    password: false,
    c_password: false,
    passwordMatch: false,
};
export default function RegisterServiceProvider() {
    const [form, setForm] = useState(form_initial);
    const [formErrors, setFormErrors] = useState(form_initial_errors);
    const isMounted = useRef(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // eslint-disable-next-line
    const handleErrors = () => {
        Object.keys(formErrors).forEach((key) => {
            // setFormErrors({...formErrors, [key]: form[key] === ''}); not working
            setFormErrors((formErrors) => ({
                ...formErrors,
                [key]: form[key] === '',
            }));
            if (key === 'passwordMatch') {
                setFormErrors((formErrors) => ({
                    ...formErrors,
                    [key]: form.password !== form.c_password,
                }));
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleErrors();
        if (
            !Object.values(form).some((value) => value === '') &&
            form.password === form.c_password
        ) {
            console.log('submitted');
            console.log(form);
        }
        isMounted.current = true;
    };

    useEffect(() => {
        if (isMounted.current) {
            console.log('mounted');
            handleErrors();
            isMounted.current = false;
        }
    }, [handleErrors]);

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
                            onChange={handleChange}
                            name={'first_name'}
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            error={formErrors.first_name}
                            margin="dense"
                            required
                        />
                        <TextField
                            onChange={handleChange}
                            name={'last_name'}
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            error={formErrors.last_name}
                            margin="dense"
                            required
                        />
                        <TextField
                            onChange={handleChange}
                            name={'service_title'}
                            fullWidth
                            label="Service Title"
                            variant="outlined"
                            error={formErrors.service_title}
                            margin="dense"
                            required
                        />
                        <TextField
                            onChange={handleChange}
                            fullWidth
                            name={'description'}
                            label="Company Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            error={formErrors.description}
                            margin="dense"
                            required
                        />
                        <TextField
                            onChange={handleChange}
                            fullWidth
                            name={'email'}
                            id="email"
                            label="e-mail"
                            variant="outlined"
                            margin="dense"
                            autoComplete="email"
                            required
                            error={formErrors.email}
                        />
                        <TextField
                            onChange={handleChange}
                            fullWidth
                            name={'password'}
                            type="password"
                            placeholder="password"
                            label="Enter a password"
                            margin="dense"
                            error={formErrors.password}
                            required
                        />
                        <TextField
                            onChange={handleChange}
                            fullWidth
                            name={'c_password'}
                            type="password"
                            placeholder="password"
                            label="Re-enter password"
                            margin="dense"
                            error={formErrors.passwordMatch}
                            required
                        />
                        <TextField
                            onChange={handleChange}
                            fullWidth
                            name={'telephone_number'}
                            label="Contact Number"
                            variant="outlined"
                            margin="dense"
                            error={formErrors.telephone_number}
                            required
                            mb={2}
                        />
                        <TextField
                            onChange={handleChange}
                            fullWidth
                            name={'category'}
                            label="Category"
                            variant="outlined"
                            margin="dense"
                            error={formErrors.category}
                            required
                            mb={2}
                        />
                        <LocalLocations handleChange={handleChange} />
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
