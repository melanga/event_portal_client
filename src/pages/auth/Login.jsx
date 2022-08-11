import { Stack, Typography, Button, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../api/reducers/authSlice';

export default function Login() {
    const [form, setForm] = useState({ username: '', password: '' });
    const [formErrors, setFormErrors] = useState({
        usernameError: false,
        passwordError: false,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isSuccess, isError, message } = useSelector(
        (state) => state.auth
    );
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess && user) {
            navigate('/');
        }
        dispatch(reset());
    }, [user, isSuccess, navigate, isError, message, dispatch]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors({
            usernameError: form.username === '',
            passwordError: form.password === '',
        });
        if (form.username && form.password) {
            dispatch(login(form));
        }
    };

    const flexContainer = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    };

    return (
        <Box sx={{ bgcolor: 'lightcyan', minHeight: '100vh' }}>
            <Stack
                pt={10}
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
                    <Input
                        handleChange={handleChange}
                        name="username"
                        label="Username"
                        type={'text'}
                        error={formErrors.usernameError}
                        helperText={formErrors.usernameError ? 'Required' : ''}
                    />
                    <Input
                        handleChange={handleChange}
                        name="password"
                        label="Password"
                        type={'password'}
                        error={formErrors.passwordError}
                        helperText={formErrors.passwordError ? 'Required' : ''}
                    />
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
                    <Button component={Link} to="/register">
                        Register!
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}
