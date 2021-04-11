import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const FormContent = () => {
  return (
    <Form className="form">
      <Form.Group controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <label htmlFor="basic-url">Website</label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3" variant="detail">
            https://
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Allow us to sell your personal details to whomever we want"
        />
      </Form.Group>
      <Button variant="darkgrey" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormContent;
