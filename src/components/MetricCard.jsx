import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ title, score, icon: Icon, color = "text-primary-400" }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-4 rounded-xl flex items-center justify-between"
        >
            <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-white/5 ${color}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-300">{title}</h3>
                    <div className="h-1.5 w-24 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full rounded-full ${score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        />
                    </div>
                </div>
            </div>
            <span className="text-lg font-bold text-white">{score}</span>
        </motion.div>
    );
};

export default MetricCard;
