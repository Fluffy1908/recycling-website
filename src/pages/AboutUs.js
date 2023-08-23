import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './AboutUs.css';
import { useTranslation } from 'react-i18next';

export default function AboutUs () {
    const [t, i18n] = useTranslation("global");

    const tireIcon = "/images/tire.png"

    return (
        <>
            <Navbar />
            <div className="about-us-main-text">
                <h2>Tire Recycling UA</h2>
                <p>Recycling tires in our country is a big problem, more than 210 thousand tons of used tires are discarded annually, only about 7 thousand tons of them are processed. Our extensive experience in the tire industry has helped us define the scale this ecological disaster and we started to act. Now Tire Recycling UA is the largest tire recycling company in Ukraine, recycling more than 15,000 tons per year, we give further life to more than two million tires. Annual investment in new equipment and expansion of our facilities throughout Ukraine helps us to increase the volume of processing every year, which will soon time will ensure the disposal and recycling of every used tire in the country.</p>
            </div>

            <div className="facts-section-one">
                <h2>Facts</h2>
                
                <div className="row-one-about">
                    <div className="images-container-one">
                        <img src={tireIcon} id="tire-icon"></img>
                        <h4>4,000,000</h4>
                        <p>Number of recycled tires</p>
                    </div>
                    <div className="images-container-one">
                        <img src={tireIcon}></img>
                        <h4>4,000,000</h4>
                        <p>By technology andvolume</p>
                    </div>
                    <div className="images-container-one">
                        <img src={tireIcon}></img>
                        <h4>4,000,000</h4>
                        <p>Some text here</p>
                    </div>
                </div>

                <div className="row-one-about">
                    <div className="images-container-two">
                        <img src={tireIcon}></img>
                        <h4>4,000,000</h4>
                        <p>Number of recycled tires</p>
                    </div>
                    <div className="images-container-two">
                        <img src={tireIcon}></img>
                        <h4>4,000,000</h4>
                        <p>By technology andvolume</p>
                    </div>
                    <div className="images-container-two">
                        <img src={tireIcon}></img>
                        <h4>4,000,000</h4>
                        <p>Some text here</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    ) 
}