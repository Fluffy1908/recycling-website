import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from "react-i18next";

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  const [ t ] = useTranslation("global")

  function ScrollToTopMain() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("Scroll function run.")
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={ScrollToTopMain}>Tire Recycling UA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">{t("navbar.home")}</Nav.Link>
            <Nav.Link as={Link} to="/about-us">{t("navbar.about-us")}</Nav.Link>
            <Nav.Link as={Link} to="/what-we-do">{t("navbar.what-we-do")}</Nav.Link>
            <NavDropdown title={t("navbar.our-products")} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/our-products">{t("navbar.overview")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/crumb-rubber">{t("navbar.crumb-rubber")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rubber-mulch">{t("navbar.rubber-mulch")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/metal-cord">{t("navbar.metal-cord")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bead-ring">{t("navbar.bead-ring")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/textile-cord">{t("navbar.textile-cord")}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/applications">{t("navbar.applications")}</Nav.Link>
            <Nav.Link as={Link} to="/dispose-tires">{t("navbar.dispose-tires")}</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">{t("navbar.contact-us")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarComponent;