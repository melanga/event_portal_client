import {
    Button,
    Container,
    Divider,
    Typography,
    Box,
    TextField,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import LocalLocations from '../../../resources/LocalLocations';
import Footer from '../../../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../../../api/auth/authSlice';
import _ from 'lodash';
import { toast } from 'react-toastify';

const form_initial_c = {
    first_name: '',
    last_name: '',
    email: '',
    telephone_number: '',
    location: '',
    password: '',
    c_password: '',
};
const form_initial_sp = {
    ...form_initial_c,
    service_title: '',
    description: '',
    category: '',
};
const form_initial_errors_c = {
    first_name: false,
    last_name: false,
    email: false,
    telephone_number: false,
    location: false,
    password: false,
    c_password: false,
    passwordMatch: false,
};
const form_initial_errors_sp = {
    ...form_initial_errors_c,
    service_title: false,
    description: false,
    category: false,
};

export default function RegisterPage({ isCustomer }) {
    const [form, setForm] = useState(
        isCustomer ? form_initial_c : form_initial_sp
    );
    const [formErrors, setFormErrors] = useState(
        isCustomer ? form_initial_errors_c : form_initial_errors_sp
    );
    const isMounted = useRef(false);

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (isSuccess && user) {
            navigate('/login');
        }
        if (isError) {
            toast.error(message);
        }
        dispatch(reset());
    });

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
            const user = _.omit(form, ['c_password']);
            dispatch(register({ ...user, is_customer: isCustomer }));
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
        <Box
            display={'flex-column'}
            alignItems={'center'}
            sx={{ bgcolor: 'lightcyan' }}
        >
            <Container maxWidth="sm" sx={{ paddingY: '16px' }}>
                <Box
                    boxShadow={2}
                    maxWidth={'sm'}
                    display={'flex-column'}
                    sx={{ bgcolor: '#fff', borderRadius: '10px' }}
                    p={5}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography align={'center'} variant="h4">
                        Sign In
                    </Typography>
                    <Typography align={'center'} variant="body2">
                        as a {isCustomer ? 'Customer' : 'Service Provider'}
                    </Typography>
                    <Divider variant="middle" sx={{ marginY: '8px' }} />
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
                        {!isCustomer && (
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
                        )}
                        {!isCustomer && (
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
                        )}
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
                        {!isCustomer && (
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
                        )}
                        <LocalLocations handleChange={handleChange} />
                        <Button
                            fullWidth={true}
                            variant="contained"
                            type="submit"
                            sx={{
                                mt: '16px',
                                p: 2,
                                borderRadius: '50px',
                            }}
                        >
                            Submit
                        </Button>
                        <Button
                            fullWidth={true}
                            component={Link}
                            to={'/login'}
                            variant="text"
                            sx={{
                                p: 2,
                                borderRadius: '50px',
                            }}
                        >
                            <Typography variant="body1">
                                Already have an account?
                            </Typography>
                        </Button>
                    </form>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
}
