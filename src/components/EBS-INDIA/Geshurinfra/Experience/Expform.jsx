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

  const formPageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const formCardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '40px 36px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  };

  const formTitleStyle = {
    fontSize: '26px',
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: '32px',
    textAlign: 'center',
    paddingBottom: '16px',
    borderBottom: '3px solid #667eea',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '6px',
  };

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    fontSize: '14px',
    border: '1.5px solid #d1d5db',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f9fafb',
    transition: 'border-color 0.2s',
  };

  const selectStyle = {
    width: '100%',
    padding: '11px 14px',
    fontSize: '14px',
    border: '1.5px solid #d1d5db',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f9fafb',
    transition: 'border-color 0.2s',
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '700',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '12px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
  };

  return (
    <div style={formPageStyle}>
      <form onSubmit={handleSubmit} style={formCardStyle}>
        <h1 style={formTitleStyle}>Experience Form</h1>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={Global.Experience.name || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Gender</label>
          <select
            name="gender"
            onChange={handleChange}
            value={Global.Experience.gender || ""}
            style={selectStyle}
          >
            <option value="">Select</option>
            <option value="He">He</option>
            <option value="She">She</option>
          </select>
        </div>

        {["date", "startDate", "endDate"].map((fieldLabel) => (
          <div style={formGroupStyle} key={fieldLabel}>
            <label style={labelStyle}>
              {fieldLabel.charAt(0).toUpperCase() + fieldLabel.slice(1)}
            </label>
            <input
              type="date"
              name={fieldLabel}
              value={formatForInput(Global.Experience[fieldLabel], company)}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        ))}

        <div style={formGroupStyle}>
          <label style={labelStyle}>Designation</label>
          <input
            type="text"
            name="designation"
            value={Global.Experience.designation || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Employee ID</label>
          <input
            type="text"
            name="empid"
            value={Global.Experience.empid || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Stamp Requirement</label>
          <select
            name="stampRequirement"
            onChange={handleStampChange}
            style={selectStyle}
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="with_stamp">With Stamp</option>
            <option value="without_stamp">Without Stamp</option>
          </select>
        </div>

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Experienceform;
