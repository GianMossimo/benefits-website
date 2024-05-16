import React from 'react';

import { Navbar } from '../components';

import './CSS/loginform.css';

const LoginForm = () => {
    return (
        <div className='ben__login'>
            <Navbar />
            <div className='ben__login-body'>
                <h1>Log In to File Your Claim</h1>
                <div className='ben__login-body_input'>
                    <form>
                        <input type='text' placeholder='Username' required />
                        <input type='text' placeholder='Email' required />
                        <input type='text' placeholder='Client ID' required />
                        <label for="policies">Your Policy:</label>
                        <select name="policies">
                            <option value="accident">Accident</option>
                            <option value="cancer">Cancer</option>
                            <option value="critical">Critical</option>
                            <option value="dental">Dental</option>
                            <option value="hospital">Hospital</option>
                            <option value="life">Life</option>
                            <option value="std">Short Term Disability</option>
                            <option value="vision">Vision</option>
                        </select>
                    </form>
                    <div className='ben__login-body_input-btn'>
                        <button type='submit'>Log In</button>
                    </div>
                    <div className='ben__login-body_input-span'>
                        <p>No Account? <span>Register Now</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;