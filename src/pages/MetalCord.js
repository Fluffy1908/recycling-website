import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './MetalCord.css';

export default function MetalCord () {
    const factoryImage = "/images/factory-photo.webp"

    const [ t ] = useTranslation("global");
    
    return (
        <>
            <Navbar />
                <h1 id="metal-cord-main-text" className="mt-3">{t("metal-cord-page.metal-cord-upper-text")}</h1>

                <section className="metal-cord-component">
                    <div className="metal-cord-info-left">
                        <h2>{t("metal-cord-page.what-is-metal-cord-upper-text")}</h2>
                        <p>{t("metal-cord-page.what-is-metal-cord-main-text")}</p>
                    </div>

                    <div className="metal-cord-info-right">
                        <img src={factoryImage} alt="Factory image"/>
                    </div>
                </section>
            <NewFooter />
        </>
    ) 
}