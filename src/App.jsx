import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import LocationDetails from './pages/LocationDetails';
import Compare from './pages/Compare';
import Profile from './pages/Profile';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import OnboardingSuccess from './pages/auth/OnboardingSuccess';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Auth Routes (No Layout) */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/onboarding-success" element={<OnboardingSuccess />} />

                    {/* Main App Routes (With Layout) */}
                    <Route path="/*" element={
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/location/:id" element={<LocationDetails />} />
                                <Route path="/compare" element={<Compare />} />
                                <Route path="/profile" element={<Profile />} />
                            </Routes>
                            <Chatbot />
                        </Layout>
                    } />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
