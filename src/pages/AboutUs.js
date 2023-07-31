import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './AboutUs.css'

export default function AboutUs () {
    return (
        <>
            <Navbar />
            <div className="main-text">
                <h1>About Us Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non odio nisl. Nunc at rhoncus sapien. Suspendisse sed interdum purus. Maecenas mattis nunc ut nunc bibendum venenatis. Nulla risus tortor, eleifend quis ipsum at, blandit accumsan dolor. Cras eu ultricies urna, quis viverra tortor. Nulla euismod lobortis leo sit amet euismod. Nullam elementum maximus mi. In tristique malesuada enim quis sollicitudin. Morbi condimentum elementum ipsum, sed eleifend neque molestie id. Nullam rhoncus egestas lectus, sed eleifend risus venenatis quis. Vestibulum egestas arcu vel sem maximus dignissim.</p>
            </div>
            <Footer />
        </>
    ) 
}