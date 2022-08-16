import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NavBar from './components/NavBar';
import { Layout } from './components/Layout';
import RegisterPage from './pages/auth/Register/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth';
import CustomerDashboard from './pages/dashboard/customerDashboard';

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<LandingPage />} />
                            <Route exact path="login" element={<Login />} />
                            <Route
                                exact
                                path="register"
                                element={<Register />}
                            />
                            <Route path="register" element={<Layout />}>
                                <Route
                                    exact
                                    path="customer"
                                    element={<RegisterPage isCustomer={true} />}
                                />
                                <Route
                                    exact
                                    path="service_provider"
                                    element={
                                        <RegisterPage isCustomer={false} />
                                    }
                                />
                            </Route>
                            <Route element={<RequireAuth />}>
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
