'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '../buyer/LoginBuyer.css';

const LoginBroker = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        countryCode: '+91',
        phone: '',
        license: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login as Broker:', formData);
        router.push('/dashboard');
    };

    return (
        <div className="login-page">
            <div className="container">
                <div className="login-container">
                    <div className="login-box">
                        <div className="login-header">
                            <h2>Sign in as Broker</h2>
                            <p>Manage your property listings</p>
                        </div>

                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-row">
                                <div className="form-group" style={{ width: '30%' }}>
                                    <label>Country Code</label>
                                    <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="form-control">
                                        <option value="+91">+91</option>
                                    </select>
                                </div>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label>Phone Number *</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required pattern="[0-9]{10}" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Broker License Number (Optional)</label>
                                <input type="text" name="license" value={formData.license} onChange={handleChange} className="form-control" placeholder="Enter license number" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up / Login</button>
                        </form>

                        <div className="login-footer">
                            <p>Not a broker?</p>
                            <div className="login-links">
                                <button onClick={() => router.push('/login/buyer')} className="link-btn">Login as Buyer</button>
                                <button onClick={() => router.push('/login/owner')} className="link-btn">Login as Owner</button>
                            </div>
                        </div>
                    </div>

                    <div className="login-image">
                        <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600" alt="Login" width={600} height={800} style={{ objectFit: 'cover' }} />
                        <div className="image-overlay">
                            <h3>Professional Dashboard</h3>
                            <p>Manage multiple listings efficiently</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBroker;
