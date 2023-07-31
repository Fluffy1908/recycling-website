import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom'

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
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Home</span>
                        </Link>
                    </li>
                    
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Collection Services</span>
                        </Link>
                    </li>
                    
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Recycling Services</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Crumb Rubber </span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Rubber Mulch</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>RTP</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Dispose tires</span>
                        </Link>
                    </li>

                </ul>

            </div>

            <div className="center-footer">
                <ul>
                    <li className="footer-item">
                        <Link to='/news' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>News</span>
                        </Link>
                    </li>
                    
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Plastic Compound</span>
                        </Link>
                    </li>
                    
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Metal Cord</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Textile Cord </span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Boad Ring</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/' className="footer-links" style={{textDecoration: 'none'}}>
                            <span>Vacancies</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to='/contact-us' className="footer-links" style={{textDecoration: 'none'}}>
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

        <div className="footer-copyright">
            <p>© COPYRIGHT 2023 TIRE RECYCLING UA. ALL RIGHTS RESERVED.</p>
        </div>

        </>
        
    )
}

export default Footer;