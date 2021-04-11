import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

const ContactInformation = () => {
  return (
    <>
      <Container>
        <Row className="contact-row">
          <i class="fas fa-envelope fa-2x"></i>
          <p className="paragraph">Hello@yay.com</p>
        </Row>
        <Row className="contact-row">
          <i class="fas fa-phone fa-2x"></i>
          <p className="paragraph">123 456 7890</p>
        </Row>
        <Row className="contact-row">
          <i class="fas fa-map-marker-alt fa-2x"></i>
          <p className="paragraph">
            123 Some Street <br />
            Somewhere
            <br />
            Some City
            <br />
            10000
          </p>
        </Row>
      </Container>
    </>
  );
};

export default ContactInformation;
