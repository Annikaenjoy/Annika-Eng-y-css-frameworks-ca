import React from "react";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="navbarBrand" href="/">
          The YAY Company
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav" className="mr-auto">
            <NavLink className="nav__link" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav__link" to="/news">
              News
            </NavLink>
            <NavLink className="nav__link" to="/contact">
              Contact
            </NavLink>
          </Nav>
          <InputGroup>
            <FormControl placeholder="Search" />
            <InputGroup.Append>
              <Button variant="primary">Go</Button>
            </InputGroup.Append>
          </InputGroup>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavBar;
