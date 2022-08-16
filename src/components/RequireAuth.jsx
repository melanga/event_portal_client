import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const RequireAuth = ({ allowedRoles }) => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    });
    return <Outlet />;
};

export default RequireAuth;
