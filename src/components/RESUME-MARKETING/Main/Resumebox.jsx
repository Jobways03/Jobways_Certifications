import React from "react";
import { useNavigate } from "react-router-dom";

const RESUME_MAIN = () => {
  const navigate = useNavigate();

  const handleone = () => {
    navigate("/Pre_Agreement_form");
  };

  const handletwo = () => {
    navigate("/Post_Agreement_form");
  };

  return (
    <div className="">
      <div className="payrolls-container">
        <div
          className="card payroll"
          onClick={() => {
            handleone();
          }}
        >
          <h2>PRE AGREEMENT</h2>
        </div>
        <div
          className="card payroll"
          onClick={() => {
            handletwo();
          }}
        >
          <h2>POST AGREEMENT</h2>
        </div>
      
      </div>
    </div>
  );
};

export default RESUME_MAIN;
