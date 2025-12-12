'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
    type: 'buyer' | 'owner' | 'broker';
    mode: 'login' | 'signup';
}

const AuthForm = ({ type, mode }: AuthFormProps) => {
    const router = useRouter();
    const [authMethod, setAuthMethod] = useState<'mobile' | 'email'>('mobile');
    const [formData, setFormData] = useState({
        countryCode: '+91',
        phone: '',
        email: '',
        password: '',
        otp: '',
        name: '' // For signup
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`${mode} as ${type} via ${authMethod}`, formData);

        // Disabled navigation as per previous request
        // if (mode === 'login') {
        //     router.push('/dashboard'); 
        // } else {
        //     router.push(`/login/${type}`);
        // }
    };

    const title = mode === 'login' ? 'Sign In' : 'Sign Up';
    const subTitle = type === 'buyer' ? 'to access your personalized dashboard' : 'to manage your properties';
    const typeLabel = type === 'buyer' ? 'Buyer' : type === 'owner' ? 'Property Owner' : 'Broker';

    // Links configuration
    const switchModeLink = mode === 'login' ? `/signup/${type}` : `/login/${type}`;
    const switchModeText = mode === 'login' ? "Don't have an account?" : "Already have an account?";
    const switchModeAction = mode === 'login' ? "Sign Up" : "Login";

    return (
        <div className="min-h-screen flex items-center py-[60px] bg-section-1">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-[12px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] max-w-[1000px] mx-auto">
                    {/* Form Section */}
                    <div className="p-[40px_30px] md:p-[60px_50px] flex flex-col justify-center">
                        <div className="mb-[30px]">
                            <h2 className="text-[32px] text-heading mb-[10px] font-bold">{title} as {typeLabel}</h2>
                            <p className="text-paragraph text-[15px]">{subTitle}</p>
                        </div>

                        {/* Auth Method Toggle */}
                        <div className="flex p-[4px] bg-section-1 rounded-[8px] mb-[30px] w-fit">
                            <button
                                className={`py-[8px] px-[20px] rounded-[6px] text-[14px] font-semibold transition-all duration-300 border-none cursor-pointer ${authMethod === 'mobile' ? 'bg-white text-secondary shadow-sm' : 'bg-transparent text-paragraph hover:text-heading'}`}
                                onClick={() => setAuthMethod('mobile')}
                            >
                                Mobile Number
                            </button>
                            <button
                                className={`py-[8px] px-[20px] rounded-[6px] text-[14px] font-semibold transition-all duration-300 border-none cursor-pointer ${authMethod === 'email' ? 'bg-white text-secondary shadow-sm' : 'bg-transparent text-paragraph hover:text-heading'}`}
                                onClick={() => setAuthMethod('email')}
                            >
                                Email ID
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="mb-[30px]">
                            {mode === 'signup' && (
                                <div className="mb-[20px]">
                                    <label className="block mb-[8px] font-semibold text-heading text-[14px]">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                            )}

                            {authMethod === 'mobile' ? (
                                <div className="flex flex-col md:flex-row gap-[15px] mb-[20px]">
                                    <div className="mb-[20px] w-full md:w-[30%]">
                                        <label className="block mb-[8px] font-semibold text-heading text-[14px]">Country Code</label>
                                        <select
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                            className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary bg-white"
                                        >
                                            <option value="+91">+91 (India)</option>
                                            <option value="+1">+1 (USA)</option>
                                            <option value="+44">+44 (UK)</option>
                                            <option value="+971">+971 (UAE)</option>
                                        </select>
                                    </div>

                                    <div className="mb-[20px] w-full md:flex-1">
                                        <label className="block mb-[8px] font-semibold text-heading text-[14px]">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary"
                                            placeholder="Enter your phone number"
                                            required
                                            pattern="[0-9]{10}"
                                        />
                                    </div>

                                    {/* OTP Input would ideally appear after sending OTP. For visual demo, we simulate it here or just keep login button */}
                                </div>
                            ) : (
                                <>
                                    <div className="mb-[20px]">
                                        <label className="block mb-[8px] font-semibold text-heading text-[14px]">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-[20px]">
                                        <label className="block mb-[8px] font-semibold text-heading text-[14px]">Password *</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            <button type="submit" className="btn btn-primary w-full p-[16px] text-[16px]">
                                {mode === 'login' ? 'Login' : 'create account'}
                            </button>
                        </form>

                        <div className="text-center pt-[30px] border-t border-border-1">
                            <p className="text-paragraph mb-[15px] text-[14px]">
                                {switchModeText} <Link href={switchModeLink} className="text-secondary font-semibold hover:underline">{switchModeAction}</Link>
                            </p>

                            <div className="mt-[20px] flex gap-[15px] justify-center">
                                {type !== 'buyer' && (
                                    <Link href={mode === 'login' ? '/login/buyer' : '/signup/buyer'} className="text-[13px] text-paragraph hover:text-secondary">
                                        Are you a Buyer?
                                    </Link>
                                )}
                                {type !== 'owner' && (
                                    <Link href={mode === 'login' ? '/login/owner' : '/signup/owner'} className="text-[13px] text-paragraph hover:text-secondary">
                                        Are you an Owner?
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative min-h-[300px] md:min-h-[500px]">
                        <Image
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
                            alt="Auth"
                            width={600}
                            height={800}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#002744e6] to-[#004472b3] flex flex-col justify-center items-center p-[40px] text-center">
                            <h3 className="text-white text-[32px] mb-[15px] font-bold">Welcome to FlatsXChange</h3>
                            <p className="text-white/90 text-[16px] max-w-[400px]">Your trusted platform for buying, selling, and renting properties without brokerage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
