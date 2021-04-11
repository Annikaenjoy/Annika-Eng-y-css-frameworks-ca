import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const TabText = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <p className="paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
          </Col>
          <Col md={4}>
            <Image src={props.image} fluid />
          </Col>
          <Col md={4}>
            <p className="share">
              Share <i className="fab fa-facebook-f fa-2x"></i>
              <i className="fab fa-twitter fa-2x"></i>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TabText;
