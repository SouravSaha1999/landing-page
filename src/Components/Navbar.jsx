import React, { useState } from 'react';
import logo from '../images/logo.png';

function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'}> 
            <a href='#' className='logo'>
                <img src={logo} al=""/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='#' className='active'>HOME</a></li>
                <li><a href='#'>SERVICES</a></li>
                <li><a href='#'>ABOUTS US</a></li>
                <li><a href='#'>CONTACT US</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
