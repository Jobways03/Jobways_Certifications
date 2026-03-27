import React, { useContext } from "react";
import "./form.css";
import AuthContext from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Stubform() {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const toMMDDYYYY = (value) => {
    if (!value) return "";
    const [year, month, day] = value.split("-");
    return `${month}/${day}/${year}`;
  };

  const toInputDate = (mmddyyyy) => {
    // Converts "MM/DD/YYYY" -> "YYYY-MM-DD" for <input type="date">
    if (!mmddyyyy) return "";
    const parts = mmddyyyy.split("/");
    if (parts.length !== 3) return "";
    const [month, day, year] = parts;
    if (!year || !month || !day) return "";
    const mm = String(month).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  };

  const handleChange = (e) => {
    Global.setForm({ ...Global.form, [e.target.name]: e.target.value });
  };

  const handleDateFieldChange = (e) => {
    const { name, value } = e.target; // value: YYYY-MM-DD
    Global.setForm({ ...Global.form, [name]: toMMDDYYYY(value) });
  };

  const isFLI = localStorage.getItem("FLI_TYPE") === "FLI";

  const handleSubmit = (e) => {
    e.preventDefault();

    const lineLength = 150;
    const amount = Global.form.amountInWords || "";
    const output = amount + "*".repeat(Math.max(0, lineLength - amount.length));

    Global.setForm({ ...Global.form, amountInWords: output });

    if (isFLI) navigate("/Paystubfli");
    else navigate("/paystub");
  };

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

  const sectionHeaderStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a2e',
    marginTop: '24px',
    marginBottom: '16px',
    borderBottom: '2px solid #e5e7eb',
    paddingBottom: '8px',
  };

  return (
    <div style={formPageStyle}>
      <form onSubmit={handleSubmit} id="paystubForm" style={formCardStyle}>
        <h2 style={formTitleStyle}>Paystub form</h2>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={Global.form.fullName || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Date:</label>
          <input
            type="date"
            name="date"
            value={toInputDate(Global.form.date)}
            onChange={handleDateFieldChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Total Amount:</label>
          <input
            type="text"
            name="totalAmount"
            value={Global.form.totalAmount || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Total Amount in Words:</label>
          <input
            type="text"
            name="amountInWords"
            value={Global.form.amountInWords || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Address:</label>
          <input
            type="text"
            name="address"
            value={Global.form.address || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Pay Period From:</label>
          <input
            type="date"
            name="payPeriodFrom"
            value={toInputDate(Global.form.payPeriodFrom)}
            onChange={handleDateFieldChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Pay Period To:</label>
          <input
            type="date"
            name="payPeriodTo"
            value={toInputDate(Global.form.payPeriodTo)}
            onChange={handleDateFieldChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>SSN:</label>
          <input
            type="text"
            name="ssn"
            value={Global.form.ssn || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Marital Status:</label>
          <select
            id="maritalStatusSelect"
            name="maritalStatus"
            value={Global.form.maritalStatus || ""}
            onChange={handleChange}
            required
            style={selectStyle}
          >
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Total Hours:</label>
          <input
            type="text"
            name="totalHours"
            placeholder=":00 included"
            value={Global.form.totalHours || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Hourly Rate:</label>
          <input
            type="text"
            name="hourlyRate"
            placeholder=".00 included"
            value={Global.form.hourlyRate || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Current Amount:</label>
          <input
            type="text"
            name="currentAmount"
            value={Global.form.currentAmount || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>YTD Gross Amount:</label>
          <input
            type="text"
            name="ytdGrossAmount"
            value={Global.form.ytdGrossAmount || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <h3 style={sectionHeaderStyle}>Withholdings</h3>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Medicare Withholdings - Current:</label>
          <input
            type="text"
            name="medicareCurrent"
            value={Global.form.medicareCurrent || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Medicare Withholdings - YTD:</label>
          <input
            type="text"
            name="medicareYTD"
            value={Global.form.medicareYTD || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Social Security Withholdings - Current:</label>
          <input
            type="text"
            name="socialSecurityCurrent"
            value={Global.form.socialSecurityCurrent || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Social Security Withholdings - YTD:</label>
          <input
            type="text"
            name="socialSecurityYTD"
            value={Global.form.socialSecurityYTD || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <h3 style={sectionHeaderStyle}>Taxes</h3>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Federal Tax - Current:</label>
          <input
            type="text"
            name="federalTaxCurrent"
            value={Global.form.federalTaxCurrent || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Federal Tax - YTD:</label>
          <input
            type="text"
            name="federalTaxYTD"
            value={Global.form.federalTaxYTD || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>State Tax - Current:</label>
          <input
            type="text"
            name="stateTaxCurrent"
            value={Global.form.stateTaxCurrent || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>State Tax - YTD:</label>
          <input
            type="text"
            name="stateTaxYTD"
            value={Global.form.stateTaxYTD || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>State :</label>
          <input
            type="text"
            name="state"
            value={Global.form.state || ""}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        {isFLI && (
          <>
            <h3 style={sectionHeaderStyle}>FLI</h3>

            <div style={formGroupStyle}>
              <label style={labelStyle}>FLI - Current:</label>
              <input
                type="text"
                name="FLICurrent"
                value={Global.form.FLICurrent || ""}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>FLI - YTD:</label>
              <input
                type="text"
                name="FLIYTD"
                value={Global.form.FLIYTD || ""}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
          </>
        )}

        <button type="submit" id="submitBtn" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Stubform;
