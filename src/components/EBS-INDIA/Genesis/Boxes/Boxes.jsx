import React, { useEffect } from "react";
import "./box.css";
import { useNavigate } from "react-router-dom";

const GenesisBoxes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("company", "Genesis");
  }, []);
  return (
    <div>
      <h1>GENESIS 7 SOLUTIONS</h1>
      <div className="containerws">
        <div
          className="boxj"
          onClick={() => {
            navigate("/genesisOfferform");
          }}
        >
          Offer Letter
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/genesisPayslipform");
          }}
        >
          Payslip
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/hikeform");
          }}
        >
          Hike Letter
        </div>

        <div
          className="boxj"
          onClick={() => {
            navigate("/experienceform");
          }}
        >
          Experience
        </div>

        <div
          className="boxj"
          onClick={() => {
            navigate("/relievingform");
          }}
        >
          Relieving Letter
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/GenieEditform");
          }}
        >
          Editable Letter
        </div>
      </div>
    </div>
  );
};

export default GenesisBoxes;
