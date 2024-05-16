import React from 'react';

import { Navbar } from '../components';

import './CSS/family.css';

const Family = () => {
    return (
        <div className='ben__family'>
            <Navbar />
            <div className='ben__family-body'>
                <h1>Request Your Quote Now</h1>
                <p>Let's balance your insurance needs with your current budget.</p>
            </div>
            <div className='ben__family-input'>
                <h3>Step 2: Choose Your Method of Contact</h3>
            </div>
            <div className='ben__family-input_btn'>
                <a href='agent' rel='noreferrer'><button>Contact an Agent Now</button></a>
                <a href='agent' rel='noreferrer'><button>Contact an Agent Later</button></a>
            </div>
        </div>
    )
}

export default Family;