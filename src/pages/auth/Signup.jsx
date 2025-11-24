import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Building2, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import B2CSteps from '../../components/auth/B2CSteps';
import B2BSteps from '../../components/auth/B2BSteps';

const Signup = () => {
    const [accountType, setAccountType] = useState(null); // 'individual' | 'business'
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const { login } = useAuth();
    const navigate = useNavigate();

    const updateFormData = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            // Complete Signup
            login({
                ...formData,
                type: accountType,
                onboardingComplete: true,
                name: accountType === 'individual' ? formData.fullName : formData.businessName,
                email: formData.email || 'user@example.com' // Mock email if not collected in step 1
            });
            navigate('/onboarding-success');
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            setAccountType(null);
        }
    };

    // Screen 1: Account Type Selection
    if (!accountType) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
                <div className="w-full max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-heading font-bold text-white mb-4">Choose Account Type</h1>
                        <p className="text-xl text-gray-400">Select the profile that best describes you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Individual Card */}
                        <button
                            onClick={() => setAccountType('individual')}
                            className="group relative p-8 glass-panel rounded-3xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] text-left"
                        >
                            <div className="absolute top-0 right-0 p-32 bg-primary-500/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary-500/20 transition-colors" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25">
                                    <User className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Individual</h3>
                                <p className="text-gray-400">For homebuyers, renters, and community seekers looking for the perfect neighborhood.</p>
                            </div>
                        </button>

                        {/* Business Card */}
                        <button
                            onClick={() => setAccountType('business')}
                            className="group relative p-8 glass-panel rounded-3xl border border-white/10 hover:border-secondary-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] text-left"
                        >
                            <div className="absolute top-0 right-0 p-32 bg-secondary-500/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-secondary-500/20 transition-colors" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-secondary-500/25">
                                    <Building2 className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
                                <p className="text-gray-400">For business owners and investors seeking location intelligence and expansion opportunities.</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Multi-step Form
    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
            <div className="w-full max-w-2xl">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm font-medium text-gray-400 mb-2">
                        <span>Step {step} of 4</span>
                        <span>{Math.round((step / 4) * 100)}% Completed</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className={`h-full transition-all duration-500 ${accountType === 'individual' ? 'bg-primary-500' : 'bg-secondary-500'}`}
                            style={{ width: `${(step / 4) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                    {/* Background Glow */}
                    <div className={`absolute top-0 right-0 w-64 h-64 blur-3xl rounded-full -mr-20 -mt-20 opacity-20 pointer-events-none ${accountType === 'individual' ? 'bg-primary-500' : 'bg-secondary-500'}`} />

                    <div className="relative z-10">
                        {accountType === 'individual' ? (
                            <B2CSteps step={step} formData={formData} updateFormData={updateFormData} />
                        ) : (
                            <B2BSteps step={step} formData={formData} updateFormData={updateFormData} />
                        )}

                        <div className="flex justify-between mt-8 pt-8 border-t border-white/10">
                            <button
                                onClick={handleBack}
                                className="flex items-center px-6 py-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back
                            </button>
                            <button
                                onClick={handleNext}
                                className={`flex items-center px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all transform hover:scale-105 ${accountType === 'individual'
                                        ? 'bg-gradient-to-r from-primary-600 to-primary-500 shadow-primary-500/25'
                                        : 'bg-gradient-to-r from-secondary-600 to-secondary-500 shadow-secondary-500/25'
                                    }`}
                            >
                                {step === 4 ? 'Complete Setup' : 'Continue'}
                                {step === 4 ? <Check className="w-4 h-4 ml-2" /> : <ArrowRight className="w-4 h-4 ml-2" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
