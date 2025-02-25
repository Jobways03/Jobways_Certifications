import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const SportsPayslipform = () => {
     const Global = useContext(AuthContext);
     const navigate = useNavigate();

     const handleChange = (e) => {
       const { name, value } = e.target;
       Global.setgeshurPayslip((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       navigate("/sportspayslip");
     };

  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Payslip form</h1>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={Global.geshurPayslip.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Month:</label>
            <input
              type="text"
              name="month"
              value={Global.geshurPayslip.month}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={Global.geshurPayslip.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={Global.geshurPayslip.employeeId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>function:</label>
            <input
              type="text"
              name="function"
              value={Global.geshurPayslip.function}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              name="designation"
              value={Global.geshurPayslip.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={Global.geshurPayslip.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Joining:</label>
            <input
              type="text"
              name="dateOfJoining"
              value={Global.geshurPayslip.dateOfJoining}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={Global.geshurPayslip.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Bank Name:</label>
            <input
              type="text"
              name="bankName"
              value={Global.geshurPayslip.bankName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Account Number:</label>
            <input
              type="text"
              name="accountNumber"
              value={Global.geshurPayslip.accountNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>IFSC Code:</label>
            <input
              type="text"
              name="ifscCode"
              value={Global.geshurPayslip.ifscCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>PAN:</label>
            <input
              type="text"
              name="pan"
              value={Global.geshurPayslip.pan}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Days in month:</label>
            <input
              type="text"
              name="workingDays"
              value={Global.geshurPayslip.workingDays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Loss of Pay Days:</label>
            <input
              type="text"
              name="lossOfPayDays"
              value={Global.geshurPayslip.lossOfPayDays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Paid Days:</label>
            <input
              type="text"
              name="paidDays"
              value={Global.geshurPayslip.paidDays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Basic:</label>
            <input
              type="text"
              name="basic"
              value={Global.geshurPayslip.basic}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>HRA:</label>
            <input
              type="text"
              name="hra"
              value={Global.geshurPayslip.hra}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Conveyance:</label>
            <input
              type="text"
              name="conveyance"
              value={Global.geshurPayslip.conveyance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Food Allowance:</label>
            <input
              type="text"
              name="foodAllowance"
              value={Global.geshurPayslip.foodAllowance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Medical:</label>
            <input
              type="text"
              name="medical"
              value={Global.geshurPayslip.medical}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>special Allowances:</label>
            <input
              type="text"
              name="specialAllowances"
              value={Global.geshurPayslip.specialAllowances}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Professional Tax:</label>
            <input
              type="text"
              name="professionalTax"
              value={Global.geshurPayslip.professionalTax}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Amount in Words:</label>
            <input
              type="text"
              name="amountInWords"
              value={Global.geshurPayslip.amountInWords}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SportsPayslipform;
