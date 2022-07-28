import axios from 'axios';

export async function getUser() {
    const token = localStorage.getItem('token');
    if (token) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.get(
            `http://localhost:3000/api/v1/users/me`,
            config
        );
        return response.data;
    }
}
