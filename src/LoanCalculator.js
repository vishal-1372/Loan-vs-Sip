import React, { useState } from 'react';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [emi, setEmi] = useState(0);

  const calculateEMI = (principal, rate, time) => {
    const monthlyRate = rate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, time)) / (Math.pow(1 + monthlyRate, time) - 1);
    return emi;
  };

  const handleCalculate = () => {
    const emiValue = calculateEMI(principal, rate, time);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <label>
        Principal:
        <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
      </label>
      <br />
      <label>
        Annual Rate of Interest (%):
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </label>
      <br />
      <label>
        Time (months):
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate EMI</button>
      {emi > 0 && <p>Monthly EMI: {emi}</p>}
    </div>
  );
};

export default LoanCalculator;
