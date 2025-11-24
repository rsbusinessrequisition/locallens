import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Bell, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const OnboardingSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-bg relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary-500/20 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50">
                        <CheckCircle className="w-16 h-16 text-white" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-5xl font-heading font-bold text-white mb-4">
                        Welcome to LocalLens! 🎉
                    </h1>
                    <p className="text-xl text-gray-300 mb-12">
                        Your personalized location intelligence platform is ready
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    <div className="glass-panel p-6 rounded-2xl">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-white font-bold mb-2">Location Tracking</h3>
                        <p className="text-sm text-gray-400">We'll send you insights about your saved locations</p>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Bell className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-white font-bold mb-2">Smart Notifications</h3>
                        <p className="text-sm text-gray-400">Get alerts about market changes and opportunities</p>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl">
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-6 h-6 text-green-400" />
                        </div>
                        <h3 className="text-white font-bold mb-2">AI Insights</h3>
                        <p className="text-sm text-gray-400">Personalized recommendations based on your profile</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-gray-400"
                >
                    <p>Redirecting to dashboard in 3 seconds...</p>
                    <div className="flex justify-center space-x-2 mt-4">
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => navigate('/')}
                    className="mt-8 px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-xl hover:from-primary-500 hover:to-secondary-500 transition-all transform hover:scale-105"
                >
                    Go to Dashboard Now
                </motion.button>
            </div>
        </div>
    );
};

export default OnboardingSuccess;
