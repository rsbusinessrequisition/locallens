import React, { useState } from 'react';
import { LOCATIONS } from '../data/mockData';
import ScoreGauge from '../components/ScoreGauge';
import { ArrowRightLeft, Check, X } from 'lucide-react';

const Compare = () => {
    const [loc1, setLoc1] = useState(LOCATIONS[0]);
    const [loc2, setLoc2] = useState(LOCATIONS[1]);

    const metrics = [
        { key: 'safety', label: 'Safety' },
        { key: 'education', label: 'Education' },
        { key: 'healthcare', label: 'Healthcare' },
        { key: 'transport', label: 'Connectivity' },
        { key: 'lifestyle', label: 'Lifestyle' },
        { key: 'utilities', label: 'Utilities' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-heading font-bold text-white mb-4">Compare Locations</h1>
                <p className="text-gray-400">Analyze two neighborhoods side-by-side to make the best decision.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Selection Controls */}
                {[setLoc1, setLoc2].map((setLoc, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-2xl">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Location {idx + 1}</label>
                        <select
                            className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500"
                            onChange={(e) => setLoc(LOCATIONS.find(l => l.id === parseInt(e.target.value)))}
                            value={idx === 0 ? loc1.id : loc2.id}
                        >
                            {LOCATIONS.map(l => (
                                <option key={l.id} value={l.id}>{l.name}, {l.city}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            {/* Comparison Grid */}
            <div className="glass-panel rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white">{loc1.name}</h3>
                        <p className="text-sm text-gray-400">{loc1.city}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="p-3 bg-white/10 rounded-full">
                            <ArrowRightLeft className="w-6 h-6 text-primary-400" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white">{loc2.name}</h3>
                        <p className="text-sm text-gray-400">{loc2.city}</p>
                    </div>
                </div>

                {/* Overall Score */}
                <div className="grid grid-cols-3 p-8 border-b border-white/10 items-center">
                    <div className="flex justify-center">
                        <ScoreGauge score={loc1.communityScore} />
                    </div>
                    <div className="text-center text-gray-400 font-medium">Overall Score</div>
                    <div className="flex justify-center">
                        <ScoreGauge score={loc2.communityScore} />
                    </div>
                </div>

                {/* Price */}
                <div className="grid grid-cols-3 p-6 border-b border-white/10 items-center hover:bg-white/5 transition-colors">
                    <div className="text-center font-bold text-white">{loc1.price}</div>
                    <div className="text-center text-gray-400">Avg. Price</div>
                    <div className="text-center font-bold text-white">{loc2.price}</div>
                </div>

                {/* Metrics */}
                {metrics.map((metric) => (
                    <div key={metric.key} className="grid grid-cols-3 p-6 border-b border-white/10 items-center hover:bg-white/5 transition-colors">
                        <div className="text-center">
                            <div className="font-bold text-white text-lg">{loc1.scores[metric.key]}</div>
                            <div className="h-1.5 w-24 bg-white/10 rounded-full mx-auto mt-2 overflow-hidden">
                                <div className="h-full bg-primary-500" style={{ width: `${loc1.scores[metric.key]}%` }} />
                            </div>
                        </div>
                        <div className="text-center text-gray-400 capitalize">{metric.label}</div>
                        <div className="text-center">
                            <div className="font-bold text-white text-lg">{loc2.scores[metric.key]}</div>
                            <div className="h-1.5 w-24 bg-white/10 rounded-full mx-auto mt-2 overflow-hidden">
                                <div className="h-full bg-primary-500" style={{ width: `${loc2.scores[metric.key]}%` }} />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Tags */}
                <div className="grid grid-cols-3 p-6 items-start">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {loc1.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">{tag}</span>
                        ))}
                    </div>
                    <div className="text-center text-gray-400">Highlights</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {loc2.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;
