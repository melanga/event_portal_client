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
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

// register user
const register = async (userData) => {
    const response = await axios.post(
        'http://localhost:3000/api/v1/users/register',
        {
            userData,
        }
    );
    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem('user');
};

export const authService = { login, logout, register };
