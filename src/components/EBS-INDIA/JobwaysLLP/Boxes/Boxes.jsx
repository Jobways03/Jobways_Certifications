import React, { useEffect } from "react";
import "./box.css";
import { useNavigate } from "react-router-dom";

const JobwaysBoxes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("company", "Jobways");
  }, []);

  return (
    <div>
      <h1>JOBWAYS POINT LLP</h1>
      <div className="containerws">
        <div
          className="boxj"
          onClick={() => {
            navigate("/jobwaysofferform");
          }}
        >
          Offer Letter
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/jobwaysPayslipform");
          }}
        >
          Payslip
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/hikeform");
          }}
        >
          Hike Letter
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/experienceform");
          }}
        >
          Experience
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/relievingform");
          }}
        >
          Relieving Letter
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/GenieEditform");
          }}
        >
          Editable Letter
        </div>
      </div>
    </div>
  );
};

export default JobwaysBoxes;
