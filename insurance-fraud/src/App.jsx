import React from 'react';
import InsuranceForm from "./components/insurance_input";

function App(){
  return(
    <div>
      {/* The Heading of the application */}
      <h1>Welcome to the Insurance Claim Fraud Detector!</h1>

      {/* Our imported form components */}
      <InsuranceForm />
    </div>
  )
}

export default App;