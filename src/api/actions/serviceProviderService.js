import axios from 'axios';

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
    getRecentServiceProviders,
    getCategories,
    searchServiceProviders,
    filterServiceProviders,
};
