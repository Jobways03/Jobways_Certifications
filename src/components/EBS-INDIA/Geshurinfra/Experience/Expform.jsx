import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const formatForInput = (dateStr, company) => {
  if (!dateStr) return "";

  let day, month, year;

  if (dateStr.includes("/")) {
    const parts = dateStr.split("/");
    if (["JOBLLC", "KACEE", "RAPID"].includes(company)) {
      [month, day, year] = parts; // US format
    } else {
      [day, month, year] = parts; // Indian format
    }
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  // Already in correct YYYY-MM-DD format
  return dateStr;
};

const Experienceform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();
  const company = localStorage.getItem("company");

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (["date", "startDate", "endDate"].includes(name) && value) {
      const [year, month, day] = value.split("-");

      if (["JOBLLC", "KACEE", "RAPID"].includes(company)) {
        formattedValue = `${month}/${day}/${year}`; // US Format
      } else {
        formattedValue = `${day}/${month}/${year}`; // Indian Format
      }
    }

    Global.setExperience((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const handleStampChange = (e) => {
    const value = e.target.value;
    sessionStorage.setItem("offerStamp", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const companyRoutes = {
      Genesis: "/genesisExperience",
      Genielamp: "/genielampExperience",
      Geshur: "/geshurExperience",
      Jobways: "/jobwaysExperience",
      sports: "/sportsExperience",
      JOBLLC: "/JobwaysLLCExperience",
      KACEE: "/KaceeExperience",
      RAPID: "/RapidExperience",
    };

    navigate(companyRoutes[company] || "/");
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
              value={Global.Experience.name || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={Global.Experience.gender || ""}
            >
              <option value="">Select</option>
              <option value="He">He</option>
              <option value="She">She</option>
            </select>
          </div>

          {["date", "startDate", "endDate"].map((fieldLabel) => (
            <div className="form-group" key={fieldLabel}>
              <label>
                {fieldLabel.charAt(0).toUpperCase() + fieldLabel.slice(1)}
              </label>
              <input
                type="date"
                name={fieldLabel}
                value={formatForInput(Global.Experience[fieldLabel], company)}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={Global.Experience.designation || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="empid"
              value={Global.Experience.empid || ""}
              onChange={handleChange}
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

export default Experienceform;
