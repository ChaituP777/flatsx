"use client";
import React, { useState, useEffect } from 'react';


const BudgetCalculator = () => {
    // Inputs
    const [income, setIncome] = useState(100000); // Monthly Net Salary
    const [savings, setSavings] = useState(1500000); // Cash in Hand
    const [existingEmi, setExistingEmi] = useState(0); // Other Loans
    const [tenure, setTenure] = useState(20);
    const [interestRate, setInterestRate] = useState(8.5);
    const [safetyLevel, setSafetyLevel] = useState('moderate'); // aggressive, moderate, conservative

    // Results
    const [result, setResult] = useState(null);

    // Constants
    const STAMP_DUTY_RATE = 0.06; // 6%
    const REGISTRATION_RATE = 0.01; // 1%
    const BROKERAGE_RATE = 0.01; // 1%
    const MISC_FEES = 0.005; // 0.5% (Legal, Processing)

    useEffect(() => {
        calculateAffordability();
    }, [income, savings, existingEmi, tenure, interestRate, safetyLevel]);

    const calculateAffordability = () => {
        // 1. Determine Max EMI Capacity (FOIR)
        let foirLimit = 0.50; // Default Bank Limit (50%)

        if (safetyLevel === 'conservative') foirLimit = 0.30; // Safe (30%)
        if (safetyLevel === 'aggressive') foirLimit = 0.60; // Maxed out (60%)

        const maxMonthlyEmiCapacity = (income * foirLimit) - existingEmi;

        if (maxMonthlyEmiCapacity <= 0) {
            setResult(null);
            return;
        }

        // 2. Calculate Max Loan Amount (Reverse EMI)
        // P = E * ((1+r)^n - 1) / (r * (1+r)^n)
        const r = interestRate / 12 / 100;
        const n = tenure * 12;

        const maxLoan = maxMonthlyEmiCapacity * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));

        // 3. Determine Property Budget based on Downpayment constraint OR Loan constraint
        // Usually LTV is 80%. So Loan = 80% of Property.
        // Property = Loan / 0.8

        // However, we also have CASH constraint (Savings).
        // Cash Needed = Downpayment (20%) + HIdden Costs (8.5%)
        // Total Cash % = 28.5% of Property Value.

        // We calculate Max Property based on Loan eligibility first:
        const maxPropertyByLoan = maxLoan / 0.80;

        // 4. Calculate Hidden Costs for this Max Property
        const breakdown = calculateBreakdown(maxPropertyByLoan);

        // 5. Cash Analysis
        const totalCashNeeded = breakdown.totalCashNeeded;
        const cashShortfall = totalCashNeeded - savings;

        setResult({
            maxLoan: Math.round(maxLoan),
            maxProperty: Math.round(maxPropertyByLoan),
            emi: Math.round(maxMonthlyEmiCapacity),
            breakdown: breakdown,
            cashShortfall: cashShortfall,
            isCashDeficit: cashShortfall > 0
        });
    };

    const calculateBreakdown = (propertyValue) => {
        const downpayment = propertyValue * 0.20;
        const stampDuty = propertyValue * STAMP_DUTY_RATE;
        const registration = propertyValue * REGISTRATION_RATE;
        const brokerage = propertyValue * BROKERAGE_RATE;
        const misc = propertyValue * MISC_FEES;

        return {
            downpayment,
            stampDuty,
            registration,
            brokerage,
            misc,
            totalHiddenRes: stampDuty + registration + brokerage + misc,
            totalCashNeeded: downpayment + stampDuty + registration + brokerage + misc
        };
    };

    const formatMoney = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="max-w-[1000px] mx-auto my-[40px] p-[20px] bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h1 className="text-center text-[#2c3e50] mb-[5px] text-[32px] font-bold">💰 True Affordability Calculator</h1>
            <p className="text-center text-[#7f8c8d] mb-[40px]">Don't just calculate EMI. Calculate the <strong>Full Cash Requirement</strong>.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                {/* Left: Inputs */}
                <div className="p-[20px] bg-[#f8f9fa] rounded-[12px]">

                    <div className="mb-[25px]">
                        <label className="block font-semibold text-[#34495e] mb-[8px]">Monthly Net Income (In Hand)</label>
                        <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full p-[12px] border border-[#ddd] rounded-[8px] text-[16px] font-bold text-[#2c3e50]" />
                        <div className="mt-[10px]">
                            <input type="range" min="20000" max="1000000" step="5000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                    </div>

                    <div className="mb-[25px]">
                        <label className="block font-semibold text-[#34495e] mb-[8px]">Existing Monthly EMIs</label>
                        <input type="number" value={existingEmi} onChange={(e) => setExistingEmi(Number(e.target.value))} className="w-full p-[12px] border border-[#ddd] rounded-[8px] text-[16px] font-bold text-[#2c3e50]" />
                        <div className="mt-[10px]">
                            <input type="range" min="0" max="200000" step="2000" value={existingEmi} onChange={(e) => setExistingEmi(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                        <small className="block mt-[5px] text-[#666] text-[12px]">Car loans, Personal loans, etc.</small>
                    </div>

                    <div className="mb-[25px]">
                        <label className="block font-semibold text-[#34495e] mb-[8px]">Current Available Cash (Savings)</label>
                        <input type="number" value={savings} onChange={(e) => setSavings(Number(e.target.value))} className="w-full p-[12px] border border-[#ddd] rounded-[8px] text-[16px] font-bold text-[#2c3e50]" />
                        <div className="mt-[10px]">
                            <input type="range" min="0" max="5000000" step="50000" value={savings} onChange={(e) => setSavings(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                        <small className="block mt-[5px] text-[#666] text-[12px]">Cash available for Downpayment & Registration</small>
                    </div>

                    <div className="mb-[25px]">
                        <label className="block font-semibold text-[#34495e] mb-[8px]">Safety Meter (Risk Appetite)</label>
                        <div className="flex gap-[10px] mb-[10px]">
                            <button
                                className={`flex-1 p-[10px_5px] border border-[#ddd] bg-white rounded-[8px] cursor-pointer text-[13px] font-semibold transition-all duration-200 ${safetyLevel === 'conservative' ? 'scale-105 border-transparent text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-[#27ae60]' : ''}`}
                                onClick={() => setSafetyLevel('conservative')}>
                                🛡️ Safe (30%)
                            </button>
                            <button
                                className={`flex-1 p-[10px_5px] border border-[#ddd] bg-white rounded-[8px] cursor-pointer text-[13px] font-semibold transition-all duration-200 ${safetyLevel === 'moderate' ? 'scale-105 border-transparent text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-[#f39c12]' : ''}`}
                                onClick={() => setSafetyLevel('moderate')}>
                                ⚖️ Moderate (50%)
                            </button>
                            <button
                                className={`flex-1 p-[10px_5px] border border-[#ddd] bg-white rounded-[8px] cursor-pointer text-[13px] font-semibold transition-all duration-200 ${safetyLevel === 'aggressive' ? 'scale-105 border-transparent text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-[#e74c3c]' : ''}`}
                                onClick={() => setSafetyLevel('aggressive')}>
                                🚀 Max (60%)
                            </button>
                        </div>
                        <p className="text-[13px] text-[#555] italic mt-[5px]">
                            {safetyLevel === 'conservative' && "Use only 30% of income for EMI. Recommended for families."}
                            {safetyLevel === 'moderate' && "Standard Bank Norm (50% of income)."}
                            {safetyLevel === 'aggressive' && "Aggressive borrowing. High risk."}
                        </p>
                    </div>
                </div>

                {/* Right: Results */}
                <div className="p-[10px]">
                    {result ? (
                        <>
                            <div className="text-center bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] text-white p-[25px] rounded-[12px] mb-[25px] shadow-[0_4px_15px_rgba(78,84,200,0.3)]">
                                <h3 className="m-0 text-[14px] uppercase tracking-widest opacity-90">Take-Home Budget</h3>
                                <h1 className="m-[10px_0] text-[36px] font-bold">{formatMoney(result.maxProperty)}</h1>
                                <p className="m-0 text-[13px] opacity-80">Maximum Property Value you can consider</p>
                                <div className="mt-[10px] pt-[10px] border-t border-white/20">
                                    <small className="text-[14px] bg-black/10 p-[4px_10px] rounded-[20px]">Max Bank Loan: <strong>{formatMoney(result.maxLoan)}</strong></small>
                                </div>
                            </div>

                            {/* Hidden Cost Alert */}
                            <div className={`p-[15px] rounded-[8px] mb-[25px] border-l-[5px] ${result.isCashDeficit ? 'bg-[#fff0f0] border-l-[#e74c3c] text-[#c0392b]' : 'bg-[#e8f5e9] border-l-[#27ae60] text-[#2e7d32]'}`}>
                                <div className="mb-[5px]">
                                    <h4 className="m-0 font-bold">{result.isCashDeficit ? '⚠️ Cash Shortfall Alert' : '✅ You are Cash Ready'}</h4>
                                </div>
                                <p className="m-0">
                                    {result.isCashDeficit
                                        ? `You need ${formatMoney(result.cashShortfall)} MORE upfront cash to close this deal.`
                                        : "Great! Your savings cover the Downpayment + All Hidden Costs."}
                                </p>
                            </div>

                            <div className="bg-white border border-[#eee] p-[20px] rounded-[12px] relative overflow-hidden">
                                <h4 className="mt-0 text-[#34495e] border-b border-[#eee] pb-[10px] mb-[15px] font-bold">🕵️‍♂️ The Real Cash Breakdown</h4>
                                <div className="flex justify-between mb-[8px] text-[14px] text-[#555]">
                                    <span>Base Downpayment (20%)</span>
                                    <span>{formatMoney(result.breakdown.downpayment)}</span>
                                </div>
                                <div className="h-[1px] bg-[#eee] my-[10px]"></div>
                                <div className="flex justify-between mb-[8px] text-[14px] text-[#d35400]">
                                    <span>Stamp Duty (6%)</span>
                                    <span>+ {formatMoney(result.breakdown.stampDuty)}</span>
                                </div>
                                <div className="flex justify-between mb-[8px] text-[14px] text-[#d35400]">
                                    <span>Registration (1%)</span>
                                    <span>+ {formatMoney(result.breakdown.registration)}</span>
                                </div>
                                <div className="flex justify-between mb-[8px] text-[14px] text-[#d35400]">
                                    <span>Brokerage & Legal (1.5%)</span>
                                    <span>+ {formatMoney(result.breakdown.brokerage + result.breakdown.misc)}</span>
                                </div>
                                <div className="flex justify-between text-[16px] text-[#2c3e50] mt-[10px] pt-[10px] border-t-2 border-dashed border-[#ddd] font-bold">
                                    <span>Total Cash Needed Day 1</span>
                                    <strong>{formatMoney(result.breakdown.totalCashNeeded)}</strong>
                                </div>
                                <div className="flex justify-between text-[#27ae60] font-semibold mt-[5px]">
                                    <span>Your Available Savings</span>
                                    <span>- {formatMoney(savings)}</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center p-[40px] text-[#7f8c8d]">
                            <h3 className="text-[20px]">Income too low for a loan</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BudgetCalculator;
