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
                                    <span id="dropdown-menu-bottom">Our Products </span><i className='fa fa-caret-down' id='mobile-hide-dropdown-icon'></i>
                                    </button>
                                
                                <div className='dropdown-content' id='mobile-hide-dropdown'>
                                    <Link to='/our-products' className='contact-us-nav'>
                                    <p className='dropdown-links'>Overview</p>
                                    </Link>

                                    <Link to='/crumb-rubber' className='contact-us-nav'>
                                    <p className='dropdown-links'>Crumb Rubber</p>
                                    </Link>

                                    <Link to='/rubber-mulch' className='contact-us-nav'>
                                    <p className='dropdown-links'>Rubber Mulch</p>
                                    </Link>

                                    <Link to='/metal-cord' 
                                    className='contact-us-nav'>
                                    <p className='dropdown-links'>Metal Cord</p>
                                    </Link>

                                    <Link to='/bead-ring' 
                                    className='contact-us-nav'>
                                    <p className='dropdown-links'>Bead Ring</p>
                                    </Link>

                                    <Link to='/textile-cord' className='contact-us-nav'>
                                    <p className='dropdown-links'>Textile Cord</p>
                                    </Link>

                                </div>
                                </div>
                            </Link>    
                        </li>
                        
                        <li className='nav-item-mobile'>
                                {/* <span>{t("navbar.ourProducts")}</span> */}
                                <div className='dropdown'>
                                    <button className="dropbtn">
                                    <span id="dropdown-menu-bottom" onClick={() => setDropClick(!dropClick)}>Product List </span><i className='fa fa-caret-down'></i>
                                    </button>
                                <div className='dropdown-content' id= {dropClick ?  "#mobile-active" : "mobile-inactive"}>
                                    <Link to='/our-products' className='contact-us-nav'>
                                    <p className='dropdown-links'>Crumb Rubber</p>
                                    </Link>

                                    <Link to='/' className='contact-us-nav'>
                                    <p className='dropdown-links'>Rubber Mulch</p>
                                    </Link>

                                    <Link to='/' className='contact-us-nav'>
                                    <p className='dropdown-links'>Bead Ring</p>
                                    </Link>

                                    <Link to='/' className='contact-us-nav'>
                                    <p className='dropdown-links'>Metal Cord</p>
                                    </Link>

                                    <Link to='/' className='contact-us-nav'>
                                    <p className='dropdown-links'>Bead Ring</p>
                                    </Link>

                                    <Link to='/' className='contact-us-nav'>
                                    <p className='dropdown-links'>Textile Cord</p>
                                    </Link>

                                </div>
                                </div>  
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