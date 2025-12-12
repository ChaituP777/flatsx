'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


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
        // router.push('/dashboard');
    };

    const steps = ['Basic Info', 'Details', 'Location', 'Pricing', 'Amenities'];

    return (


        <div className="min-h-screen bg-section-1 py-[60px]">
            <div className="container">
                <div className="text-center mb-[50px]">
                    <h1 className="text-[42px] mb-[10px] font-bold">Post Your Property</h1>
                    <p className="text-[16px] text-gray-600">Fill in the details to list your property</p>
                </div>

                <div className="flex justify-between max-w-[800px] mx-auto mb-[50px] relative flex-wrap md:flex-nowrap">
                    <div className="absolute top-[20px] left-[10%] right-[10%] h-[2px] bg-border-1 z-0 hidden md:block"></div>
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col items-center gap-[10px] relative z-10 ${index + 1 <= currentStep ? 'text-secondary' : 'text-gray-500'}`}>
                            <div className={`w-[40px] h-[40px] rounded-full border-2 flex items-center justify-center font-semibold transition-all duration-300 ${index + 1 < currentStep ? 'bg-green-500 text-white border-green-500' :
                                index + 1 === currentStep ? 'bg-secondary text-white border-secondary' :
                                    'bg-white text-gray-500 border-border-1'
                                }`}>
                                {index + 1}
                            </div>
                            <span className="text-[14px] font-medium">{step}</span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="max-w-[800px] mx-auto bg-white p-[30px] md:p-[50px] rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                    {currentStep === 1 && (
                        <div className="mb-[30px]">
                            <h2 className="text-[28px] mb-[30px] text-heading font-bold">Basic Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
                                <div className="mb-[25px]">
                                    <label className="block mb-[8px] font-semibold text-heading text-[14px]">Property Type *</label>
                                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} required className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary bg-white">
                                        <option value="">Select Type</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="villa">Villa</option>
                                        <option value="builder">Builder Floor</option>
                                    </select>
                                </div>
                                <div className="mb-[25px]">
                                    <label className="block mb-[8px] font-semibold text-heading text-[14px]">BHK Type *</label>
                                    <select name="bhk" value={formData.bhk} onChange={handleChange} required className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary bg-white">
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
                        <div className="mb-[30px]">
                            <h2 className="text-[28px] mb-[30px] text-heading font-bold">Property Details</h2>
                            <div className="mb-[25px]">
                                <label className="block mb-[8px] font-semibold text-heading text-[14px]">Area (sq ft) *</label>
                                <input type="number" name="area" value={formData.area} onChange={handleChange} required className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary" />
                            </div>
                            <div className="mb-[25px]">
                                <label className="block mb-[8px] font-semibold text-heading text-[14px]">Description *</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} rows={5} required className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary" />
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="mb-[30px]">
                            <h2 className="text-[28px] mb-[30px] text-heading font-bold">Location</h2>
                            <div className="mb-[25px]">
                                <label className="block mb-[8px] font-semibold text-heading text-[14px]">City/Area *</label>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary" />
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="mb-[30px]">
                            <h2 className="text-[28px] mb-[30px] text-heading font-bold">Pricing</h2>
                            <div className="mb-[25px]">
                                <label className="block mb-[8px] font-semibold text-heading text-[14px]">Price (₹) *</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} required className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary" />
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="mb-[30px]">
                            <h2 className="text-[28px] mb-[30px] text-heading font-bold">Amenities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
                                {['Parking', 'Gym', 'Swimming Pool', 'Garden', 'Security'].map(amenity => (
                                    <label key={amenity} className="flex items-center gap-[10px] p-[12px] border-[2px] border-border-1 rounded-[6px] cursor-pointer transition-all duration-300 hover:border-secondary hover:bg-[#ff6b6b0d]">
                                        <input type="checkbox" value={amenity} onChange={handleChange} className="accent-secondary" />
                                        <span>{amenity}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between mt-[40px] pt-[30px] border-t border-border-1">
                        {currentStep > 1 && (
                            <button type="button" onClick={handlePrev} className="btn bg-section-1 text-heading hover:bg-border-1 px-[30px]">Previous</button>
                        )}
                        {currentStep < 5 ? (
                            <button type="button" onClick={handleNext} className="btn btn-primary px-[30px] ml-auto">Next</button>
                        ) : (
                            <button type="submit" className="btn btn-primary px-[30px] ml-auto">Submit Property</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostProperty;
