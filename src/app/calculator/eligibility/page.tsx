'use client';

import { useState } from 'react';


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
        <div className="min-h-screen bg-section-1">
            <div className="bg-primary pt-[80px] pb-[100px] text-center text-white">
                <div className="container">
                    <h1 className="text-[40px] font-bold mb-[15px] text-white">Loan Eligibility Calculator</h1>
                    <p className="text-[18px] opacity-90 text-white">Check your home loan eligibility</p>
                </div>
            </div>

            <div className="container -mt-[50px]">
                <div className="max-w-[800px] mx-auto">
                    <div className="bg-white p-[30px] rounded-[12px] shadow-[0_5px_20px_rgba(0,0,0,0.08)] border border-border-1 mb-[30px]">
                        <h2 className="text-[24px] font-bold mb-[25px] text-heading">Income Details</h2>

                        <div className="mb-[20px]">
                            <label className="block font-semibold mb-[8px] text-heading text-[14px]">Monthly Income (₹)</label>
                            <input
                                type="number"
                                name="monthlyIncome"
                                value={formData.monthlyIncome}
                                onChange={handleChange}
                                placeholder="Enter monthly income"
                                className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary"
                            />
                        </div>

                        <div className="mb-[20px]">
                            <label className="block font-semibold mb-[8px] text-heading text-[14px]">Existing Monthly Obligations (₹)</label>
                            <input
                                type="number"
                                name="monthlyObligations"
                                value={formData.monthlyObligations}
                                onChange={handleChange}
                                placeholder="Other EMIs, Credit cards, etc."
                                className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary"
                            />
                        </div>

                        <div className="mb-[20px]">
                            <label className="block font-semibold mb-[8px] text-heading text-[14px]">Loan Tenure (Years)</label>
                            <select name="loanTenure" value={formData.loanTenure} onChange={handleChange} className="w-full p-[14px_16px] border-[2px] border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 font-inherit focus:outline-none focus:border-secondary">
                                <option value="5">5 Years</option>
                                <option value="10">10 Years</option>
                                <option value="15">15 Years</option>
                                <option value="20">20 Years</option>
                                <option value="25">25 Years</option>
                                <option value="30">30 Years</option>
                            </select>
                        </div>

                        <button className="btn btn-primary w-full p-[14px] text-[16px] font-semibold" onClick={calculateEligibility}>
                            Check Eligibility
                        </button>

                        <div className="flex gap-[10px] bg-yellow-50 p-[15px] rounded-[8px] mt-[20px] text-[#856404] text-[13px]">
                            <i className="fas fa-info-circle mt-[2px]"></i>
                            <p className="m-0">Banks typically allow 50% of monthly income for all obligations. Calculation based on 8.75% interest rate.</p>
                        </div>
                    </div>

                    {result && (
                        <div className="bg-white p-[30px] rounded-[12px] shadow-[0_5px_20px_rgba(0,0,0,0.08)] border border-border-1 animate-fadeIn">
                            <h2 className="text-[24px] font-bold mb-[25px] text-heading">Your Eligibility</h2>

                            <div className="flex items-center gap-[20px] p-[20px] rounded-[12px] mb-[20px] bg-[#4e54c80d] border border-[#4e54c833]">
                                <div className="text-[32px] text-primary">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="text-left">
                                    <p className="text-[14px] text-gray-600 mb-[5px] uppercase tracking-wide font-semibold">Eligible Loan Amount</p>
                                    <h3 className="text-[28px] font-bold text-primary m-0">{formatCurrency(result.eligibleLoan)}</h3>
                                </div>
                            </div>

                            <div className="flex items-center gap-[20px] p-[20px] rounded-[12px] mb-[20px] bg-gray-50 border border-gray-100">
                                <div>
                                    <p className="text-[14px] text-gray-600 mb-[5px] uppercase tracking-wide font-semibold">Maximum EMI you can afford</p>
                                    <h4 className="text-[24px] font-bold text-heading m-0">{formatCurrency(result.maxEMI)}</h4>
                                </div>
                            </div>

                            <div className="flex gap-[10px] text-[13px] text-gray-500">
                                <i className="fas fa-info-circle mt-[2px]"></i>
                                <p className="m-0">Actual loan eligibility may vary based on credit score, age, employment type, and bank policies.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoanEligibility;
