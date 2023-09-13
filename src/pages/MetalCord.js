import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './MetalCord.css';

export default function MetalCord () {
    const factoryImage = "/images/factory-photo.jpg"
    
    return (
        <>
            <Navbar />
                <h1 id="metal-cord-main-text">Metal Cord</h1>

                <section className="metal-cord-component">
                    <div className="metal-cord-info-left">
                        <h2>What is metal cord?</h2>
                        <p>Recycling tires in our country is a big problem, more than 210 thousand tons of used tires are discarded annually, only about 7 thousand tons of them are processed.</p>
                    </div>

                    <div className="metal-cord-info-right">
                        <img src={factoryImage} alt="Factory image"/>
                    </div>
                </section>
            <Footer />
        </>
    ) 
}