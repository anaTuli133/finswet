import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./menu.css"
import Logo from"../../assets/Logo.png"
const Menu = () => {
  return (
    <Navbar expand="lg" className="menu_bg" fixed ="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ami">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/features">Features</Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/readstudies">ReadStudies</Nav.Link>
            <Nav.Link as={NavLink} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
          </Nav>
          <div className="con">
                <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;