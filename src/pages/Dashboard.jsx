import { useSelector } from 'react-redux';
import UserDashboard from './userDashboard/UserDashboard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ServiceProviderDashboard from './serviceProviderDashboard/ServiceProviderDashboard';

function Redirect(props: { to: string }) {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(props.to);
    }, [props.to, navigate]);
    return null;
}

export const Dashboard = () => {
    const { role } = useSelector((state) => state.auth);

    if (role === 'customer') {
        return <UserDashboard />;
    } else if (role === 'service_provider') {
        return <ServiceProviderDashboard />;
    } else {
        // redirect to log in
        return <Redirect to="/login" />;
    }
};
