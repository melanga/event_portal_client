import { useSelector } from 'react-redux';
import UserDashboard from './userDashboard/UserDashboard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
        return <UserDashboard />;
    } else {
        // redirect to log in
        return <Redirect to="/login" />;
    }
};
