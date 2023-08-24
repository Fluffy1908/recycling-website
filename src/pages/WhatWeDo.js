import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './WhatWeDo.css';


export default function WhatWeDo () {
    const starIcon = "/images/star.png"
    const tirevisuIcon = "/images/tire-visu.png"
    const rightArrow2 = "/images/right-arrow2.png"
    const factory2 = "/images/factory.png"
    const crumbRubber2 = "/images/crumb-rubber5.png"
    const enlargement = "/images/enlargement.png"

    return (
        <>
            <Navbar />
                
                <div className="what-we-do-text">
                    <h2>What We Do</h2>
                    <img src={starIcon}></img>
                    <p>Our company is engaged in the acceptance of used tires from companies and individuals in any quantity. Our recyclers benefit from used tires by crushing them into small granules, which can then be used to make rubber products, rubber floors, rubberized asphalt, playground mulch and more, click here to view the application. Tire collection points will soon appear in all corners of Ukraine to ensure the delivery of tires by enterprises and the population. Click here to view tire pick-up points. Recycling points will also be updated to ensure that the required volume of tires is recycled throughout Ukraine. To view the tire recycling points click here .</p>
                </div>

                <div className="visualization-images">
                    <img src={tirevisuIcon}></img>
                    <img src={rightArrow2} id="right-arrow"></img>
                    <img src={factory2} id="factory-what-we-do"></img>
                    <img src={rightArrow2} id="right-arrow"></img>
                    <img src={crumbRubber2} id="factory-what-we-do"></img>
                    <img src={rightArrow2} id="right-arrow"></img>
                    <img src={enlargement}></img>
                </div>

                <div className="collections-points">
                    <h2>Collection Points</h2>
                    <h4>Dnipro:</h4>
                    <p>The first collection point is located at st. Boris Krotova, 16, Dnipro Dnipropetrovsk Region, 49000
                    </p>
                    <p>Contacts for communication:</p>
                    <p>Tel. (+38) 068 68 68 700</p>
                    <p>Email: info@tirerecycling.com.ua</p>
                </div>
                
                <div className="processing-points">
                    <h2>Processing Points</h2>
                    <h4>Dnipro:</h4>
                    <p>Our main processing plant is located in the city of Dnipro at the address st. Boris Krotova, 16, Dnipro Dnipropetrovsk Region,49000
                    </p>
                    <p>Contacts for communication:</p>
                    <p>Tel. (+38) 068 68 68 700</p>
                    <p>Email: info@tirerecycling.com.ua</p>
                </div>

            <Footer />
        </>
    ) 
}