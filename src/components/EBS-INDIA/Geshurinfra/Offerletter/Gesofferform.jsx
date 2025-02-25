import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const GeshurOfferform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setgeshurofferform((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/geshurinfraOffer");
  };
  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Offer Letter Form</h1>

          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={Global.geshurofferform.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <input
              type="text"
              name="date"
              value={Global.geshurofferform.date}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>Position:</label>
            <input
              type="text"
              name="position"
              value={Global.geshurofferform.position}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Joining Date:</label>
            <input
              type="text"
              name="joiningDate"
              value={Global.geshurofferform.joiningDate}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>Basic Salary:</label>
            <input
              type="text"
              name="basicSalary"
              value={Global.geshurofferform.basicSalary}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>HRA:</label>
            <input
              type="text"
              name="hra"
              value={Global.geshurofferform.hra}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Conveyance:</label>
            <input
              type="text"
              name="conveyance"
              value={Global.geshurofferform.conveyance}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Food Allowance:</label>
            <input
              type="text"
              name="foodAllowance"
              value={Global.geshurofferform.foodAllowance}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Medical Allowance:</label>
            <input
              type="text"
              name="medicalAllowance"
              value={Global.geshurofferform.medicalAllowance}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Special Allowances:</label>
            <input
              type="text"
              name="specialAllowances"
              value={Global.geshurofferform.specialAllowances}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Professional Tax:</label>
            <input
              type="text"
              name="professionalTax"
              value={Global.geshurofferform.professionalTax}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GeshurOfferform;
