import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  const [ t ] = useTranslation("global");
  
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{t("contact-us-page.accordion-1-title")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("contact-us-page.accordion-1-text")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{t("contact-us-page.accordion-2-title")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("contact-us-page.accordion-2-text")}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}