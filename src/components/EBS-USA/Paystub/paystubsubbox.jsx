import React from "react";
import { useNavigate } from "react-router-dom";

const Paystubsubbox = () => {
  const navigate = useNavigate();

  const goToForm = (type, fliType) => {
    localStorage.setItem("PAYSTUB_TYPE", type); // SDI | NON_SDI
    localStorage.setItem("FLI_TYPE", fliType); // FLI | NON_FLI

    if (type === "SDI") {
      navigate("/SdiStubform");
    } else {
      navigate("/paystubform");
    }
  };

  return (
    <div className="container">
      <div className="payrolls-container">
        {/* SDI + FLI */}
        <div className="card payroll" onClick={() => goToForm("SDI", "FLI")}>
          <h2>SDI + FLI</h2>
        </div>

        {/* SDI + NON FLI */}
        <div
          className="card payroll"
          onClick={() => goToForm("SDI", "NON_FLI")}
        >
          <h2>SDI + NON-FLI</h2>
        </div>

        {/* NON SDI + FLI */}
        <div
          className="card payroll"
          onClick={() => goToForm("NON_SDI", "FLI")}
        >
          <h2>NON-SDI + FLI</h2>
        </div>

        {/* NON SDI + NON FLI */}
        <div
          className="card payroll"
          onClick={() => goToForm("NON_SDI", "NON_FLI")}
        >
          <h2>NON-SDI + NON-FLI</h2>
        </div>
      </div>
    </div>
  );
};

export default Paystubsubbox;
