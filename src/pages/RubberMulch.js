import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './RubberMulch.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function RubberMulch () {
    const [ t ] = useTranslation("global");
    
    const testImage = "/images/crumb-rubber.jpg"
    const factoryImage = "/images/factory-photo.jpg"
    const starIcon = "/images/star.png"

    const iconCheckMark = <IoIosCheckmarkCircleOutline size={20} id="checkmark-option"/>

    return (
        <>
        <Navbar />
            <h1 id="rubber-mulch-main-text" className="mt-3">{t("rubber-mulch-page.rubber-mulch-upper-text")}</h1>
        
        <section className="mulch-upper-section">
            
            <div className="what-is-rubber-mulch">
                <h2>{t("rubber-mulch-page.what-is-rubber-mulch")}</h2>
                <p>{t("rubber-mulch-page.what-is-rubber-mulch-main-text")}</p>
            </div>

            <div className="what-is-rubber-mulch-image">
                <img src={factoryImage} alt="Factory icon"/>
            </div>

        </section>

        {/* <h1 id="areas-of-use-upper-text">Areas of use </h1> */}
        
        

        <section className="areas-of-use">

            <div className="applications-rubber-mulch">
                <h3>{t("rubber-mulch-page.applications-for-playgrounds.applications-upper-text")}</h3>
                
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-playgrounds.option-1")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-playgrounds.option-2")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-playgrounds.option-3")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-playgrounds.option-4")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-playgrounds.option-5")}</p>
            </div>

            <div className="applications-rubber-mulch">
                <h3>{t("rubber-mulch-page.applications-for-landscape.applications-landscape-upper-text")}</h3>
                
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-landscape.option-1")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-landscape.option-2")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-landscape.option-3")}</p>
            </div>

            <div className="applications-rubber-mulch">
                <h3>{t("rubber-mulch-page.applications-for-training-courses.applications-training-courses-upper-text")}</h3>

                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-training-courses.option-1")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-training-courses.option-2")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-training-courses.option-3")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-training-courses.option-4")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-training-courses.option-5")}</p>
                <p>{iconCheckMark}{t("rubber-mulch-page.applications-for-training-courses.option-6")}</p>
            </div>
        
        </section>

        <section className="rubber-mulch-use-section">
            <div className="image-text-rubber-mulch-container">
                    
                    <div className="rubber-mulch-info-left">
                        <h2 className="mb-3">{t("rubber-mulch-page.landscape-for-houses-upper-text")}</h2>
                        <img src={starIcon} alt="star icon"/>
                        <p className="mt-3">{t("rubber-mulch-page.landscape-for-houses-main-text")}</p>
                    </div>

                    <div className="rubber-mulch-info-right">
                        <img src={factoryImage} alt="Asphalt" />
                        <img src={factoryImage} alt="Asphalt" />
                        <img src={factoryImage} alt="Asphalt" />
                    </div>
                
                </div>

                <div className="image-text-rubber-mulch-container">
                    
                    <div className="rubber-mulch-info-left">
                        <h2 className="mb-3">{t("rubber-mulch-page.coating-for-playgrounds-upper-text")}</h2>
                        <img src={starIcon} alt="star icon"/>
                        <p className="mt-3">{t("rubber-mulch-page.coating-for-playgrounds-main-text")}</p>
                    </div>

                    <div className="rubber-mulch-info-right">
                        <img src={factoryImage} alt="Asphalt" />
                        <img src={factoryImage} alt="Asphalt" />
                        <img src={factoryImage} alt="Asphalt" />
                    </div>
                
                </div>

        </section>

        <NewFooter />
        </>
    ) 
}