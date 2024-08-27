import React from "react";
import Form from 'react-bootstrap/Form';
import "../App.css";
import Button from 'react-bootstrap/Button';

const ReadOnlyInput = ({type,label,onButtonClick,value}) => {
  

  return (
    <div>
      <Form.Label htmlFor="formBasic">{label}</Form.Label>
    <div className="readOnlyBtnDiv">
      <Form.Control value={value} className="readOnlyInput" readOnly type={type} id="formBasic" /> <Button  variant="dark" className="dotBtnClass" onClick={onButtonClick}>...</Button>
    </div>
    </div>
  );
};

export default ReadOnlyInput;
