import React from "react";
import "./main.css"; // Make sure to create a corresponding CSS file
import { useNavigate } from "react-router-dom";

const Uspayroll = () => {
  const navigate = useNavigate();
  return (
    <div className="containers">
      <div className="payrolls-containers">
        <div
          className="card payroll"
          onClick={() => {
            navigate("/paystubbox");
          }}
        >
          <h2>PAYSTUB</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            navigate("/W2box");
          }}
        >
          <h2>W2</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            localStorage.setItem("company", "JOBLLC");
            navigate("/JBox");
          }}
        >
          <h2>JOBWAYS LLC</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
             localStorage.setItem("company", "KACEE");
            navigate("/JBox");
          }}
        >
          <h2>KACEE</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
             localStorage.setItem("company", "RAPID");
            navigate("/JBox");
          }}
        >
          <h2>RAPID HIRING</h2>
        </div>
      </div>
    </div>
  );
};

export default Uspayroll;
