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
                <h2 className="dispose-tires-text">{t("dispose-tires-main.dispose-tires-text-upper")}</h2>
                <p className="mt-3">{t("dispose-tires-main.dispose-tires-text")}</p>
                <button className="dispose-button mt-3">{t("dispose-tires-main.button-text")}</button>
            </div>

            <div className="product-section mt-4">
                <h2>{t("production-section-main.our-production-text-upper")}</h2>
                <img src="/images/gold-ingots.png" alt="Products" className="gold-ingots mt-3"/>
                <p className="mt-4">{t("production-section-main.our-production-text")}</p>
            </div>
        
        {/* Our Products section start */}
            <div className="main-our-product-gallery">
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>{t("production-gallery-main.crumb-rubber-photo-text")}</h2></div>
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
                <h2>{t("application-section-main.application-text-upper")}</h2>
                <img src="/images/gold-ingots.png" alt="Products" className="gold-ingots mt-3"/>
                <p className="mt-4">{t("application-section-main.application-text")}</p>
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