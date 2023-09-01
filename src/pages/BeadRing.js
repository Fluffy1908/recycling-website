import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './BeadRing.css';

export default function BeadRing () {
    const factoryImage = "/images/factory-photo.jpg"
    
    return (
        <>
            <Navbar />
            <h1 id="bead-ring-main-text">Bead Ring</h1>
        
        <section className="bead-ring-upper-section">
            
            <div className="what-is-bead-ring">
                <h2>What is bead ring?</h2>
                <p>One of the best uses for recycled tires is to turn them into rubber mulch for landscaping, playgrounds, and training courses. Rubber mulch serves the same purpose as regular wood mulch, but it has a number of additional benefits. </p>
            </div>

            <div className="what-is-bead-ring-image">
                <img src={factoryImage} />
            </div>

        </section>

            <Footer />
        </>
    ) 
}