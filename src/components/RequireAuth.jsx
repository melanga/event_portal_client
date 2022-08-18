import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// TODO: test this component
const RequireAuth = ({ allowedRoles }) => {
    console.log(allowedRoles);
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [navigate, user]);
    if (user) {
        allowedRoles.forEach((role) => {
            if (
                (user.service_title && role === 'service_provider') ||
                (!user.service_title && role === 'customer')
            ) {
                return <Outlet />;
            }
        });
    }
};

export default RequireAuth;
