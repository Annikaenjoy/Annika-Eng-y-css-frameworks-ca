import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const TabText = (props) => {
  return (
    <>
      <Container ClassName="tabContainer">
        <Row className="tabContainer__row">
          <Col className="tabContainer__column" md={6}>
            <p className="tabContainer__item">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
          </Col>
          <Col className="tabContainer__column" md={6}>
            <Image className="tabContainer__item" src={props.image} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TabText;
