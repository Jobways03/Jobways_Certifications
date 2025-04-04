import React, { useContext, useState } from "react";
import "./w2form.css"; // Import the CSS file
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const W2Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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

  return (
    <div className="employee-form-container">
      <form className="employee-form" onSubmit={handleSubmit}>
        <h2>Employee Information Form</h2>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            id="year"
            type="text"
            name="year"
            value={Global.w2form.year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="paystubLabel">
          <label htmlFor="date">Date</label>
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
          />
        </div>

        <div className="form-group">
          <label htmlFor="ssn">Employee's SSN</label>
          <input
            id="ssnn"
            type="text"
            name="ssn"
            value={Global.w2form.ssn}
            onChange={handleChange}
            required
          />
        </div>

        {[
          "employeeNameAddressLine1",
          "employeeNameAddressLine2",
          "employeeNameAddressLine3",
        ].map((field, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={field}>
              Employee’s Name, Address, and ZIP Code (Line {index + 1})
            </label>
            <input
              id={field}
              type="text"
              name={field}
              value={Global.w2form[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* Financial Fields */}
        <div className="form-group">
          <label htmlFor="wages">Wages</label>
          <input
            id="wages"
            type="text"
            name="wages"
            value={Global.w2form.wages}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="federalIncomeTax">Federal Income Tax</label>
          <input
            id="federalIncomeTax"
            type="text"
            name="federalIncomeTax"
            value={Global.w2form.federalIncomeTax}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="socialSecurityWages">Social Security Wages</label>
          <input
            id="socialSecurityWages"
            type="text"
            name="socialSecurityWages"
            value={Global.w2form.socialSecurityWages}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="socialSecurityTax">Social Security Tax</label>
          <input
            id="socialSecurityTax"
            type="text"
            name="socialSecurityTax"
            value={Global.w2form.socialSecurityTax}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="medicareWages">Medicare Wages</label>
          <input
            id="medicareWages"
            type="text"
            name="medicareWages"
            value={Global.w2form.medicareWages}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="medicareTax">Medicare Tax</label>
          <input
            id="medicareTax"
            type="text"
            name="medicareTax"
            value={Global.w2form.medicareTax}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            name="state"
            value={Global.w2form.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stateWages">State Wages, Tips, etc.</label>
          <input
            id="stateWages"
            type="text"
            name="stateWages"
            value={Global.w2form.stateWages}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stateIncomeTax">State Income Tax</label>
          <input
            id="stateIncomeTax"
            type="text"
            name="stateIncomeTax"
            value={Global.w2form.stateIncomeTax}
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="styled-checkbox"
            />
            INCLUDE SDI
          </label>

          {isChecked && (
            <div>
              <div className="form-group">
                <label htmlFor="localWages">Local Wages, Tips, etc.</label>
                <input
                  id="localWages"
                  type="text"
                  name="localWages"
                  value={Global.w2form.localWages}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="localIncomeTax">Local Income Tax</label>
                <input
                  id="localIncomeTax"
                  type="text"
                  name="localIncomeTax"
                  value={Global.w2form.localIncomeTax}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="localityName">Locality Name</label>
                <input
                  id="localityName"
                  type="text"
                  name="localityName"
                  value={Global.w2form.localityName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default W2Form;
