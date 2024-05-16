import React from 'react';

import { Header } from '../components';

import './CSS/dental.css';

const Dental = () => {
  return (
    <div>
      <div className='ben__dental-header' id='accident'>
        <Header 
          title='Dental Insurance'
          subtitle="Find the right plan for you and your family."
          buttonText='Start Your Quote'
          buttonUrl='connect'
        />
      </div>

      <div className='ben__policy-body' id='products'>
        <h2>What is Dental Insurance?</h2>
        <p>Dental insurance is a type of health insurance that covers a portion of the costs associated with dental care, including preventive services like cleanings and check-ups, as well as treatments such as fillings, extractions, and root canals. Some plans may also offer coverage for orthodontic treatment like braces or dental appliances.</p>
        <h2>Who is Dental Insurance For?</h2>
        <p>It's for individuals and families who want financial assistance with the expenses of routine dental care and unexpected dental procedures. Dental insurance can be beneficial for anyone looking to maintain good oral health and manage dental costs more effectively.</p>
        <h2>Ready to Enroll?</h2>
      </div>

      <div className='ben__home-container-footer'>
        <h2>Get in contact with an agent </h2>
        <a href='connect' target='_blank'><button>Connect</button></a>
      </div>

    </div>
  )
}

export default Dental
