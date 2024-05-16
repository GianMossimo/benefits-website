import React from 'react';

import { Header } from '../components';

import './CSS/critical.css';

const Critical = () => {
  return (
    <div>
      <div className='ben__critical-header' id='accident'>
        <Header 
          title='Critical Illness Insurance'
          subtitle="Recover from critical illness without worrying over the cost of treatment."
          buttonText='Start Your Quote'
          buttonUrl='connect'
        />
      </div>

      <div className='ben__policy-body' id='products'>
        <h2>What is Critical Illness Insurance?</h2>
        <p>Critical Illness insurance provides a lump-sum payment if you're diagnosed with a covered serious illness, like cancer, heart attack, or stroke. It helps cover expenses not typically addressed by health insurance, such as mortgage payments or travel costs for specialized treatment.</p>
        <h2>Who is Critical Illness Insurance For?</h2>
        <p>It's for anyone looking to safeguard against the financial impact of a major illness. This insurance can be particularly valuable for those with a family history of critical illnesses, as well as individuals concerned about the potential financial strain of extensive medical treatment or recovery periods.</p>
        <h2>Ready to Enroll?</h2>
      </div>

      <div className='ben__home-container-footer'>
        <h2>Get in contact with an agent </h2>
        <a href='connect' target='_blank'><button>Connect</button></a>
      </div>

    </div>
  )
}

export default Critical
