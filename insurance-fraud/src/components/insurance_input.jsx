import React, {useState} from 'react';

function InsuranceForm(){
    const [inputs, setInputs] = useState({});
    
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setInputs(prev => ({...prev, [name]:value}))
    }

    return(
        <div>
            {/* The Form which collects the necessary data */}
            <form>
                <label>Name of the Applicant
                    <input type='text' name='username' onChange={handleChange}/>
                </label>

                <label>Age
                    <input type='text' name='age' onChange={handleChange}/>
                </label>

                <label>Sex
                    <input type='text' name='sex' onChange={handleChange}/>
                </label>

                <label>Marital Status
                    <input type='text' name='maritalstatus' onChange={handleChange}/>
                </label>

                <label>Date of Application
                    <input type='date' name='date' onChange={handleChange}/>
                </label>

                <label>Date of Claim
                    <input type='date' name='dateofclaim' onChange={handleChange}/>
                </label>

                <label>Make of the car
                    <input type='text' name='make' onChange={handleChange}/>
                </label>

                <label>Accident Area
                    <input type='text' name='accidentarea' onChange={handleChange}/>
                </label>

                <label>Fault
                    <input type='text' name='fault' onChange={handleChange}/>
                </label>

                <label>Vehicle Category
                    <input type='text' name='vehiclecategory' onChange={handleChange}/>
                </label>

                <label>Vehicle Price
                    <input type='text' name='vehicleprice' onChange={handleChange}/>
                </label>

                <label>Marital Status
                    <input type='text' name='maritalstatus' onChange={handleChange}/>
                </label>

                <label>Policy Number
                    <input type='text' name='maritalstatus' onChange={handleChange}/>
                </label>

                <label>Policy Type
                    <input type='text' name='policy' onChange={handleChange}/>
                </label>

                <label>Rep Number
                    <input type='text' name='repnumber' onChange={handleChange}/>
                </label>

                <label>Deductible
                    <input type='text' name='deductible' onChange={handleChange}/>
                </label>

                <label>Driver Rating
                    <input type='text' name='driverrating' onChange={handleChange}/>
                </label>

                <label>Days Policy Accident
                    <input type='text' name='days_policy_accident' onChange={handleChange}/>
                </label>

                <label>Days Policy Claim
                    <input type='text' name='days_policy_claim' onChange={handleChange}/>
                </label>

                <label>Past Number Of Claims
                    <input type='text' name='pastnumberofclaims' onChange={handleChange}/>
                </label>

                <label>Age Of Vehicle
                    <input type='text' name='ageofvehicle' onChange={handleChange}/>
                </label>

                <label>Age Of Policy Holder
                    <input type='text' name='ageofpolicyholder' onChange={handleChange}/>
                </label>

                <label>Police Report Filed
                    <input type='text' name='policereportfiled' onChange={handleChange}/>
                </label>

                <label>Witness Present
                    <input type='text' name='witnesspresent' onChange={handleChange}/>
                </label>

                <label>Agent Type
                    <input type='text' name='agenttype' onChange={handleChange}/>
                </label>

                <label>Number Of Supplements
                    <input type='text' name='numberofsuppliments' onChange={handleChange}/>
                </label>

                <label>Address Change (Claim)
                    <input type='text' name='addresschange_claim' onChange={handleChange}/>
                </label>

                <label>Number Of Cars
                    <input type='text' name='numberofcars' onChange={handleChange}/>
                </label>

                <label>Year
                    <input type='text' name='year' onChange={handleChange}/>
                </label>

                <label>Base Policy
                    <input type='text' name='basepolicy' onChange={handleChange}/>
                </label>
            </form>
        </div>
    )
}

export default InsuranceForm;