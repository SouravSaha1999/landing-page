import React from 'react'
import Navbar from './Navbar';

function Header() {
    return (
        <div id="main">
            <Navbar/>
            <div className='name'>
                <h1><span>Launch Your App</span>with Confidence and Creativity</h1>
                <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore molestias alias cumque recusandae!</p>
                <a href='#' className='cv-btn'>Get Started</a>
            </div>
        </div>
    )
}

export default Header
