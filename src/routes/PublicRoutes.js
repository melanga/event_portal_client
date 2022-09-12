import { Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import { Layout } from '../components/Layout';
import RegisterPage from '../pages/auth/Register/RegisterPage';
import SearchPage from '../pages/search';
import ServiceProviderPage from '../pages/serviceProvider/ServiceProviderPage';

const PublicRoutes = [
    <Route key={'/'} path="/" element={<LandingPage />} />,
    <Route key={'login'} path="login" element={<Login />} />,
    <Route key={'register'} path="register" element={<Register />} />,
    <Route key={'register page'} path="register" element={<Layout />}>
        <Route path="customer" element={<RegisterPage isCustomer={true} />} />
        <Route
            path="service_provider"
            element={<RegisterPage isCustomer={false} />}
        />
    </Route>,
    <Route key={'search page'} path={'search'} element={<SearchPage />} />,
    <Route
        key={'service Provider'}
        path={'service_provider/:id'}
        element={<ServiceProviderPage />}
    />,
];

export default PublicRoutes;
