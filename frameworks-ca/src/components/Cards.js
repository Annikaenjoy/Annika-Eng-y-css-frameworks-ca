import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ContentCards = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>Nuc Porttitor vel</Card.Title>
        <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
};

export default ContentCards;
