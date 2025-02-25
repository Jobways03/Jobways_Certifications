import React, { useEffect } from "react";
import "./box.css";
import { useNavigate } from "react-router-dom";

const GeshurinfraBoxes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("company", "Geshur");
  }, []);

  return (
    <div>
      <h1>GESHUR INFRA</h1>
      <div className="containerws">
        <div
          className="boxj"
          onClick={() => {
            navigate("/geshurOfferform");
          }}
        >
          Offer Letter
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/geshurPayslipform");
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

export default GeshurinfraBoxes;
