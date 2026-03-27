import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Edit.css";

const formatDateForInput = (dateStr, company) => {
  if (!dateStr) return "";

  const parts = dateStr.split("/");
  if (parts.length !== 3) return ""; // safety check

  if (["JOBLLC", "KACEE", "RAPID"].includes(company)) {
    // US Format (MM/DD/YYYY)
    const [month, day, year] = parts;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  } else {
    // Indian Format (DD/MM/YYYY)
    const [day, month, year] = parts;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
};

const GenieEditform = () => {
  const navigate = useNavigate();
  const company = localStorage.getItem("company");

  const [head, setHead] = useState(localStorage.getItem("head") || "");
  const [text, setText] = useState(localStorage.getItem("text") || "");
  const [wordsToBold, setWordsToBold] = useState(
    localStorage.getItem("WTB") || ""
  );
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [date, setDate] = useState(
    formatDateForInput(localStorage.getItem("date"), company)
  );

  const handleSubmit = () => {
    localStorage.setItem("head", head);
    localStorage.setItem("text", text);
    localStorage.setItem("WTB", wordsToBold);
    localStorage.setItem("name", name);

    // Format date back to desired format for storage
    const [year, month, day] = date.split("-");
    const formattedDate = ["JOBLLC", "KACEE", "RAPID"].includes(company)
      ? `${month}/${day}/${year}` // US
      : `${day}/${month}/${year}`; // Indian

    localStorage.setItem("date", formattedDate);

    const companyRoutes = {
      Genesis: "/GenesisEdit",
      Genielamp: "/GenieEdit",
      Geshur: "/GeshurEdit",
      Jobways: "/JobwaysLLPEdit",
      sports: "/SportsmartLLPEdit",
      JOBLLC: "/JobwaysLLCEdit",
      KACEE: "/KACEEEdit",
      RAPID: "/RapidEdit",
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
      <div style={formCardStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="head" style={labelStyle}>Heading:</label>
          <input
            type="text"
            id="head"
            value={head}
            onChange={(e) => setHead(e.target.value)}
            placeholder="Enter your heading here..."
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="date" style={labelStyle}>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <h3 style={labelStyle}>Enter your text:</h3>
          <textarea
            rows="4"
            cols="50"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{...inputStyle, minHeight: '150px', resize: 'vertical'}}
          />
        </div>

        <div style={formGroupStyle}>
          <h3 style={labelStyle}>Enter words to bold (comma separated):</h3>
          <input
            type="text"
            value={wordsToBold}
            onChange={(e) => setWordsToBold(e.target.value)}
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

        <button onClick={handleSubmit} style={buttonStyle}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default GenieEditform;
