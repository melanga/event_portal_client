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
    return response;
};

// register user
const register = async (userData) => {
    console.log(userData);
    return await axios.post('http://localhost:3000/api/v1/users', {
        ...userData,
    });
};

// Logout user
const logout = () => {
    localStorage.removeItem('user');
};

export const authService = { login, logout, register };