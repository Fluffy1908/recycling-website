import React from "react";

export default function Main() {
    const tireHeader = "images/tireheader.png"
    const grassImage = "/images/grass.jpg"
    
    return (
        <>
            <div style={{backgroundImage: `url(${tireHeader})`}} className="main-sec">
                <div className="content">
                    <h3>Tire Recycling UA</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non odio nisl. Nunc at rhoncus sapien. Suspendisse sed interdum purus. Maecenas mattis nunc ut nunc bibendum venenatis. Nulla risus tortor, eleifend quis ipsum at, blandit accumsan dolor. Cras eu ultricies urna, quis viverra tortor. Nulla euismod lobortis leo sit amet euismod. Nullam elementum maximus mi. In tristique malesuada enim quis sollicitudin. Morbi condimentum elementum ipsum, sed eleifend neque molestie id. Nullam rhoncus egestas lectus, sed eleifend risus venenatis quis. Vestibulum egestas arcu vel sem maximus dignissim.</p>
                </div>
            </div>
           
            <h1 className="about-us-text">About Us</h1>
            <div className="about-us">
                    <h2>Tire Recycling UA</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non odio nisl. Nunc at rhoncus sapien. Suspendisse sed interdum purus. Maecenas mattis nunc ut nunc bibendum venenatis. Nulla risus tortor, eleifend quis ipsum at, blandit accumsan dolor. Cras eu ultricies urna, quis viverra tortor. Nulla euismod lobortis leo sit amet euismod. Nullam elementum maximus mi. In tristique malesuada enim quis sollicitudin. Morbi condimentum elementum ipsum, sed eleifend neque molestie id. Nullam rhoncus egestas lectus, sed eleifend risus venenatis quis. Vestibulum egestas arcu vel sem maximus dignissim.</p>
            </div>

            <div className="dispose-tires">
                <h2 className="dispose-tires-text">Dispose Tires</h2>
                <p>The main priority of our company is the most convenient return of used tires for enterprises and population. If you have worn tires, please click on the button below to fill out a short form and our specialist will contact you.</p>
                <button className="dispose-button">Click me!</button>
            </div>
        </>
    )
}