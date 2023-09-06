import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './DisposeTires.css';
import emailjs from '@emailjs/browser';

export default function DisposeTires () {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setSuccessMessage("Your message was submitted. Thank you!")
        console.log("clicked")
    
    //     emailjs.sendForm('service_jzk51i8', 'template_q9n0cl9', form.current, 'gfUNbylzKrFw6jJI7')
    //       .then((result) => {
    //           console.log(result.text);
    //           setSuccessMessage("Your message was submitted. Thank you!")
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    };    


    return (
        <div className="dipose-page">
            <Navbar />
            <div className="dispose-form">
                <h2>Dispose Tires</h2>
                <p className="tire-p-elem">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan?<br></br>Let us know.</p>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="label-input-comp-dispose">
                        <label><span>Name *</span></label>
                        <input type="text" id="fname" name="fname" required/>
                    </div>
                    <div className="label-input-comp-dispose">
                        <label><span>Company</span></label>
                        <input type="text" id="text" name="company"/>
                    </div>
                    <div className="label-input-comp-dispose">
                        <label><span>Email *</span></label>
                        <input type="email" id="email" name="email"required/>
                    </div>
                    <div className="label-input-comp-dispose">
                        <label><span>Phone</span></label>
                        <input type="tel" id="phone" name="phone" required/>
                    </div>

                    <div className="radio-input-comp">
                        <p>Tire Type</p>
                            <input type="radio" id="truck" name="tire-type" value="truck" className="radio-button-dispose"/>
                            <label for="truck"><span>Truck</span></label><br/>
                            <input type="radio" id="Passenger car" name="tire-type" value="passenger car" className="radio-button-dispose"/>
                            <label for="passenger car"><span>Passenger car</span></label><br/>
                            <input type="radio" id="otr" name="tire-type" value="otr" className="radio-button-dispose"/>
                            <label for="otr"><span>OTR</span></label>
                    </div>

                    <div className="label-input-comp-dispose">
                        <label>Additional comments</label>
                        <textarea name="message" />
                    </div>
                    <button type="submit" value="Send" className="dispose-button-page" >Send message</button>

                    <p>{successMessage}</p>
                    
                </form>
            </div>
            <Footer />
        </div>
    ) 
}