'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './LoginBuyer.css';

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
        <div className="login-page">
            <div className="container">
                <div className="login-container">
                    <div className="login-box">
                        <div className="login-header">
                            <h2>Sign in as Buyer</h2>
                            <p>Enter your mobile number to continue</p>
                        </div>

                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-row">
                                <div className="form-group" style={{ width: '30%' }}>
                                    <label>Country Code</label>
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="form-control"
                                    >
                                        <option value="+91">+91 (India)</option>
                                        <option value="+1">+1 (USA)</option>
                                        <option value="+44">+44 (UK)</option>
                                        <option value="+971">+971 (UAE)</option>
                                    </select>
                                </div>

                                <div className="form-group" style={{ flex: 1 }}>
                                    <label>Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        required
                                        pattern="[0-9]{10}"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                Sign Up / Login
                            </button>
                        </form>

                        <div className="login-footer">
                            <p>Are you a property owner or broker?</p>
                            <div className="login-links">
                                <button onClick={() => router.push('/login/owner')} className="link-btn">
                                    Login as Owner
                                </button>
                                <button onClick={() => router.push('/login/broker')} className="link-btn">
                                    Login as Broker
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="login-image">
                        <Image
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
                            alt="Login"
                            width={600}
                            height={800}
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="image-overlay">
                            <h3>Welcome to FlatSX</h3>
                            <p>Your trusted platform for buying, selling, and renting properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBuyer;
