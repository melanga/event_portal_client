import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterCustomer from './pages/Register/RegisterCustomer';
import RegisterServiceProvider from './pages/Register/RegisterServiceProvider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DrawerAppBar from './components/AppBarDrawer';

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
                <DrawerAppBar />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<LandingPage isAuthenticated />}
                        />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route
                            exact
                            path="/register/customer"
                            element={<RegisterCustomer />}
                        />
                        <Route
                            exact
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
