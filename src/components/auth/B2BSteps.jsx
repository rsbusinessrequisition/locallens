import React from 'react';
import { Building2, TrendingUp, Target, Settings } from 'lucide-react';

const B2BSteps = ({ step, formData, updateFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    };

    const renderStep1 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-secondary-400" />
                Business Identity
            </h3>
            <div className="space-y-4">
                <input name="businessName" placeholder="Business Name" value={formData.businessName || ''} onChange={handleChange} className="input-field w-full" />
                <input name="industry" placeholder="Industry" value={formData.industry || ''} onChange={handleChange} className="input-field w-full" />
                <select name="businessType" value={formData.businessType || ''} onChange={handleChange} className="input-field w-full">
                    <option value="">Business Type</option>
                    <option value="startup">Startup</option>
                    <option value="small_business">Small Business</option>
                    <option value="franchise">Franchise</option>
                    <option value="enterprise">Enterprise</option>
                </select>
                <input name="website" placeholder="Website URL" value={formData.website || ''} onChange={handleChange} className="input-field w-full" />
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-secondary-400" />
                Size & Scale
            </h3>
            <div className="grid grid-cols-2 gap-4">
                <input name="employees" type="number" placeholder="No. of Employees" value={formData.employees || ''} onChange={handleChange} className="input-field" />
                <input name="foundedYear" type="number" placeholder="Year Founded" value={formData.foundedYear || ''} onChange={handleChange} className="input-field" />
            </div>
            <input name="turnover" placeholder="Annual Turnover" value={formData.turnover || ''} onChange={handleChange} className="input-field w-full" />
            <input name="locations" type="number" placeholder="Current Locations" value={formData.locations || ''} onChange={handleChange} className="input-field w-full" />
        </div>
    );

    const renderStep3 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-secondary-400" />
                Needs Assessment
            </h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Purpose (Select multiple)</label>
                    <div className="grid grid-cols-2 gap-2">
                        {['Market Entry', 'Expansion', 'Competitor Analysis', 'Workforce', 'Demographics'].map(purpose => (
                            <label key={purpose} className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10">
                                <input type="checkbox" className="rounded border-gray-600 text-secondary-500 focus:ring-secondary-500" />
                                <span className="text-sm text-gray-300">{purpose}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <input name="expansionBudget" placeholder="Expansion Budget" value={formData.expansionBudget || ''} onChange={handleChange} className="input-field w-full" />
            </div>
        </div>
    );

    const renderStep4 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-secondary-400" />
                Business Preferences
            </h3>
            <div className="space-y-4">
                <select name="footfall" value={formData.footfall || ''} onChange={handleChange} className="input-field w-full">
                    <option value="">Footfall Expectation</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Target Radius (km)</label>
                    <input
                        type="range"
                        name="radius"
                        min="1"
                        max="50"
                        value={formData.radius || 5}
                        onChange={handleChange}
                        className="w-full accent-secondary-500"
                    />
                    <div className="text-right text-secondary-400">{formData.radius || 5} km</div>
                </div>
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

export default B2BSteps;
