import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const USOfferForm = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setUSOffer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let company = localStorage.getItem("company");
    if (company === "JOBLLC") {
      navigate("/Jobwaysllcoffer");
    } else if (company === "KACEE") {
      navigate("/Kaceeoffer");
    } else if (company === "RAPID") {
      navigate("/Rapidhiringoffer");
    } 
  };

  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Offer Form</h1>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={Global.USOffer.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={Global.USOffer.date}
              onChange={handleChange}
              placeholder=""
            />
          </div>

          <div className="form-group">
            <label>Social Security Number</label>
            <input
              type="text"
              name="socialSecurityNumber"
              value={Global.USOffer.socialSecurityNumber}
              onChange={handleChange}
              placeholder="XXX-XX-XXXX"
            />
          </div>

          <div className="form-group">
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={Global.USOffer.position}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              name="salary"
              value={Global.USOffer.salary}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Client Company</label>
            <input
              type="text"
              name="clientCompany"
              value={Global.USOffer.clientCompany}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="text"
              name="startDate"
              value={Global.USOffer.startDate}
              onChange={handleChange}
              placeholder=""
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default USOfferForm;
