import axios from 'axios';

// create event
const createEvent = async (eventData) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    console.log({ ...eventData });
    const result = await axios.post(
        'http://localhost:3000/api/v1/events/',
        {
            ...eventData,
        },
        config
    );
    return result.data;
};

// get user dashboard
const getUserEvents = async (userId) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const results = await axios.get(
        `http://localhost:3000/api/v1/customers/${userId}/events`,
        config
    );

    return results.data;
};

// get an event
const getEvent = async (eventId) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const result = await axios.get(
        `http://localhost:3000/api/v1/events/${eventId}`,
        config
    );

    return result.data;
};

// delete event
const deleteEvent = async (eventId) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const result = await axios.delete(
        `http://localhost:3000/api/v1/events/${eventId}`,
        config
    );

    return result.data;
};

// get event service providers
const getEventServiceProviders = async (eventId) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const results = await axios.get(
        `http://localhost:3000/api/v1/events/${eventId}/service_providers`,
        config
    );

    return results.data;
};

export const eventService = {
    createEvent,
    getUserEvents,
    getEvent,
    getEventServiceProviders,
    deleteEvent,
};
