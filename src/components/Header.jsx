import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { MdLanguage } from "react-icons/md";

function Header() {
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Navbar.Brand href="#home">
        <a href="/home">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </a>
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav>
        <MdLanguage></MdLanguage>
        <NavDropdown id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">
            <MdLanguage />
            English (US)
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">$ USD</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#home">Host your home</Nav.Link>
        <Nav.Link href="#experience">Host your experience</Nav.Link>
        <Nav.Link href="#help">Help</Nav.Link>
        <Nav.Link href="#login">Log in</Nav.Link>
        <Button variant="outline-dark">Sign Up</Button>
      </Nav>
    </Navbar>
  );
}

export default Header;
