import React from "react";
import "./main.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

const IndianMain = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
     
      <div
        className="card"
        onClick={() => {
          navigate("/jobwaysBoxes");
        }}
      >
        <h3>JOBWAYS POINT</h3>
      </div>
      <div
        className="card"
        onClick={() => {
          navigate("/genielampBoxes");
        }}
      >
        <h3>GENIE LAMP</h3>
      </div>
      <div
        className="card"
        onClick={() => {
          navigate("/geshurinfraBoxes");
        }}
      >
        <h3>GESHUR INFRA</h3>
      </div>
      <div
        className="card"
        onClick={() => {
          navigate("/genesisBoxes");
        }}
      >
        <h3>GENESIS7 SOLUTIONS</h3>
      </div>
      <div
        className="card"
        onClick={() => {
          navigate("/sportsmartBoxes");
        }}
      >
        <h3>SPORTSMART</h3>
      </div>
    </div>
  );
};

export default IndianMain;
