import React from 'react';

import { Header } from '../components';

import './CSS/life.css';

const Life = () => {
  return (
    <div>
      <div className='ben__life-header' id='accident'>
        <Header 
          title='Life Insurance'
          subtitle="Keep your families financial security protected."
          buttonText='Start Your Quote'
          buttonUrl='connect'
        />
      </div>

      <div className='ben__policy-body' id='products'>
        <h2>What is Life Insurance?</h2>
        <p>
Life insurance is a contract between an individual and an insurance company, where the insurer agrees to pay a designated beneficiary a sum of money upon the death of the insured person. This payment, known as the death benefit, is typically paid out in a lump sum and is intended to provide financial protection and support to the insured person's loved ones in the event of their death.</p>
        <h2>Who is Life Insurance For?</h2>
        <p>It's for anyone who wants to ensure financial security for their loved ones in the event of their passing. Life insurance can help cover expenses like funeral costs, outstanding debts, mortgage payments, and provide income replacement for dependents. It's particularly important for individuals with dependents or financial obligations, such as spouses, children, or aging parents, who would face financial hardship in the absence of the insured person's income.</p>
        <h2>Ready to Enroll?</h2>
      </div>

      <div className='ben__home-container-footer'>
        <h2>Get in contact with an agent </h2>
        <a href='connect' target='_blank'><button>Connect</button></a>
      </div>

    </div>
  )
}

export default Life
