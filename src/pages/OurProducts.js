import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './OurProducts.css';
import cookies from 'js-cookie'
import { Link } from 'react-router-dom';

export default function OurProducts () {
    const starIcon = "/images/star.webp"
    const testImage = "/images/crumb-rubber1.webp"
    const rubberMulch = "/images/rubber-mulch.webp"
    const metalCord = "/images/metal-cord.webp"
    const textileCord = "/images/textile-cord.webp"
    const beadRing = "/images/metal-cord-6.webp"
    const rte = "/images/rte.webp"

    const [ t ] = useTranslation("global")
    const currentLanguageCode = cookies.get('i18next') || 'ua'
    
    return (
        <>
            <Navbar />
            <h2 id="our-products-background" className="mt-3">{t("our-products-overview-page.our-products-upper-text")}</h2>

            <div className="our-products-upper-text mt-3">
                <p>{t("our-products-overview-page.our-products-main-text")}</p>
                <img src={starIcon} alt="Star icon"/>
            </div>

            {/* Crumb Rubber */}
            <div className="our-product-gallery">
                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.crumb-rubber-text")}</h3></div>
                    <div><Link to={`/${currentLanguageCode}/crumb-rubber`}className="product-lower-center">{t("our-products-overview-page.button-text")}</Link></div>
                </div>

                {/* Rubber Mulch  */}
                <div className="our-product-image-container">
                    <img src={rubberMulch} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.rubber-mulch-text")}</h3></div>
                    <div>
                        <Link to={`/${currentLanguageCode}/rubber-mulch`}className="product-lower-center">{t("our-products-overview-page.button-text")}</Link>
                    </div>
                </div>
                
                {/* Metal Cord */}
                <div className="our-product-image-container">
                    <img src={metalCord} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.metal-cord-text")}</h3></div>
                    <div>
                        <Link to={`/${currentLanguageCode}/metal-cord`}className="product-lower-center">{t("our-products-overview-page.button-text")}</Link>
                    </div>
                </div>
            </div>

            {/* Textile Cord */}
            <div className="our-product-gallery mb-5">
                <div className="our-product-image-container">
                    <img src={textileCord} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.textile-cord-text")}</h3></div>
                    <div>
                        <Link to={`/${currentLanguageCode}/textile-cord`}className="product-lower-center">{t("our-products-overview-page.button-text")}</Link>
                    </div>
                </div>

                {/* Bead Ring */}
                <div className="our-product-image-container">
                    <img src={beadRing} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.onboard-ring-text")}</h3></div>
                    <div>
                        <Link to={`/${currentLanguageCode}/bead-ring`}className="product-lower-center">{t("our-products-overview-page.button-text")}</Link>
                    </div>
                </div>
                
                {/* Our Products */}
                <div className="our-product-image-container">
                    <img src={rte} alt="Image" />
                    <div className="product-centered"><h3>{t("production-section-main.one-more-product-text")}
                    </h3></div>
                    
                    
                    {/* <div>
                        <Link to={`/${currentLanguageCode}/our-products`}className="product-lower-center">{t("our-products-overview-page.button-text")}</Link>
                    </div> */}


                    
                </div>
            </div>


            <NewFooter />
        </>
    ) 
}