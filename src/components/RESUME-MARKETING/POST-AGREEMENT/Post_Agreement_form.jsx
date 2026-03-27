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

  return (
    <div style={formPageStyle}>
      <form onSubmit={handleSubmit} style={formCardStyle}>
        <h1 style={formTitleStyle}>Payment Plan Form</h1>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Date</label>
          <input
            type="date"
            name="date"
            value={toInputDate(Global.PaymentPlanForm?.date)}
            onChange={onIndianDateChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            required
            value={Global.PaymentPlanForm?.name || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Location</label>
          <input
            type="text"
            name="location"
            required
            value={Global.PaymentPlanForm?.location || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>SSN (Last 4 Digit)</label>
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
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Total Advance Payments</label>
          <input
            type="text"
            name="totalAdvancePayments"
            required
            value={Global.PaymentPlanForm?.totalAdvancePayments || ""}
            onChange={handleChange}
            placeholder="0.00"
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Due Payments</label>
          <input
            type="text"
            name="duePayments"
            required
            value={Global.PaymentPlanForm?.duePayments || ""}
            onChange={handleChange}
            placeholder="0.00"
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Months (example - ten (10))</label>
          <input
            type="text"
            name="months"
            required
            value={Global.PaymentPlanForm?.months || ""}
            onChange={handleChange}
            placeholder="ten (10)"
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Monthly Payment</label>
          <input
            type="text"
            name="monthlyPayment"
            required
            value={Global.PaymentPlanForm?.monthlyPayment || ""}
            onChange={handleChange}
            placeholder="0.00"
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Due Date (example - 5)</label>
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
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Post_Agreement_form;
