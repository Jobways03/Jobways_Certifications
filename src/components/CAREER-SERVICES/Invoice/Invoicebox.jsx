import React from "react";
import { useNavigate } from "react-router-dom";

const Invoicebox = () => {
  const navigate = useNavigate();
  const handle = () => {
    localStorage.setItem("path", "/jellygit");
    navigate("/outform");
  };
  return (
    <div className="container">
      <div className="payrolls-container">
        <div
          className="card payroll"
          onClick={() => {
            navigate("/invoiceform");
          }}
        >
          <h2>All Services - Stripe</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            navigate("/Invoiceform_Paypal");
          }}
        >
          <h2>All Services - Paypal</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            handle();
          }}
        >
          <h2>Vendor Invoice</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            navigate("/MercuryInvoiceform");
          }}
        >
          <h2>Mercury Invoice</h2>
        </div>
      </div>
    </div>
  );
};

export default Invoicebox;
