import React from "react";

export default function Header() {
    return (
        <div>
            <header className="header-elem">
                <img src="/images/recyclingLogo.png"></img>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>What We Do</p>
                    <p>Our Products</p>
                    <p>Applicaitons</p>
                    <p>News</p>
                    <p>Contact Us</p>
                <div className="language-options">
                    <p className="eng-option">ENG</p>
                    <p className="ukr-option">UKR</p>
                </div>
            </header>
        </div>
    )
}