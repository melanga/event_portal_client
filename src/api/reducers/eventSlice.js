import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { eventService } from '../actions/eventService';
import { axiosErrorFormatter } from '../../utils/axiosErrorFormatter';

const initialState = {
    event: {},
    events: [],
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

export const getEvents = createAsyncThunk(
    'event/getAll',
    async (userId, thunkAPI) => {
        try {
            return await eventService.getUserEvents(userId);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const deleteEvent = createAsyncThunk(
    'event/delete',
    async (eventId, thunkAPI) => {
        try {
            return await eventService.deleteEvent(eventId);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const getEventServiceProviders = createAsyncThunk(
    'event/getServiceProviders',
    async (eventId, thunkAPI) => {
        try {
            return await eventService.getEventServiceProviders(eventId);
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
                console.log(action.payload);
                state.isError = true;
                state.message = action.payload.message;
                state.isLoading = false;
            })
            .addCase(deleteEvent.fulfilled, (state) => {
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
            })
            .addCase(getEvents.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                if (action.payload.data.length > 0) {
                    state.event = action.payload.data[0];
                }
                state.events = action.payload.data;
                state.isLoading = false;
            })
            .addCase(getEvents.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload.message;
                state.isLoading = false;
            })
            .addCase(getEventServiceProviders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEventServiceProviders.fulfilled, (state, action) => {
                state.service_providers = action.payload.data;
                state.isLoading = false;
            })
            .addCase(getEventServiceProviders.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload.message;
                state.isLoading = false;
            });
    },
});

export const { reset } = eventSlice.actions;
export default eventSlice.reducer;
