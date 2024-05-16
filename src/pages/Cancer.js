import React from 'react';

import { Header } from '../components';

import './CSS/cancer.css';

const Cancer = () => {
  return (
    <div>
      <div className='ben__cancer-header' id='accident'>
        <Header 
          title='Cancer Insurance'
          subtitle="Relieve the financial strain of a cancer diagnosis."
          buttonText='Start Your Quote'
          buttonUrl='connect'
        />
      </div>

      <div className='ben__policy-body' id='products'>
        <h2>What is Cancer Insurance?</h2>
        <p>Cancer insurance is supplemental coverage designed to help with expenses not covered by regular health insurance, like deductibles and copayments, specifically for cancer diagnosis and treatment. It can cover costs such as chemotherapy, radiation therapy, surgery, and medications, lessening the financial burden associated with cancer care.</p>
        <h2>Who is Cancer Insurance For?</h2>
        <p>
Accident insurance is for anyone seeking extra financial protection in case of unexpected injuries. It helps cover medical costs, deductibles, and other expenses resulting from accidents, like fractures or emergency room visits.</p>
        <h2>Ready to Enroll?</h2>
      </div>

      <div className='ben__home-container-footer'>
        <h2>Get in contact with an agent </h2>
        <a href='connect' target='_blank'><button>Connect</button></a>
      </div>

    </div>
  )
}

export default Cancer
