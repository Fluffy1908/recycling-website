import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './TextileCord.css';

export default function TextileCord () {
    const factoryImage = "/images/factory-photo.jpg"
    
    return (
        <>
            <Navbar />
            <h1 id="textile-cord-main-text">Textile Cord</h1>

<section className="textile-cord-component">
    <div className="textile-cord-info-left">
        <h2>What is Textile Cord?</h2>
        <p>Recycling tires in our country is a big problem, more than 210 thousand tons of used tires are discarded annually, only about 7 thousand tons of them are processed.</p>
    </div>

    <div className="textile-cord-info-right">
        <img src={factoryImage} />
    </div>
</section>
            <Footer />
        </>
    ) 
}