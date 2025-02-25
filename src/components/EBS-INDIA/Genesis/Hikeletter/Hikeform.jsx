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
              type="text"
              name="date"
              value={Global.Hike.date}
              onChange={handleChange}
              placeholder="01st January 2000"
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
              type="text"
              name="effectiveDate"
              value={Global.Hike.effectiveDate}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GenesisHikeform;
