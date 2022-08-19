import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const RequireAuth = ({ allowedRoles }) => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [userRole, setUserRole] = useState('guest');

    // check if user is logged in
    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            setUserRole(user.service_title ? 'service_provider' : 'customer');
        }
    }, [navigate, user]);

    // check for user role and redirect if not allowed
    useEffect(() => {
        if (userRole !== 'guest' && !allowedRoles.includes(userRole)) {
            navigate('/login');
        }
    }, [allowedRoles, navigate, user, userRole]);

    if (user) {
        if (allowedRoles.includes(userRole)) {
            return <Outlet />;
        }
    }
};

export default RequireAuth;
