import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './OurProducts.css';

export default function OurProducts () {
    const starIcon = "/images/star.png"
    const testImage = "/images/crumb-rubber.jpg"
    
    return (
        <>
            <Navbar />
            <h2 id="our-products-background" className="mt-3">Our Products</h2>

            <div className="our-products-upper-text mt-3">
                <p>Recycling waste tires into raw materials has a wide variety of applications in a variety of industries such as rubber products, rubber floors / pavers, rubberized asphalt, playgrounds, landscape mulch, shock absorbing sports surfaces.</p>
                <img src={starIcon} alt="Star icon"/>
            </div>

            <div className="our-product-gallery">
                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>

                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
                
                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
            </div>

            <div className="our-product-gallery mb-5">
                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>

                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
                
                <div className="our-product-image-container">
                    <img src={testImage} alt="Image" />
                    <div className="product-centered"><h2>Hello</h2></div>
                    <div className="product-lower-center"><p>Hello</p></div>
                </div>
            </div>


            <Footer />
        </>
    ) 
}