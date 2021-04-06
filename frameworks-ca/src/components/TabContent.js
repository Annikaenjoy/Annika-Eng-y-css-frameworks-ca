import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import tab1 from "../img/TabImages/tab-1.jpg";

function FirstContent() {
    return (
        <>
        <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={tab1} fluid />
    </Col>
  </Row>
</Container>
    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
         venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis.
          Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
          </p>;
          </>
    )
}
export default FirstContent;