import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import { useTranslation } from 'react-i18next'


function Navbar() {
        const [t, i18n] = useTranslation("global");
        const [click, setClick] = useState(false);

        const logo = "/images/recyclingLogo.png"
        
        const handleChangeLanguage = (lang) => {
            i18n.changeLanguage(lang)
        }

    return (
        <>
            <nav>
                <Link to='/'> 
                    <img src={logo} />
                </Link>
                <div>
                    <ul id="navbar">
                        <li className='nav-item'>
                            <Link to='/'>
                                <span className="active">{t("navbar.home")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' >
                                <span>{t("navbar.aboutUs")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/what-we-do' >
                                <span>{t("navbar.whatWeDo")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/our-products'>
                                <span>{t("navbar.ourProducts")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/applications'>
                                <span>{t("navbar.applications")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/news' >
                                <span>{t("navbar.news")}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-us' >
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