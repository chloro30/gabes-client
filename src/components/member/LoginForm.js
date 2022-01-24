import React from 'react';
import InputLogin from './InputLogin';
import '../scss/LoginForm.scss';

function LoginForm() {
    return (
        <section className='login-con inner-con'>
            <InputLogin />
        </section>
    );
}

export default LoginForm;