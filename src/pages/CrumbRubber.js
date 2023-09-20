import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './CrumbRubber.css';

export default function AboutUs () {
    const [ t ] = useTranslation("global");

    const testImage = "/images/crumb-rubber.webp"
    const factoryImage = "/images/factory-photo.webp"
    const starIcon = "/images/star.webp"
    
    return (
        <>
        <Navbar />
            <h1 className="crumb-rubber-title mt-3">{t("crumb-rubber-page.crumb-rubber-upper-text")}</h1>

            <div className="what-is-crumb-rubber mt-3">
                <h2>{t("crumb-rubber-page.what-is-crumb-rubber-text")}</h2>
                <p>{t("crumb-rubber-page.what-is-crumb-rubber-main-text")}</p>
            </div>

            <div className="crumb-rubber-fractions mt-3 mb-3">
                <h2>{t("crumb-rubber-page.fractions-of-crumb-rubber-upper-text")}</h2>
                <p>{t("crumb-rubber-page.fractions-of-crumb-rubber-main-text")}</p>
            </div>
            
             <section className="crumb-rubber-gallery">
                
                <div className="crumb-rubber-image-container">
                    <img src={testImage} alt="Image" />
                    <h3>{t("crumb-rubber-page.size-055")}</h3>
                </div>

                <div className="crumb-rubber-image-container">
                    <img src={testImage} alt="Image" />
                    <h3>{t("crumb-rubber-page.size-2-5")}</h3>
                </div>
                
                <div className="crumb-rubber-image-container">
                    <img src={testImage} alt="Image" />
                    <h3>{t("crumb-rubber-page.size-5-10")}</h3>
                </div>

            </section>
                
                <div className="image-text-crumb-rubber-container">
                    
                    <div className="crumb-rubber-info-left">
                        <h2 className="mb-3">{t("crumb-rubber-page.rubberized-asphalt-upper-text")}</h2>
                        <img src={starIcon} alt="star icon"/>
                        <p className="mt-3">{t("crumb-rubber-page.rubberized-asphalt-main-text")}</p>
                    </div>

                    <div className="crumb-rubber-info-right">
                        <img src={factoryImage} alt="Asphalt" />
                    </div>
                
                </div>

                <div className="image-text-crumb-rubber-container">
                    
                    <div className="crumb-rubber-info-left">
                        <h2 className="mb-3">{t("crumb-rubber-page.sports-covering-upper-text")}</h2>
                        <img src={starIcon} alt="star icon"/>
                        <p className="mt-3">{t("crumb-rubber-page.sports-covering-main-text")}</p>
                    </div>

                    <div className="crumb-rubber-info-right">
                        <img src={factoryImage} alt="Asphalt" />
                    </div>
                
                </div>
            
        <NewFooter />
        </>
    ) 
}