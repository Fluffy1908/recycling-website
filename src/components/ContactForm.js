import React, { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import config from "../config";


export default function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [ t ] = useTranslation("global");

  const serviceID = config.YOUR_SERVICE_ID;
  const templateIDContact = config.YOUR_TEMPLATE_ID_contact_form;
  const publicKEY = config.YOUR_PUBLIC_KEY;

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateIDContact, form.current, publicKEY) //from config.js
    .then((result) => {
        setMessageSent(true);
        setIsDisabled(true);
        console.log(`${result.text}, message sent. Thank you.`);
    }, (error) => {
        setErrorMessage(true);
        setIsDisabled(true);
        console.log(`${error.text}, error occured.`);
    });
}

  return (
    <>
      <div className="contact-us-page-form">
        <div className="contact-us-left-container">
          <h2 className="mb-3">{t("contact-us-page.message-us-upper-text")}</h2>
          <span><MessageOutlinedIcon sx={{ fontSize: 60 }}/></span>
          <p className="mt-3">{t("contact-us-page.message-us-main-text")}</p>
        </div>

        <div className="contact-us-right-container">
                  <form ref={form} onSubmit={sendEmail}>
                    <TextField
                        fullWidth
                        label={t("contact-us-page.option-1-name")}
                        // value=""
                        margin="normal"
                        required
                        align="center"
                        name="fname"
                        />

                        <TextField
                        fullWidth
                        label={t("contact-us-page.option-2-email")}
                        type="email"
                        required
                        // value=""
                        margin="dense" 
                        name="email"
                        />

                        <TextField
                        fullWidth
                        label={t("contact-us-page.option-3-phone")}
                        type="phone"
                        // value=""
                        margin="dense"
                        name="phone"
                        />

                        <TextField
                        fullWidth
                        label={t("contact-us-page.option-4-company")}
                        // value=""
                        margin="dense"
                        name="company"
                        />
                        
                        <TextField 
                            multiline
                            minRows={3}
                            fullWidth
                            id="filled" 
                            label={t("contact-us-page.option-5-additional-comments")}
                            margin="dense"
                            name="additional-comments"  
                            />
                          
                      <Button variant="contained" endIcon={<SendIcon />} size="large" type="submit" className="mt-2" disabled={isDisabled}>
                        {t("contact-us-page.send-button-text")}
                      </Button>
                      
                    {messageSent ? <h3>Message sent. Thank you!</h3>  : ""}
                    
                    {errorMessage ? <h3>Some error occured. Please try again.</h3> : ""} 
                    
                    {/* Style this two, and add dynamic text for every language.*/}
               </form>
        </div>
      </div>
    </>
  );
}