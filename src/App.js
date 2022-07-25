import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterCustomer from './pages/Register/RegisterCustomer';
import RegisterServiceProvider from './pages/Register/RegisterServiceProvider';

function App() {
    return (
        <>
            <Router>
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
