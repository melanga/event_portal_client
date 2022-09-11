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

// create event requirement
const createEventRequirement = async (requirementData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const response = await axios.post(
        `http://localhost:3000/api/v1/requirements`,
        requirementData,
        config
    );
    return response.data;
};

const deleteEventRequirement = async (requirementID) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const response = await axios.delete(
        `http://localhost:3000/api/v1/requirements/${requirementID}`,
        config
    );
    return response.data;
};

// get event requirement bids
const getEventRequirementBids = async (requirementID) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const response = await axios.get(
        `http://localhost:3000/api/v1/requirements/${requirementID}/bids`,
        config
    );
    return response.data;
};

// delete event requirement bid
const deleteEventRequirementBid = async (requirementID, spID) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const response = await axios.delete(
        `http://localhost:3000/api/v1/requirements/${requirementID}/bids/${spID}`,
        config
    );
    return response.data;
};

export const requirementsService = {
    getEventRequirements,
    createEventRequirement,
    getEventRequirementBids,
    deleteEventRequirement,
    deleteEventRequirementBid,
};
