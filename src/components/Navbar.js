import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to="/" >Tire Recycling UA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" >About Us</Nav.Link>
            <Nav.Link as={Link} to="/what-we-do" >What We Do</Nav.Link>
            <NavDropdown title="Our Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/our-products" >Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/crumb-rubber" >Crumb Rubber</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rubber-mulch" >Rubber Mulch</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/metal-cord" >Metal Cord</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bead-ring" >Bead Ring</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/textile-cord" >Textile Cord</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/applications" >Applications</Nav.Link>
            <Nav.Link as={Link} to="/dispose-tires" >Dispose Tires</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" >Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarComponent;