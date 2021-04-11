import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContentCards = (props) => {
  return (
    <Card className="product" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="product__title">Nuc Porttitor vel</Card.Title>
        <Card.Text className="product__description">
          Nunc malesuada eget est fringilla dapibus.
        </Card.Text>
        <Button variant="contrast">More</Button>
      </Card.Body>
    </Card>
  );
};

export default ContentCards;
