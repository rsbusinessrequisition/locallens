import React from 'react';
import { useParams } from 'react-router-dom';
import { Shield, GraduationCap, HeartPulse, Bus, ShoppingBag, Zap, MapPin, Wind, AlertTriangle, Car, Dog, Wrench, Home } from 'lucide-react';
import { LOCATIONS } from '../data/mockData';
import ScoreGauge from '../components/ScoreGauge';
import MetricCard from '../components/MetricCard';
import MapComponent from '../components/MapComponent';

const LocationDetails = () => {
    const { id } = useParams();
    const location = LOCATIONS.find(l => l.id === parseInt(id));

    if (!location) return <div className="p-8 text-white">Location not found</div>;

    const coreMetrics = [
        { title: "Safety & Security", score: location.scores.safety, icon: Shield, color: "text-blue-400" },
        { title: "Education", score: location.scores.education, icon: GraduationCap, color: "text-yellow-400" },
        { title: "Healthcare", score: location.scores.healthcare, icon: HeartPulse, color: "text-red-400" },
        { title: "Connectivity", score: location.scores.transport, icon: Bus, color: "text-green-400" },
        { title: "Lifestyle", score: location.scores.lifestyle, icon: ShoppingBag, color: "text-purple-400" },
        { title: "Utilities", score: location.scores.utilities, icon: Zap, color: "text-orange-400" },
    ];

    const advancedMetrics = [
        { title: "Air Quality (AQI)", score: location.scores.pollution, icon: Wind, color: "text-gray-400" },
        { title: "Crime Rate (Inv)", score: location.scores.crimeRate, icon: AlertTriangle, color: "text-red-500" },
        { title: "Parking Space", score: location.scores.parking, icon: Car, color: "text-blue-300" },
        { title: "Street Animals (Inv)", score: location.scores.streetAnimals, icon: Dog, color: "text-orange-300" },
    ];

    return (
        <div className="pb-12">
            {/* Header Image */}
            <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent z-10" />
                <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center text-primary-400 mb-2">
                                <MapPin className="w-5 h-5 mr-1" />
                                <span className="text-lg">{location.city}</span>
                            </div>
                            <h1 className="text-5xl font-heading font-bold text-white mb-2">{location.name}</h1>
                            <p className="text-xl text-gray-300 max-w-2xl">{location.description}</p>
                        </div>
                        <div className="flex items-center space-x-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                            <div className="text-right">
                                <div className="text-sm text-gray-400">Avg. Price</div>
                                <div className="text-2xl font-bold text-white">{location.price}</div>
                            </div>
                            <div className="h-10 w-px bg-white/20" />
                            <ScoreGauge score={location.communityScore} size="sm" showLabel={false} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
                {/* Core Scores Grid */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Community Score Breakdown</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreMetrics.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </div>
                </section>

                {/* Advanced Metrics Grid */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Advanced Hyperlocal Data</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advancedMetrics.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </div>
                </section>

                {/* Services Availability */}
                {location.services && (
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Services Availability</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4">
                                <div className="p-3 bg-primary-500/20 rounded-xl text-primary-400">
                                    <Home className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">House Help</h3>
                                    <p className="text-gray-400">{location.services.houseHelp}</p>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4">
                                <div className="p-3 bg-secondary-500/20 rounded-xl text-secondary-400">
                                    <Wrench className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Technicians</h3>
                                    <p className="text-gray-400">{location.services.technicians}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Map Section */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white">Interactive Map</h2>
                        <span className="text-sm text-gray-400">Toggle layers (top-right) to see amenities</span>
                    </div>
                    <MapComponent locations={[location]} center={location.coordinates} zoom={15} />
                </section>

                {/* Detailed Analysis */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="glass-panel p-6 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-4">Why this location?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-gray-300">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                                <span>High safety rating makes it ideal for families.</span>
                            </li>
                            <li className="flex items-start space-x-3 text-gray-300">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                                <span>Excellent connectivity to major business hubs.</span>
                            </li>
                            <li className="flex items-start space-x-3 text-gray-300">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                                <span>Premium lifestyle amenities and shopping centers nearby.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-4">Investment Potential</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">5-Year Appreciation</span>
                                <span className="text-green-400 font-bold">+45%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }} />
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Rental Yield</span>
                                <span className="text-blue-400 font-bold">3.5%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LocationDetails;
