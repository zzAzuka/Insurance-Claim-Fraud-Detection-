import React from 'react';
import InsuranceForm from "./components/insurance_input";
import FileInput from './components/file_input';

function App(){
  return(
    <div>
      {/* The Heading of the application */}
      <h1>Welcome to the Insurance Claim Fraud Detector!</h1>

      {/* The Heading of the application */}
      <h2>Please upload your Car Insurance Claim PDF</h2>
      <FileInput/>
      {/* Our imported form components */}
      <InsuranceForm/>
    </div>
  )
}

export default App;