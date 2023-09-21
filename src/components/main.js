import React, { useTransition } from "react";
import Navbar from "./Navbar";
import NewFooter from "./NewFooter";
import './main.css'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

export default function Main() {
    const tireHeader = "/images/rec-header.webp"
    const testImage = "/images/crumb-rubber.webp"
    const goldIngotsImage = "/images/gold-ingots.webp"

    const [ t ] = useTranslation("global")
    
    // Check button styling by adding em for example 2em for font size for media query
    return (
        <>
            <Navbar />


            <div style={{backgroundImage: `url(${tireHeader})`}} className="main-sec">
                <div className="content">
                </div>
            </div>
           
            <div className="about-us">
                    <h1 className="mt-4">{t("about-us-main.upperText")}</h1>
                    <h3 className="mt-4">{t("about-us-main.tire-res-main")}</h3>
                    <p className="mt-2">{t("about-us-main.about-us-text")}</p>
            </div>

            <div className="dispose-tires mt-4">
                <h3 className="dispose-tires-text">{t("dispose-tires-main.dispose-tires-text-upper")}</h3>
                <p className="mt-3">{t("dispose-tires-main.dispose-tires-text")}</p>
                <Link to="/dispose-tires" type="button" className="btn btn-dark btn-lg"><i class="fa-solid fa-angles-right"></i> | {t("dispose-tires-main.button-text")}</Link>
            </div>

            <div className="product-section mt-4">
                <h3>{t("production-section-main.our-production-text-upper")}</h3>
                <img src={goldIngotsImage} alt="Products" className="gold-ingots mt-3"/>
                <p className="mt-4">{t("production-section-main.our-production-text")}</p>
            </div>
        
        {/* Our Products section start */}
            <div className="main-our-product-gallery">
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.crumb-rubber-text")}</h3></div>
                    <div><Link to="/crumb-rubber" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>

                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.rubber-mulch-text")}</h3></div>
                    <div><Link to="/rubber-mulch" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>
                
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.metal-cord-text")}</h3></div>
                    <div><Link to="/metal-cord" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>
            </div>
            
            <div className="main-our-product-gallery">
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.textile-cord-text")}</h3></div>
                    <div><Link to="/textile-cord" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>

                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.onboard-ring-text")}</h3></div>
                    <div><Link to="/bead-ring" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>
                
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.one-more-product-text")}</h3></div>
                    <div><Link to="/our-products" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>
            </div>

            <div className="product-section mt-4">
                <h3>{t("application-section-main.application-text-upper")}</h3>
                <img src={goldIngotsImage} alt="Products" className="gold-ingots mt-3"/>
                <p className="mt-4">{t("application-section-main.application-text")}</p>
            </div>
            
            {/* Application gallery start */}
            <div className="main-our-product-gallery">
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.crumb-rubber-text")}</h3></div>
                    <div><Link to="/applications" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>

                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.crumb-rubber-text")}</h3></div>
                    <div><Link to="/applications" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>
                
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.crumb-rubber-text")}</h3></div>
                    <div><Link to="/applications" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>
            </div>

            <div className="main-our-product-gallery">
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.crumb-rubber-text")}</h3></div>
                    <div><Link to="/applications" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>

                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.crumb-rubber-text")}</h3></div>
                    <div><Link to="/applications" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>
                
                <div className="main-our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.crumb-rubber-text")}</h3></div>
                    <div><Link to="/applications" className="product-lower-center">{t("production-section-main.gallery-button-text")}</Link></div>
                </div>
            </div>


            <NewFooter />
        </>
    )
}