import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosErrorFormatter } from '../../utils/axiosErrorFormatter';
import { serviceProviderService } from '../actions/serviceProviderService';

const initialState = {
    service_provider: {},
    service_providers: [],
    categories: [],
    isLoading: false,
    isError: false,
    message: '',
};

export const getServiceProvider = createAsyncThunk(
    'serviceProvider/getServiceProvider',
    async (data, thunkAPI) => {
        try {
            return await serviceProviderService.getServiceProvider(data);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const searchServiceProvider = createAsyncThunk(
    'serviceProvider/searchServiceProvider',
    async (data, thunkAPI) => {
        try {
            const response =
                await serviceProviderService.searchServiceProviders(data);
            return response.data;
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const filterServiceProvider = createAsyncThunk(
    'serviceProvider/filterServiceProvider',
    async (data, thunkAPI) => {
        try {
            const response =
                await serviceProviderService.filterServiceProviders(data);
            return response.data;
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const getRecentServiceProviders = createAsyncThunk(
    'service_providers/getRecentServiceProviders',
    async (thunkAPI) => {
        try {
            return await serviceProviderService.getRecentServiceProviders();
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const getCategories = createAsyncThunk(
    'service_providers/getCategories',
    async (thunkAPI) => {
        try {
            return await serviceProviderService.getCategories();
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const serviceProviderSlice = createSlice({
    name: 'service_providers',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecentServiceProviders.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.message = '';
            })
            .addCase(getRecentServiceProviders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.message = '';
                state.service_providers = action.payload.data;
            })
            .addCase(getRecentServiceProviders.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.message = '';
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.message = '';
                state.categories = action.payload.data;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(searchServiceProvider.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.message = '';
            })
            .addCase(searchServiceProvider.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.message = '';
                state.service_providers = action.payload.data;
            })
            .addCase(searchServiceProvider.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(filterServiceProvider.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.message = '';
            })
            .addCase(filterServiceProvider.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.message = '';
                state.service_providers = action.payload.data;
            })
            .addCase(filterServiceProvider.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(getServiceProvider.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.message = '';
            })
            .addCase(getServiceProvider.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.service_provider = action.payload.data;
            })
            .addCase(getServiceProvider.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            });
    },
});

export const { reset } = serviceProviderSlice.actions;
export default serviceProviderSlice.reducer;
