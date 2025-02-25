import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const JobwaysPayslipform = () => {
     const Global = useContext(AuthContext);
     const navigate = useNavigate();

     const handleChange = (e) => {
       const { name, value } = e.target;
       Global.setjobwaysPayslip((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       navigate("/jobwayspayslip"); 
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
              value={Global.jobwaysPayslip.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Month:</label>
            <input
              type="text"
              name="month"
              value={Global.jobwaysPayslip.month}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={Global.jobwaysPayslip.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={Global.jobwaysPayslip.employeeId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={Global.jobwaysPayslip.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              name="designation"
              value={Global.jobwaysPayslip.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={Global.jobwaysPayslip.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Joining:</label>
            <input
              type="text"
              name="dateOfJoining"
              value={Global.jobwaysPayslip.dateOfJoining}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={Global.jobwaysPayslip.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Bank Name:</label>
            <input
              type="text"
              name="bankName"
              value={Global.jobwaysPayslip.bankName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Account Number:</label>
            <input
              type="text"
              name="accountNumber"
              value={Global.jobwaysPayslip.accountNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>IFSC Code:</label>
            <input
              type="text"
              name="ifscCode"
              value={Global.jobwaysPayslip.ifscCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>PAN:</label>
            <input
              type="text"
              name="pan"
              value={Global.jobwaysPayslip.pan}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Working Days:</label>
            <input
              type="text"
              name="workingDays"
              value={Global.jobwaysPayslip.workingDays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Loss of Pay Days:</label>
            <input
              type="text"
              name="lossOfPayDays"
              value={Global.jobwaysPayslip.lossOfPayDays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Paid Days:</label>
            <input
              type="text"
              name="paidDays"
              value={Global.jobwaysPayslip.paidDays}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Basic:</label>
            <input
              type="text"
              name="basic"
              value={Global.jobwaysPayslip.basic}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>HRA:</label>
            <input
              type="text"
              name="hra"
              value={Global.jobwaysPayslip.hra}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Conveyance:</label>
            <input
              type="text"
              name="conveyance"
              value={Global.jobwaysPayslip.conveyance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Medical:</label>
            <input
              type="text"
              name="medical"
              value={Global.jobwaysPayslip.medical}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Food Allowance:</label>
            <input
              type="text"
              name="foodAllowance"
              value={Global.jobwaysPayslip.foodAllowance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Incentives:</label>
            <input
              type="text"
              name="incentive"
              value={Global.jobwaysPayslip.incentive}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Other Allowances:</label>
            <input
              type="text"
              name="otherAllowances"
              value={Global.jobwaysPayslip.otherAllowances}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Professional Tax:</label>
            <input
              type="text"
              name="professionalTax"
              value={Global.jobwaysPayslip.professionalTax}
              onChange={handleChange}
              required
            />
          </div>

         
          <div className="form-group">
            <label>Amount in Words:</label>
            <input
              type="text"
              name="amountInWords"
              value={Global.jobwaysPayslip.amountInWords}
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

export default JobwaysPayslipform;
