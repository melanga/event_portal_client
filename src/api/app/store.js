// import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import dashboardReducer from '../reducers/dashboardSlice';
import eventReducer from '../reducers/eventSlice';
import serviceProviderReducer from '../reducers/serviceProviderSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer,
        event: eventReducer,
        service_provider: serviceProviderReducer,
    },
});
