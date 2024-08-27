import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const TableScreen = ({ rows, setRows }) => {
  const [openModal, setOpenModal] = useState(null);
  const [fullscreen, setFullscreen] = useState(true);
  

  const handleInputChange = (index, event) => {
    const values = [...rows];
    values[index][event.target.name] = event.target.value;
    setRows(values);
  };

  

  const modalContent = {
    code: ["code 1", "code 2", "code 3"],
    description: ["description 1", "description 2", "description 3"],
  };

  const handleOpenModal = (modalName) => {
    setFullscreen(true);
    setOpenModal(modalName);
  };

  const handleOptionSelect = (modalName, option) => {
    const updatedRows = [...rows];
    updatedRows[rows.length - 1][modalName] = option;
    setRows(updatedRows);
    setOpenModal(null);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  const currentModalContent = openModal ? modalContent[openModal] : [];

  return (
    <div className="tableContainer">
      <Table className="table col-12" responsive="sm">
        <thead>
          <tr>
            <th>Türü</th>
            <th>Kodu</th>
            <th>Açıklaması</th>
            <th>Açıklaması 2</th>
            <th>Varyant Açıklaması 2</th>
            <th>Miktar</th>
            <th>Bekleyen Miktar</th>
            <th>Birim</th>
            <th>Birim Fiyat</th>
            <th>Dövizli Birim Fiyat</th>
            <th>Döviz</th>
            <th>KDV</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <Form.Control
                  name="type"
                  value={row.type}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <div className="inputWithBtn">
                  <Form.Control
                    readOnly
                    className="readOnlyInput"
                    name="code"
                    value={row.code}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <Button
                    onClick={() => handleOpenModal("code")}
                    variant="dark"
                    className="dotBtnClass"
                  >
                    ...
                  </Button>
                </div>
              </td>
              <td>
                <div className="inputWithBtn">
                  <Form.Control
                    readOnly
                    className="readOnlyInput"
                    name="description"
                    value={row.description}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <Button
                    onClick={() => handleOpenModal("description")}
                    variant="dark"
                    className="dotBtnClass"
                  >
                    ...
                  </Button>
                </div>
              </td>
              <td>
                <Form.Control
                  name="description2"
                  value={row.description2}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Control
                  name="variantDescription"
                  value={row.variantDescription}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Control
                  name="quantity"
                  value={row.quantity}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Control
                  name="pendingQuantity"
                  value={row.pendingQuantity}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Control
                  name="unit"
                  value={row.unit}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Control
                  name="unitPrice"
                  value={row.unitPrice}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Control
                  name="currencyUnitPrice"
                  value={row.currencyUnitPrice}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Control
                  name="currency"
                  value={row.currency}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Control
                  name="kdv"
                  value={row.kdv}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      

      <Modal show={!!openModal} fullscreen={fullscreen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentModalContent.length > 0 ? (
            currentModalContent.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(openModal, option)}
              >
                {option}
              </button>
            ))
          ) : (
            <p>Seçenek bulunamadı.</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TableScreen;
