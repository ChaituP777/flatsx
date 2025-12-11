'use client';

import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


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
        <div className="min-h-screen bg-section-1">
            <div className="bg-primary pt-[80px] pb-[100px] text-center text-white">
                <div className="container">
                    <h1 className="text-[40px] font-bold mb-[15px] text-white">Advanced EMI Calculator</h1>
                    <p className="text-[18px] opacity-90 text-white">Real-time analysis, pre-payment savings, and buy vs rent insights.</p>
                </div>
            </div>

            <div className="container -mt-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[30px] mb-[50px]">

                    {/* Left Panel: Inputs */}
                    <div className="bg-white p-[30px] rounded-[12px] shadow-[0_5px_20px_rgba(0,0,0,0.08)] border border-border-1">
                        <div className="flex bg-section-1 p-[5px] rounded-[8px] mb-[25px]">
                            <button className={`flex-1 p-[10px] border-none bg-transparent font-semibold text-paragraph cursor-pointer rounded-[6px] transition-all duration-300 ${activeTab === 'standard' ? 'bg-white text-secondary shadow-[0_2px_5px_rgba(0,0,0,0.1)]' : ''}`} onClick={() => setActiveTab('standard')}>Standard</button>
                            <button className={`flex-1 p-[10px] border-none bg-transparent font-semibold text-paragraph cursor-pointer rounded-[6px] transition-all duration-300 ${activeTab === 'prepayment' ? 'bg-white text-secondary shadow-[0_2px_5px_rgba(0,0,0,0.1)]' : ''}`} onClick={() => setActiveTab('prepayment')}>Pre-payment</button>
                            <button className={`flex-1 p-[10px] border-none bg-transparent font-semibold text-paragraph cursor-pointer rounded-[6px] transition-all duration-300 ${activeTab === 'rentbuy' ? 'bg-white text-secondary shadow-[0_2px_5px_rgba(0,0,0,0.1)]' : ''}`} onClick={() => setActiveTab('rentbuy')}>Rent vs Buy</button>
                        </div>

                        <div className="mb-[20px]">
                            <label className="block font-semibold mb-[8px] text-heading text-[14px]">Loan Amount (₹)</label>
                            <div className="flex items-center gap-[15px] mb-[20px]">
                                <input type="range" min="500000" max="50000000" step="100000"
                                    name="loanAmount" value={formData.loanAmount} onChange={handleChange} className="flex-1 cursor-pointer accent-secondary" />
                                <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} className="w-[120px] p-[8px] border border-border-1 rounded-[6px] text-right font-bold text-heading bg-white" />
                            </div>

                            <label className="block font-semibold mb-[8px] text-heading text-[14px]">Interest Rate (%)</label>
                            <div className="flex gap-[10px] mb-[10px] flex-wrap">
                                {banks.map(b => (
                                    <span key={b.id} onClick={() => setFormData({ ...formData, interestRate: b.rate })}
                                        className={`p-[6px_12px] bg-section-1 rounded-[20px] text-[13px] cursor-pointer border border-transparent transition-all duration-200 ${formData.interestRate === b.rate ? 'bg-red-100 text-secondary border-secondary font-semibold' : ''}`}>
                                        {b.name.split(' ')[0]} ({b.rate}%)
                                    </span>
                                ))}
                            </div>
                            <input type="number" step="0.01" name="interestRate" value={formData.interestRate} onChange={handleChange} className="w-[120px] p-[8px] border border-border-1 rounded-[6px] text-right font-bold text-heading bg-white" />

                            <label className="block font-semibold mb-[8px] text-heading text-[14px] mt-[20px]">Tenure (Years)</label>
                            <div className="flex items-center gap-[15px] mb-[20px]">
                                <input type="range" min="1" max="30" step="1"
                                    name="loanTenure" value={formData.loanTenure} onChange={handleChange} className="flex-1 cursor-pointer accent-secondary" />
                                <span className="font-bold">{formData.loanTenure} Years</span>
                            </div>

                            {/* Advanced Inputs based on Tab */}
                            {activeTab === 'prepayment' && (
                                <div className="bg-[#f8f9fa] p-[20px] rounded-[8px] mt-[20px] border-l-4 border-secondary">
                                    <h3 className="text-[16px] mb-[15px] font-semibold">💰 Extra Monthly Payment</h3>
                                    <input type="range" min="0" max="50000" step="1000"
                                        name="prePaymentAmount" value={formData.prePaymentAmount} onChange={handleChange} className="w-full cursor-pointer accent-secondary" />
                                    <div className="text-[18px] font-bold text-secondary text-right mt-[5px]">{formatMoney(formData.prePaymentAmount)} / month</div>
                                </div>
                            )}

                            {activeTab === 'rentbuy' && (
                                <div className="bg-[#f8f9fa] p-[20px] rounded-[8px] mt-[20px] border-l-4 border-secondary">
                                    <h3 className="text-[16px] mb-[15px] font-semibold">🏠 Current Monthly Rent</h3>
                                    <input type="number" name="currentRent" value={formData.currentRent} onChange={handleChange} className="w-[120px] p-[8px] border border-border-1 rounded-[6px] text-right font-bold text-heading bg-white" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Panel: Results & Insights */}
                    <div className="bg-white p-[30px] rounded-[12px] shadow-[0_5px_20px_rgba(0,0,0,0.08)] border border-border-1">
                        {result && (
                            <>
                                <div className="relative min-h-[250px] flex flex-col justify-center items-center mb-[30px] pb-[20px]">
                                    <div className="text-center mb-[20px]">
                                        <p className="text-[14px] text-gray-600 m-0 uppercase tracking-widest font-semibold">Monthly EMI</p>
                                        <h2 className="text-[32px] text-secondary mt-[5px] font-black">{formatMoney(result.emi)}</h2>
                                    </div>

                                    {/* Chart Area */}
                                    <div className={`flex justify-center gap-[20px] w-full ${activeTab === 'prepayment' ? 'flex-row flex-wrap' : ''}`}>

                                        {/* Chart 1: Standard */}
                                        <div className="flex flex-col items-center">
                                            {activeTab === 'prepayment' && <h5 className="text-[14px] text-gray-600 mb-[10px] font-semibold">Without Pre-payment</h5>}
                                            <div className="relative w-[200px] h-[200px]">
                                                <canvas ref={chartRef}></canvas>
                                            </div>
                                            {activeTab === 'prepayment' && (
                                                <div className="mt-[15px] text-center bg-red-50 p-[10px] rounded-[8px] border border-red-200">
                                                    <p className="text-[12px] m-[3px_0] text-red-700">Interest: <strong>{formatMoney(result.totalInterest)}</strong></p>
                                                    <p className="text-[12px] m-[3px_0] text-red-700">Total: <strong>{formatMoney(result.totalAmount)}</strong></p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Chart 2: Comparison (Only for Pre-payment) */}
                                        {activeTab === 'prepayment' && (
                                            <div className="flex flex-col items-center">
                                                <h5 className="text-[14px] text-gray-600 mb-[10px] font-semibold">With Pre-payment</h5>
                                                <div className="relative w-[200px] h-[200px]">
                                                    <canvas ref={chartRefCompare}></canvas>
                                                </div>
                                                <div className="mt-[15px] text-center bg-green-50 p-[10px] rounded-[8px] border border-green-200">
                                                    <p className="text-[12px] m-[3px_0] text-green-700">New Interest: <strong>{formatMoney(result.totalInterest - result.savedInterest)}</strong></p>
                                                    <p className="text-[12px] m-[3px_0] text-green-700">New Total: <strong>{formatMoney(result.totalAmount - result.savedInterest)}</strong></p>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {activeTab !== 'prepayment' && (
                                    <div className="grid grid-cols-2 gap-[15px] mb-[25px]">
                                        <div className="bg-section-1 p-[15px] rounded-[8px] text-center">
                                            <span className="text-[12px] block mb-[5px]">Total Interest</span>
                                            <strong className="text-[16px] text-heading">{formatMoney(result.totalInterest)}</strong>
                                        </div>
                                        <div className="bg-section-1 p-[15px] rounded-[8px] text-center">
                                            <span className="text-[12px] block mb-[5px]">Total Payable</span>
                                            <strong className="text-[16px] text-heading">{formatMoney(result.totalAmount)}</strong>
                                        </div>
                                    </div>
                                )}

                                {/* Dynamic Real-time Insights */}
                                {activeTab === 'prepayment' && (
                                    <div className="flex gap-[15px] p-[15px] rounded-[8px] items-center mb-[15px] bg-[#d4edda] text-[#155724]">
                                        <i className="fas fa-piggy-bank text-[24px]"></i>
                                        <div>
                                            <h4 className="m-0 mb-[5px] text-[16px] font-semibold">You Save {formatMoney(result.savedInterest)}!</h4>
                                            <p className="m-0 text-[13px] opacity-90">And finish your loan <strong>{result.savedTenure} years</strong> earlier.</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'rentbuy' && (
                                    <div className={`flex gap-[15px] p-[15px] rounded-[8px] items-center mb-[15px] ${result.rentVerdict.includes('Buying') ? 'bg-[#d4edda] text-[#155724]' : 'bg-[#fff3cd] text-[#856404]'}`}>
                                        <i className="fas fa-home text-[24px]"></i>
                                        <div>
                                            <h4 className="m-0 mb-[5px] text-[16px] font-semibold">{result.rentVerdict}</h4>
                                            <p className="m-0 text-[13px] opacity-90">Based on your rent ({formatMoney(formData.currentRent)}) vs EMI comparison.</p>
                                        </div>
                                    </div>
                                )}

                                <div className="border-t border-border-1 pt-[20px] text-center">
                                    <p className="mb-0">
                                        📉 Real Cost (Inflation Adj.)
                                        <span className="cursor-pointer ml-[8px] text-[14px] relative group">
                                            ℹ️
                                            <span className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 w-[250px] bg-[#333] text-white p-[10px] rounded-[6px] text-[12px] leading-[1.4] z-10 text-center shadow-lg mb-[5px]">
                                                This is the value of your total repayment in today's money, adjusted for 6% annual inflation/money devaluation.
                                            </span>
                                        </span>
                                    </p>
                                    <h4 className="text-[20px] text-[#555] m-[5px_0]">{formatMoney(result.realCost)}</h4>
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
