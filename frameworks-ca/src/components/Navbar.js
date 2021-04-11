import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
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
          <Form inline>
            <Form.Control type="text" placeholder="Search" />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavBar;
