import React from 'react';
import { User, Briefcase, Heart, Home } from 'lucide-react';

const B2CSteps = ({ step, formData, updateFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    };

    const renderStep1 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-primary-400" />
                Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="fullName" placeholder="Full Name" value={formData.fullName || ''} onChange={handleChange} className="input-field" />
                <input name="age" type="number" placeholder="Age" value={formData.age || ''} onChange={handleChange} className="input-field" />
                <select name="gender" value={formData.gender || ''} onChange={handleChange} className="input-field">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input name="mobile" placeholder="Mobile Number" value={formData.mobile || ''} onChange={handleChange} className="input-field" />
                <input name="city" placeholder="Current City" value={formData.city || ''} onChange={handleChange} className="input-field" />
                <input name="language" placeholder="Preferred Language" value={formData.language || ''} onChange={handleChange} className="input-field" />
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-primary-400" />
                Professional Background
            </h3>
            <div className="space-y-4">
                <input name="occupation" placeholder="Occupation" value={formData.occupation || ''} onChange={handleChange} className="input-field w-full" />
                <select name="employmentType" value={formData.employmentType || ''} onChange={handleChange} className="input-field w-full">
                    <option value="">Employment Type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="student">Student</option>
                    <option value="self-employed">Self-employed</option>
                </select>
                <input name="industry" placeholder="Industry" value={formData.industry || ''} onChange={handleChange} className="input-field w-full" />
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Work From Home %</label>
                    <input
                        type="range"
                        name="wfhPercentage"
                        min="0"
                        max="100"
                        value={formData.wfhPercentage || 0}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <div className="text-right text-primary-400">{formData.wfhPercentage || 0}%</div>
                </div>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-primary-400" />
                Family & Lifestyle
            </h3>
            <div className="space-y-4">
                <select name="maritalStatus" value={formData.maritalStatus || ''} onChange={handleChange} className="input-field w-full">
                    <option value="">Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                    <input name="familyMembers" type="number" placeholder="Family Members" value={formData.familyMembers || ''} onChange={handleChange} className="input-field" />
                    <select name="hasPets" value={formData.hasPets || ''} onChange={handleChange} className="input-field">
                        <option value="">Has Pets?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Lifestyle Preferences</label>
                    <div className="grid grid-cols-2 gap-2">
                        {['Peaceful', 'Nightlife', 'Schools', 'Transport', 'Safety', 'Trendy'].map(pref => (
                            <label key={pref} className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10">
                                <input type="checkbox" className="rounded border-gray-600 text-primary-500 focus:ring-primary-500" />
                                <span className="text-sm text-gray-300">{pref}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderStep4 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Home className="w-5 h-5 mr-2 text-primary-400" />
                Housing Preferences
            </h3>
            <div className="space-y-4">
                <div className="flex space-x-4">
                    <button
                        type="button"
                        className={`flex-1 py-2 rounded-lg border ${formData.intent === 'rent' ? 'bg-primary-500 border-primary-500 text-white' : 'border-white/10 text-gray-400'}`}
                        onClick={() => updateFormData({ intent: 'rent' })}
                    >
                        Rent
                    </button>
                    <button
                        type="button"
                        className={`flex-1 py-2 rounded-lg border ${formData.intent === 'buy' ? 'bg-primary-500 border-primary-500 text-white' : 'border-white/10 text-gray-400'}`}
                        onClick={() => updateFormData({ intent: 'buy' })}
                    >
                        Buy
                    </button>
                </div>
                <input name="budget" placeholder="Budget Range" value={formData.budget || ''} onChange={handleChange} className="input-field w-full" />
                <select name="propertyType" value={formData.propertyType || ''} onChange={handleChange} className="input-field w-full">
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="studio">Studio</option>
                </select>
            </div>
        </div>
    );

    switch (step) {
        case 1: return renderStep1();
        case 2: return renderStep2();
        case 3: return renderStep3();
        case 4: return renderStep4();
        default: return null;
    }
};

export default B2CSteps;
