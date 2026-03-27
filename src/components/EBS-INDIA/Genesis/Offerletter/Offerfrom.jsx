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
        <h1 style={formTitleStyle}>Offer Letter Form</h1>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={Global.Offerform.name}
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
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Position</label>
          <input
            type="text"
            name="position"
            value={Global.Offerform.position}
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
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Salary Package</label>
          <input
            type="text"
            name="salaryPackage"
            value={Global.Offerform.salaryPackage}
            onChange={handleChange}
            placeholder="0,00,000"
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Work Time</label>
          <input
            type="text"
            name="workTime"
            value={Global.Offerform.workTime}
            onChange={handleChange}
            placeholder="9 AM - 6 PM"
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

export default GenesisOfferform;
