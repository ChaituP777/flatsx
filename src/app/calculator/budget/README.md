# Budget & Affordability Calculator: Technical Reference 📘

This document explains the financial logic behind the **FlatSX Budget Calculator**.

## 1. Max Loan Eligibility (Bank Logic)
We use the **FOIR (Fixed Obligation to Income Ratio)** method, standard across Indian banks (HDFC, SBI, ICICI).

### Step 1: Calculate Available EMI Capacity
$$Capacity = (NetIncome \times FOIR) - ExistingObligations$$

**Safety Meter Settings:**
- **🛡️ Safe Mode:** Uses **30%** FOIR. (Recommended for families)
- **⚖️ Moderate:** Uses **50%** FOIR. (Standard Bank Norm)
- **🚀 Aggressive:** Uses **60%** FOIR. (High leverage)

### Step 2: Calculate Max Loan Amount (Reverse EMI)
Once we know the *Capacity* (Max EMI), we calculate the *Principal Loan Amount* using the Reverse Amortization formula:

$$LoanAmount = Capacity \times \frac{(1+r)^n - 1}{r(1+r)^n}$$

*Where:*
- **r**: Monthly Interest Rate ($Annual Rate / 12 / 100$)
- **n**: Tenure in Months (e.g., 240 for 20 years)

---

## 2. "True Affordability" Engine (Cash Logic)
Most calculators stop at "Max Loan". We go further to check if you have the **Cash** to close the deal.

### The "Hidden Cost" Breakdown
Property Purchase is NOT just Downpayment. We calculate the *Total Upfront Cash* required:

| Component | Rate (Approx) | Description |
| :--- | :--- | :--- |
| **Downpayment** | **20%** | Minimum required by banks (LTV 80%) |
| **Stamp Duty** | **6%** | State Government Tax |
| **Registration** | **1%** | Legal ownership transfer fee |
| **Brokerage** | **1%** | Agent fees |
| **Misc Fees** | **0.5%** | Legal, Processing, Admin charges |
| **TOTAL** | **~28.5%** | **Of Property Value** |

### The Verdict Logic
We compare user savings against this total requirement:

> **Shortfall = Total Cash Needed - User Savings**

- **If Shortfall > 0:** 🔴 **Alert:** "You are eligible for the loan, but you lack cash for taxes/fees."
- **If Shortfall <= 0:** 🟢 **Success:** "You are fully funded."
