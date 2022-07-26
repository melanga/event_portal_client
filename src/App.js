import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterCustomer from './pages/Register/RegisterCustomer';
import RegisterServiceProvider from './pages/Register/RegisterServiceProvider';
import Navbar from './components/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const checkAuthenticated = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const payload = await axios.get(
                    'http://localhost:3000/api/v1/users/me',
                    config
                );
                console.log(payload.data);
                if (payload) {
                    setIsAuthenticated(true);
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        checkAuthenticated().then((r) => {});
    }, []);
    return (
        <>
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/register/customer"
                            element={<RegisterCustomer />}
                        />
                        <Route
                            path="/register/service_provider"
                            element={<RegisterServiceProvider />}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
