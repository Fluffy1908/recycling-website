import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './WhatWeDo.css';


export default function WhatWeDo () {
    const starIcon = "/images/star.webp"
    const tirevisuIcon = "/images/tire-visu.webp"
    const rightArrow2 = "/images/right-arrow2.webp"
    const factory2 = "/images/factory.webp"
    const crumbRubber2 = "/images/crumb-rubber5.webp"
    const enlargement = "/images/enlargement.webp"

    const [ t ] = useTranslation("global")

    return (
        <>
            <Navbar />
                
                <div className="what-we-do-text mt-3">
                    <h2>{t("what-we-do-page.what-we-do-upper-text")}</h2>
                    <img src={starIcon} alt="Star icon"></img>
                    <p className="mt-3">{t("what-we-do-page.what-we-do-main-text")}</p>
                </div>

                <div className="visualization-images mt-5">
                    <img src={tirevisuIcon} alt="Tire Vis Icon"></img>
                    <img src={rightArrow2} id="right-arrow" alt="Right arrow"></img>
                    <img src={factory2} id="factory-what-we-do" alt="Factory Icon 2"></img>
                    <img src={rightArrow2} id="right-arrow" alt="Right arrow"></img>
                    <img src={crumbRubber2} id="factory-what-we-do" alt="Factory Icon"></img>
                    <img src={rightArrow2} id="right-arrow" alt="Right arrow"></img>
                    <img src={enlargement} alt="Enlargement"></img>
                </div>

            <div className="proc-col-points">
                <div className="collections-points">
                    <h2>{t("what-we-do-page.collection-points.upper-text")}</h2>
                    <h4>{t("what-we-do-page.collection-points.city")}:</h4>
                    <p>{t("what-we-do-page.collection-points.main-text")}
                    </p>
                    <p>{t("what-we-do-page.collection-points.contacts-for-communication-text")}</p>
                    <p>{t("what-we-do-page.collection-points.phone-number")}</p>
                    <p>{t("what-we-do-page.collection-points.email")}</p>
                </div>
                
                <div className="processing-points">
                    <h2>{t("what-we-do-page.processing-points.upper-text")}</h2>
                    <h4>{t("what-we-do-page.processing-points.city")}</h4>
                    <p>{t("what-we-do-page.processing-points.main-text")}
                    </p>
                    <p>{t("what-we-do-page.processing-points.contacts-for-communication-text")}</p>
                    <p>{t("what-we-do-page.processing-points.phone-number")}</p>
                    <p>{t("what-we-do-page.processing-points.email")}</p>
                </div>
            </div>

            <NewFooter />
        </>
    ) 
}