import axios from 'axios';

// create event
const createEvent = async (eventData) => {
    return await axios.post('http://localhost:3000/api/v1/events/', {
        ...eventData,
    });
};

// get user dashboard
const getUserEvents = async (userId) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return await axios.get(
        `http://localhost:3000/api/v1/customers/${userId}/events`,
        config
    );
};

export const eventService = { createEvent, getUserEvents };
