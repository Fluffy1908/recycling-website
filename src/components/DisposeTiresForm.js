import React, { useRef, useState } from "react";
import './DisposeTiresForm.css';
import { TextField, Typography, Box } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import emailjs from '@emailjs/browser';

export default function DisposeTiresForm () {
    
    return (
        <>
            <Box 
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            
            <Box sx={{maxWidth: 600, mx: "auto", p: 2}}>
                <Typography variant="h4" align="center" mb={2}>
                    Dispose Tires
                </Typography>
                    <form>
                        <TextField
                        fullWidth
                        label="Name"
                        // value=""
                        margin="normal"
                        required
                        align="center"
                        color="success"/>

                        <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        required
                        // value=""
                        margin="normal" />

                        <TextField
                        fullWidth
                        label="Phone"
                        type="phone"
                        // value=""
                        margin="normal" />

                        <TextField
                        fullWidth
                        label="Company"
                        // value=""
                        margin="normal" />

                        <FormControl
                        margin="dense"
                        >
                            <FormLabel id="dispose-radio-buttons">Tire Type
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue="Passenger tire"
                                name="dispose-radio-buttons"
                            >
                                <FormControlLabel value="passenger-tire" control={<Radio />} label="Passenger tire" />
                                <FormControlLabel value="truck-tire" control={<Radio />} label="Truck tire" />
                                <FormControlLabel value="OTR" control={<Radio />} label="OTR" />
                                <FormControlLabel value="OTR EL" control={<Radio />} label="OTR EL" />
                                <FormControlLabel value="Agricultural" control={<Radio />} label="Agricultural" />
                                <FormControlLabel value="Studded" control={<Radio />} label="Studded" />
                                <FormControlLabel value="Different tires" control={<Radio />} label="Different tires" />
                            </RadioGroup>
                        </FormControl>

                            <TextField 
                            multiline
                            minRows={2}
                            fullWidth
                            id="filled" 
                            label="How many tires do you have?"
                            margin="dense"  
                            />
                            
                            <TextField 
                            multiline
                            minRows={2}
                            fullWidth
                            id="filled" 
                            label="Your location (Country, region)"
                            margin="dense"  
                            />

                            <FormControl
                            margin="dense">
                                <FormLabel id="yes-no-dispose">Do you have a vehicle to deliver tires to the collection point?</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                                </FormControl>

                            <TextField 
                            multiline
                            minRows={3}
                            fullWidth
                            id="filled" 
                            label="Additional comments"
                            margin="dense"  
                            />
                            
                            <Stack direction="row" spacing={2} style={{justifyContent: 'center'}} margin="dense" sx={{m: 1}}>
                                <Button variant="contained" endIcon={<SendIcon />} size="large" type="submit">
                                    Send
                                </Button>
                                </Stack>
                                                    
                    </form>
            </Box>

            </Box>
        </>
    ) 
}