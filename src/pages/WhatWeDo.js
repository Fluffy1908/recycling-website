import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './WhatWeDo.css';


export default function WhatWeDo () {
    const starIcon = "/images/star.png"

    return (
        <>
            <Navbar />
                <div className="what-we-do-text">
                    <h2>What We Do</h2>
                    <img src={starIcon}></img>
                    <p>Our company is engaged in the acceptance of used tires from companies and individuals in any quantity. Our recyclers benefit from used tires by crushing them into small granules, which can then be used to make rubber products, rubber floors, rubberized asphalt, playground mulch and more, click here to view the application. Tire collection points will soon appear in all corners of Ukraine to ensure the delivery of tires by enterprises and the population. Click here to view tire pick-up points. Recycling points will also be updated to ensure that the required volume of tires is recycled throughout Ukraine. To view the tire recycling points click here .</p>
                </div>
            <Footer />
        </>
    ) 
}