import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './Application.css';

export default function Applications () {
    const starIcon = "/images/star.webp"
    const testImage = "/images/crumb-rubber.webp"
    const rte = "/images/rte.webp"
    const playgrounds = "/images/play2.webp"
    const barier = "/images/barier.webp"
    const asphalt = "/images/asphalt.webp"
    const rubberMats = "/images/rubber-mats.webp"
    const sportCoverings = "/images/sportCovering.webp"
    const tiles = "/images/plitka.webp"
    const footballFi = "/images/footbal.webp"
    const land2 = "/images/land2.webp"

    const [ t ] = useTranslation("global");

    return (
        <>
            <Navbar />
            <h2 id="application-background">{t("applications-page.applications-upper-text")}</h2>
           
            <div className="applications-upper-text">
                <p>{t("applications-page.applications-main-text")}</p>
                <img src={starIcon} alt="Star icon"/>
            </div>
                
            <div className="application-gallery">
                <div className="application-image-container">
                    <img src={rte} alt="Image" />
                    <div className="centered"><h2>Applications</h2></div>
                </div>

                <div className="application-image-container">
                    <img src={playgrounds} alt="Image" />
                    <div className="centered"><h2>Applications</h2></div>
                </div>
                
                <div className="application-image-container">
                    <img src={land2} alt="Image" />
                    <div className="centered"><h2>Applications</h2></div>
                </div>

            </div>
                
            <div className="application-gallery">
                <div className="application-image-container">
                    <img src={asphalt} alt="Image" />
                    <div className="centered"><h2>Applications</h2></div>
                </div>

                <div className="application-image-container">
                    <img src={sportCoverings} alt="Image" />
                    <div className="centered"><h2>Applications</h2></div>
                </div>
                
                <div className="application-image-container">
                    <img src={rubberMats} alt="Image" />
                    <div className="centered"><h2>Applications</h2></div>
                </div>

            </div>

            <div className="application-gallery mb-5">
                <div className="application-image-container">
                    <img src={tiles} alt="Image" />
                    <div className="centered"><h2>Applications</h2></div>
                </div>

                <div className="application-image-container">
                    <img src={footballFi} alt="Image" />
                    <div className="centered"><h2>Applications</h2></div>
                </div>
                
                <div className="application-image-container">
                    <img src={barier} alt="Image" />
                    <div className="centered"><h2>Applications</h2></div>
                </div>

            </div>
            <NewFooter />
        </>
    ) 
}