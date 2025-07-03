import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const GenesisHikeform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setHike((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleStampChange = (e) => {
    const value = e.target.value;
    sessionStorage.setItem("offerStamp", value);
  };

  // Genesis , Genielamp , Geshur , Jobways

  const handleSubmit = (e) => {
    e.preventDefault();

    let company = localStorage.getItem("company");
    if (company === "Genesis") {
      navigate("/genesisHike");
    } else if (company === "Genielamp") {
      navigate("/genielampHike");
    } else if (company === "Geshur") {
      navigate("/geshurHike");
    } else if (company === "Jobways") {
      navigate("/jobwaysHike");
    } else if (company === "sports") {
      navigate("/SportsHike");
    }
  };

  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Salary Increase Notification</h1>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={Global.Hike.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={
                Global.Hike.date
                  ? Global.Hike.date.split("/").reverse().join("-")
                  : ""
              }
              onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                Global.setHike({
                  ...Global.Hike,
                  [e.target.name]: `${day}/${month}/${year}`, // Indian format
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
            <label>Annual Salary</label>
            <input
              type="text"
              name="annualSalary"
              value={Global.Hike.annualSalary}
              onChange={handleChange}
              placeholder="0,00,000"
            />
          </div>

          <div className="form-group">
            <label>New Annual Salary</label>
            <input
              type="text"
              name="newannualSalary"
              value={Global.Hike.newannualSalary}
              onChange={handleChange}
              placeholder="0,00,000"
            />
          </div>

          <div className="form-group">
            <label>Effective Date</label>
            <input
              type="date"
              name="effectiveDate"
              value={
                Global.Hike.effectiveDate
                  ? Global.Hike.effectiveDate.split("/").reverse().join("-")
                  : ""
              }
              onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                Global.setHike({
                  ...Global.Hike,
                  [e.target.name]: `${day}/${month}/${year}`, // Indian format
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

export default GenesisHikeform;
