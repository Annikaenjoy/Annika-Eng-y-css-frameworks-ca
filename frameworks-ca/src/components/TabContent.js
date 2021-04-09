import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

const TabText=(props)=> {
    return (
        <>
        <Container>
           <Row> 
               <Col md={6}> 
                 <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                 venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis.
                 Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
                  </p>
                </Col>
                <Col  md={6}>
                  <Image src={props.image} fluid />
               </Col>
            </Row>
        </Container>
          </>
    )
}
export default TabText;