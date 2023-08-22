import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer () {
    
    
    return (
        <>

        <div className="footer">

            <div className="left-side-footer">
                <Link to='/'>
                    <img src="/images/recyclingLogo.png"/>
                </Link>
    
                <p>(+38) 068 68 68 700 <br/>
                info@tirerecycling.com.ua <br/>
                Borisa Krotova, 16, Dnipro, <br/>
                Dnipropetrovsk Oblast, <br/>
                49000, Ukraine</p>
            </div>
            
            <div className="center-footer">
                <ul>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Home</span>
                        </Link>
                    </li>
                    
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Collection Services</span>
                        </Link>
                    </li>
                    
                    <li className="footer-item">
                        <Link to='/' className="footer-links">
                            <span>Recycling Services</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Crumb Rubber </span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Rubber Mulch</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>RTP</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Dispose tires</span>
                        </Link>
                    </li>

                </ul>

            </div>

            <div className="center-footer">
                <ul>
                    <li className="footer-item">
                        <Link to='/news' className="footer-links" >
                            <span>News</span>
                        </Link>
                    </li>
                    
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Plastic Compound</span>
                        </Link>
                    </li>
                    
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Metal Cord</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Textile Cord </span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Boad Ring</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" >
                            <span>Vacancies</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/contact-us' className="footer-links" >
                            <span>Contacts</span>
                        </Link>
                    </li>

                </ul>
            </div>

            <div className="footer-right-text">
                <h3>Why Us</h3>
                <p>Tire Recycling UA is a leading company in Ukraine for environmentally friendly, waste-free recycling of tires into raw materials. The durable properties of recycled tire raw materials ensure product quality.</p>

            </div>
        </div>

        <div className="mobile-sn-icons">
                    <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
            </div>


        <div className="footer-copyright">
            <p>© COPYRIGHT 2023 TIRE RECYCLING UA. ALL RIGHTS RESERVED.</p>
        </div>
        </>
        
    )
}

export default Footer;