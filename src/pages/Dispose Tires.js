import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './DisposeTires.css';
import emailjs from '@emailjs/browser'

export default function DisposeTires () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jzk51i8', 'template_q9n0cl9', form.current, 'gfUNbylzKrFw6jJI7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });
    };


    return (
        <>
            <Navbar />
            <h1>Dispose Tires</h1>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            <Footer />
        </>
    ) 
}