import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "./select.css";

const Select = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    localStorage.setItem("path", path);
    navigate("/outform");
  };

  return (
    <div className="">
      <div className="content-container">
        <div className="card payroll" onClick={() => navigateTo("/jobways")}>
          <h2>JOBWAYS LLP</h2>
        </div>
        <div className="card payroll" onClick={() => navigateTo("/genielamp")}>
          <h2> GENIE LAMP</h2>
        </div>
      </div>
    </div>
  );
};

export default Select;
