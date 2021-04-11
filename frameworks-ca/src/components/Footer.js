import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { vimeo } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="footer__item">Vimeo Youtube</div>
            </Col>
            <Col xs={6} md={4}>
              <p className="footer__item--start">Hello@yay.com</p>
            </Col>
            <Col xs={6} md={4}>
              <p className="footer__item--end">Copyright 2021</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
