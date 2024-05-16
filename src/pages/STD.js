import React from 'react';

import { Header } from '../components';

import './CSS/std.css';

const STD = () => {
  return (
    <div>
      <div className='ben__std-header' id='accident'>
        <Header 
          title='Short-Term Disability Insurance'
          subtitle="Don't let missing work turn into missing a paycheck."
          buttonText='Start Your Quote'
          buttonUrl='connect'
        />
      </div>

      <div className='ben__policy-body' id='products'>
        <h2>What is Short-Term Disability Insurance?</h2>
        <p>Short-term disability insurance provides income replacement for individuals who are temporarily unable to work due to illness, injury, or pregnancy. It typically pays a percentage of your pre-disability income for a specified period, usually ranging from a few weeks to several months, after a waiting period.</p>
        <h2>Who is Short-Term Disability Insurance For?</h2>
        <p>It's for anyone who wants financial protection against the loss of income during a temporary inability to work. This insurance can be particularly beneficial for pregnant individuals, as it can help cover expenses during maternity leave when they are unable to work but still need to maintain their financial responsibilities. Additionally, it's valuable for those facing unexpected illnesses or injuries that temporarily prevent them from working and earning an income.</p>
        <h2>Ready to Enroll?</h2>
      </div>

      <div className='ben__home-container-footer'>
        <h2>Get in contact with an agent </h2>
        <a href='connect' target='_blank'><button>Connect</button></a>
      </div>

    </div>
  )
}

export default STD;