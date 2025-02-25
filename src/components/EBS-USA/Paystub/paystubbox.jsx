import React from "react";
import { useNavigate } from "react-router-dom";

const Paystubbox = () => {
  const navigate = useNavigate();
  const handle = (company) => {
    localStorage.setItem("Paycompany", company);
    navigate("/Paystubsubbox");
  };
  return (
    <div className="container">
      <div className="payrolls-container">
        <div
          className="card payroll"
          onClick={() => {
            handle("rapid");
          }}
        >
          <h2>RAPID HIRING</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            handle("kacee");
          }}
        >
          <h2>KACEE TECH</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            handle("jobways");
          }}
        >
          <h2>JOBWAYS LLC</h2>
        </div>
      </div>
    </div>
  );
};

export default Paystubbox;
