import React from "react";
import "./main.css"; // Make sure to create a corresponding CSS file
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="payrolls-container">
      <div
        className="card payroll"
        onClick={() => {
          navigate("/services");
        }}
      >
        <h2>CAREER SERVICES</h2>
      </div>

      <div>
        <div
          className="card payroll"
          onClick={() => {
            navigate("/Uspayroll");
          }}
        >
          <h2>EBS - USA</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            navigate("/IndianMain");
          }}
        >
          <h2>EBS - INDIA</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            navigate("/canada_Main");
          }}
        >
          <h2>EBS - CANADA</h2>
        </div>
      </div>
      <div
        className="card payroll"
        onClick={() => {
          navigate("/COIform");
        }}
      >
        <h2>CERTIFICATE OF INSURANCE</h2>
      </div>
      <div
        className="card payroll"
        onClick={() => {
          navigate("/SM_Invoiceform");
        }}
      >
        <h2>SPORTSMART INVOICE</h2>
      </div>
    </div>
  );
};

export default Main;
