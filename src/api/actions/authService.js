// Login user
import axios from 'axios';

// login user
const login = async (userData) => {
    const response = await axios.post(
        'http://localhost:3000/api/v1/users/login',
        {
            email: userData.username,
            password: userData.password,
        }
    );
    if (response.data) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};

// get user data
const getUser = async () => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(
        'http://localhost:3000/api/v1/users/me',
        config
    );
    return response.data;
};

// register user
const register = async (userData) => {
    console.log(userData);
    const response = await axios.post('http://localhost:3000/api/v1/users', {
        ...userData,
    });
    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem('token');
};

export const authService = { login, logout, register, getUser };
