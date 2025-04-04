import React, { useContext, useState } from "react";
import "./form.css";
import AuthContext from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Stubform() {
  const [date, setdate] = useState("");
  const [date2, setdate2] = useState("");
  const [date3, setdate3] = useState("");
  const [date4, setdate4] = useState("");

  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const formatDateToDisplay = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${month}/${day}/${year}`;
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name == "date") {
      setdate(value);
    } else if (name == "payPeriodFrom") {
      setdate2(value);
    } else if (name == "payPeriodTo") {
      setdate3(value);
    } else setdate4(value);

    //console.log(name, value);
    const formattedDate = formatDateToDisplay(value);
    Global.setForm({ ...Global.form, [name]: formattedDate });
  };

  const handleChange = (e) => {
    Global.setForm({ ...Global.form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lineLength = 150;
    let output =
      Global.form.amountInWords +
      "*".repeat(lineLength - Global.form.amountInWords.length);
    Global.setForm({ ...Global.form, amountInWords: output });

    navigate("/paystub");
  };

  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} id="paystubForm">
          <h2>Paystub form</h2>
          <label className="paystubLabel">
            Full Name:
            <input
              type="text"
              name="fullName"
              value={Global.form.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Date:
            <input
              type="date"
              name="date"
              value={
                Global.form.date
                  ? new Date(Global.form.date).toLocaleDateString("en-CA")
                  : ""
              }
              onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                const formattedDate = `${month}/${day}/${year}`; // MM/DD/YYYY
                Global.setForm({
                  ...Global.form,
                  [e.target.name]: formattedDate,
                });
              }}
              required
            />
          </label>
          <label className="paystubLabel">
            Total Amount:
            <input
              type="text"
              name="totalAmount"
              value={Global.form.totalAmount}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Total Amount in Words:
            <input
              type="text"
              name="amountInWords"
              value={Global.form.amountInWords}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Address:
            <input
              type="text"
              name="address"
              value={Global.form.address}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Pay Period From:
            <input
              type="date"
              name="payPeriodFrom"
              value={
                Global.form.payPeriodFrom
                  ? new Date(Global.form.payPeriodFrom).toLocaleDateString(
                      "en-CA"
                    )
                  : ""
              }
              onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                Global.setForm({
                  ...Global.form,
                  [e.target.name]: `${month}/${day}/${year}`,
                });
              }}
              required
            />
          </label>

          <label className="paystubLabel">
            Pay Period To:
            <input
              type="date"
              name="payPeriodTo"
              value={
                Global.form.payPeriodTo
                  ? new Date(Global.form.payPeriodTo).toLocaleDateString(
                      "en-CA"
                    )
                  : ""
              }
              onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                Global.setForm({
                  ...Global.form,
                  [e.target.name]: `${month}/${day}/${year}`,
                });
              }}
              required
            />
          </label>
          <label className="paystubLabel">
            SSN:
            <input
              type="text"
              name="ssn"
              value={Global.form.ssn}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Marital Status:
            <select
              id="maritalStatusSelect"
              name="maritalStatus"
              value={Global.form.maritalStatus}
              onChange={handleChange}
              required
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </label>
          {/* <label className="paystubLabel">
            Pay Date:
            <input
              type="text"
              name="payDate"
              value={Global.form.payDate}
              onChange={handleChange}
              required
            />
          </label> */}
          <label className="paystubLabel">
            Total Hours:
            <input
              type="text"
              name="totalHours"
              placeholder=":00 included"
              value={Global.form.totalHours}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Hourly Rate:
            <input
              type="text"
              name="hourlyRate"
              placeholder=".00 included"
              value={Global.form.hourlyRate}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Current Amount:
            <input
              type="text"
              name="currentAmount"
              value={Global.form.currentAmount}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            YTD Gross Amount:
            <input
              type="text"
              name="ytdGrossAmount"
              value={Global.form.ytdGrossAmount}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Medicare Withholdings - Current:
            <input
              type="text"
              name="medicareCurrent"
              value={Global.form.medicareCurrent}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Medicare Withholdings - YTD:
            <input
              type="text"
              name="medicareYTD"
              value={Global.form.medicareYTD}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Social Security Withholdings - Current:
            <input
              type="text"
              name="socialSecurityCurrent"
              value={Global.form.socialSecurityCurrent}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Social Security Withholdings - YTD:
            <input
              type="text"
              name="socialSecurityYTD"
              value={Global.form.socialSecurityYTD}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Federal Tax - Current:
            <input
              type="text"
              name="federalTaxCurrent"
              value={Global.form.federalTaxCurrent}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Federal Tax - YTD:
            <input
              type="text"
              name="federalTaxYTD"
              value={Global.form.federalTaxYTD}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            State Tax - Current:
            <input
              type="text"
              name="stateTaxCurrent"
              value={Global.form.stateTaxCurrent}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            State Tax - YTD:
            <input
              type="text"
              name="stateTaxYTD"
              value={Global.form.stateTaxYTD}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            State :
            <input
              type="text"
              name="state"
              value={Global.form.state}
              onChange={handleChange}
              required
            />
          </label>
          {/* <label className="paystubLabel">
            Employer Name :
            <input
              type="text"
              name="employername"
              value={Global.form.employername}
              onChange={handleChange}
              required
            />
          </label>
          <label className="paystubLabel">
            Employer Address :
            <input
              type="text"
              name="employerAddress"
              value={Global.form.employerAddress}
              onChange={handleChange}
              required
            />
          </label> */}
          <button type="submit" id="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Stubform;
