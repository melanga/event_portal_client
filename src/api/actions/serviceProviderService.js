import axios from 'axios';

const getServiceProviderEvents = async (user_id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const response = await axios.get(
        `http://localhost:3000/api/v1/service_providers/${user_id}/events`,
        config
    );
    return response.data;
};

const getServiceProviderBids = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const response = await axios.post(
        `http://localhost:3000/api/v1/service_providers/${data.user_id}/bids`,
        data,
        config
    );
    return response.data;
};

const createServiceProviderBid = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const response = await axios.post(
        `http://localhost:3000/api/v1/requirements/${data.req_id}/bids/${data.sp_id}`,
        { price: data.price },
        config
    );
    return response.data;
};

const getServiceProviderBid = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const response = await axios.get(
        `http://localhost:3000/api/v1/service_providers/${data.req_id}/bids/${data.sp_id}`,
        config
    );
    return response.data;
};

const getRecentServiceProviders = async () => {
    const response = await axios.get(
        'http://localhost:3000/api/v1/service_providers/recent'
    );
    return response.data;
};

const searchServiceProviders = async (data) => {
    const response = await axios.get(
        'http://localhost:3000/api/v1/service_providers/search',
        {
            params: {
                search: data,
            },
        }
    );
    return response;
};

const filterServiceProviders = async (data) => {
    const response = await axios.get(
        'http://localhost:3000/api/v1/service_providers/filter',
        {
            params: {
                filters: {
                    ...data,
                },
            },
        }
    );
    return response;
};

const getCategories = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/category');
    return response.data;
};

export const serviceProviderService = {
    getServiceProviderEvents,
    getRecentServiceProviders,
    getCategories,
    searchServiceProviders,
    filterServiceProviders,
    getServiceProviderBids,
    createServiceProviderBid,
    getServiceProviderBid,
};
