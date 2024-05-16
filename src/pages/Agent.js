import React from 'react';

import { Navbar } from '../components';

import './CSS/agent.css';

const Agent = () => {
    return (
        <div className='ben__agent'>
            <Navbar />
            <div className='ben__family-body'>
                <h1>Tell Us More</h1>
                <p>Enter your contact information and an agent will be contacting you shortly.</p>
            </div>
            <div className='ben__family-input'>
                <h3>Step 3: Let us know who you are.</h3>
            </div>
            <div className='ben__family-input_form'>
                <form>
                    <div className='ben__family-input_form-name'>
                        <input type='text' placeholder='First Name' required />
                        <input type='text' placeholder='Last Name' required />
                    </div>
                    <div className='ben__family-input_form-contact'>
                        <input type='tel' id='phone' name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Phone Number' required />
                        <input type='text' placeholder='Email' required />
                    </div>
                    <div className='ben__family-input_form-btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Agent;