import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './AboutUs.css';
import { useTranslation } from 'react-i18next';

export default function AboutUs () {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Navbar />
            <div className="main-text">
                <h1>{t("aboutUs.upperText")}</h1>
                <p>{t("aboutUs.body")}</p>
            </div>
            <Footer />
        </>
    ) 
}