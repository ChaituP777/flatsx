'use client';

import { useState } from 'react';


const AreaConverter = () => {
    const [formData, setFormData] = useState({
        value: '',
        fromUnit: 'sqft',
        toUnit: 'sqm'
    });

    const [result, setResult] = useState(null);

    const conversionRates = {
        sqft: 1,
        sqm: 0.092903,
        sqyd: 0.111111,
        acres: 0.000022957,
        hectares: 0.0000092903,
        gaj: 0.111111,
        bigha: 0.000367309
    };

    const units = [
        { id: 'sqft', name: 'Square Feet' },
        { id: 'sqm', name: 'Square Meters' },
        { id: 'sqyd', name: 'Square Yards' },
        { id: 'acres', name: 'Acres' },
        { id: 'hectares', name: 'Hectares' },
        { id: 'gaj', name: 'Gaj' },
        { id: 'bigha', name: 'Bigha' }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const convert = () => {
        const value = parseFloat(formData.value) || 0;

        // Convert to sqft first, then to target unit
        const inSqFt = value / conversionRates[formData.fromUnit];
        const converted = inSqFt * conversionRates[formData.toUnit];

        setResult({
            original: value,
            converted: converted.toFixed(4),
            fromUnit: units.find(u => u.id === formData.fromUnit).name,
            toUnit: units.find(u => u.id === formData.toUnit).name
        });
    };

    return (
        <div className="min-h-screen bg-section-1">
            <div className="bg-primary pt-[80px] pb-[100px] text-center text-white">
                <div className="container">
                    <h1 className="text-[40px] font-bold mb-[15px] text-white">Area Converter</h1>
                    <p className="text-[18px] opacity-90 text-white">Convert between different area units</p>
                </div>
            </div>

            <div className="container -mt-[50px]">
                <div className="max-w-[800px] mx-auto">
                    <div className="bg-white p-[30px] rounded-[12px] shadow-[0_5px_20px_rgba(0,0,0,0.08)] border border-border-1 mb-[30px]">
                        <h2 className="text-[24px] font-bold mb-[25px] text-heading">Convert Area</h2>

                        <div className="mb-[20px]">
                            <label className="block font-semibold mb-[8px] text-heading text-[14px]">Value</label>
                            <input
                                type="number"
                                step="0.01"
                                name="value"
                                value={formData.value}
                                onChange={handleChange}
                                placeholder="Enter value"
                                className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] text-heading bg-white transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary"
                            />
                        </div>

                        <div className="mb-[20px]">
                            <label className="block font-semibold mb-[8px] text-heading text-[14px]">From Unit</label>
                            <select name="fromUnit" value={formData.fromUnit} onChange={handleChange} className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] text-heading bg-white transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary">
                                {units.map(unit => (
                                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-[20px]">
                            <label className="block font-semibold mb-[8px] text-heading text-[14px]">To Unit</label>
                            <select name="toUnit" value={formData.toUnit} onChange={handleChange} className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] text-heading bg-white transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary">
                                {units.map(unit => (
                                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                                ))}
                            </select>
                        </div>

                        <button className="btn btn-primary w-full p-[14px] text-[16px] font-semibold" onClick={convert}>
                            Convert
                        </button>
                    </div>

                    {result && (
                        <div className="bg-white p-[30px] rounded-[12px] shadow-[0_5px_20px_rgba(0,0,0,0.08)] border border-border-1 animate-fadeIn">
                            <h2 className="text-[24px] font-bold mb-[25px] text-heading">Conversion Result</h2>

                            <div className="flex items-center gap-[20px] p-[20px] rounded-[12px] mb-[20px] bg-[#4e54c80d] border border-[#4e54c833]">
                                <div className="text-[32px] text-primary">
                                    <i className="fas fa-exchange-alt"></i>
                                </div>
                                <div className="text-left">
                                    <p className="text-[14px] text-gray-600 mb-[5px] uppercase tracking-wide font-semibold">Converted Value</p>
                                    <h3 className="text-[28px] font-bold text-primary m-0">{result.converted} {result.toUnit}</h3>
                                </div>
                            </div>

                            <div className="mt-[25px] border-t border-border-1 pt-[20px]">
                                <h3 className="text-[18px] font-bold mb-[15px] text-heading">Conversion Details</h3>
                                <div className="flex justify-between mb-[10px] text-[14px] text-gray-600">
                                    <span>Original Value</span>
                                    <span>{result.original} {result.fromUnit}</span>
                                </div>
                                <div className="flex justify-between mb-[10px] text-[14px] text-gray-600 font-bold text-heading text-[16px] mt-[15px] pt-[15px] border-t border-dashed border-border-1">
                                    <span>Converted Value</span>
                                    <span>{result.converted} {result.toUnit}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AreaConverter;
