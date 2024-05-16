import React, { useState } from 'react';

import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri'

import './navbar.css';

const Navbar = () => {

    const [ toggleMenu, setToggleMenu ] = useState(false);

    return (
        <div className='ben__navbar'>
            <div className='ben__navbar-links'>
                <div className='ben__navbar-links_container'>
                    <p><a href='/' rel='noreferrer'>Home</a></p>
                    <p><a href='connect' target='_blank' rel='noreferrer'>Connect With an Agent</a></p>
                    <p><a href='#products'>Products</a></p>
                </div>
            </div>
            <div className='ben__navbar-sign'>
                <a href='login' target='_blank' rel='noreferrer'><button>File a Claim</button></a>
            </div>
            <div className='ben__navbar-menu'>
                {
                    toggleMenu
                    ? <RiCloseLine className='navbar-icon' color='#F5F5F5' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Fill className='navbar-icon' color='#F5F5F5' size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className='ben__navbar-menu_container scale-up-hor-right'>
                            <div className='ben__navbar-menu_container-links'>
                                <p><a href='/' rel='noreferrer'>Home</a></p>
                                <p><a href='connect' target='_blank' rel='noreferrer'>Connect With an Agent</a></p>
                                <p><a href='#products'>Products</a></p>
                                <div className='ben__navbar-menu_container-links_sign'>
                                    <a href='claims' target='_blank' rel='noreferrer'><button>File a Claim</button></a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;