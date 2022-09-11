import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosErrorFormatter } from '../../utils/axiosErrorFormatter';
import { requirementsService } from '../actions/requirementService';

const initialState = {
    requirements: [],
    bids: [],
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

export const createEventRequirement = createAsyncThunk(
    'requirement/createEventRequirement',
    async (data, thunkAPI) => {
        try {
            return await requirementsService.createEventRequirement(data);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const deleteEventRequirement = createAsyncThunk(
    'requirement/deleteEventRequirement',
    async (data, thunkAPI) => {
        try {
            return await requirementsService.deleteEventRequirement(data);
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const getRequirementBids = createAsyncThunk(
    'requirement/getRequirementBids',
    async (requirement_id, thunkAPI) => {
        try {
            return await requirementsService.getEventRequirementBids(
                requirement_id
            );
        } catch (e) {
            return axiosErrorFormatter(e, thunkAPI);
        }
    }
);

export const deleteEventRequirementBid = createAsyncThunk(
    'requirement/deleteEventRequirementBid',
    async (data, thunkAPI) => {
        try {
            return await requirementsService.deleteEventRequirementBid(data);
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
            })
            .addCase(createEventRequirement.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createEventRequirement.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                state.message = '';
            })
            .addCase(createEventRequirement.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(deleteEventRequirement.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteEventRequirement.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                state.message = '';
            })
            .addCase(deleteEventRequirement.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(getRequirementBids.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getRequirementBids.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.message = '';
                state.bids = action.payload.data;
            })
            .addCase(getRequirementBids.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            });
    },
});

export const { reset } = requirementSlice.actions;
export default requirementSlice.reducer;
