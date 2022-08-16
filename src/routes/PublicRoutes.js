import { Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import { Layout } from '../components/Layout';
import RegisterPage from '../pages/auth/Register/RegisterPage';

const PublicRoutes = [
    <Route path="/" element={<LandingPage />} />,
    <Route path="login" element={<Login />} />,
    <Route path="register" element={<Register />} />,
    <Route path="register" element={<Layout />}>
        <Route path="customer" element={<RegisterPage isCustomer={true} />} />
        <Route
            path="service_provider"
            element={<RegisterPage isCustomer={false} />}
        />
    </Route>,
];

export default PublicRoutes;
