import React, { useEffect }from 'react'
import "./box.css"
import { useNavigate } from 'react-router-dom';

const GenielampBoxes = () => {
  const navigate = useNavigate()
  
   useEffect(() => {
     localStorage.setItem("company", "Genielamp");
   }, []);

  return (
    <div>
      <h1>GENIE LAMP</h1>
      <div className="containerws">
        <div
          className="boxj"
          onClick={() => {
            navigate("/genieOfferform");
          }}
        >
          Offer Letter
        </div>
        <div
          className="boxj"
          onClick={() => {
            navigate("/genielampPayslipform");
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
}

export default GenielampBoxes;
