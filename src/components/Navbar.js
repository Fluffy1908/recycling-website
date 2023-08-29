import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import { useTranslation } from 'react-i18next'


function Navbar() {
        const [t, i18n] = useTranslation("global");
        const [click, setClick] = useState(false);
        const [dropClick, setDropClick] = useState(false);

        const logo = "/images/recyclingLogo.png"
        
        const handleChangeLanguage = (lang) => {
            i18n.changeLanguage(lang)
        }

    return (
        <>
            <nav>
                <Link to='/' id='logo'> 
                    <img src={logo} />
                </Link>
                <div>
                    <ul id="navbar" className= {click ? "#navbar active" : "navbar"}>
                        <li className='nav-item' >
                            <Link to='/' className='contact-us-nav'>
                                <span className="active">{t("navbar.home")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='contact-us-nav'>
                                <span>{t("navbar.aboutUs")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/what-we-do' className='contact-us-nav'>
                                <span>{t("navbar.whatWeDo")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/our-products' className='contact-us-nav'>
                                {/* <span>{t("navbar.ourProducts")}</span> */}
                                <div className='dropdown'>
                                    <button className="dropbtn">
                                    <span id="dropdown-menu-bottom">DropDown </span><i className='fa fa-caret-down'></i>
                                    </button>
                                <div className='dropdown-content'>
                                    <Link to='/our-products' className='contact-us-nav'>
                                    <p className='dropdown-links'>Some link</p>
                                    </Link>
                                    <Link to='/our-products' className='contact-us-nav'>
                                    <p className='dropdown-links'>Some link</p>
                                    </Link>
                                    <Link to='/our-products' className='contact-us-nav'>
                                    <p className='dropdown-links'>Some link</p>
                                    </Link>
                                </div>
                                </div>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/applications' className='contact-us-nav'>
                                <span>{t("navbar.applications")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/news' className='contact-us-nav'>
                                <span>{t("navbar.news")}</span>
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/contact-us' className='contact-us-nav'>
                                <span>{t("navbar.contactUs")}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <div className='language-options'>
                    <span className="individual-lang-option-en" onClick={() => handleChangeLanguage("en")}>ENG</span>
                    <span className="individual-lang-option-ru" onClick={() => handleChangeLanguage("ru")}>RU</span>
                    <span className="individual-lang-option-ua" onClick={() => handleChangeLanguage("ua")}>UA</span>
                </div> */}

                <div id='mobile'
                onClick={() => setClick(!click)}>
                    <i 
                    id='bar'
                    className=
                    {click ? "fas fa-times" : "fas fa-bars"}
                    ></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar;