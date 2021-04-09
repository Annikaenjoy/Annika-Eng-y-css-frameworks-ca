import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import {NavLink} from "react-router-dom";

const NavBar=()=> {
    return (
        <>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavLink exact to="/">Home</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact</NavLink>
    </Nav>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}
export default NavBar;