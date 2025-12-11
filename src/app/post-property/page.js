'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './PostProperty.css';

const PostProperty = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        propertyType: '',
        bhk: '',
        price: '',
        location: '',
        area: '',
        description: '',
        amenities: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                amenities: checked
                    ? [...formData.amenities, value]
                    : formData.amenities.filter(a => a !== value)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleNext = () => {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Property Data:', formData);
        router.push('/dashboard');
    };

    const steps = ['Basic Info', 'Details', 'Location', 'Pricing', 'Amenities'];

    return (
        <div className="post-property-page">
            <div className="container">
                <div className="post-property-header">
                    <h1>Post Your Property</h1>
                    <p>Fill in the details to list your property</p>
                </div>

                <div className="progress-bar">
                    {steps.map((step, index) => (
                        <div key={index} className={`progress-step ${index + 1 <= currentStep ? 'active' : ''} ${index + 1 < currentStep ? 'completed' : ''}`}>
                            <div className="step-circle">{index + 1}</div>
                            <span>{step}</span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="property-form">
                    {currentStep === 1 && (
                        <div className="form-section">
                            <h2>Basic Information</h2>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Property Type *</label>
                                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
                                        <option value="">Select Type</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="villa">Villa</option>
                                        <option value="builder">Builder Floor</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>BHK Type *</label>
                                    <select name="bhk" value={formData.bhk} onChange={handleChange} required>
                                        <option value="">Select BHK</option>
                                        <option value="1">1 BHK</option>
                                        <option value="2">2 BHK</option>
                                        <option value="3">3 BHK</option>
                                        <option value="4">4+ BHK</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="form-section">
                            <h2>Property Details</h2>
                            <div className="form-group">
                                <label>Area (sq ft) *</label>
                                <input type="number" name="area" value={formData.area} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Description *</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} rows="5" required />
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="form-section">
                            <h2>Location</h2>
                            <div className="form-group">
                                <label>City/Area *</label>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="form-section">
                            <h2>Pricing</h2>
                            <div className="form-group">
                                <label>Price (₹) *</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="form-section">
                            <h2>Amenities</h2>
                            <div className="checkbox-grid">
                                {['Parking', 'Gym', 'Swimming Pool', 'Garden', 'Security'].map(amenity => (
                                    <label key={amenity} className="checkbox-label">
                                        <input type="checkbox" value={amenity} onChange={handleChange} />
                                        <span>{amenity}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="form-actions">
                        {currentStep > 1 && (
                            <button type="button" onClick={handlePrev} className="btn btn-secondary">Previous</button>
                        )}
                        {currentStep < 5 ? (
                            <button type="button" onClick={handleNext} className="btn btn-primary">Next</button>
                        ) : (
                            <button type="submit" className="btn btn-primary">Submit Property</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostProperty;
