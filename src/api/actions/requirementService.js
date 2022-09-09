import axios from 'axios';

// get event requirements
const getEventRequirements = async (eventID) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const response = await axios.get(
        `http://localhost:3000/api/v1/requirements/${eventID}`,
        config
    );
    return response.data;
};

export const requirementsService = {
    getEventRequirements,
};