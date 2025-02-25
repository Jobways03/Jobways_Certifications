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
              value={Global.genesisPayslip.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Month:</label>
            <input
              type="text"
              name="month"
              value={Global.genesisPayslip.month}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={Global.genesisPayslip.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={Global.genesisPayslip.employeeId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>function:</label>
            <input
              type="text"
              name="function"
              value={Global.genesisPayslip.function}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              name="designation"
              value={Global.genesisPayslip.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={Global.genesisPayslip.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Joining:</label>
            <input
              type="text"
              name="dateOfJoining"
              value={Global.genesisPayslip.dateOfJoining}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={Global.genesisPayslip.gender}
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
              value={Global.genesisPayslip.bankName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Account Number:</label>
            <input
              type="text"
              name="accountNumber"
              value={Global.genesisPayslip.accountNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>IFSC Code:</label>
            <input
              type="text"
              name="ifscCode"
              value={Global.genesisPayslip.ifscCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>PAN:</label>
            <input
              type="text"
              name="pan"
              value={Global.genesisPayslip.pan}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Days in month:</label>
            <input
              type="text"
              name="workingDays"
              value={Global.genesisPayslip.workingDays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Loss of Pay Days:</label>
            <input
              type="text"
              name="lossOfPayDays"
              value={Global.genesisPayslip.lossOfPayDays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Paid Days:</label>
            <input
              type="text"
              name="paidDays"
              value={Global.genesisPayslip.paidDays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Basic:</label>
            <input
              type="text"
              name="basic"
              value={Global.genesisPayslip.basic}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>HRA:</label>
            <input
              type="text"
              name="hra"
              value={Global.genesisPayslip.hra}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Conveyance:</label>
            <input
              type="text"
              name="conveyance"
              value={Global.genesisPayslip.conveyance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Food Allowance:</label>
            <input
              type="text"
              name="foodAllowance"
              value={Global.genesisPayslip.foodAllowance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Medical:</label>
            <input
              type="text"
              name="medical"
              value={Global.genesisPayslip.medical}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>special Allowances:</label>
            <input
              type="text"
              name="specialAllowances"
              value={Global.genesisPayslip.specialAllowances}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Professional Tax:</label>
            <input
              type="text"
              name="professionalTax"
              value={Global.genesisPayslip.professionalTax}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Amount in Words:</label>
            <input
              type="text"
              name="amountInWords"
              value={Global.genesisPayslip.amountInWords}
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

export default GenesisPayslipform;
