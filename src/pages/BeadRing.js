import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './BeadRing.css';

export default function BeadRing () {
    const factoryImage = "/images/factory-photo.webp"

    const [ t ] = useTranslation("global");
    
    return (
        <>
            <Navbar />
            <h1 id="textile-cord-main-text" className="mt-3">{t("bead-ring-page.bead-ring-upper-text")}</h1>

        <section className="textile-cord-component">
            <div className="textile-cord-info-left">
                <h2>{t("bead-ring-page.what-is-bead-ring-upper-text")}</h2>
                <p>{t("bead-ring-page.what-is-bead-ring-main-text")}</p>
            </div>

            <div className="textile-cord-info-right">
                <img src={factoryImage} alt="Factory Icon"/>
            </div>
        </section>
            <NewFooter />
        </>
    ) 
}