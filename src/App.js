import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Layout } from './components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth';
import CustomerDashboard from './pages/dashboard/customerDashboard';
import PublicRoutes from './routes/PublicRoutes';

function App() {
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
