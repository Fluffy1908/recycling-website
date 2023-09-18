import React, { useTransition } from "react";
import Navbar from "./Navbar";
import NewFooter from "./NewFooter";
import './main.css'
import { useTranslation } from "react-i18next";

export default function Main() {
    const tireHeader = "/images/rec-header.jpg"
    // const grassImage = "/images/grass.jpg"
    const testImage = "/images/crumb-rubber.jpg"

    const [ t ] = useTranslation("global")
    
    return (
        <>
            <Navbar />


            <div style={{backgroundImage: `url(${tireHeader})`}} className="main-sec">
                <div className="content">
                </div>
            </div>
           
            <div className="about-us">
                    <h1 className="mt-4">{t("aboutUs-main.upperText")}</h1>
                    <h2 className="mt-4">{t("aboutUs-main.tire-res-main")}</h2>
                    <p className="mt-2">{t("aboutUs-main.about-us-text")}</p>
            </div>

            <div className="dispose-tires mt-4">
                <h2 className="dispose-tires-text">Dispose Tires</h2>
                <p className="mt-3">The main priority of main-our company is the most convenient return of used tires for enterprises and population. If you have worn tires, please click on the button below to fill out a short form and main-our specialist will contact you. Some text to test here</p>
                <button className="dispose-button mt-3">Click me!</button>
            </div>

            <div className="product-section mt-4">
                <h2>Our production</h2>
                <img src="/images/gold-ingots.png" alt="Products" className="gold-ingots mt-3"/>
                <p className="mt-4">Suspendisse sed interdum purus. Maecenas mattis nunc ut nunc bibendum venenatis. Nulla risus tortor, eleifend quis ipsum at, blandit accumsan dolor. Cras eu ultricies urna, quis viverra tortor. Nulla euismod lobortis</p>
            </div>
        
        {/* Our Products section start */}
            <div className="main-our-product-gallery">
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>

                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
                
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
            </div>
            
            <div className="main-our-product-gallery">
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>

                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
                
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
            </div>

            <div className="product-section mt-4">
                <h2>Applications</h2>
                <img src="/images/gold-ingots.png" alt="Products" className="gold-ingots mt-3"/>
                <p className="mt-4">Suspendisse sed interdum purus. Maecenas mattis nunc ut nunc bibendum venenatis. Nulla risus tortor, eleifend quis ipsum at, blandit accumsan dolor. Cras eu ultricies urna, quis viverra tortor. Nulla euismod lobortis leo sit amet euismod. Nullam elementum maximus mi. In tristique malesuada enim quis sollicitudin. Morbi condimentum elementum ipsum, sed eleifend neque molestie id. Nullam rhoncus egestas lectus, sed eleifend risus venenatis quis. Vestibulum egestas arcu vel sem maximus dignissim.</p>
            </div>
            
            {/* Application gallery start */}
            <div className="main-our-product-gallery">
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>

                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
                
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
            </div>

            <div className="main-our-product-gallery">
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>

                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
                
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
            </div>


            <NewFooter />
        </>
    )
}