import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './OurProducts.css';

export default function OurProducts () {
    const starIcon = "/images/star.webp"
    const testImage = "/images/crumb-rubber.webp"

    const [ t ] = useTranslation("global")
    
    return (
        <>
            <Navbar />
            <h2 id="our-products-background" className="mt-3">{t("our-products-overview-page.our-products-upper-text")}</h2>

            <div className="our-products-upper-text mt-3">
                <p>{t("our-products-overview-page.our-products-main-text")}</p>
                <img src={starIcon} alt="Star icon"/>
            </div>

            <div className="our-product-gallery">
                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.crumb-rubber-text")}</h3></div>
                    <div><a href="/" className="product-lower-center">Button</a></div>
                </div>

                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.rubber-mulch-text")}</h3></div>
                    <div><a href="/" className="product-lower-center">Button</a></div>
                </div>
                
                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.metal-cord-text")}</h3></div>
                    <div><a href="/" className="product-lower-center">Button</a></div>
                </div>
            </div>

            <div className="our-product-gallery mb-5">
                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.textile-cord-text")}</h3></div>
                    <div><a href="/" className="product-lower-center">Button</a></div>
                </div>

                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.onboard-ring-text")}</h3></div>
                    <div><a href="/" className="product-lower-center">Button</a></div>
                </div>
                
                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.one-more-product-text")}</h3></div>
                    <div><a href="/" className="product-lower-center">Button</a></div>
                </div>
            </div>


            <NewFooter />
        </>
    ) 
}