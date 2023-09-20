import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import './ContactForm.css';

export default function ContactForm() {
  const [ t ] = useTranslation("global");

  return (
    <>
      <div className="contact-us-page-form">
        <div className="contact-us-left-container">
          <h2 className="mb-3">{t("contact-us-page.message-us-upper-text")}</h2>
          <span><MessageOutlinedIcon sx={{ fontSize: 60 }}/></span>
          <p className="mt-3">{t("contact-us-page.message-us-main-text")}</p>
        </div>

        <div className="contact-us-right-container">
        <TextField
                        fullWidth
                        label={t("contact-us-page.option-1-name")}
                        // value=""
                        margin="normal"
                        required
                        align="center"/>

                        <TextField
                        fullWidth
                        label={t("contact-us-page.option-2-email")}
                        type="email"
                        required
                        // value=""
                        margin="dense" />

                        <TextField
                        fullWidth
                        label={t("contact-us-page.option-3-phone")}
                        type="phone"
                        // value=""
                        margin="dense" />

                        <TextField
                        fullWidth
                        label={t("contact-us-page.option-4-company")}
                        // value=""
                        margin="dense" />
                        
                        <TextField 
                            multiline
                            minRows={3}
                            fullWidth
                            id="filled" 
                            label={t("contact-us-page.option-5-additional-comments")}
                            margin="dense"  
                            />
                          
                          <Button variant="contained" endIcon={<SendIcon />} size="large" type="submit" className="mt-2">
                          {t("contact-us-page.send-button-text")}
                          </Button>
        </div>
      </div>
    </>
  );
}