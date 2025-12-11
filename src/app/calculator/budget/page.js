"use client";
import React, { useState, useEffect } from 'react';
import './BudgetCalculator.css';

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
        <div className="budget-calculator-container">
            <h1 className="calc-title">💰 True Affordability Calculator</h1>
            <p className="subtitle">Don't just calculate EMI. Calculate the <strong>Full Cash Requirement</strong>.</p>

            <div className="calculator-layout">
                {/* Left: Inputs */}
                <div className="input-panel">

                    <div className="input-group">
                        <label>Monthly Net Income (In Hand)</label>
                        <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} />
                        <div className="range-slider">
                            <input type="range" min="20000" max="1000000" step="5000" value={income} onChange={(e) => setIncome(Number(e.target.value))} />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Existing Monthly EMIs</label>
                        <input type="number" value={existingEmi} onChange={(e) => setExistingEmi(Number(e.target.value))} />
                        <div className="range-slider">
                            <input type="range" min="0" max="200000" step="2000" value={existingEmi} onChange={(e) => setExistingEmi(Number(e.target.value))} />
                        </div>
                        <small>Car loans, Personal loans, etc.</small>
                    </div>

                    <div className="input-group">
                        <label>Current Available Cash (Savings)</label>
                        <input type="number" value={savings} onChange={(e) => setSavings(Number(e.target.value))} />
                        <div className="range-slider">
                            <input type="range" min="0" max="5000000" step="50000" value={savings} onChange={(e) => setSavings(Number(e.target.value))} />
                        </div>
                        <small>Cash available for Downpayment & Registration</small>
                    </div>

                    <div className="input-group">
                        <label>Safety Meter (Risk Appetite)</label>
                        <div className="safety-toggles">
                            <button
                                className={`safe-btn ${safetyLevel === 'conservative' ? 'active' : ''}`}
                                onClick={() => setSafetyLevel('conservative')}>
                                🛡️ Safe (30%)
                            </button>
                            <button
                                className={`mod-btn ${safetyLevel === 'moderate' ? 'active' : ''}`}
                                onClick={() => setSafetyLevel('moderate')}>
                                ⚖️ Moderate (50%)
                            </button>
                            <button
                                className={`agg-btn ${safetyLevel === 'aggressive' ? 'active' : ''}`}
                                onClick={() => setSafetyLevel('aggressive')}>
                                🚀 Max (60%)
                            </button>
                        </div>
                        <p className="safety-hint">
                            {safetyLevel === 'conservative' && "Use only 30% of income for EMI. Recommended for families."}
                            {safetyLevel === 'moderate' && "Standard Bank Norm (50% of income)."}
                            {safetyLevel === 'aggressive' && "Aggressive borrowing. High risk."}
                        </p>
                    </div>
                </div>

                {/* Right: Results */}
                <div className="result-panel">
                    {result ? (
                        <>
                            <div className="highlight-card">
                                <h3>Take-Home Budget</h3>
                                <h1>{formatMoney(result.maxProperty)}</h1>
                                <p>Maximum Property Value you can consider</p>
                                <div className="loan-sub-info">
                                    <small>Max Bank Loan: <strong>{formatMoney(result.maxLoan)}</strong></small>
                                </div>
                            </div>

                            {/* Hidden Cost Alert */}
                            <div className={`cash-alert-box ${result.isCashDeficit ? 'deficit' : 'surplus'}`}>
                                <div className="alert-header">
                                    <h4>{result.isCashDeficit ? '⚠️ Cash Shortfall Alert' : '✅ You are Cash Ready'}</h4>
                                </div>
                                <p>
                                    {result.isCashDeficit
                                        ? `You need ${formatMoney(result.cashShortfall)} MORE upfront cash to close this deal.`
                                        : "Great! Your savings cover the Downpayment + All Hidden Costs."}
                                </p>
                            </div>

                            <div className="hidden-cost-breakdown">
                                <h4>🕵️‍♂️ The Real Cash Breakdown</h4>
                                <div className="cost-row downpayment">
                                    <span>Base Downpayment (20%)</span>
                                    <span>{formatMoney(result.breakdown.downpayment)}</span>
                                </div>
                                <div className="divider"></div>
                                <div className="cost-row hidden">
                                    <span>Stamp Duty (6%)</span>
                                    <span>+ {formatMoney(result.breakdown.stampDuty)}</span>
                                </div>
                                <div className="cost-row hidden">
                                    <span>Registration (1%)</span>
                                    <span>+ {formatMoney(result.breakdown.registration)}</span>
                                </div>
                                <div className="cost-row hidden">
                                    <span>Brokerage & Legal (1.5%)</span>
                                    <span>+ {formatMoney(result.breakdown.brokerage + result.breakdown.misc)}</span>
                                </div>
                                <div className="total-cash-row">
                                    <span>Total Cash Needed Day 1</span>
                                    <strong>{formatMoney(result.breakdown.totalCashNeeded)}</strong>
                                </div>
                                <div className="user-cash-row">
                                    <span>Your Available Savings</span>
                                    <span>- {formatMoney(savings)}</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="error-state">
                            <h3>Income too low for a loan</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BudgetCalculator;
