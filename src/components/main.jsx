import React from "react";

export default function Main() {
    const tireHeader = "images/tireheader.png"
    const aboutusImage = "/images/grass.jpg"
    
    return (
        <>
            <div style={{backgroundImage: `url(${tireHeader})`}} className="main-sec">
                <div className="content">
                    <h3>Tire Recycling UA</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non odio nisl. Nunc at rhoncus sapien. Suspendisse sed interdum purus. Maecenas mattis nunc ut nunc bibendum venenatis. Nulla risus tortor, eleifend quis ipsum at, blandit accumsan dolor. Cras eu ultricies urna, quis viverra tortor. Nulla euismod lobortis leo sit amet euismod. Nullam elementum maximus mi. In tristique malesuada enim quis sollicitudin. Morbi condimentum elementum ipsum, sed eleifend neque molestie id. Nullam rhoncus egestas lectus, sed eleifend risus venenatis quis. Vestibulum egestas arcu vel sem maximus dignissim.</p>
                </div>
            </div>
            
            
            
            
            
            <div className="about-us">
                    <h1>About Us</h1>
                    <h2>Tire Recycling UA</h2>
                    <h3>The largest company in Ukraine for tire recycling into crumb rubber</h3>
            </div>
            <div style={{backgroundImage: `url(${aboutusImage})`}}>Hello World!</div>
        </>
    )
}