import React from 'react';

import { Header } from '../components';

import './CSS/vision.css';

const Vision = () => {
  return (
    <div>
      <div className='ben__vision-header' id='accident'>
        <Header 
          title='Vision Insurance'
          subtitle="Find the right plan for your vision needs."
          buttonText='Start Your Quote'
          buttonUrl='connect'
        />
      </div>

      <div className='ben__policy-body' id='products'>
        <h2>What is Vision Insurance?</h2>
        <p>Vision insurance covers eye care expenses like exams, glasses, and contacts. It helps with maintaining eye health and affording corrective eyewear. It's for anyone needing assistance with eye care costs, especially those requiring glasses or contacts for daily use.</p>
        <h2>Who is Vision Insurance For?</h2>
        <p>Vision insurance is for individuals seeking financial assistance with eye care expenses such as exams, glasses, and contact lenses. It's particularly beneficial for those who rely on corrective eyewear for daily activities and want to maintain good eye health without shouldering the full cost of these services out of pocket.</p>
        <h2>Ready to Enroll?</h2>
      </div>

      <div className='ben__home-container-footer'>
        <h2>Get in contact with an agent </h2>
        <a href='connect' target='_blank'><button>Connect</button></a>
      </div>

    </div>
  )
}

export default Vision
