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
                <label>Name of the applicant
                    <input type='text' name='username' onChange={handleChange}/>
                </label>

                <label>Date of Application
                    <input type='date' name='date' onChange={handleChange}/>
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

                <label>Policy Type
                    <input type='text' name='policy' onChange={handleChange}/>
                </label>
            </form>
        </div>
    )
}

export default InsuranceForm;