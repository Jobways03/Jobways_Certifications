import React from "react";
import { useNavigate } from "react-router-dom";

const W2box = () => {
  const navigate = useNavigate();
  const handle = (company) => {
    localStorage.setItem("w2company", company);
    navigate("/w2form");
  };
  return (
    <div className="container">
      <div className="">
        <div
          className="card payroll"
          onClick={() => {
            handle("rapid");
          }}
        >
          <h2>RAPID HIRING</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            handle("kacee");
          }}
        >
          <h2>KACEE TECH</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            handle("jobways");
          }}
        >
          <h2>JOBWAYS LLC</h2>
        </div>
      </div>
    </div>
  );
};

export default W2box;
