import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const Post_Agreement_form = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  // Expecting in context:
  // Global.PaymentPlanForm (object) + Global.setPaymentPlanForm (setter)

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setPaymentPlanForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Post_Agreement"); // change route if needed
  };

  const toInputDate = (ddmmyyyy) => {
    if (!ddmmyyyy) return "";
    return ddmmyyyy.split("/").reverse().join("-");
  };

  const onIndianDateChange = (e) => {
    const [year, month, day] = e.target.value.split("-");
    const formattedDate = `${day}/${month}/${year}`;
    Global.setPaymentPlanForm({
      ...Global.PaymentPlanForm,
      [e.target.name]: formattedDate,
    });
  };

  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Payment Plan Form</h1>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={toInputDate(Global.PaymentPlanForm?.date)}
              onChange={onIndianDateChange}
              required
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
              value={Global.PaymentPlanForm?.name || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              required
              value={Global.PaymentPlanForm?.location || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>SSN (Last 4 Digit)</label>
            <input
              type="text"
              name="ssnLast4"
              required
              value={Global.PaymentPlanForm?.ssnLast4 || ""}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                Global.setPaymentPlanForm((prev) => ({ ...prev, ssnLast4: v }));
              }}
              placeholder="1234"
              inputMode="numeric"
              maxLength={4}
            />
          </div>

          <div className="form-group">
            <label>Total Advance Payments</label>
            <input
              type="text"
              name="totalAdvancePayments"
              required
              value={Global.PaymentPlanForm?.totalAdvancePayments || ""}
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
              value={Global.PaymentPlanForm?.duePayments || ""}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label>Months (example - ten (10))</label>
            <input
              type="text"
              name="months"
              required
              value={Global.PaymentPlanForm?.months || ""}
              onChange={handleChange}
              placeholder="ten (10)"
            />
          </div>

          <div className="form-group">
            <label>Monthly Payment</label>
            <input
              type="text"
              name="monthlyPayment"
              required
              value={Global.PaymentPlanForm?.monthlyPayment || ""}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label>Due Date (example - 5)</label>
            <input
              type="text"
              name="dueDate"
              required
              value={Global.PaymentPlanForm?.dueDate || ""}
              onChange={(e) => {
                // keep only digits, max 2 (1-31)
                const v = e.target.value.replace(/\D/g, "").slice(0, 2);
                Global.setPaymentPlanForm((prev) => ({ ...prev, dueDate: v }));
              }}
              placeholder="5"
              inputMode="numeric"
              maxLength={2}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Post_Agreement_form;
