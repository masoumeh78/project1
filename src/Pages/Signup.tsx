import React from 'react';
import '../App.css';


const Signup = () => {

    const handleForm = (e: any) => {
        e.preventDefault(e);
        alert('Welcome')
    }
    return (
        <form className='Form' onSubmit={handleForm}>
            <h1>Create Account</h1>
            <div className='input'>
                <input type="text" placeholder='FULL NAME' />
                <input type="text" placeholder='EMAIL' />
                <input type="text" placeholder='PASSWORD' />
                <input type="text" placeholder='CONFIRM PASSWORD' />


            </div>
            <input type="checkbox" className='checkbox'/>
            <label >
                قوانین را خواندم و قبول دارم
            </label>

            {/* <button className='button-S'>SIGN UP </button>
            <button className='button-L'>LOGIN </button> */}

        </form>
    );
};
export default Signup;