import React from 'react';

const Login = () => {
    const handleForm = (e: any) => {
        e.preventDefault(e);
        alert('Welcome');
    }

    return (
        <form className='Form' onSubmit={handleForm}>
            <h1>Login</h1>
            <p>Please sign in to continue</p>
            <div className='input'>
                <input type="text" placeholder='EMAIL' />
                <input type="text" placeholder='PASSWORD' />

                <button className='button-S'>SIGN UP </button>
                <button className='button-L'>LOGIN </button>
            </div>
        </form>
    );
};
export default Login;