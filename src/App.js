import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Layout } from './components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth';
import PublicRoutes from './routes/PublicRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './api/reducers/authSlice';
import { Dashboard } from './pages/Dashboard';
import UpdateServiceProviderPage from './pages/serviceProvider/UpdateServiceProviderPage';

function App() {
    const { user, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token && !user) {
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
                                    <RequireAuth
                                        allowedRoles={[
                                            'customer',
                                            'service_provider',
                                        ]}
                                    />
                                }
                            >
                                <Route
                                    path="dashboard"
                                    element={<Dashboard />}
                                />
                            </Route>
                            <Route
                                element={
                                    <RequireAuth
                                        allowedRoles={['service_provider']}
                                    />
                                }
                            >
                                <Route
                                    path="service_provider/:id/update"
                                    element={<UpdateServiceProviderPage />}
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
