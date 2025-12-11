'use client';

import { useState } from 'react';
import '../Calculator.css';

const LoanEligibility = () => {
    const [formData, setFormData] = useState({
        monthlyIncome: '',
        monthlyObligations: '',
        loanTenure: '20'
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const calculateEligibility = () => {
        const income = parseFloat(formData.monthlyIncome) || 0;
        const obligations = parseFloat(formData.monthlyObligations) || 0;
        const tenure = parseInt(formData.loanTenure);

        // 50% of income can go towards obligations (including new loan)
        const maxEMI = (income * 0.50) - obligations;

        // 8.75% interest rate
        const rate = 8.75 / 100 / 12;
        const months = tenure * 12;

        // Calculate eligible loan amount
        const eligibleLoan = maxEMI * ((Math.pow(1 + rate, months) - 1) / (rate * Math.pow(1 + rate, months)));

        setResult({
            eligibleLoan: eligibleLoan.toFixed(0),
            maxEMI: maxEMI.toFixed(0),
            tenure: tenure
        });
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <div className="calculator-page">
            <div className="calculator-hero">
                <div className="container">
                    <h1>Loan Eligibility Calculator</h1>
                    <p>Check your home loan eligibility</p>
                </div>
            </div>

            <div className="container">
                <div className="calculator-container">
                    <div className="calculator-form">
                        <h2>Income Details</h2>

                        <div className="form-group">
                            <label>Monthly Income (₹)</label>
                            <input
                                type="number"
                                name="monthlyIncome"
                                value={formData.monthlyIncome}
                                onChange={handleChange}
                                placeholder="Enter monthly income"
                            />
                        </div>

                        <div className="form-group">
                            <label>Existing Monthly Obligations (₹)</label>
                            <input
                                type="number"
                                name="monthlyObligations"
                                value={formData.monthlyObligations}
                                onChange={handleChange}
                                placeholder="Other EMIs, Credit cards, etc."
                            />
                        </div>

                        <div className="form-group">
                            <label>Loan Tenure (Years)</label>
                            <select name="loanTenure" value={formData.loanTenure} onChange={handleChange}>
                                <option value="5">5 Years</option>
                                <option value="10">10 Years</option>
                                <option value="15">15 Years</option>
                                <option value="20">20 Years</option>
                                <option value="25">25 Years</option>
                                <option value="30">30 Years</option>
                            </select>
                        </div>

                        <button className="btn btn-primary btn-calculate" onClick={calculateEligibility}>
                            Check Eligibility
                        </button>

                        <div className="disclaimer">
                            <i className="fas fa-info-circle"></i>
                            <p>Banks typically allow 50% of monthly income for all obligations. Calculation based on 8.75% interest rate.</p>
                        </div>
                    </div>

                    {result && (
                        <div className="calculator-result">
                            <h2>Your Eligibility</h2>

                            <div className="result-card primary">
                                <div className="result-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="result-content">
                                    <p className="result-label">Eligible Loan Amount</p>
                                    <h3 className="result-value">{formatCurrency(result.eligibleLoan)}</h3>
                                </div>
                            </div>

                            <div className="result-card">
                                <p className="result-label">Maximum EMI you can afford</p>
                                <h4 className="result-value">{formatCurrency(result.maxEMI)}</h4>
                            </div>

                            <div className="result-info">
                                <i className="fas fa-info-circle"></i>
                                <p>Actual loan eligibility may vary based on credit score, age, employment type, and bank policies.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoanEligibility;
