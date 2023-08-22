import React, { useTransition } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './main.css'
import { useTranslation } from "react-i18next";

export default function Main() {
    const tireHeader = "/images/rec-header.jpg"
    // const grassImage = "/images/grass.jpg"

    const [t, i18n] = useTranslation("global")
    
    return (
        <>
            <Navbar />


            <div style={{backgroundImage: `url(${tireHeader})`}} className="main-sec">
                <div className="content">
                    {/* <h3>Tire Recycling UA</h3> */}
                    {/* <p>{t("home.body")}</p> */}
                </div>
            </div>
           
            <div className="about-us">
                    <h1>About Us</h1>
                    <h2>Tire Recycling UA</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non odio nisl. Nunc at rhoncus sapien. Suspendisse sed interdum purus. Maecenas mattis nunc ut nunc bibendum venenatis. Nulla risus tortor, eleifend quis ipsum at, blandit accumsan dolor. Cras eu ultricies urna, quis viverra tortor. Nulla euismod lobortis leo sit amet euismod. Nullam elementum maximus mi. In tristique malesuada enim quis sollicitudin. Morbi condimentum elementum ipsum, sed eleifend neque molestie id. Nullam rhoncus egestas lectus, sed eleifend risus venenatis quis. Vestibulum egestas arcu vel sem maximus dignissim.
                    </p>
            </div>

            <div className="dispose-tires">
                <h2 className="dispose-tires-text">Dispose Tires</h2>
                <p>The main priority of our company is the most convenient return of used tires for enterprises and population. If you have worn tires, please click on the button below to fill out a short form and our specialist will contact you. Some text to test here</p>
                <button className="dispose-button">Click me!</button>
            </div>

            <div className="product-section">
                <h2>Our production</h2>
                <img src="/images/gold-ingots.png" alt="Products" className="gold-ingots"/>
                <p>Suspendisse sed interdum purus. Maecenas mattis nunc ut nunc bibendum venenatis. Nulla risus tortor, eleifend quis ipsum at, blandit accumsan dolor. Cras eu ultricies urna, quis viverra tortor. Nulla euismod lobortis</p>
            </div>

            <div className="container">
                    <ul className="image-gallery-one">
                        <li>
                            <img src="/images/crumb-rubber.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Crumb rubber</span></div>
                        </li>
                        <li>
                            <img src="/images/crumb-rubber.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                        <li>
                            <img src="/images/crumb-rubber.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                </ul>
                    <ul className="image-gallery-one">
                        <li>
                            <img src="/images/crumb-rubber.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                        <li>
                            <img src="/images/crumb-rubber.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                        <li>
                            <img src="/images/crumb-rubber.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                </ul>
            </div>
            <div className="product-section">
                <h2>Applications</h2>
                <img src="/images/gold-ingots.png" alt="Products" className="gold-ingots"/>
                <p>Suspendisse sed interdum purus. Maecenas mattis nunc ut nunc bibendum venenatis. Nulla risus tortor, eleifend quis ipsum at, blandit accumsan dolor. Cras eu ultricies urna, quis viverra tortor. Nulla euismod lobortis leo sit amet euismod. Nullam elementum maximus mi. In tristique malesuada enim quis sollicitudin. Morbi condimentum elementum ipsum, sed eleifend neque molestie id. Nullam rhoncus egestas lectus, sed eleifend risus venenatis quis. Vestibulum egestas arcu vel sem maximus dignissim.</p>
            </div>

            <div className="container">
                    <ul className="image-gallery-one">
                        <li>
                            <img src="/images/factory-photo.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Crumb rubber</span></div>
                        </li>
                        <li>
                            <img src="/images/factory-photo.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                        <li>
                            <img src="/images/factory-photo.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                </ul>
                    <ul className="image-gallery-one">
                        <li>
                            <img src="/images/factory-photo.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                        <li>
                            <img src="/images/factory-photo.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                        <li>
                            <img src="/images/factory-photo.jpg" alt="Crumb Rubber" />
                            <div className="overlay"><span>Image title</span></div>
                        </li>
                </ul>
            </div>


            <Footer />
        </>
    )
}