import React from 'react';
import LoanCalculator from './LoanCalculator';
import SipCalculator from './SipCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Loan vs SIP Calculator</h1>
      <LoanCalculator />
      <SipCalculator />
    </div>
  );
}

export default App;
