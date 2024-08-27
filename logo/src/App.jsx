import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputsScreen from "./components/inputsScreen";
import TableScreen from "./components/TableScreen";
import Button from "react-bootstrap/Button";

const App = () => {
  const [rows, setRows] = useState([
    {
      type: "",
      code: "",
      description: "",
      description2: "",
      variantDescription: "",
      quantity: "",
      pendingQuantity: "",
      unit: "",
      unitPrice: "",
      currencyUnitPrice: "",
      currency: "",
      kdv: "",
    },
  ]);
  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        type: "",
        code: "",
        description: "",
        description2: "",
        variantDescription: "",
        quantity: "",
        pendingQuantity: "",
        unit: "",
        unitPrice: "",
        currencyUnitPrice: "",
        currency: "",
        kdv: "",
      },
    ]);

    console.log(rows);
  };

  const [formData, setFormData] = useState({
    fisNo: "",
    tarih: "",
    zaman: "",
    belgeNo: "",
    kodu: "",
    unvani: "",
    odemeler: "",
    ticariIslemGrubu: "",
    ozelKod: "",
    satisElemaniKodu: "",
  });

  const handleSave = () => {
    const dataToSave = [{
      formData,
      rows,
    }];

    setFormData({
      fisNo: "",
      tarih: "",
      zaman: "",
      belgeNo: "",
      kodu: "",
      unvani: "",
      odemeler: "",
      ticariIslemGrubu: "",
      ozelKod: "",
      satisElemaniKodu: "",
    });

    setRows([
      {
        type: "",
        code: "",
        description: "",
        description2: "",
        variantDescription: "",
        quantity: "",
        pendingQuantity: "",
        unit: "",
        unitPrice: "",
        currencyUnitPrice: "",
        currency: "",
        kdv: "",
      },
    ]);

    console.log("Saving data:", dataToSave);
  };

  return (
    <div className="appDiv">
      <InputsScreen formData={formData} setFormData={setFormData} />
      <TableScreen rows={rows} setRows={setRows} />
      <div className="btnGroup">
        <div className="addRowBtnDiv">
          <Button variant="dark" onClick={handleAddRow}>
            Satır Ekle
          </Button>
        </div>
        <div className="saveBtnDiv">
          <Button onClick={handleSave} variant="danger">
            Kaydet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
