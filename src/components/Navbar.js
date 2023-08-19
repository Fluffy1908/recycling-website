import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useTranslation } from 'react-i18next'

function Navbar() {
        const [t, i18n] = useTranslation("global");
        
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        
        const handleChangeLanguage = (lang) => {
            i18n.changeLanguage(lang)
        }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' style={{textDecoration: 'none'}}>
                    <div className='brand-title'>Brand Name</div>
                </Link>
                <Link to='/' className='toggle-button' onClick={() => {
                     navbarLinks.classList.toggle('active')
                }}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </Link>
                <div className='navbar-links'>
                    <ul>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' style={{textDecoration: 'none'}}>
                                <span>{t("navbar.home")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' style={{textDecoration: 'none'}}>
                                <span>{t("navbar.aboutUs")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/what-we-do' className='nav-links' style={{textDecoration: 'none'}}>
                                <span>{t("navbar.whatWeDo")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/our-products' className='nav-links-mobile' style={{textDecoration: 'none'}}>
                                <span>{t("navbar.ourProducts")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/applications' className='nav-links-mobile' style={{textDecoration: 'none'}}>
                                <span>{t("navbar.applications")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/news' className='nav-links-mobile' style={{textDecoration: 'none'}}>
                                <span>{t("navbar.news")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-us' className='nav-links-mobile' style={{textDecoration: 'none'}}>
                            <span>{t("navbar.contactUs")}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='language-options'>
                    <span className="individual-lang-option-en" onClick={() => handleChangeLanguage("en")}>ENG</span>
                    <span className="individual-lang-option-ru" onClick={() => handleChangeLanguage("ru")}>RU</span>
                    <span className="individual-lang-option-ua" onClick={() => handleChangeLanguage("ua")}>UA</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar;