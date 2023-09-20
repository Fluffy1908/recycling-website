import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './Application.css';

export default function Applications () {
    const starIcon = "/images/star.png"
    const testImage = "/images/crumb-rubber.jpg"

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
                    <img src={testImage} alt="Image" />
                    <div className="centered"><h2>Hello</h2></div>
                    <div className="lower-center"><p>Hello</p></div>
                </div>

                <div className="application-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="centered"><h2>Hello</h2></div>
                    <div className="lower-center"><p>Hello</p></div>
                </div>
                
                <div className="application-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="centered"><h2>Hello</h2></div>
                    <div className="lower-center"><p>Hello</p></div>
                </div>

            </div>
                
            <div className="application-gallery">
                <div className="application-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="centered"><h2>Hello</h2></div>
                    <div className="lower-center"><p>Hello</p></div>
                </div>

                <div className="application-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="centered"><h2>Hello</h2></div>
                    <div className="lower-center"><p>Hello</p></div>
                </div>
                
                <div className="application-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="centered"><h2>Hello</h2></div>
                    <div className="lower-center"><p>Hello</p></div>
                </div>

            </div>

            <div className="application-gallery mb-5">
                <div className="application-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="centered"><h2>Hello</h2></div>
                    <div className="lower-center"><p>Hello</p></div>
                </div>

                <div className="application-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="centered"><h2>Hello</h2></div>
                    <div className="lower-center"><p>Hello</p></div>
                </div>
                
                <div className="application-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="centered"><h2>Hello</h2></div>
                    <div className="lower-center"><p>Hello</p></div>
                </div>

            </div>
            <NewFooter />
        </>
    ) 
}