import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const T4form = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const formPageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const formCardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '40px 36px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  };

  const formTitleStyle = {
    fontSize: '26px',
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: '32px',
    textAlign: 'center',
    paddingBottom: '16px',
    borderBottom: '3px solid #667eea',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '6px',
  };

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    fontSize: '14px',
    border: '1.5px solid #d1d5db',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f9fafb',
    transition: 'border-color 0.2s',
  };

  const selectStyle = {
    width: '100%',
    padding: '11px 14px',
    fontSize: '14px',
    border: '1.5px solid #d1d5db',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f9fafb',
    transition: 'border-color 0.2s',
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '700',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '12px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
  };

  const handleChange = (e) => {
    Global.sett4({ ...Global.t4, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/t4");
  };

  return (
    <div style={formPageStyle}>
      <form style={formCardStyle} onSubmit={handleSubmit}>
        <h2 style={formTitleStyle}>Employee and Employer Information Form</h2>

        {/* Year Field */}
        <div style={formGroupStyle}>
          <label htmlFor="year" style={labelStyle}>Year</label>
          <input
            id="year"
            type="text"
            name="year"
            value={Global.t4.year}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Employer Information */}
        <div style={formGroupStyle}>
          <label htmlFor="employerName" style={labelStyle}>Employer's Name</label>
          <input
            id="employerName"
            type="text"
            name="employerName"
            value={Global.t4.employerName}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="employerAddress1" style={labelStyle}>Employer's Address - 1</label>
          <input
            id="employerAddress1"
            type="text"
            name="employerAddress1"
            value={Global.t4.employerAddress1}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="employerAddress2" style={labelStyle}>Employer's Address - 2</label>
          <input
            id="employerAddress2"
            type="text"
            name="employerAddress2"
            value={Global.t4.employerAddress2}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="employeeName" style={labelStyle}>Employee's Name</label>
          <input
            id="employeeName"
            type="text"
            name="employeeName"
            value={Global.t4.employeeName}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="employeeAddress1" style={labelStyle}>Employee's Address - 1</label>
          <input
            id="employeeAddress1"
            type="text"
            name="employeeAddress1"
            value={Global.t4.employeeAddress1}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="employeeAddress2" style={labelStyle}>Employee's Address - 2</label>
          <input
            id="employeeAddress2"
            type="text"
            name="employeeAddress2"
            value={Global.t4.employeeAddress2}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="province" style={labelStyle}>Province of Employment [10]</label>
          <input
            id="province"
            type="text"
            name="province"
            value={Global.t4.province}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="socialInsuranceNumber" style={labelStyle}>
            Social Insurance Number [12]
          </label>
          <input
            id="socialInsuranceNumber"
            type="text"
            name="socialInsuranceNumber"
            value={Global.t4.socialInsuranceNumber}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="employmentIncome" style={labelStyle}>Employment Income [14]</label>
          <input
            id="employmentIncome"
            type="text"
            name="employmentIncome"
            value={Global.t4.employmentIncome}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="cppContributions" style={labelStyle}>
            Employee's CPP Contributions [16]
          </label>
          <input
            id="cppContributions"
            type="text"
            name="cppContributions"
            value={Global.t4.cppContributions}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="eiPremiums" style={labelStyle}>Employee's EI Premiums [18]</label>
          <input
            id="eiPremiums"
            type="text"
            name="eiPremiums"
            value={Global.t4.eiPremiums}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="incomeTaxDeducted" style={labelStyle}>Income Tax Deducted [22]</label>
          <input
            id="incomeTaxDeducted"
            type="text"
            name="incomeTaxDeducted"
            value={Global.t4.incomeTaxDeducted}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="eiInsurableEarnings" style={labelStyle}>
            EI Insurable Earnings [24]
          </label>
          <input
            id="eiInsurableEarnings"
            type="text"
            name="eiInsurableEarnings"
            value={Global.t4.eiInsurableEarnings}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="cppQppPensionableEarnings" style={labelStyle}>
            CPP/QPP Pensionable Earnings [26]
          </label>
          <input
            id="cppQppPensionableEarnings"
            type="text"
            name="cppQppPensionableEarnings"
            value={Global.t4.cppQppPensionableEarnings}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="exemption" style={labelStyle}>Exempt - Exemption [28]</label>
          <select
            id="exemption"
            name="exemption"
            value={Global.t4.exemption}
            onChange={handleChange}
            style={selectStyle}
          >
            <option value="">Select</option>
            <option value="cppQpp">CPP/QPP</option>
            <option value="ei">EI</option>
            <option value="ppip">PPIP</option>
          </select>
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="employersaccountnumber" style={labelStyle}>
            Employer's account number [54]
          </label>
          <input
            id="employersaccountnumber"
            type="text"
            name="employersaccountnumber"
            value={Global.t4.employersaccountnumber}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default T4form;
