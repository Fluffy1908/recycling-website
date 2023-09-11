import { useState } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import './ContactForm.css';

export default function ContactForm() {

  return (
    <>
      <div className="contact-us-page-form">
        <div className="contact-us-left-container">
          <h2>Message Us</h2>
          <span><MessageOutlinedIcon sx={{ fontSize: 60 }}/></span>
          <p>If you wish to be considered for employment at Weifield, please do not send a message, here instead, please complete Weifields job application  and our Human Resources department will contact you after their review of your submitted information.</p>
        </div>

        <div className="contact-us-right-container">
        <TextField
                        fullWidth
                        label="Name"
                        // value=""
                        margin="normal"
                        required
                        align="center"/>

                        <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        required
                        // value=""
                        margin="dense" />

                        <TextField
                        fullWidth
                        label="Phone"
                        type="phone"
                        // value=""
                        margin="dense" />

                        <TextField
                        fullWidth
                        label="Company"
                        // value=""
                        margin="dense" />
                        
                        <TextField 
                            multiline
                            minRows={3}
                            fullWidth
                            id="filled" 
                            label="Additional comments"
                            margin="dense"  
                            />
                          
                          <Button variant="contained" endIcon={<SendIcon />} size="large" type="submit">
                                    Send
                          </Button>
        </div>
      </div>
    </>
  );
}