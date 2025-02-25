import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Edit.css";

const GenieEditform = () => {
  const [head, sethead] = useState(localStorage.getItem("head") || "");
  const [text, setText] = useState(localStorage.getItem("text") || "");
  const [wordsToBold, setWordsToBold] = useState(
    localStorage.getItem("WTB") || ""
  );
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [date, setDate] = useState(localStorage.getItem("date") || "");

  const navigate = useNavigate();

  const handlesubmit = () => {
    localStorage.setItem("head", head);
    localStorage.setItem("text", text);
    localStorage.setItem("WTB", wordsToBold);
    localStorage.setItem("name", name);
    localStorage.setItem("date", date);

    let company = localStorage.getItem("company");
    if (company === "Genesis") {
      navigate("/GenesisEdit");
    } else if (company === "Genielamp") {
      navigate("/GenieEdit");
    } else if (company === "Geshur") {
      navigate("/GeshurEdit");
    } else if (company === "Jobways") {
      navigate("/JobwaysLLPEdit");
    } else if (company === "sports") {
      navigate("/sportsExperience");
    } else if (company === "JOBLLC") {
      navigate("/JobwaysLLCEdit");
    } else if (company === "KACEE") {
      navigate("/KACEEEdit");
    } else if (company === "RAPID") {
      navigate("/RapidEdit");
    }
  };

  return (
    <div className="form-container">
      <label htmlFor="head">Heading:</label>
      <input
        type="text"
        id="head"
        onChange={(e) => sethead(e.target.value)}
        placeholder="Enter your heading here..."
        className="heading-input"
        value={head}
      />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
        className="heading-input"
      />
      <label htmlFor="date">Date:</label>
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter your required date..."
        className="heading-input"
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
      <button onClick={handlesubmit} className="submit-button">
        SUBMIT
      </button>
    </div>
  );
};

export default GenieEditform;
