import React, { useState } from "react";
import Inputs from "./Inputs";
import "../App.css";
import ReadOnlyInput from "./ReadOnlyInput";
import Selects from "./Selects";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';

const InputsScreen = ({ formData, setFormData }) => {
  const [openModal, setOpenModal] = useState(null);
  const [fullscreen, setFullscreen] = useState(true);
  // const [selectedOptions, setSelectedOptions] = useState({
  //   kodu: '',
  //   unvani: '',
  //   odemeler: '',
  //   ticariIslemGrubu: '',
  //   ozelKod: '',
  //   satisElemaniKodu: ''
  // });

  const handleOpenModal = (modalName) => {
    setFullscreen(true); // Ensuring fullscreen mode is enabled
    setOpenModal(modalName);
  };

  const handleOptionSelect = (modalName, option) => {
    setFormData((prev) => ({
      ...prev,
      [modalName]: option
    }));
    setOpenModal(null);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  const modalContent = {
    kodu: ['Kod 1', 'Kod 2', 'Kod 3'],
    unvani: ['Unvan 1', 'Unvan 2', 'Unvan 3'],
    odemeler: ['Ödeme 1', 'Ödeme 2', 'Ödeme 3'],
    ticariIslemGrubu: ['Grup 1', 'Grup 2', 'Grup 3'],
    ozelKod: ['Özel Kod 1', 'Özel Kod 2', 'Özel Kod 3'],
    satisElemaniKodu: ['Satış 1', 'Satış 2', 'Satış 3'],
  };

  const currentModalContent = openModal ? modalContent[openModal] : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="generalContainer">
      <div className="topInputs">
        <div className="leftInputs">
          <Inputs onChange={handleChange}  name={'fisNo'} label={"Fiş No:"} value={formData.fisNo}  type={"text"} />
          <Inputs onChange={handleChange}  name={'tarih'} label={"Tarih"} value={formData.tarih} type={"date"} />
          <Inputs onChange={handleChange}  name={'zaman'} label={"Zaman"} value={formData.zaman} type={"time"} />
          <Inputs onChange={handleChange}  name={'belgeNo'} label={"Belge No"} value={formData.belgeNo} type={"text"} />
        </div>
        <div className="centerInputs">
          <div className="centerInput">
            <ReadOnlyInput 
              onButtonClick={() => handleOpenModal('kodu')} 
              value={formData.kodu} 
              label={"Kodu"} 
              type={"text"} 
            /> 
          </div>
          <div className="centerInput">
            <ReadOnlyInput 
              onButtonClick={() => handleOpenModal('unvani')} 
              value={formData.unvani} 
              label={"Unvanı"} 
              type={"text"} 
            /> 
          </div>
          <div className="centerInput">
            <ReadOnlyInput  
              onButtonClick={() => handleOpenModal('odemeler')} 
              value={formData.odemeler} 
              label={"Ödemeler"} 
              type={"text"} 
            /> 
          </div>
          <div className="centerInput">
            <ReadOnlyInput 
              onButtonClick={() => handleOpenModal('ticariIslemGrubu')} 
              value={formData.ticariIslemGrubu} 
              label={"Ticari İşlem Grubu"} 
              type={"text"} 
            />
          </div>
        </div>
        <div className="rightInputs">
          <Selects label={"İş Yeri"} />
          <Selects label={"Ambar"} />
        </div>
      </div>
      <div className="bottomInputs">
        <div className="bottomInput">
          <ReadOnlyInput 
            onButtonClick={() => handleOpenModal('ozelKod')} 
            value={formData.ozelKod} 
            label={"Özel Kod"} 
            type={"text"} 
          />
        </div>
        <div className="bottomInput">
          <ReadOnlyInput 
            onButtonClick={() => handleOpenModal('satisElemaniKodu')} 
            value={formData.satisElemaniKodu} 
            label={"Satış Elemanı Kodu"} 
            type={"text"} 
          />
        </div>
        {/* <div className="bottomInput bottomRadio">
          <Form.Check className="radioElement" aria-label="option 1" />
          <Form.Label className="radioElement" htmlFor="formBasic">
            Ödemeli
          </Form.Label>
        </div> */}
      </div>

      <Modal 
        show={!!openModal} 
        fullscreen={fullscreen} 
        onHide={closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentModalContent.length > 0 ? (
            currentModalContent.map((option, index) => (
              <button key={index} onClick={() => handleOptionSelect(openModal, option)}>
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

export default InputsScreen;
