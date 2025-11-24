import React from 'react';
import { User, Settings, Bell, Shield, Home, TrendingUp, Store, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Please log in to view your profile</h2>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-white">{user.name || 'User'}</h1>
                    <p className="text-gray-400">{user.email || 'Premium Member'}</p>
                    <span className="inline-block mt-1 px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium">
                        {user.type === 'individual' ? 'Individual' : 'Business'} Account
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sidebar */}
                <div className="space-y-4">
                    <div className="glass-panel p-4 rounded-xl space-y-2">
                        <button className="w-full flex items-center space-x-3 px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg">
                            <User className="w-5 h-5" />
                            <span>Profile Settings</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <Bell className="w-5 h-5" />
                            <span>Notifications</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <Shield className="w-5 h-5" />
                            <span>Privacy & Security</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <Settings className="w-5 h-5" />
                            <span>Preferences</span>
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    {/* User Data Display */}
                    {user.type === 'individual' && user.fullName && (
                        <section className="glass-panel p-6 rounded-2xl">
                            <h2 className="text-xl font-bold text-white mb-4">Your Information</h2>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-400">Full Name:</span>
                                    <p className="text-white font-medium">{user.fullName}</p>
                                </div>
                                {user.age && (
                                    <div>
                                        <span className="text-gray-400">Age:</span>
                                        <p className="text-white font-medium">{user.age}</p>
                                    </div>
                                )}
                                {user.city && (
                                    <div>
                                        <span className="text-gray-400">City:</span>
                                        <p className="text-white font-medium">{user.city}</p>
                                    </div>
                                )}
                                {user.occupation && (
                                    <div>
                                        <span className="text-gray-400">Occupation:</span>
                                        <p className="text-white font-medium">{user.occupation}</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {user.type === 'business' && user.businessName && (
                        <section className="glass-panel p-6 rounded-2xl">
                            <h2 className="text-xl font-bold text-white mb-4">Business Information</h2>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-400">Business Name:</span>
                                    <p className="text-white font-medium">{user.businessName}</p>
                                </div>
                                {user.businessType && (
                                    <div>
                                        <span className="text-gray-400">Type:</span>
                                        <p className="text-white font-medium capitalize">{user.businessType.replace('_', ' ')}</p>
                                    </div>
                                )}
                                {user.industry && (
                                    <div>
                                        <span className="text-gray-400">Industry:</span>
                                        <p className="text-white font-medium">{user.industry}</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {/* Subscription */}
                    <section className="glass-panel p-6 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-primary-500/20 blur-3xl rounded-full -mr-16 -mt-16" />
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold text-white mb-2">Current Plan: Individual</h2>
                            <p className="text-gray-400 mb-6">You have 8 free analyses remaining this month.</p>
                            <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all">
                                Upgrade to Pro
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Profile;
