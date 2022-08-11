import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { eventService } from './eventService';

const initialState = {
    events: [],
    isLoading: false,
    isError: false,
    message: '',
};

export const createEvent = createAsyncThunk(
    'dashboard/create',
    async (eventData, thunkAPI) => {
        try {
            return await eventService.createEvent(eventData);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const getUserEvents = createAsyncThunk(
    'dashboard/getUserEvents',
    async (userId, thunkAPI) => {
        try {
            return await eventService.getUserEvents(userId);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const dashboardSlice = createSlice({
    name: 'dashboard',
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
                state.events.push(action.payload.data);
                state.isLoading = false;
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload.message;
                state.isLoading = false;
            })
            .addCase(getUserEvents.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserEvents.fulfilled, (state, action) => {
                state.events = action.payload.data;
                state.isLoading = false;
            })
            .addCase(getUserEvents.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload.message;
                state.isLoading = false;
            });
    },
});

export const { reset } = dashboardSlice.actions;
export default dashboardSlice.reducer;
