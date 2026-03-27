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

  return dateStr;
};

const Relievingform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();
  const company = localStorage.getItem("company");

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (
      ["date", "startDate", "endDate", "ResignationDate"].includes(name) &&
      value
    ) {
      const [year, month, day] = value.split("-");

      if (["JOBLLC", "KACEE", "RAPID"].includes(company)) {
        formattedValue = `${month}/${day}/${year}`; // US Format
      } else {
        formattedValue = `${day}/${month}/${year}`; // Indian Format
      }
    }

    Global.setRelieve((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const companyRoutes = {
      Genesis: "/genesisRelieving",
      Genielamp: "/genielampRelieving",
      Geshur: "/geshurRelieving",
      Jobways: "/jobwaysRelieving",
      sports: "/sportsRelieving",
      JOBLLC: "/JobllcRelieving",
      KACEE: "/KaceeRelieving",
      RAPID: "/RapidRelieving",
    };

    navigate(companyRoutes[company] || "/");
  };

  const handleStampChange = (e) => {
    const value = e.target.value;
    sessionStorage.setItem("offerStamp", value);
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
        <h1 style={formTitleStyle}>Relieving Form</h1>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={Global.Relieve.name || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {["date", "startDate", "endDate"].map((field) => (
          <div style={formGroupStyle} key={field}>
            <label style={labelStyle}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="date"
              name={field}
              value={formatForInput(Global.Relieve[field], company)}
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
            value={Global.Relieve.designation || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Employee ID</label>
          <input
            type="text"
            name="empid"
            value={Global.Relieve.empid || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {company === "Genesis" && (
          <div style={formGroupStyle}>
            <label style={labelStyle}>Resignation letter Dated</label>
            <input
              type="date"
              name="ResignationDate"
              value={formatForInput(Global.Relieve.ResignationDate, company)}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        )}

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

export default Relievingform;
