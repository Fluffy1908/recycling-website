import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useTranslation } from 'react-i18next'

function Navbar() {
        const [t, i18n] = useTranslation("global");

        const handleChangeLanguage = (lang) => {
            i18n.changeLanguage(lang)
        }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' style={{textDecoration: 'none'}}>
                    <img src="/images/recyclingLogo.png"/>
                </Link>
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
                <button onClick={() => handleChangeLanguage("en")}>EN</button>
                <button onClick={() => handleChangeLanguage("ru")}>RU</button>
            </nav>
        </>
    )
}

export default Navbar;