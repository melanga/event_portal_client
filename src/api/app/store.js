// import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import dashboardReducer from '../reducers/dashboardSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer,
    },
});
