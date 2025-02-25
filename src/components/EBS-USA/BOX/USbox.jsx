import React from "react";
import { useNavigate } from "react-router-dom";

const USBox = () => {
  const navigate = useNavigate();

  const handleone = () => {
    navigate("/experienceform");
  };

  const handletwo = () => {
    navigate("/USOfferForm");
  };

  const handlethree = () => {
    navigate("/relievingform");
  };

  return (
    <div className="">
      <div className="payrolls-container">
        <div
          className="card payroll"
          onClick={() => {
            handletwo();
          }}
        >
          <h2>OFFER LETTER</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            navigate("/GenieEditform");
          }}
        >
          <h2>EDITABLE FORM</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            handleone();
          }}
        >
          <h2>EXPERIENCE</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            handlethree();
          }}
        >
          <h2>RELIEVING LETTER</h2>
        </div>
      </div>
    </div>
  );
};

export default USBox;
