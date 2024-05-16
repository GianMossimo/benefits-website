import React from 'react';
import './header.css';
import { Navbar } from '../../components';

const Header = ({ title, subtitle, buttonText, buttonUrl, imageUrl }) => {

    const headerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.6)'
    };

    return (
        <div className='ben__header'>
            <div className='ben__header-container'>
                <Navbar />
                <div className='ben__header-container-content'>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                    <a href={buttonUrl} target='_blank'>
                        <button className='ben__header-container-content-btn'>
                            <span></span>
                            <a>{buttonText}</a>
                            <span></span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;