import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './ContactUs.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import ContactForm from "../components/ContactForm";
import AccordionComponent from "../components/AccordionComponent";

export default function ContactUs() {

    return (
        <>
        <Navbar />
        <div className="contact-upper-section">
          <div className="contact-upper-section-text">
          <h1>Get in touch</h1>
          <p>Recycling tires in our country is a big problem, more than 210 thousand tons of used tires are discarded annually, only about 7 thousand tons of them are processed.</p>
        </div>

          <div className="reference-contact-us">

            <div className="reference-container"> 
              <div className="icon-contact-us"><LocationOnIcon sx={{fontSize: 50}}/></div>
              <div className="contact-us-info-right">
                <h3>Address</h3>
                <p>4671 Sugar Camp Road, <br/> Owatinna, Minnesota, <br/> 55060</p>
              </div>
            </div>
           
            <div className="reference-container"> 
              <div className="icon-contact-us"><LocalPhoneIcon sx={{fontSize: 50}}/></div>
              <div className="contact-us-info-right">
                <h3>Phone</h3>
                <h4>+38 067 630 68 11</h4>
              </div>
            </div>
            
            <div className="reference-container"> 
              <div className="icon-contact-us"><MailIcon sx={{fontSize: 50}}/></div>
              <div className="contact-us-info-right">
                <h3>Email</h3>
                <h4>shinov.tima@gmail.com</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Accordion section component*/}
        <h2 id="usually-text">Usually asked questions</h2>
        <div className="usually-asked-contact">
          <AccordionComponent />
        </div>

        <div id="contact-us-connector">
          <MoreVertIcon sx={{fontSize: 50}}/>
        </div>
        
        <ContactForm />
        <Footer />
        </>
      );
}