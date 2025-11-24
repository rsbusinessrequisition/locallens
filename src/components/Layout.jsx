import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, BarChart2, User, Search, Menu, X, LogOut } from 'lucide-react';
import { cn } from '../utils/cn';
import { useAuth } from '../context/AuthContext';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();
    const { user, logout } = useAuth();

    const navItems = [
        { name: 'Discover', path: '/', icon: Search },
        { name: 'Compare', path: '/compare', icon: BarChart2 },
    ];

    if (user) {
        navItems.push({ name: 'Profile', path: '/profile', icon: User });
    }

    return (
        <div className="min-h-screen flex flex-col bg-dark-bg text-dark-text overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-heading font-bold text-white tracking-tight">
                                Local<span className="text-primary-400">Lens</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={cn(
                                            "flex items-center space-x-2 text-sm font-medium transition-colors duration-200",
                                            isActive ? "text-primary-400" : "text-gray-400 hover:text-white"
                                        )}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}
                            {user ? (
                                <button onClick={logout} className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-white">
                                    <LogOut className="w-4 h-4" />
                                    <span>Logout</span>
                                </button>
                            ) : (
                                <Link to="/signup" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                    Get Started
                                </Link>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-400 hover:text-white p-2"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden glass-panel border-t border-white/10">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {!user && (
                                <Link
                                    to="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-dark-card border-t border-white/10 mt-auto">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <MapPin className="w-5 h-5 text-primary-500" />
                            <span className="text-lg font-bold text-white">LocalLens</span>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © 2024 LocalLens Intelligence. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
