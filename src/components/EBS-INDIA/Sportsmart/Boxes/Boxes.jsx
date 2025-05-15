import React, { useEffect } from "react";
import "./box.css";
import { useNavigate } from "react-router-dom";

const SportsmartBoxes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("company", "sports");
  }, []);

  return (
    <div>
      <h1>SPORTSMART</h1>
      <div className="containerws">
        <div
          className="boxj"
          onClick={() => {
            navigate("/sportsOfferform");
          }}
        >
          Offer Letter
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/sportsPayslipform");
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

export default SportsmartBoxes;
