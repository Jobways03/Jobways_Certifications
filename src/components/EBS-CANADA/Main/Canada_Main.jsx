import React from 'react'
import { useNavigate } from 'react-router-dom';

const Canada_Main = () => {
    const navigate = useNavigate()
  return (
    <div className="">
      <div className="payrolls-container">
        <div
          className="card payroll"
          onClick={() => {
            navigate("/t4form");
          }}
        >
          <h2>T4</h2>
        </div>
       
      </div>
    </div>
  );
}

export default Canada_Main 
