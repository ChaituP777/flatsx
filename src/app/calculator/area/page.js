'use client';

import { useState } from 'react';
import '../Calculator.css';

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
        <div className="calculator-page">
            <div className="calculator-hero">
                <div className="container">
                    <h1>Area Converter</h1>
                    <p>Convert between different area units</p>
                </div>
            </div>

            <div className="container">
                <div className="calculator-container">
                    <div className="calculator-form">
                        <h2>Convert Area</h2>

                        <div className="form-group">
                            <label>Value</label>
                            <input
                                type="number"
                                step="0.01"
                                name="value"
                                value={formData.value}
                                onChange={handleChange}
                                placeholder="Enter value"
                            />
                        </div>

                        <div className="form-group">
                            <label>From Unit</label>
                            <select name="fromUnit" value={formData.fromUnit} onChange={handleChange}>
                                {units.map(unit => (
                                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>To Unit</label>
                            <select name="toUnit" value={formData.toUnit} onChange={handleChange}>
                                {units.map(unit => (
                                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                                ))}
                            </select>
                        </div>

                        <button className="btn btn-primary btn-calculate" onClick={convert}>
                            Convert
                        </button>
                    </div>

                    {result && (
                        <div className="calculator-result">
                            <h2>Conversion Result</h2>

                            <div className="result-card primary">
                                <div className="result-icon">
                                    <i className="fas fa-exchange-alt"></i>
                                </div>
                                <div className="result-content">
                                    <p className="result-label">Converted Value</p>
                                    <h3 className="result-value">{result.converted} {result.toUnit}</h3>
                                </div>
                            </div>

                            <div className="result-breakdown">
                                <h3>Conversion Details</h3>
                                <div className="breakdown-item">
                                    <span>Original Value</span>
                                    <span>{result.original} {result.fromUnit}</span>
                                </div>
                                <div className="breakdown-item total">
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
