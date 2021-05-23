import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.webp";
import "./my-navbar.styles.css";


const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="myLogo" />
          </Navbar.Brand>
        </div>
        <div>
        <Navbar.Toggle data-toggle="collapse" className="navbar-toggler" aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto navbar">
              <Nav.Link className="nav-link active " href="#home">Home</Nav.Link>
              <Nav.Link className="nav-link active" href="#about">About</Nav.Link>
              <Nav.Link className="nav-link active" href="#skills">Skills</Nav.Link>
              <Nav.Link className="nav-link active" href="#projects">Projects</Nav.Link>
              <Nav.Link className="nav-link active" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
