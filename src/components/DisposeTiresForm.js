import React, { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
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
    const [ t ] = useTranslation("global");
    
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
                {t("dispose-tires-page.dispose-tires-upper-text")}
                </Typography>
                    <form>
                        <TextField
                        fullWidth
                        label={t("dispose-tires-page.option-1-name")}
                        // value=""
                        margin="normal"
                        required
                        align="center"/>

                        <TextField
                        fullWidth
                        label= {t("dispose-tires-page.option-2-email")}
                        type="email"
                        required
                        // value=""
                        margin="normal" />

                        <TextField
                        fullWidth
                        label={t("dispose-tires-page.option-3-phone")}
                        type="phone"
                        // value=""
                        margin="normal" />

                        <TextField
                        fullWidth
                        label={t("dispose-tires-page.option-4-company")}
                        // value=""
                        margin="normal" />

                        <FormControl
                        margin="dense"
                        >
                            <FormLabel id="dispose-radio-buttons">{t("dispose-tires-page.tire-type")}
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue="Passenger tire"
                                name="dispose-radio-buttons"
                            >
                                <FormControlLabel value="passenger-tire" control={<Radio />} label={t("dispose-tires-page.tire-option-1")} />
                                <FormControlLabel value="truck-tire" control={<Radio />} label={t("dispose-tires-page.tire-option-2")} />
                                <FormControlLabel value="OTR" control={<Radio />} label={t("dispose-tires-page.tire-option-3")} />
                                <FormControlLabel value="OTR EL" control={<Radio />} label={t("dispose-tires-page.tire-option-4")} />
                                <FormControlLabel value="Agricultural" control={<Radio />} label={t("dispose-tires-page.tire-option-5")} />
                                <FormControlLabel value="Studded" control={<Radio />} label={t("dispose-tires-page.tire-option-6")} />
                                <FormControlLabel value="Different tires" control={<Radio />} label={t("dispose-tires-page.tire-option-7")} />
                            </RadioGroup>
                        </FormControl>

                            <TextField 
                            multiline
                            minRows={2}
                            fullWidth
                            id="filled" 
                            label={t("dispose-tires-page.how-many-tires-text")}
                            margin="dense"  
                            />
                            
                            <TextField 
                            multiline
                            minRows={2}
                            fullWidth
                            id="filled" 
                            label={t("dispose-tires-page.your-location-text")}
                            margin="dense"  
                            />

                            <FormControl
                            margin="dense">
                                <FormLabel id="yes-no-dispose">{t("dispose-tires-page.do-you-have-vehicle-text")}</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label={t("dispose-tires-page.option-yes")} />
                                    <FormControlLabel value="no" control={<Radio />} label={t("dispose-tires-page.option-no")}/>
                                </RadioGroup>
                                </FormControl>

                            <TextField 
                            multiline
                            minRows={3}
                            fullWidth
                            id="filled" 
                            label={t("dispose-tires-page.additional-comments")}
                            margin="dense"  
                            />
                            
                            <Stack direction="row" spacing={2} style={{justifyContent: 'center'}} margin="dense" sx={{m: 1}}>
                                <Button variant="contained" endIcon={<SendIcon />} size="large" type="submit">
                                {t("dispose-tires-page.submit-button-text")}
                                </Button>
                                </Stack>
                                                    
                    </form>
            </Box>

            </Box>
        </>
    ) 
}