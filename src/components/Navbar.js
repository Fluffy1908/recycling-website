import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
        

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' style={{textDecoration: 'none'}}>
                    <img src="/images/recyclingLogo.png"/>
                </Link>
                <ul>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' style={{textDecoration: 'none'}}>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' style={{textDecoration: 'none'}}>
                            <span>About Us</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/what-we-do' className='nav-links' style={{textDecoration: 'none'}}>
                            <span>What We Do</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/our-products' className='nav-links-mobile' style={{textDecoration: 'none'}}>
                            <span>Our products</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/applications' className='nav-links-mobile' style={{textDecoration: 'none'}}>
                            <span>Applications</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/news' className='nav-links-mobile' style={{textDecoration: 'none'}}>
                            <span>News</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links-mobile' style={{textDecoration: 'none'}}>
                        <span>Contact Us</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;