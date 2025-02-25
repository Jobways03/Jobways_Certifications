import React from "react";
import { useNavigate } from "react-router-dom";

const Paystubsubbox = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/SdiStubform");
  };
  const handleNonSDI = () => {
    navigate("/paystubform");
  };
  return (
    <div className="container">
      <div className="payrolls-container">
        <div className="card payroll" onClick={() => handle()}>
          <h2>SDI</h2>
        </div>
        <div className="card payroll" onClick={() => handleNonSDI()}>
          <h2>NON-SDI</h2>
        </div>
      </div>
    </div>
  );
};

export default Paystubsubbox;
