import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";
import "./T4.css"

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  const sideYear = Global.t4.year.toString().slice(-2);

  return (
    <div ref={ref}>
      <div className="t4_form">
        <img src="./images/t4_1.jpg" alt="...Loading" className="img3" />
        <p className="t4-1">{Global.t4.employerName}</p>
        <p className="t4-2">{Global.t4.employerAddress1}</p>
        <p className="t4-3">{Global.t4.employerAddress2}</p>
        <p className="t4-4">{Global.t4.year}</p>
        <p className="t4-5">{Global.t4.employersaccountnumber}</p>
        <p className="t4-6">{Global.t4.socialInsuranceNumber}</p>
        <p className="t4-7">{Global.t4.employeeName}</p>
        <p className="t4-8">{Global.t4.employeeAddress1}</p>
        <p className="t4-9">{Global.t4.employeeAddress2}</p>
        <p className="t4-10">{Global.t4.province}</p>
        <p className="t4-11">{Global.t4.employmentIncome}</p>
        <p className="t4-12">{Global.t4.cppContributions}</p>
        <p className="t4-13">{Global.t4.eiInsurableEarnings}</p>
        <p className="t4-14">{Global.t4.eiPremiums}</p>
        <p className="t4-15">{Global.t4.incomeTaxDeducted}</p>
        <p className="t4-16">{Global.t4.cppQppPensionableEarnings}</p>

        {Global.t4.exemption === "cppQpp" ? (
          <p className="t4-17">&#10003;</p>
        ) : Global.t4.exemption === "ei" ? (
          <p className="t4-18">&#10003;</p>
        ) : Global.t4.exemption === "ppip" ? (
          <p className="t4-19">&#10003;</p>
        ) : (
          <></>
        )}

        <div className="t4-20"></div>
        <p className="t4-21 vertical-text">({sideYear})</p>

        {/* second box */}

        <p className="t4-1a">{Global.t4.employerName}</p>
        <p className="t4-2a">{Global.t4.employerAddress1}</p>
        <p className="t4-3a">{Global.t4.employerAddress2}</p>
        <p className="t4-4a">{Global.t4.year}</p>
        <p className="t4-5a">{Global.t4.employersaccountnumber}</p>
        <p className="t4-6a">{Global.t4.socialInsuranceNumber}</p>
        <p className="t4-7a">{Global.t4.employeeName}</p>
        <p className="t4-8a">{Global.t4.employeeAddress1}</p>
        <p className="t4-9a">{Global.t4.employeeAddress2}</p>
        <p className="t4-10a">{Global.t4.province}</p>
        <p className="t4-11a">{Global.t4.employmentIncome}</p>
        <p className="t4-12a">{Global.t4.cppContributions}</p>
        <p className="t4-13a">{Global.t4.eiInsurableEarnings}</p>
        <p className="t4-14a">{Global.t4.eiPremiums}</p>
        <p className="t4-15a">{Global.t4.incomeTaxDeducted}</p>
        <p className="t4-16a">{Global.t4.cppQppPensionableEarnings}</p>

        {Global.t4.exemption === "cppQpp" ? (
          <p className="t4-17a">&#10003;</p>
        ) : Global.t4.exemption === "ei" ? (
          <p className="t4-18a">&#10003;</p>
        ) : Global.t4.exemption === "ppip" ? (
          <p className="t4-19a">&#10003;</p>
        ) : (
          <></>
        )}

        <div className="t4-20a"></div>
        <p className="t4-21a vertical-text">({sideYear})</p>
      </div>
    </div>
  );
});

const T4 = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className="print-button">
        Print this out!
      </button>
    </div>
  );
};

export default T4;
