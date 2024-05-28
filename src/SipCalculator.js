import React, { useState } from 'react';

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  const calculateSIP = (monthlyInvestment, rate, time) => {
    const monthlyRate = rate / 12 / 100;
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, time) - 1) / monthlyRate) * (1 + monthlyRate);
    return futureValue;
  };

  const handleCalculate = () => {
    const fv = calculateSIP(monthlyInvestment, rate, time);
    setFutureValue(fv.toFixed(2));
  };

  return (
    <div>
      <h2>SIP Calculator</h2>
      <label>
        Monthly Investment:
        <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} />
      </label>
      <br />
      <label>
        Annual Rate of Return (%):
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </label>
      <br />
      <label>
        Time (months):
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate Future Value</button>
      {futureValue > 0 && <p>Future Value: {futureValue}</p>}
    </div>
  );
};

export default SipCalculator;
