import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Application.css';

export default function Applications () {
    const starIcon = "/images/star.png"
    const testImage = "/images/crumb-rubber.jpg"

    return (
        <>
            <Navbar />
            <h2 id="application-background">Applications</h2>
           
            <div className="applications-upper-text">
                <p>Recycling waste tires into raw materials has a wide variety of applications in a variety of industries such as rubber products, rubber floors / pavers, rubberized asphalt, playgrounds, landscape mulch, shock absorbing sports surfaces.</p>
                <img src={starIcon} />
            </div>

            
            <Footer />
        </>
    ) 
}