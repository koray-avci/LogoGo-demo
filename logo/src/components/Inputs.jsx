import React from "react";
import Form from "react-bootstrap/Form";

const Inputs = ({ type, label, value, name,onChange }) => {
  return (
    <div>
      <Form.Label htmlFor="formBasic">{label}</Form.Label>
      <Form.Control value={value}  name={name} onChange={onChange} type={type} id="formBasic" />
    </div>
  );
};

export default Inputs;
