import React from "react";
import Form from 'react-bootstrap/Form';

const Selects = ({label}) => {
  return (
    <div>
    <Form.Label htmlFor="formBasic">{label}</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
};

export default Selects;
