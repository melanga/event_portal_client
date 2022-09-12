import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosErrorFormatter } from '../../utils/axiosErrorFormatter';
import { serviceProviderService } from '../actions/serviceProviderService';

const initialState = {
    allEvents: [],
    events: [],
    bidPage: false,
    bids: [],
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: '',
};

export const getServiceProviderEvents = createAsyncThunk(
    'serviceProvider/getServiceProviderEvents',
    async (userId, thunkAPI) => {
        try {
            return await serviceProviderService.getServiceProviderEvents(
                userId
            );
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const getServiceProviderBids = createAsyncThunk(
    'serviceProvider/getServiceProviderBids',
    async (data, thunkAPI) => {
        try {
            return await serviceProviderService.getServiceProviderBids(data);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const createServiceProviderBid = createAsyncThunk(
    'serviceProvider/createServiceProviderBid',
    async (data, thunkAPI) => {
        try {
            return await serviceProviderService.createServiceProviderBid(data);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const getServiceProviderBid = createAsyncThunk(
    'serviceProvider/getServiceProviderBidPrice',
    async (data, thunkAPI) => {
        try {
            return await serviceProviderService.getServiceProviderBidPrice(
                data
            );
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const serviceProviderDashboardSlice = createSlice({
    name: 'serviceProviderDashboard',
    initialState,
    reducers: {
        reset: (state) => {
            state.isSuccess = false;
            state.isError = false;
            state.isLoading = false;
            state.bidPrice = null;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getServiceProviderEvents.pending, (state) => {
                state.isLoading = true;
                state.bidPage = false;
            })
            .addCase(getServiceProviderEvents.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.bidPage = false;
                state.allEvents = action.payload.data;
                state.events = action.payload.data;
            })
            .addCase(getServiceProviderEvents.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.bidPage = false;
                state.message = action.payload.message;
            })
            .addCase(getServiceProviderBids.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getServiceProviderBids.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.bidPage = true;
                state.events = action.payload.data;
            })
            .addCase(getServiceProviderBids.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.bidPage = false;
                state.message = action.payload.message;
            })
            .addCase(createServiceProviderBid.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createServiceProviderBid.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.bidPage = true;
                state.message = 'bid created successfully';
            })
            .addCase(createServiceProviderBid.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.bidPage = true;
                state.message = action.payload.message;
            });
    },
});

export const { reset } = serviceProviderDashboardSlice.actions;
export default serviceProviderDashboardSlice.reducer;
