import React, { useContext, useState } from "react";
import "./w2form.css";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const W2Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSuiChecked, setIsSuiChecked] = useState(false);
  const [isPmflChecked, setIsPmflChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSuiCheckboxChange = () => {
    setIsSuiChecked(!isSuiChecked);
  };

  const handlePmflCheckboxChange = () => {
    setIsPmflChecked(!isPmflChecked);
  };

  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setw2form((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/w2");
  };

  const formPageStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const formCardStyle = {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "40px 36px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  };

  const formTitleStyle = {
    fontSize: "26px",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "32px",
    textAlign: "center",
    paddingBottom: "16px",
    borderBottom: "3px solid #667eea",
  };

  const formGroupStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "6px",
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    fontSize: "14px",
    border: "1.5px solid #d1d5db",
    borderRadius: "10px",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#f9fafb",
    transition: "border-color 0.2s",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    fontWeight: "700",
    color: "#ffffff",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
  };

  const checkboxContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  };

  return (
    <div style={formPageStyle}>
      <form style={formCardStyle} onSubmit={handleSubmit}>
        <h2 style={formTitleStyle}>Employee Information Form</h2>

        <div style={formGroupStyle}>
          <label htmlFor="year" style={labelStyle}>Year</label>
          <input
            id="year"
            type="text"
            name="year"
            value={Global.w2form.year}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="date" style={labelStyle}>Date</label>
          <input
            id="dates"
            type="date"
            name="date"
            value={
              Global.w2form.date
                ? new Date(Global.w2form.date).toLocaleDateString("en-CA")
                : ""
            }
            onChange={(e) => {
              const [year, month, day] = e.target.value.split("-");
              Global.setw2form({
                ...Global.w2form,
                [e.target.name]: `${month}/${day}/${year}`,
              });
            }}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="ssn" style={labelStyle}>Employee's SSN</label>
          <input
            id="ssnn"
            type="text"
            name="ssn"
            value={Global.w2form.ssn}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {[
          "employeeNameAddressLine1",
          "employeeNameAddressLine2",
          "employeeNameAddressLine3",
        ].map((field, index) => (
          <div style={formGroupStyle} key={index}>
            <label htmlFor={field} style={labelStyle}>
              Employee's Name, Address, and ZIP Code (Line {index + 1})
            </label>
            <input
              id={field}
              type="text"
              name={field}
              value={Global.w2form[field]}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        ))}

        <div style={formGroupStyle}>
          <label htmlFor="wages" style={labelStyle}>Wages</label>
          <input
            id="wages"
            type="text"
            name="wages"
            value={Global.w2form.wages}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="federalIncomeTax" style={labelStyle}>Federal Income Tax</label>
          <input
            id="federalIncomeTax"
            type="text"
            name="federalIncomeTax"
            value={Global.w2form.federalIncomeTax}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="socialSecurityWages" style={labelStyle}>Social Security Wages</label>
          <input
            id="socialSecurityWages"
            type="text"
            name="socialSecurityWages"
            value={Global.w2form.socialSecurityWages}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="socialSecurityTax" style={labelStyle}>Social Security Tax</label>
          <input
            id="socialSecurityTax"
            type="text"
            name="socialSecurityTax"
            value={Global.w2form.socialSecurityTax}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="medicareWages" style={labelStyle}>Medicare Wages</label>
          <input
            id="medicareWages"
            type="text"
            name="medicareWages"
            value={Global.w2form.medicareWages}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="medicareTax" style={labelStyle}>Medicare Tax</label>
          <input
            id="medicareTax"
            type="text"
            name="medicareTax"
            value={Global.w2form.medicareTax}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="state" style={labelStyle}>State</label>
          <input
            id="state"
            type="text"
            name="state"
            value={Global.w2form.state}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="stateWages" style={labelStyle}>State Wages, Tips, etc.</label>
          <input
            id="stateWages"
            type="text"
            name="stateWages"
            value={Global.w2form.stateWages}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="stateIncomeTax" style={labelStyle}>State Income Tax</label>
          <input
            id="stateIncomeTax"
            type="text"
            name="stateIncomeTax"
            value={Global.w2form.stateIncomeTax}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {/* SDI Checkbox */}
        <div style={checkboxContainerStyle}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label style={labelStyle}>INCLUDE SDI</label>
        </div>

        {isChecked && (
          <div>
            <div style={formGroupStyle}>
              <label htmlFor="localWages" style={labelStyle}>Local Wages, Tips, etc.</label>
              <input
                id="localWages"
                type="text"
                name="localWages"
                value={Global.w2form.localWages}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label htmlFor="localIncomeTax" style={labelStyle}>Local Income Tax</label>
              <input
                id="localIncomeTax"
                type="text"
                name="localIncomeTax"
                value={Global.w2form.localIncomeTax}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label htmlFor="localityName" style={labelStyle}>Locality Name</label>
              <input
                id="localityName"
                type="text"
                name="localityName"
                value={Global.w2form.localityName}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
          </div>
        )}

        {/* SUI Checkbox */}
        <div style={checkboxContainerStyle}>
          <input
            type="checkbox"
            checked={isSuiChecked}
            onChange={handleSuiCheckboxChange}
          />
          <label style={labelStyle}>INCLUDE SUI TAX</label>
        </div>

        {isSuiChecked && (
          <div style={formGroupStyle}>
            <label htmlFor="suiTax" style={labelStyle}>SUI Tax</label>
            <input
              id="suiTax"
              type="text"
              name="suiTax"
              value={Global.w2form.suiTax || ""}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        )}

        {/* PMFL Checkbox */}
        <div style={checkboxContainerStyle}>
          <input
            type="checkbox"
            checked={isPmflChecked}
            onChange={handlePmflCheckboxChange}
          />
          <label style={labelStyle}>INCLUDE PMFL TAX</label>
        </div>

        {isPmflChecked && (
          <div style={formGroupStyle}>
            <label htmlFor="pmflTax" style={labelStyle}>PMFL Tax</label>
            <input
              id="pmflTax"
              type="text"
              name="pmflTax"
              value={Global.w2form.pmflTax || ""}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        )}

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default W2Form;