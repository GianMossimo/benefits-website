import React from 'react';

import { Header } from '../components';

import './CSS/hospital.css';

const Hospital = () => {
  return (
    <div>
      <div className='ben__hospital-header' id='accident'>
        <Header 
          title='Hospital Insurance'
          subtitle="Offset the cost of high deductibles."
          buttonText='Start Your Quote'
          buttonUrl='connect'
        />
      </div>

      <div className='ben__policy-body' id='products'>
        <h2>What is Hospital Insurance?</h2>
        <p>Hospital insurance, also known as hospital indemnity insurance, is a type of supplemental health insurance that provides financial assistance for hospital-related expenses. It typically pays a fixed daily, weekly, or monthly amount for each day you're hospitalized, as well as additional benefits for intensive care unit stays, surgeries, and ambulance services.</p>
        <h2>Who is Hospital Insurance For?</h2>
        <p>It's for individuals who want added financial protection to cover expenses not fully covered by their primary health insurance in the event of a hospital stay. Hospital insurance can help mitigate the costs associated with hospitalization, including deductibles, copayments, and other out-of-pocket expenses, providing peace of mind during unexpected medical emergencies.</p>
        <h2>Ready to Enroll?</h2>
      </div>

      <div className='ben__home-container-footer'>
        <h2>Get in contact with an agent </h2>
        <a href='connect' target='_blank'><button>Connect</button></a>
      </div>

    </div>
  )
}

export default Hospital
