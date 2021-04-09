import React from "react";
import NavBar from '../components/Navbar';
import FormContent from '../components/ContactForm';
import Heading from '../components/Heading';

const Contact=()=> {
    return (
      <>
      <NavBar/>
      <Heading content="Submit your details"/>
      <FormContent/>
      </>
    )
}
export default Contact;