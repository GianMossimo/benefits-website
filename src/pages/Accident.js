import React from 'react';

import './CSS/accident.css';

import { Header } from '../components';


const Accident = () => {
  return (
    <div>
      <div className='ben__policy-header' id='accident'>
        <Header 
          title='Accident Insurance'
          subtitle="Don't let an accident disturb your peace of mind, let us help pay for your emergency treatment."
          buttonText='Start Your Quote'
          buttonUrl='connect'
        />
      </div>

      <div className='ben__policy-body' id='products'>
        <h2>What is Accident Insurance?</h2>
        <p>Accident insurance provides financial protection for injuries, disability, or death resulting from accidents. It covers medical expenses, disability income, or lump-sum payments for specified injuries such as loss of limb or sight. Unlike health insurance, it specifically focuses on accidents, offering supplementary coverage for expenses not fully addressed by other policies.</p>
        <h2>Who is Accident Insurance For?</h2>
        <p>Accident insurance is for anyone seeking financial protection in case of accidental injuries, disability, or death. It's beneficial for individuals who want coverage beyond what health insurance provides, ensuring they're financially supported in case of accidents resulting in medical expenses, disability, or loss of income.</p>
        <h2>Ready to Enroll?</h2>
      </div>

      <div className='ben__home-container-footer'>
        <h2>Get in contact with an agent </h2>
        <a href='connect' target='_blank'><button>Connect</button></a>
      </div>

    </div>
  )
}

export default Accident;