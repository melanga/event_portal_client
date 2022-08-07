import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from './authService';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: '',
};

// register user
export const register = createAsyncThunk(
    'register',
    async (userData, thunkAPI) => {
        console.log(userData);
        try {
            return await authService.register(userData);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

// login user
export const login = createAsyncThunk('login', async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
});

// logout user
export const logout = createAsyncThunk('logout', async () => {
    await authService.logout();
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload.data;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
                state.user = null;
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
