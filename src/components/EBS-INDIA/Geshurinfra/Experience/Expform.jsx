import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const Experienceform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setExperience((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Genesis , Genielamp , Geshur , Jobways

  const handleSubmit = (e) => {
    e.preventDefault();

    let company = localStorage.getItem("company");
    if (company === "Genesis") {
      navigate("/genesisExperience");
    } else if (company === "Genielamp") {
      navigate("/genielampExperience");
    } else if (company === "Geshur") {
      navigate("/geshurExperience");
    } else if (company === "Jobways") {
      navigate("/jobwaysExperience");
    } else if (company === "sports") {
      navigate("/sportsExperience");
    } else if (company === "JOBLLC") {
      navigate("/JobwaysLLCExperience");
    } else if (company === "KACEE") {
      navigate("/KaceeExperience");
    } else if (company === "RAPID") {
      navigate("/RapidExperience");
    }
  };

  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Experience Form</h1>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={Global.Experience.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={Global.Experience.gender}
            >
              <option value="">Select</option>
              <option value="He">He</option>
              <option value="She">She</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={Global.Experience.date}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={Global.Experience.designation}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="text"
              name="startDate"
              value={Global.Experience.startDate}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="text"
              name="endDate"
              value={Global.Experience.endDate}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="empid"
              value={Global.Experience.empid}
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

export default Experienceform;
