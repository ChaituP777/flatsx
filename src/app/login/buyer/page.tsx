'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const LoginBuyer = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        countryCode: '+91',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login as Buyer:', formData);
        // Simulate login
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center py-[60px] bg-section-1">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-[12px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] max-w-[1000px] mx-auto">
                    <div className="p-[40px_30px] md:p-[60px_50px] flex flex-col justify-center">
                        <div className="mb-[40px]">
                            <h2 className="text-[32px] text-heading mb-[10px] font-bold">Sign in as Buyer</h2>
                            <p className="text-paragraph text-[15px]">Enter your mobile number to continue</p>
                        </div>

                        <form onSubmit={handleSubmit} className="mb-[30px]">
                            <div className="flex flex-col md:flex-row gap-[15px] mb-[20px]">
                                <div className="mb-[20px] w-full md:w-[30%]">
                                    <label className="block mb-[8px] font-semibold text-heading text-[14px]">Country Code</label>
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary"
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
                            </div>

                            <button type="submit" className="btn btn-primary w-full p-[16px] text-[16px]">
                                Sign Up / Login
                            </button>
                        </form>

                        <div className="text-center pt-[30px] border-t border-border-1">
                            <p className="text-paragraph mb-[15px] text-[14px]">Are you a property owner or broker?</p>
                            <div className="flex gap-[15px] justify-center">
                                <button onClick={() => router.push('/login/owner')} className="bg-none border-none text-secondary font-semibold cursor-pointer text-[14px] transition-colors duration-300 hover:text-primary hover:underline">
                                    Login as Owner
                                </button>
                                <button onClick={() => router.push('/login/broker')} className="bg-none border-none text-secondary font-semibold cursor-pointer text-[14px] transition-colors duration-300 hover:text-primary hover:underline">
                                    Login as Broker
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[300px] md:min-h-[500px]">
                        <Image
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
                            alt="Login"
                            width={600}
                            height={800}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2ee6] to-[#ff6b6bb3] flex flex-col justify-center items-center p-[40px] text-center">
                            <h3 className="text-white text-[32px] mb-[15px] font-bold">Welcome to FlatsXChange</h3>
                            <p className="text-white/90 text-[16px] max-w-[400px]">Your trusted platform for buying, selling, and renting properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBuyer;
