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

  return (
    <div className="form-container">
      <label htmlFor="head">Heading:</label>
      <input
        type="text"
        id="head"
        value={head}
        onChange={(e) => setHead(e.target.value)}
        placeholder="Enter your heading here..."
        className="heading-input"
      />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
        className="heading-input"
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          marginBottom: "15px",
        }}
      />

      <h3 className="form-label">Enter your text:</h3>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-area"
      />

      <h3 className="form-label">Enter words to bold (comma separated):</h3>
      <input
        type="text"
        value={wordsToBold}
        onChange={(e) => setWordsToBold(e.target.value)}
        className="bold-input"
      />

      <div className="form-group">
        <label>Stamp Requirement</label>
        <select
          name="stampRequirement"
          onChange={handleStampChange}
          style={{
            width: "700px",
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

      <button onClick={handleSubmit} className="submit-button">
        SUBMIT
      </button>
    </div>
  );
};

export default GenieEditform;
