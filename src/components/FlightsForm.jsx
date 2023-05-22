import {useState} from 'react';

const FlightsForm = ()=>{

    const [enteredDeparting, setEnteredDeparting] = useState('');

    const submitHandler = (event)=>{
        event.preventDefault();
        setEnteredDeparting(event);

    };
return (
    <div>
        <form onSubmit={submitHandler}>
            <h1>Search Flights</h1>
            <div>
                <input
                 type="text"
                 value = {enteredDeparting}
                />
            </div>
        </form>
    </div>
    );
};
export default FlightsForm;