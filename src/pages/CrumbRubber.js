import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './CrumbRubber.css';
import { useTranslation } from 'react-i18next';

export default function AboutUs () {
    const [t, i18n] = useTranslation("global");

    const testImage = "/images/crumb-rubber.jpg"
    const factoryImage = "/images/factory-photo.jpg"
    const starIcon = "/images/star.png"
    
    return (
        <>
        <Navbar />
            <h1 className="crumb-rubber-title mt-3">Crumb Rubber</h1>

            <div className="what-is-crumb-rubber mt-3">
                <h2>What is crumb rubber?</h2>
                <p>Crumb rubber is a product of shredded tires into little granules of different fractions, the size of the fractions can reach up to 0.55mm on our factory. Depending on the size of the fraction, crumb rubber can be used in a variety of very differentindustries.</p>
            </div>

            <div className="crumb-rubber-fractions mt-3 mb-3">
                <h2>Fractions of crumb rubber</h2>
                <p>Our company provides crumb rubber sizes up to 0.55mm</p>
            </div>
            
             <section className="crumb-rubber-gallery">
                
                <div className="crumb-rubber-image-container">
                    <img src={testImage} alt="Image" />
                    <h3>0.55mm</h3>
                </div>

                <div className="crumb-rubber-image-container">
                    <img src={testImage} alt="Image" />
                    <h3>2-5mm</h3>
                </div>
                
                <div className="crumb-rubber-image-container">
                    <img src={testImage} alt="Image" />
                    <h3>5-10mm</h3>
                </div>

            </section>
                
                <div className="image-text-crumb-rubber-container">
                    
                    <div className="crumb-rubber-info-left">
                        <h2 className="mb-3">Rubberized asphalt</h2>
                        <img src={starIcon} alt="star icon"/>
                        <p className="mt-3">Rubberized asphalt concrete, also known simply as rubberized asphalt, is a pavement material consisting of a mixture of standard asphalt concrete and rubber granules recycled from car tires. <br/> Rubber granules can make up 15-22% of rubberized asphalt mix for road construction. Rubberized asphalt has been in use for over 40 years, in most cases it is laid using the same equipment as traditional asphalt.</p>
                    </div>

                    <div className="crumb-rubber-info-right">
                        <img src={factoryImage} alt="Asphalt" />
                    </div>
                
                </div>

                <div className="image-text-crumb-rubber-container">
                    
                    <div className="crumb-rubber-info-left">
                        <h2 className="mb-3">Sport coverings</h2>
                        <img src={starIcon} alt="star icon"/>
                        <p className="mt-3">Rubberized asphalt concrete, also known simply as rubberized asphalt, is a pavement material consisting of a mixture of standard asphalt concrete and rubber granules recycled from car tires. <br/> Rubber granules can make up 15-22% of rubberized asphalt mix for road construction. Rubberized asphalt has been in use for over 40 years, in most cases it is laid using the same equipment as traditional asphalt.</p>
                    </div>

                    <div className="crumb-rubber-info-right">
                        <img src={factoryImage} alt="Asphalt" />
                    </div>
                
                </div>
            
        <Footer />
        </>
    ) 
}