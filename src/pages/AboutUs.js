import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './AboutUs.css';


export default function AboutUs () {

    const tireIcon = "/images/tire.png"
    const starIcon = "/images/star.png"
    const employeeIcon = "/images/employees.png"
    const handIcon = "/images/handshake.png"
    const factoryIcon = "/images/eco-factory.png"
    const earthIcon = "/images/globe-earth.png"
    
    const [ t ] = useTranslation("global")

    return (
        <>
            <Navbar />
            <div className="about-us-main-text">
                <h2 className="mt-3">{t("about-us-page.about-us-upper-text")}</h2>
                <p className="mt-3">{t("about-us-page.about-us-text")}</p>
            </div>

            <div className="facts-section-one mt-3">
                <h2>{t("about-us-page.facts-section-upper-text")}</h2>
                
                <div className="row-one-about">
                    <div className="images-container-one">
                        <img src={tireIcon} id="tire-icon" alt="Tire Icon"></img>
                        <h4 className="mt-2">{t("about-us-page.tires-recycled-number")}</h4>
                        <p>{t("about-us-page.tires-recycled-text")}</p>
                    </div>
                    <div className="images-container-one">
                        <img src={starIcon} alt="Star Icon"></img>
                        <h4 className="mt-2">{t("about-us-page.number-one-number")}</h4>
                        <p>{t("about-us-page.number-one-text")}</p>
                    </div>
                    <div className="images-container-one">
                        <img src={employeeIcon} alt="Employee Icon"></img>
                        <h4 className="mt-2">{t("about-us-page.employees-number")}</h4>
                        <p>{t("about-us-page.employees-text")}</p>
                    </div>
                </div>

                <div className="row-one-about">
                    <div className="images-container-two">
                        <img src={handIcon} alt="Handshake Icon"></img>
                        <h4 className="mt-2">{t("about-us-page.partners-number")}</h4>
                        <p>{t("about-us-page.partners-text")}</p>
                    </div>
                    <div className="images-container-two">
                        <img src={factoryIcon} alt="Factory Icon"></img>
                        <h4 className="mt-2">{t("about-us-page.plant-capacity-number")}</h4>
                        <p>{t("about-us-page.plant-capacity-text")}</p>
                    </div>
                    <div className="images-container-two">
                        <img src={earthIcon} alt="Earth Icon"></img>
                        <h4 className="mt-2">{t("about-us-page.waste-free-proceeds-number")}</h4>
                        <p>{t("about-us-page.waste-free-proceeds-text")}</p>
                    </div>
                </div>
            </div>

            <div className="cards-container">
                
                <div className="our-history">
                    <h3>{t("about-us-page.our-history-upper-text")}</h3>
                    <p>{t("about-us-page.our-history-main-text")}</p>
                </div>

                <div className="our-goals">
                    <h3>{t("about-us-page.our-goals-upper-text")}</h3>
                    <p>{t("about-us-page.our-goals-main-text")}</p>
                </div>

                <div className="our-team">
                    <h3>{t("about-us-page.our-team-upper-text")}</h3>
                    <p>{t("about-us-page.our-team-main-text")}</p>
                </div>
            </div>
        
        <NewFooter />
        </>
    ) 
}