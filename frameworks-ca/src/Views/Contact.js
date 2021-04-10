import React from "react";
import NavBar from '../components/Navbar';
import FormContent from '../components/ContactForm';
import Heading from '../components/Heading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactInformation from '../components/ContactIcons';
import Footer from '../components/Footer';

const Contact=()=> {
    return (
      <>
      <NavBar/>
      <Heading content="Submit your details"/>
      <Container>
           <Row> 
               <Col md={6}> 
                 <FormContent/>
                </Col>
                <Col  md={6}>
                <ContactInformation/>
               </Col>
            </Row>
        </Container>
        <Footer/>
      </>
    )
}
export default Contact;