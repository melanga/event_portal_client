// import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import dashboardReducer from '../dashboard/dashboardSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer,
    },
});
