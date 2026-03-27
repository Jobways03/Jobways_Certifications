import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const GenesisPayslipform = () => {
     const Global = useContext(AuthContext);
     const navigate = useNavigate();

     const handleChange = (e) => {
       const { name, value } = e.target;
       Global.setgenesisPayslip((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       navigate("/genesisPayslip");
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
      <form onSubmit={handleSubmit} style={formCardStyle}>
        <h1 style={formTitleStyle}>Payslip form</h1>

        <h3 style={sectionHeaderStyle}>Employee Details</h3>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={Global.genesisPayslip.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Month:</label>
          <input
            type="text"
            name="month"
            value={Global.genesisPayslip.month}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Year:</label>
          <input
            type="text"
            name="year"
            value={Global.genesisPayslip.year}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Employee ID:</label>
          <input
            type="text"
            name="employeeId"
            value={Global.genesisPayslip.employeeId}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>function:</label>
          <input
            type="text"
            name="function"
            value={Global.genesisPayslip.function}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Designation:</label>
          <input
            type="text"
            name="designation"
            value={Global.genesisPayslip.designation}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Location:</label>
          <input
            type="text"
            name="location"
            value={Global.genesisPayslip.location}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Date of Joining:</label>
          <input
            type="date"
            name="dateOfJoining"
            value={
              Global.genesisPayslip.dateOfJoining
                ? Global.genesisPayslip.dateOfJoining
                    .split("/")
                    .reverse()
                    .join("-")
                : ""
            }
            onChange={(e) => {
              const [year, month, day] = e.target.value.split("-");
              const formattedDate = `${day}/${month}/${year}`; // DD/MM/YYYY
              Global.setgenesisPayslip({
                ...Global.genesisPayslip,
                [e.target.name]: formattedDate,
              });
            }}
            style={inputStyle}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Gender:</label>
          <select
            name="gender"
            value={Global.genesisPayslip.gender}
            onChange={handleChange}
            required
            style={selectStyle}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <h3 style={sectionHeaderStyle}>Bank Details</h3>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={Global.genesisPayslip.bankName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={Global.genesisPayslip.accountNumber}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>IFSC Code:</label>
          <input
            type="text"
            name="ifscCode"
            value={Global.genesisPayslip.ifscCode}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>PAN:</label>
          <input
            type="text"
            name="pan"
            value={Global.genesisPayslip.pan}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <h3 style={sectionHeaderStyle}>Attendance</h3>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Days in month:</label>
          <input
            type="text"
            name="workingDays"
            value={Global.genesisPayslip.workingDays}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Loss of Pay Days:</label>
          <input
            type="text"
            name="lossOfPayDays"
            value={Global.genesisPayslip.lossOfPayDays}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Paid Days:</label>
          <input
            type="text"
            name="paidDays"
            value={Global.genesisPayslip.paidDays}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <h3 style={sectionHeaderStyle}>Earnings</h3>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Basic:</label>
          <input
            type="text"
            name="basic"
            value={Global.genesisPayslip.basic}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>HRA:</label>
          <input
            type="text"
            name="hra"
            value={Global.genesisPayslip.hra}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Conveyance:</label>
          <input
            type="text"
            name="conveyance"
            value={Global.genesisPayslip.conveyance}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Food Allowance:</label>
          <input
            type="text"
            name="foodAllowance"
            value={Global.genesisPayslip.foodAllowance}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Medical:</label>
          <input
            type="text"
            name="medical"
            value={Global.genesisPayslip.medical}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>special Allowances:</label>
          <input
            type="text"
            name="specialAllowances"
            value={Global.genesisPayslip.specialAllowances}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <h3 style={sectionHeaderStyle}>Deductions</h3>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Professional Tax:</label>
          <input
            type="text"
            name="professionalTax"
            value={Global.genesisPayslip.professionalTax}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Amount in Words:</label>
          <input
            type="text"
            name="amountInWords"
            value={Global.genesisPayslip.amountInWords}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default GenesisPayslipform;
