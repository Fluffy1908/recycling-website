import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import './ContactUs.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import ContactForm from "../components/ContactForm";
import AccordionComponent from "../components/AccordionComponent";

export default function ContactUs() {
    const [ t ] = useTranslation("global");

    return (
        <>
        <Navbar />
        <div className="contact-upper-section">
          <div className="contact-upper-section-text">
          <h1 className="mt-3">{t("contact-us-page.get-in-touch-upper-text")}</h1>
          {/* <p>{t("contact-us-page.get-in-touch-main-text")}</p> */}
          </div>
        </div>

          <div className="reference-contact-us mt-2 mb-2">
            <div className="container-contact-us">
              <LocalPhoneIcon sx={{fontSize: 50}}/>
              <p id="contact-us-icon-top">{t("contact-us-page.phone-text")}</p>
              <p><a href="tel:+380676312222">{t("contact-us-page.phone-numbers")}</a></p>
            </div>

            <div className="container-contact-us">
              <MailIcon sx={{fontSize: 50}}/>
              <p id="contact-us-icon-top">{t("contact-us-page.email-text")}</p>
              <p><a href="mailto: shinov.tima@gmail.com">{t("contact-us-page.email-lower-text")}</a></p>
            </div>

            <div className="container-contact-us">
              <LocationOnIcon sx={{fontSize: 50}}/>
              <p id="contact-us-icon-top">{t("contact-us-page.address-upper-text")}</p>
              <p>{t("contact-us-page.address-lower-text1")}</p>
              <p>{t("contact-us-page.address-lower-text2")}</p>
              <p>{t("contact-us-page.address-lower-text3")}</p>
            </div>

          </div>

        {/* Accordion section component*/}
        <h2 id="usually-text">{t("contact-us-page.usually-asked-questions-text")}</h2>
        <div className="usually-asked-contact">
          <AccordionComponent />
        </div>

        <div id="contact-us-connector">
          <MoreVertIcon sx={{fontSize: 50}} className="mt-3 mb-3"/>
        </div>
        
        <ContactForm />
        <NewFooter />
        </>
      );
}