import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './RubberMulch.css';
import { useTranslation } from 'react-i18next';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function RubberMulch () {
    const [t, i18n] = useTranslation("global");
    
    const testImage = "/images/crumb-rubber.jpg"
    const factoryImage = "/images/factory-photo.jpg"
    const starIcon = "/images/star.png"

    const iconCheckMark = <IoIosCheckmarkCircleOutline size={20} id="checkmark-option"/>

    return (
        <>
        <Navbar />
            <h1 id="rubber-mulch-main-text" className="mt-3">Rubber Mulch</h1>
        
        <section className="mulch-upper-section">
            
            <div className="what-is-rubber-mulch">
                <h2>What is rubber mulch?</h2>
                <p>One of the best uses for recycled tires is to turn them into rubber mulch for landscaping, playgrounds, and training courses. Rubber mulch serves the same purpose as regular wood mulch, but it has a number of additional benefits. </p>
            </div>

            <div className="what-is-rubber-mulch-image">
                <img src={factoryImage} alt="Factory icon"/>
            </div>

        </section>

        {/* <h1 id="areas-of-use-upper-text">Areas of use </h1> */}
        
        

        <section className="areas-of-use">

            <div className="applications-rubber-mulch">
                <h3>Application for playgrounds</h3>
                
                <p>{iconCheckMark}Home / summer cottages</p>
                <p>{iconCheckMark}Association platforms</p>
                <p>{iconCheckMark}City / County / State Park Playgrounds</p>
                <p>{iconCheckMark}Commercial Playgrounds</p>
                <p>{iconCheckMark}Church playgrounds</p>
            </div>

            <div className="applications-rubber-mulch">
                <h3>Application for landscape</h3>
                
                <p>{iconCheckMark}Landscape for houses / summer cottages</p>
                <p>{iconCheckMark}Commercial landscape</p>
                <p>{iconCheckMark}B2B / corporate playgrounds</p>
                <p>{iconCheckMark}Playgrounds for municipal construction</p>
            </div>

            <div className="applications-rubber-mulch">
                <h3>Application for training courses</h3>

                <p>{iconCheckMark}Obstacle course protective coating</p>
                <p>{iconCheckMark}Climbing wallcovering</p>
                <p>{iconCheckMark}Rope course protective cover</p>
                <p>{iconCheckMark}Fitness course protective cover</p>
                <p>{iconCheckMark}Protective cover of the police training course</p>
                <p>{iconCheckMark}Rope course protective cover</p>
            </div>
        
        </section>

        <section className="rubber-mulch-use-section">
            <div className="image-text-rubber-mulch-container">
                    
                    <div className="rubber-mulch-info-left">
                        <h2 className="mb-3">Landscape for your houses</h2>
                        <img src={starIcon} alt="star icon"/>
                        <p className="mt-3">Rubber mulch serves the same purpose as conventional wood mulch, but it has the added benefit of being more durable, more weight that keeps it from being blown away by the wind.Rubber mulch does not absorb rainwater, so more water reaches the plant roots. Another plus is that, unlike some woody mulches, rubber mulches do not harbor pests such as termites.In addition, rubber mulch eliminates the need for annual replacements, while wood mulch breaks down and tarnishes quickly when exposed to the sun. Rubber mulch does not degrade and should retain its color for more than 10 years.</p>
                    </div>

                    <div className="rubber-mulch-info-right">
                        <img src={factoryImage} alt="Asphalt" />
                        <img src={factoryImage} alt="Asphalt" />
                        <img src={factoryImage} alt="Asphalt" />
                    </div>
                
                </div>

                <div className="image-text-rubber-mulch-container">
                    
                    <div className="rubber-mulch-info-left">
                        <h2 className="mb-3">Coating for playgrounds</h2>
                        <img src={starIcon} alt="star icon"/>
                        <p className="mt-3">Rubber mulch serves the same purpose as conventional wood mulch, but it has the added benefit of being more durable, more weight that keeps it from being blown away by the wind.Rubber mulch does not absorb rainwater, so more water reaches the plant roots. Another plus is that, unlike some woody mulches, rubber mulches do not harbor pests such as termites.In addition, rubber mulch eliminates the need for annual replacements, while wood mulch breaks down and tarnishes quickly when exposed to the sun. Rubber mulch does not degrade and should retain its color for more than 10 years.</p>
                    </div>

                    <div className="rubber-mulch-info-right">
                        <img src={factoryImage} alt="Asphalt" />
                        <img src={factoryImage} alt="Asphalt" />
                        <img src={factoryImage} alt="Asphalt" />
                    </div>
                
                </div>

        </section>

        <Footer />
        </>
    ) 
}