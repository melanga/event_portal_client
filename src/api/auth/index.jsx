import axios from 'axios';

export async function login(username, password) {
    try {
        const response = await axios.post(
            'http://localhost:3000/api/v1/users/login',
            {
                email: username,
                password: password,
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function register(user, isCustomer) {
    try {
        const response = await axios.post(
            'http://localhost:3000/api/v1/users/register',
            {
                email: user.name,
                password: user.password,
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
