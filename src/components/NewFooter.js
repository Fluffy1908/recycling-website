import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";

export default function NewFooter() {
  const currentLanguageCode = cookies.get('i18next') || 'ua'
  const [ t ] = useTranslation("global");

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-5'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>{t("footer-new.get-connected")}</span>
        </div>

        <div>
          <a href='https://www.linkedin.com/company/tirerecycling-ua/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://www.facebook.com/tirerecycling.com.ua' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          {/* <a href='https://www.instagram.com/tirerecycling.com.ua/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a> */}
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="industry" className="me-3" />
                Tire Recycling UA
              </h6>
              <p>
              {t("footer-new.left-text")}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>{t("footer-new.products.products-top")}</h6>

              <p>
              <div>
                <Link to={`/${currentLanguageCode}/crumb-rubber`} style={{ color: 'brown' }}>
                {t("footer-new.products.crumb-rubber")}
                </Link>
              </div>
              </p>

              <p>
              <div>
                <Link to={`/${currentLanguageCode}/rubber-mulch`} style={{ color: 'brown' }}>
                {t("footer-new.products.rubber-mulch")}
                </Link>
              </div>
              </p>

              <p>
              <div>
                <Link to={`/${currentLanguageCode}/metal-cord`} style={{ color: 'brown' }}>
                {t("footer-new.products.metal-cord")}
                </Link>
              </div>
              </p>

              <p>
              <div>
                <Link to={`/${currentLanguageCode}/bead-ring`} style={{ color: 'brown' }}>
                {t("footer-new.products.bead-ring")}
                </Link>
              </div>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              {t("footer-new.useful-links.usef-links")}
                </h6>

              <p>
              <div>
                <Link to={`/${currentLanguageCode}/what-we-do`} style={{ color: 'brown' }}>
                {t("footer-new.useful-links.what-we-do")}
                </Link>
              </div>
              </p>

              <p>
              <div>
                <Link to={`/${currentLanguageCode}/dispose-tires`} style={{ color: 'brown' }}>
                {t("footer-new.useful-links.dispose-tires")}
                </Link>
              </div>
              </p>

              <p>
              <div>
                <Link to={`/${currentLanguageCode}/about-us`} style={{ color: 'brown' }}>
                {t("footer-new.useful-links.abouts-us")}
                </Link>
              </div>
              </p>
              
              <p>
              <div>
                <Link to={`/${currentLanguageCode}/contact-us`} style={{ color: 'brown' }}>
                {t("footer-new.useful-links.contacts")}
                </Link>
              </div>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="building" className="me-2" />
                {t("footer-new.address.cor-address")}
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="mailto:info@tirerecycling.com.ua">
                info@tirerecycling.com.ua
                </a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> <a href="tel:+380676312222">+38 068 68 68 700</a>
              </p>
              <p><MDBIcon icon="angles-right" className="me-3" />{t("footer-new.address.company")}</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: Tire Recycling UA
      </div>
    </MDBFooter>
  );
}