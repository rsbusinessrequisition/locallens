import React from 'react';
import { motion } from 'framer-motion';

const ScoreGauge = ({ score, size = 'lg', showLabel = true }) => {
    const circumference = 2 * Math.PI * 40; // radius 40
    const offset = circumference - (score / 100) * circumference;

    const getColor = (s) => {
        if (s >= 80) return '#22c55e'; // green-500
        if (s >= 60) return '#eab308'; // yellow-500
        return '#ef4444'; // red-500
    };

    const dimensions = size === 'lg' ? 'w-32 h-32' : 'w-16 h-16';
    const strokeWidth = size === 'lg' ? 8 : 6;
    const fontSize = size === 'lg' ? 'text-3xl' : 'text-lg';

    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`relative ${dimensions} flex items-center justify-center`}>
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="50%"
                        cy="50%"
                        r="40"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        className="text-white/10"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        cx="50%"
                        cy="50%"
                        r="40"
                        stroke={getColor(score)}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeLinecap="round"
                    />
                </svg>
                <div className={`absolute inset-0 flex items-center justify-center font-bold text-white ${fontSize}`}>
                    {score}
                </div>
            </div>
            {showLabel && (
                <span className="mt-2 text-sm font-medium text-gray-400">Community Score™</span>
            )}
        </div>
    );
};

export default ScoreGauge;
