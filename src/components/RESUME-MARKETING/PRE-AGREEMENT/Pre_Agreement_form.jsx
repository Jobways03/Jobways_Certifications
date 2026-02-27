import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const Pre_Agreement_form = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  // Expecting in context:
  // Global.ServiceFeeForm (object) + Global.setServiceFeeForm (setter)
  // If your context uses different names, just rename below accordingly.

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setServiceFeeForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Pre_Agreement"); // change route if needed
  };

  const toInputDate = (ddmmyyyy) => {
    if (!ddmmyyyy) return "";
    // "dd/mm/yyyy" -> "yyyy-mm-dd"
    return ddmmyyyy.split("/").reverse().join("-");
  };

  const onIndianDateChange = (e) => {
    const [year, month, day] = e.target.value.split("-");
    const formattedDate = `${day}/${month}/${year}`;
    Global.setServiceFeeForm({
      ...Global.ServiceFeeForm,
      [e.target.name]: formattedDate,
    });
  };

  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Service Fee Form</h1>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              required
              value={toInputDate(Global.ServiceFeeForm?.date)}
              onChange={onIndianDateChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ddd",
                boxSizing: "border-box",
                marginBottom: "15px",
              }}
            />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={Global.ServiceFeeForm?.name || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>SSN (Last 4 Digit)</label>
            <input
              type="text"
              name="ssnLast4"
              required
              value={Global.ServiceFeeForm?.ssnLast4 || ""}
              onChange={(e) => {
                // digits only, max 4
                const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                Global.setServiceFeeForm((prev) => ({ ...prev, ssnLast4: v }));
              }}
              placeholder="1234"
              inputMode="numeric"
              maxLength={4}
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              name="role"
              required
              value={Global.ServiceFeeForm?.role || ""}
              onChange={handleChange}
              placeholder="Developer / Analyst"
            />
          </div>

          <div className="form-group">
            <label>Total Service Fee</label>
            <input
              type="text"
              name="totalServiceFee"
              required
              value={Global.ServiceFeeForm?.totalServiceFee || ""}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label>Total Advance Payment</label>
            <input
              type="text"
              name="totalAdvancePayment"
              required
              value={Global.ServiceFeeForm?.totalAdvancePayment || ""}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label>First Advance Payment</label>
            <input
              type="text"
              name="firstAdvancePayment"
              required
              value={Global.ServiceFeeForm?.firstAdvancePayment || ""}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label>Second Advance Payment</label>
            <input
              type="text"
              name="secondAdvancePayment"
              required
              value={Global.ServiceFeeForm?.secondAdvancePayment || ""}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label>Due Payments</label>
            <input
              type="text"
              name="duePayments"
              required
              value={Global.ServiceFeeForm?.duePayments || ""}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Pre_Agreement_form;
