import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosErrorFormatter } from '../../utils/axiosErrorFormatter';
import { requirementsService } from '../actions/requirementService';

const initialState = {
    requirements: [],
    isLoading: false,
    isError: false,
    message: '',
};

export const getEventRequirements = createAsyncThunk(
    'requirement/getEventRequirements',
    async (event_id, thunkAPI) => {
        try {
            return await requirementsService.getEventRequirements(event_id);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const requirementSlice = createSlice({
    name: 'requirement',
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
            .addCase(getEventRequirements.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEventRequirements.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.message = '';
                state.requirements = action.payload.data;
            })
            .addCase(getEventRequirements.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            });
    },
});

export const { reset } = requirementSlice.actions;
export default requirementSlice.reducer;
