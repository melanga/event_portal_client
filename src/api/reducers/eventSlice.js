import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { eventService } from '../actions/eventService';
import { axiosErrorFormatter } from '../../utils/axiosErrorFormatter';

const initialState = {
    event: {},
    service_providers: [],
    isLoading: false,
    isError: false,
    message: '',
};

export const createEvent = createAsyncThunk(
    'event/create',
    async (eventData, thunkAPI) => {
        try {
            return await eventService.createEvent(eventData);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const getEvent = createAsyncThunk(
    'event/get',
    async (eventId, thunkAPI) => {
        try {
            return await eventService.getEvent(eventId);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const eventSlice = createSlice({
    name: 'event',
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
            .addCase(createEvent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.event = action.payload.data;
                state.isLoading = false;
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload.message;
                state.isLoading = false;
            })
            .addCase(getEvent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEvent.fulfilled, (state, action) => {
                state.event = action.payload.data;
                state.service_providers = action.payload.data.service_providers;
                state.isLoading = false;
            })
            .addCase(getEvent.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload.message;
                state.isLoading = false;
            });
    },
});

export const { reset } = eventSlice.actions;
export default eventSlice.reducer;
