import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="payrolls-container">
        <div
          className="card payroll"
          onClick={() => {
            navigate("/invoicebox");
          }}
        >
          <h2>INVOICES</h2>
        </div>

        <div
          className="card payroll"
          onClick={() => {
            navigate("/select");
          }}
        >
          <h2>OUTSOURCING</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
