import React, { useState } from 'react';
import { Search, TrendingUp, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LOCATIONS } from '../data/mockData';
import ScoreGauge from '../components/ScoreGauge';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLocations = LOCATIONS.filter(loc =>
        loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-12 pb-12">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/50 to-dark-bg z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2000"
                        alt="City Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight"
                    >
                        Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Locality</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        AI-powered hyperlocal intelligence for homebuyers, investors, and businesses.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="Search by city, locality, or landmark..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4 mt-6"
                    >
                        <Link
                            to="/signup"
                            className="group bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary-500/30 flex items-center space-x-2"
                        >
                            <span>Get Started Free</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Trending Locations */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                        <TrendingUp className="w-6 h-6 text-primary-400" />
                        <h2 className="text-3xl font-bold text-white">Trending Localities</h2>
                    </div>
                    <button className="text-primary-400 hover:text-primary-300 flex items-center space-x-1 text-sm font-medium">
                        <span>View All</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredLocations.map((loc) => (
                        <Link key={loc.id} to={`/location/${loc.id}`}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="glass-card rounded-2xl overflow-hidden group"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={loc.image}
                                        alt={loc.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                                        {loc.price}
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{loc.name}</h3>
                                            <div className="flex items-center text-gray-400 text-sm mt-1">
                                                <MapPin className="w-3 h-3 mr-1" />
                                                {loc.city}
                                            </div>
                                        </div>
                                        <ScoreGauge score={loc.communityScore} size="sm" showLabel={false} />
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {loc.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-panel p-8 rounded-2xl space-y-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Hyperlocal Data</h3>
                        <p className="text-gray-400">Access 100+ data points including safety, schools, and infrastructure for every neighborhood.</p>
                    </div>
                    <div className="glass-panel p-8 rounded-2xl space-y-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Investment Insights</h3>
                        <p className="text-gray-400">Predictive analytics for ROI, rental yields, and future development trends.</p>
                    </div>
                    <div className="glass-panel p-8 rounded-2xl space-y-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400">
                            <Search className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Smart Discovery</h3>
                        <p className="text-gray-400">Find the perfect location that matches your lifestyle and budget requirements.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
