import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { eventService } from '../actions/eventService';
import { axiosErrorFormatter } from '../../utils/axiosErrorFormatter';

const initialState = {
    events: [],
    isLoading: false,
    isError: false,
    message: '',
};

export const getUserEvents = createAsyncThunk(
    'dashboard/getUserEvents',
    async (userId, thunkAPI) => {
        try {
            return await eventService.getUserEvents(userId);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
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
