import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Layout } from './components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth';
import CustomerDashboard from './pages/dashboard/customerDashboard';
import PublicRoutes from './routes/PublicRoutes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './api/reducers/authSlice';

function App() {
    const { user, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user && token) {
            dispatch(getUser());
        }
    }, [user, token, dispatch]);

    return (
        <>
            <Router>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            {PublicRoutes}
                            <Route
                                element={
                                    <RequireAuth allowedRoles={['customer']} />
                                }
                            >
                                <Route
                                    path="dashboard"
                                    element={<CustomerDashboard />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </Router>
            <ToastContainer position={'bottom-left'} autoClose={3000} />
        </>
    );
}

export default App;
