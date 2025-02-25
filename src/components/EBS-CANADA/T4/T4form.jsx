import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const T4form = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    Global.sett4({ ...Global.t4, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/t4");
  };

  return (
    <div className="employee-form-container">
      <form className="employee-form" onSubmit={handleSubmit}>
        <h2>Employee and Employer Information Form</h2>

        {/* Year Field */}
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            id="year"
            type="text"
            name="year"
            value={Global.t4.year}
            onChange={handleChange}
          />
        </div>

        {/* Employer Information */}
        <div className="form-group">
          <label htmlFor="employerName">Employer's Name</label>
          <input
            id="employerName"
            type="text"
            name="employerName"
            value={Global.t4.employerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="employerAddress1">Employer’s Address - 1</label>
          <input
            id="employerAddress1"
            type="text"
            name="employerAddress1"
            value={Global.t4.employerAddress1}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="employerAddress2">Employer’s Address - 2</label>
          <input
            id="employerAddress2"
            type="text"
            name="employerAddress2"
            value={Global.t4.employerAddress2}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeName">Employee's Name</label>
          <input
            id="employeeName"
            type="text"
            name="employeeName"
            value={Global.t4.employeeName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeAddress1">Employee’s Address - 1</label>
          <input
            id="employeeAddress1"
            type="text"
            name="employeeAddress1"
            value={Global.t4.employeeAddress1}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeAddress2">Employee’s Address - 2</label>
          <input
            id="employeeAddress2"
            type="text"
            name="employeeAddress2"
            value={Global.t4.employeeAddress2}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="province">Province of Employment [10]</label>
          <input
            id="province"
            type="text"
            name="province"
            value={Global.t4.province}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="socialInsuranceNumber">
            Social Insurance Number [12]
          </label>
          <input
            id="socialInsuranceNumber"
            type="text"
            name="socialInsuranceNumber"
            value={Global.t4.socialInsuranceNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="employmentIncome">Employment Income [14]</label>
          <input
            id="employmentIncome"
            type="text"
            name="employmentIncome"
            value={Global.t4.employmentIncome}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cppContributions">
            Employee's CPP Contributions [16]
          </label>
          <input
            id="cppContributions"
            type="text"
            name="cppContributions"
            value={Global.t4.cppContributions}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="eiPremiums">Employee's EI Premiums [18]</label>
          <input
            id="eiPremiums"
            type="text"
            name="eiPremiums"
            value={Global.t4.eiPremiums}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="incomeTaxDeducted">Income Tax Deducted [22]</label>
          <input
            id="incomeTaxDeducted"
            type="text"
            name="incomeTaxDeducted"
            value={Global.t4.incomeTaxDeducted}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="eiInsurableEarnings">
            EI Insurable Earnings [24]
          </label>
          <input
            id="eiInsurableEarnings"
            type="text"
            name="eiInsurableEarnings"
            value={Global.t4.eiInsurableEarnings}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cppQppPensionableEarnings">
            CPP/QPP Pensionable Earnings [26]
          </label>
          <input
            id="cppQppPensionableEarnings"
            type="text"
            name="cppQppPensionableEarnings"
            value={Global.t4.cppQppPensionableEarnings}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exemption">Exempt - Exemption [28]</label>
          <select
            id="exemption"
            name="exemption"
            value={Global.t4.exemption}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="cppQpp">CPP/QPP</option>
            <option value="ei">EI</option>
            <option value="ppip">PPIP</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="employersaccountnumber">
            Employer's account number [54]
          </label>
          <input
            id="employersaccountnumber"
            type="text"
            name="employersaccountnumber"
            value={Global.t4.employersaccountnumber}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default T4form;
