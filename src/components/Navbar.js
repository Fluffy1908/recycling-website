import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {

  function scrollToTop () {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>Tire Recycling UA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={scrollToTop}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" onClick={scrollToTop}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/what-we-do" onClick={scrollToTop}>What We Do</Nav.Link>
            <NavDropdown title="Our Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/our-products" onClick={scrollToTop}>Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/crumb-rubber" onClick={scrollToTop}>Crumb Rubber</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rubber-mulch" onClick={scrollToTop}>Rubber Mulch</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/metal-cord" onClick={scrollToTop}>Metal Cord</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bead-ring" onClick={scrollToTop}>Bead Ring</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/textile-cord" onClick={scrollToTop}>Textile Cord</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/applications" onClick={scrollToTop}>Applications</Nav.Link>
            <Nav.Link as={Link} to="/dispose-tires" onClick={scrollToTop}>Dispose Tires</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={scrollToTop}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarComponent;