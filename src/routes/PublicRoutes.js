import { Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import { Layout } from '../components/Layout';
import RegisterPage from '../pages/auth/Register/RegisterPage';

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
];

export default PublicRoutes;
