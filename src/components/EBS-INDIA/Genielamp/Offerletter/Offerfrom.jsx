import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const GenieOfferform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setOfferform((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/genielampoffer");
  };
  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Offer Letter Form</h1>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={Global.Offerform.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date </label>
            <input
              type="text"
              name="date"
              value={Global.Offerform.date}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={Global.Offerform.position}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Start Date </label>
            <input
              type="text"
              name="startDate"
              value={Global.Offerform.startDate}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>Salary Package</label>
            <input
              type="text"
              name="salaryPackage"
              value={Global.Offerform.salaryPackage}
              onChange={handleChange}
              placeholder="0,00,000"
            />
          </div>

          <div className="form-group">
            <label>Work Time</label>
            <input
              type="text"
              name="workTime"
              value={Global.Offerform.workTime}
              onChange={handleChange}
              placeholder="9 AM - 6 PM"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GenieOfferform;
