import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const GenesisOfferform = () => {
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
    navigate("/genesisOffer");
  };

  const handleStampChange = (e) => {
    const value = e.target.value;
    sessionStorage.setItem("offerStamp", value);
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
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={
                Global.Offerform.date
                  ? Global.Offerform.date.split("/").reverse().join("-")
                  : ""
              }
              onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                const formattedDate = `${day}/${month}/${year}`; // Indian format
                Global.setOfferform({
                  ...Global.Offerform,
                  [e.target.name]: formattedDate,
                });
              }}
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
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={Global.Offerform.position}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={
                Global.Offerform.startDate
                  ? Global.Offerform.startDate.split("/").reverse().join("-")
                  : ""
              }
              onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                const formattedDate = `${day}/${month}/${year}`; // Indian format
                Global.setOfferform({
                  ...Global.Offerform,
                  [e.target.name]: formattedDate,
                });
              }}
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

          <div className="form-group">
            <label>Stamp Requirement</label>
            <select
              name="stampRequirement"
              onChange={handleStampChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ddd",
                boxSizing: "border-box",
                marginBottom: "15px",
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="with_stamp">With Stamp</option>
              <option value="without_stamp">Without Stamp</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GenesisOfferform;
