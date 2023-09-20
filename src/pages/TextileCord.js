import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './TextileCord.css';

export default function TextileCord () {
    const factoryImage = "/images/factory-photo.jpg"

    const [ t ] = useTranslation("global");
    
    return (
        <>
            <Navbar />
            <h1 id="textile-cord-main-text" className="mt-3">{t("textile-cord-page.textile-cord-upper-text")}</h1>

<section className="textile-cord-component">
    <div className="textile-cord-info-left">
        <h2>{t("textile-cord-page.what-is-textile-cord-upper-text")}</h2>
        <p>{t("textile-cord-page.what-is-textile-cord-main-text")}</p>
    </div>

    <div className="textile-cord-info-right">
        <img src={factoryImage} alt="Factory img"/>
    </div>
</section>
            <NewFooter />
        </>
    ) 
}