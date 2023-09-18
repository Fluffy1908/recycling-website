import React from "react";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './AboutUs.css';

export default function AboutUs () {

    const tireIcon = "/images/tire.png"
    const starIcon = "/images/star.png"
    const employeeIcon = "/images/employees.png"
    const handIcon = "/images/handshake.png"
    const factoryIcon = "/images/eco-factory.png"
    const earthIcon = "/images/globe-earth.png"

    return (
        <>
            <Navbar />
            <div className="about-us-main-text">
                <h2 className="mt-3">Tire Recycling UA</h2>
                <p className="mt-3">Recycling tires in our country is a big problem, more than 210 thousand tons of used tires are discarded annually, only about 7 thousand tons of them are processed. Our extensive experience in the tire industry has helped us define the scale this ecological disaster and we started to act. Now Tire Recycling UA is the largest tire recycling company in Ukraine, recycling more than 15,000 tons per year, we give further life to more than two million tires. Annual investment in new equipment and expansion of our facilities throughout Ukraine helps us to increase the volume of processing every year, which will soon time will ensure the disposal and recycling of every used tire in the country.</p>
            </div>

            <div className="facts-section-one mt-3">
                <h2>Facts</h2>
                
                <div className="row-one-about">
                    <div className="images-container-one">
                        <img src={tireIcon} id="tire-icon" alt="Tire Icon"></img>
                        <h4 className="mt-2">2,000,000</h4>
                        <p>Recycled tires per year</p>
                    </div>
                    <div className="images-container-one">
                        <img src={starIcon} alt="Star Icon"></img>
                        <h4 className="mt-2">#1</h4>
                        <p>By technology and volume</p>
                    </div>
                    <div className="images-container-one">
                        <img src={employeeIcon} alt="Employee Icon"></img>
                        <h4 className="mt-2">120</h4>
                        <p>Employees</p>
                    </div>
                </div>

                <div className="row-one-about">
                    <div className="images-container-two">
                        <img src={handIcon} alt="Handshake Icon"></img>
                        <h4 className="mt-2">500+</h4>
                        <p>Partners</p>
                    </div>
                    <div className="images-container-two">
                        <img src={factoryIcon} alt="Factory Icon"></img>
                        <h4 className="mt-2">15,000,000</h4>
                        <p>Plant capacity (kg.)</p>
                    </div>
                    <div className="images-container-two">
                        <img src={earthIcon} alt="Earth Icon"></img>
                        <h4 className="mt-2">15,000</h4>
                        <p>Tons of waste-free processing</p>
                    </div>
                </div>
            </div>

            <div className="cards-container">
                
                <div className="our-history">
                    <h3>Our History</h3>
                    <p>We, as tire manufacturers in Ukraine, have pondered the "fate" of used tires. The very idea of environmentally friendly recycling originated back in 2008. In 2019, we found a waste-free technology for recycling tires for raw materials. The company was founded in 2020 and started its production activities in 2021.</p>
                </div>

                <div className="our-goals">
                    <h3>Our goals</h3>
                    <p>Cleaning our country of used tires is a priority of our company. Every year our company will scale up, increasing the volume of recycling of used tires and rubber products.The emergence of processing enterprises in the regions of Ukraine is the main goal of our company. Our task is to make the delivery of tires a norm for our society with the support of public organizations and the active part of the population. To make the habit of throwing out tires unacceptable in society.</p>
                </div>

                <div className="our-team">
                    <h3>Our Team</h3>
                    <p>Our company consists of experienced managers, engineers, designers, environmentalists who have worked in the tire industry, as well as young ambitious specialists with high demands on teamwork.</p>
                </div>
            </div>
        
        <NewFooter />
        </>
    ) 
}