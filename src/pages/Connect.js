import React from 'react';

import { Navbar } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

import './CSS/connect.css';

const Connect = () => {
  return (
    <div className='ben__connect'>
      <Navbar />
      <div className='ben__connect-body'>
        <h1>Begin Your Coverage Now</h1>
        <p>To go over your goals for our insurance policies and to begin your coverage, please fill out the questions below or call us at <span type='phone' >1-555-555-5555</span></p>
      </div>
      <div className='ben__connect-input'>
        <h3>Step 1: Enter Your Basic Information</h3>
        <p><span>All Fields Are Required</span></p>
        <form>
          <input type='text' name='zip' placeholder='Zip Code' required />
          <input type='text' name='age' placeholder='Age' required />
        </form>
        <h3>Who is the Coverage For?</h3>
        <div className='ben__connect-input_btn'>
          <a href='family' rel='noreferrer'><button type='submit'>Myself/Family<FontAwesomeIcon className='fab' icon={faPeopleRoof}/></button></a>
          <a href='family' rel='noreferrer'><button type='submit'>Employees<FontAwesomeIcon className='fab' icon={faPeopleGroup}/></button></a>
        </div>
      </div>
    </div>
  )
}

export default Connect;