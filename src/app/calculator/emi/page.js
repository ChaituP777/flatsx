'use client';

import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../Calculator.css';

const EMICalculator = () => {
    const [activeTab, setActiveTab] = useState('standard');
    const chartRef = useRef(null);
    const chartRefCompare = useRef(null); // New ref
    const chartInstance = useRef(null);
    const chartInstanceCompare = useRef(null); // New ref

    const [formData, setFormData] = useState({
        loanAmount: '5000000',
        loanTenure: '20',
        interestRate: '8.75',
        prePaymentFreq: 'monthly',
        prePaymentAmount: '5000',
        currentRent: '25000',
        yearlyIncrement: '10', // For step-up
        inflationRate: '6'
    });

    const [result, setResult] = useState(null);

    // Bank Data
    const banks = [
        { id: 'sbi', name: 'State Bank of India (SBI)', rate: '8.50' },
        { id: 'hdfc', name: 'HDFC Bank', rate: '8.70' },
        { id: 'icici', name: 'ICICI Bank', rate: '8.75' },
        { id: 'axis', name: 'Axis Bank', rate: '8.60' },
        { id: 'pnb', name: 'Punjab National Bank', rate: '8.55' },
        { id: 'bob', name: 'Baroda (Bank of Baroda)', rate: '8.65' },
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBankChange = (e) => {
        const bank = banks.find(b => b.id === e.target.value);
        if (bank) {
            setFormData({ ...formData, interestRate: bank.rate });
        }
    };

    const calculateAll = () => {
        const P = parseFloat(formData.loanAmount);
        const R = parseFloat(formData.interestRate) / 100 / 12;
        const N = parseFloat(formData.loanTenure) * 12;

        // 1. Standard EMI
        const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        const totalAmount = emi * N;
        const totalInterest = totalAmount - P;

        // 2. Pre-payment Impact
        const prepayAmount = parseFloat(formData.prePaymentAmount) || 0;
        const newEmi = emi + prepayAmount;
        // New tenure calculation
        const newN = Math.log(newEmi / (newEmi - P * R)) / Math.log(1 + R);
        const savedMonths = N - newN;
        const savedInterest = totalInterest - ((newEmi * newN) - P);

        // 3. Rent vs Buy
        // Simple heuristic: If Monthly Rent > 70% of EMI, buying might be better long term
        // Including capital appreciation (assuming 5% property growth vs 6% rent increase)
        const rent = parseFloat(formData.currentRent);
        const rentVerdict = rent > (emi * 0.6) ? "Buying is Recommended" : "Renting is Cheaper";

        // 4. Inflation Adjustment (Real Cost)
        const inflation = parseFloat(formData.inflationRate) / 100;
        // PV of total payments
        // Approximation for real value total cost
        const realTotalCost = totalAmount / Math.pow(1 + inflation, parseFloat(formData.loanTenure) / 2);

        setResult({
            emi: emi,
            totalInterest: totalInterest,
            totalAmount: totalAmount,
            savedInterest: savedInterest > 0 ? savedInterest : 0,
            savedTenure: savedMonths > 0 ? (savedMonths / 12).toFixed(1) : 0,
            rentVerdict: rentVerdict,
            realCost: realTotalCost,
            newTenure: (newN / 12).toFixed(1)
        });
    };

    // Real-time calculation effect
    useEffect(() => {
        calculateAll();
    }, [formData]);



    // Helper to create chart
    const createChart = (ctx, data, colors, labels) => {
        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Principal', labels[1]],
                datasets: [{
                    data: data,
                    backgroundColor: ['#4e54c8', colors[1]],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '70%',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 10 } },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.label + ': ' + new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(context.raw);
                            }
                        }
                    }
                }
            }
        });
    };

    // Chart Effect
    useEffect(() => {
        if (!result) return;

        // 1. Main Chart (Standard)
        if (chartRef.current) {
            if (chartInstance.current) chartInstance.current.destroy();
            const ctx = chartRef.current.getContext('2d');

            // In prepayment tab, this is the "Before" chart
            chartInstance.current = createChart(
                ctx,
                [parseFloat(formData.loanAmount), result.totalInterest],
                ['#4e54c8', '#ff6b6b'],
                ['Principal', 'Standard Interest']
            );
        }

        // 2. Comparison Chart (Pre-payment only)
        if (activeTab === 'prepayment' && chartRefCompare.current) {
            if (chartInstanceCompare.current) chartInstanceCompare.current.destroy();
            const ctx2 = chartRefCompare.current.getContext('2d');

            const newInterest = result.totalInterest - result.savedInterest;
            chartInstanceCompare.current = createChart(
                ctx2,
                [parseFloat(formData.loanAmount), newInterest],
                ['#4e54c8', '#4cd137'],
                ['Principal', 'New Reduced Interest']
            );
        }

    }, [result, activeTab]);

    const formatMoney = (val) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <div className="calculator-page">
            <div className="calculator-hero">
                <div className="container">
                    <h1>Advanced EMI Calculator</h1>
                    <p>Real-time analysis, pre-payment savings, and buy vs rent insights.</p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '-50px' }}>
                <div className="calc-dashboard">

                    {/* Left Panel: Inputs */}
                    <div className="calc-inputs card-panel">
                        <div className="tabs">
                            <button className={activeTab === 'standard' ? 'active' : ''} onClick={() => setActiveTab('standard')}>Standard</button>
                            <button className={activeTab === 'prepayment' ? 'active' : ''} onClick={() => setActiveTab('prepayment')}>Pre-payment</button>
                            <button className={activeTab === 'rentbuy' ? 'active' : ''} onClick={() => setActiveTab('rentbuy')}>Rent vs Buy</button>
                        </div>

                        <div className="input-group-container">
                            <label>Loan Amount (₹)</label>
                            <div className="range-input">
                                <input type="range" min="500000" max="50000000" step="100000"
                                    name="loanAmount" value={formData.loanAmount} onChange={handleChange} />
                                <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} />
                            </div>

                            <label>Interest Rate (%)</label>
                            <div className="bank-chips">
                                {banks.map(b => (
                                    <span key={b.id} onClick={() => setFormData({ ...formData, interestRate: b.rate })}
                                        className={formData.interestRate === b.rate ? 'active' : ''}>
                                        {b.name.split(' ')[0]} ({b.rate}%)
                                    </span>
                                ))}
                            </div>
                            <input type="number" step="0.01" name="interestRate" value={formData.interestRate} onChange={handleChange} className="simple-input" />

                            <label>Tenure (Years)</label>
                            <div className="range-input">
                                <input type="range" min="1" max="30" step="1"
                                    name="loanTenure" value={formData.loanTenure} onChange={handleChange} />
                                <span>{formData.loanTenure} Years</span>
                            </div>

                            {/* Advanced Inputs based on Tab */}
                            {activeTab === 'prepayment' && (
                                <div className="advanced-section">
                                    <h3>💰 Extra Monthly Payment</h3>
                                    <input type="range" min="0" max="50000" step="1000"
                                        name="prePaymentAmount" value={formData.prePaymentAmount} onChange={handleChange} />
                                    <div className="val-display">{formatMoney(formData.prePaymentAmount)} / month</div>
                                </div>
                            )}

                            {activeTab === 'rentbuy' && (
                                <div className="advanced-section">
                                    <h3>🏠 Current Monthly Rent</h3>
                                    <input type="number" name="currentRent" value={formData.currentRent} onChange={handleChange} className="simple-input" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Panel: Results & Insights */}
                    <div className="calc-results card-panel">
                        {result && (
                            <>
                                <div className="main-result">
                                    <div className="emi-display-box">
                                        <p>Monthly EMI</p>
                                        <h2>{formatMoney(result.emi)}</h2>
                                    </div>

                                    {/* Chart Area: Single or Dual based on tab */}
                                    <div className={`chart-wrapper ${activeTab === 'prepayment' ? 'dual-view' : ''}`}>

                                        {/* Chart 1: Standard */}
                                        <div className="chart-item">
                                            {activeTab === 'prepayment' && <h5>Without Pre-payment</h5>}
                                            <div className="chart-container">
                                                <canvas ref={chartRef}></canvas>
                                            </div>
                                            {activeTab === 'prepayment' && (
                                                <div className="new-stats-box standard-stats">
                                                    <p>Interest: <strong>{formatMoney(result.totalInterest)}</strong></p>
                                                    <p>Total: <strong>{formatMoney(result.totalAmount)}</strong></p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Chart 2: Comparison (Only for Pre-payment) */}
                                        {activeTab === 'prepayment' && (
                                            <div className="chart-item">
                                                <h5>With Pre-payment</h5>
                                                <div className="chart-container">
                                                    <canvas ref={chartRefCompare}></canvas>
                                                </div>
                                                <div className="new-stats-box">
                                                    <p>New Interest: <strong>{formatMoney(result.totalInterest - result.savedInterest)}</strong></p>
                                                    <p>New Total: <strong>{formatMoney(result.totalAmount - result.savedInterest)}</strong></p>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {activeTab !== 'prepayment' && (
                                    <div className="insights-grid">
                                        <div className="insight-item">
                                            <span>Total Interest</span>
                                            <strong>{formatMoney(result.totalInterest)}</strong>
                                        </div>
                                        <div className="insight-item">
                                            <span>Total Payable</span>
                                            <strong>{formatMoney(result.totalAmount)}</strong>
                                        </div>
                                    </div>
                                )}

                                {/* Dynamic Real-time Insights */}
                                {activeTab === 'prepayment' && (
                                    <div className="insight-badge success">
                                        <i className="fas fa-piggy-bank"></i>
                                        <div>
                                            <h4>You Save {formatMoney(result.savedInterest)}!</h4>
                                            <p>And finish your loan <strong>{result.savedTenure} years</strong> earlier.</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'rentbuy' && (
                                    <div className={`insight-badge ${result.rentVerdict.includes('Buying') ? 'success' : 'warning'}`}>
                                        <i className="fas fa-home"></i>
                                        <div>
                                            <h4>{result.rentVerdict}</h4>
                                            <p>Based on your rent ({formatMoney(formData.currentRent)}) vs EMI comparison.</p>
                                        </div>
                                    </div>
                                )}

                                <div className="real-cost-box">
                                    <p>
                                        📉 Real Cost (Inflation Adj.)
                                        <span className="info-tooltip" data-tooltip="This is the value of your total repayment in today's money, adjusted for 6% annual inflation/money devaluation.">
                                            ℹ️
                                        </span>
                                    </p>
                                    <h4>{formatMoney(result.realCost)}</h4>
                                    <small>Value in today's money (@{formData.inflationRate}% inflation)</small>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EMICalculator;
