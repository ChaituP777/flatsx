'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '../buyer/LoginBuyer.css';

const LoginOwner = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        countryCode: '+91',
        phone: '',
        propertyType: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login as Owner:', formData);
        router.push('/post-property');
    };

    return (
        <div className="login-page">
            <div className="container">
                <div className="login-container">
                    <div className="login-box">
                        <div className="login-header">
                            <h2>Sign in as Property Owner</h2>
                            <p>List your property for free</p>
                        </div>

                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-row">
                                <div className="form-group" style={{ width: '30%' }}>
                                    <label>Country Code</label>
                                    <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="form-control">
                                        <option value="+91">+91</option>
                                        <option value="+1">+1</option>
                                        <option value="+44">+44</option>
                                    </select>
                                </div>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label>Phone Number *</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required pattern="[0-9]{10}" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Property Type *</label>
                                <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="form-control" required>
                                    <option value="">Select Property Type</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="land">Land/Plot</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up / Login</button>
                        </form>

                        <div className="login-footer">
                            <p>Looking to buy or rent?</p>
                            <div className="login-links">
                                <button onClick={() => router.push('/login/buyer')} className="link-btn">Login as Buyer</button>
                                <button onClick={() => router.push('/login/broker')} className="link-btn">Login as Broker</button>
                            </div>
                        </div>
                    </div>

                    <div className="login-image">
                        <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600" alt="Login" width={600} height={800} style={{ objectFit: 'cover' }} />
                        <div className="image-overlay">
                            <h3>Post Your Property</h3>
                            <p>Connect directly with buyers without broker fees</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginOwner;
