// import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import eventReducer from '../events/eventSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        events: eventReducer,
    },
});
