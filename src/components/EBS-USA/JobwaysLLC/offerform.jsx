import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const USOfferForm = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

const handleChange = (e) => {
  const { name, value } = e.target;

  let formattedValue = value;

  // if (name === "date" && value) {
  //   const [year, month, day] = value.split("-");
  //   formattedValue = `${month}/${day}/${year}`;
  // }

  Global.setUSOffer((prevState) => ({
    ...prevState,
    [name]: formattedValue,
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
        <h1 style={formTitleStyle}>Offer Form</h1>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={Global.USOffer.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Date</label>
          <input
            type="date"
            name="date"
            value={
              Global.USOffer.date
                ? new Date(Global.USOffer.date).toLocaleDateString("en-CA")
                : ""
            }
            onChange={(e) => {
              const [year, month, day] = e.target.value.split("-");
              const formattedDate = `${month}/${day}/${year}`; // US format MM/DD/YYYY
              Global.setUSOffer({
                ...Global.USOffer,
                [e.target.name]: formattedDate,
              });
            }}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Social Security Number</label>
          <input
            type="text"
            name="socialSecurityNumber"
            value={Global.USOffer.socialSecurityNumber}
            onChange={handleChange}
            placeholder="XXX-XX-XXXX"
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Position</label>
          <input
            type="text"
            name="position"
            value={Global.USOffer.position}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Salary</label>
          <input
            type="text"
            name="salary"
            value={Global.USOffer.salary}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Client Company</label>
          <input
            type="text"
            name="clientCompany"
            value={Global.USOffer.clientCompany}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={
              Global.USOffer.startDate
                ? new Date(Global.USOffer.startDate).toLocaleDateString(
                    "en-CA"
                  )
                : ""
            }
            onChange={(e) => {
              const [year, month, day] = e.target.value.split("-");
              const formattedDate = `${month}/${day}/${year}`; // US format MM/DD/YYYY
              Global.setUSOffer({
                ...Global.USOffer,
                [e.target.name]: formattedDate,
              });
            }}
            style={inputStyle}
          />
        </div>


        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default USOfferForm;
