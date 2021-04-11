import React from "react";
import Col from "react-bootstrap/Col";

const ContactInformation = () => {
  return (
    <>
      <Col>
        <i class="fas fa-envelope fa-2x"></i>
        <p>Hello@yay.com</p>
      </Col>
      <Col>
        <i class="fas fa-phone fa-2x"></i>
        <p>123 456 7890</p>
      </Col>
      <Col>
        <i class="fas fa-map-marker-alt fa-2x"></i>
        <p>
          123 Some Street <br />
          Somewhere
          <br />
          Some City
          <br />
          10000
        </p>
      </Col>
    </>
  );
};

export default ContactInformation;
