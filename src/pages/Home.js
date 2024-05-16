import { Header } from '../components';

import React from 'react';

import './CSS/home.css';

import { } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faPersonFallingBurst, faRibbon, faHeartCrack, faTooth, faHospital, faDove, faCrutch, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className='ben__home' id='home'>

            <div className='ben__home-header'>
                <Header 
                    title='Quacky Benefits'
                    subtitle='Your One Stop Shop for Supplemental Insurance'
                    buttonText='Start Your Quote'
                    buttonUrl='connect'
                />
            </div>

            <div className='ben__home-container' id='products'>
                <h1>Get help covering what health insurance doesn't</h1>
                <div className='ben__home-cards'>
                    <div className='ben__home-cards_ind'>
                        <FontAwesomeIcon className='fab' icon={faPersonFallingBurst} />
                        <h2>Accident</h2>
                        <p>Don't let an accident disturb your peace of mind, let us help pay for your emergency treatment.</p>
                        <a href='accident' target='_blank'><button>Learn More</button></a>
                    </div>
                    <div className='ben__home-cards_ind'>
                        <FontAwesomeIcon className='fab' icon={faRibbon} />
                        <h2>Cancer</h2>
                        <p>Relieve the financial strain of a cancer diagnosis.</p>
                        <a href='cancer' target='_blank'><button>Learn More</button></a>
                    </div>
                    <div className='ben__home-cards_ind'>
                        <FontAwesomeIcon className='fab' icon={faHeartCrack} />
                        <h2>Critical Illness</h2>
                        <p>Recover from critical illness without worrying over the cost of treatment.</p>
                        <a href='critical' target='_blank'><button>Learn More</button></a>
                    </div>
                    <div className='ben__home-cards_ind'>
                        <FontAwesomeIcon className='fab' icon={faTooth} />
                        <h2>Dental</h2>
                        <p>Find the right plan for you and your family.</p>
                        <a href='dental' target='_blank'><button>Learn More</button></a>
                    </div>
                    <div className='ben__home-cards_ind'>
                        <FontAwesomeIcon className='fab' icon={faHospital} />
                        <h2>Hospital</h2>
                        <p>Offset the cost of high deductibles</p>
                        <a href='hospital' target='_blank'><button>Learn More</button></a>
                    </div>
                    <div className='ben__home-cards_ind'>
                        <FontAwesomeIcon className='fab' icon={faDove} />
                        <h2>Life</h2>
                        <p>Keep your families financial security protected.</p>
                        <a href='life' target='_blank'><button>Learn More</button></a>
                    </div>
                    <div className='ben__home-cards_ind'>
                        <FontAwesomeIcon className='fab' icon={faCrutch} />
                        <h2>Short Term Disability</h2>
                        <p>Don't let missing work turn into missing a paycheck.</p>
                        <a href='std' target='_blank'><button>Learn More</button></a>
                    </div>
                    <div className='ben__home-cards_ind'>
                        <FontAwesomeIcon className='fab' icon={faGlasses} />
                        <h2>Vision</h2>
                        <p>Find the right plan for your vision needs.</p>
                        <a href='vision' target='_blank'><button>Learn More</button></a>
                    </div>
                </div>

                <div className='ben__home-container-footer'>
                    <h2>Get in contact with an agent </h2>
                    <a href='connect' target='_blank'><button>Connect</button></a>
                </div>
            </div>
        </div>
    )
}

export default Home;