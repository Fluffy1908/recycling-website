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
        
        <section className="textile-cord-upper-section">
            
            <div className="what-is-textile-cord">
                <h2>What is textile cord?</h2>
                <p>One of the best uses for recycled tires is to turn them into rubber mulch for landscaping, playgrounds, and training courses. Rubber mulch serves the same purpose as regular wood mulch, but it has a number of additional benefits. </p>
            </div>

            <div className="what-is-textile-cord-image">
                <img src={factoryImage} />
            </div>

        </section>

            <Footer />
        </>
    ) 
}