// import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import dashboardReducer from '../reducers/dashboardSlice';
import eventReducer from '../reducers/eventSlice';
import serviceProviderReducer from '../reducers/serviceProviderSlice';
import requirementReducer from '../reducers/requirementSlice';
import serviceProviderDashboardReducer from '../reducers/serviceProvicerDashboardSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer,
        event: eventReducer,
        service_provider: serviceProviderReducer,
        requirement: requirementReducer,
        service_provider_dashboard: serviceProviderDashboardReducer,
    },
});
