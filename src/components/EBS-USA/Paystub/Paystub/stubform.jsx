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
              value={Global.form.fullName || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Date:
            <input
              type="date"
              name="date"
              value={toInputDate(Global.form.date)}
              onChange={handleDateFieldChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Total Amount:
            <input
              type="text"
              name="totalAmount"
              value={Global.form.totalAmount || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Total Amount in Words:
            <input
              type="text"
              name="amountInWords"
              value={Global.form.amountInWords || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Address:
            <input
              type="text"
              name="address"
              value={Global.form.address || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Pay Period From:
            <input
              type="date"
              name="payPeriodFrom"
              value={toInputDate(Global.form.payPeriodFrom)}
              onChange={handleDateFieldChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Pay Period To:
            <input
              type="date"
              name="payPeriodTo"
              value={toInputDate(Global.form.payPeriodTo)}
              onChange={handleDateFieldChange}
              required
            />
          </label>

          <label className="paystubLabel">
            SSN:
            <input
              type="text"
              name="ssn"
              value={Global.form.ssn || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Marital Status:
            <select
              id="maritalStatusSelect"
              name="maritalStatus"
              value={Global.form.maritalStatus || ""}
              onChange={handleChange}
              required
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </label>

          <label className="paystubLabel">
            Total Hours:
            <input
              type="text"
              name="totalHours"
              placeholder=":00 included"
              value={Global.form.totalHours || ""}
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
              value={Global.form.hourlyRate || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Current Amount:
            <input
              type="text"
              name="currentAmount"
              value={Global.form.currentAmount || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            YTD Gross Amount:
            <input
              type="text"
              name="ytdGrossAmount"
              value={Global.form.ytdGrossAmount || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Medicare Withholdings - Current:
            <input
              type="text"
              name="medicareCurrent"
              value={Global.form.medicareCurrent || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Medicare Withholdings - YTD:
            <input
              type="text"
              name="medicareYTD"
              value={Global.form.medicareYTD || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Social Security Withholdings - Current:
            <input
              type="text"
              name="socialSecurityCurrent"
              value={Global.form.socialSecurityCurrent || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Social Security Withholdings - YTD:
            <input
              type="text"
              name="socialSecurityYTD"
              value={Global.form.socialSecurityYTD || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Federal Tax - Current:
            <input
              type="text"
              name="federalTaxCurrent"
              value={Global.form.federalTaxCurrent || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            Federal Tax - YTD:
            <input
              type="text"
              name="federalTaxYTD"
              value={Global.form.federalTaxYTD || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            State Tax - Current:
            <input
              type="text"
              name="stateTaxCurrent"
              value={Global.form.stateTaxCurrent || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            State Tax - YTD:
            <input
              type="text"
              name="stateTaxYTD"
              value={Global.form.stateTaxYTD || ""}
              onChange={handleChange}
              required
            />
          </label>

          <label className="paystubLabel">
            State :
            <input
              type="text"
              name="state"
              value={Global.form.state || ""}
              onChange={handleChange}
              required
            />
          </label>

          {isFLI && (
            <>
              <label className="paystubLabel">
                FLI - Current:
                <input
                  type="text"
                  name="FLICurrent"
                  value={Global.form.FLICurrent || ""}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="paystubLabel">
                FLI - YTD:
                <input
                  type="text"
                  name="FLIYTD"
                  value={Global.form.FLIYTD || ""}
                  onChange={handleChange}
                  required
                />
              </label>
            </>
          )}

          <button type="submit" id="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Stubform;
