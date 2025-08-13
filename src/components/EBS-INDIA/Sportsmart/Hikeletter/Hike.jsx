import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Hike.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/SM_Letterhead.png" alt="ewded" className="i3" />
        <h3 className="heakss">HIKE LETTER</h3>
        <p className="hiker1c">{Global.Hike.name} </p>
        <p className="hiker2c">Date: {Global.Hike.date}</p>
        <p className="hiker3c">
          {" "}
          With reference to your request for a salary increment, we are pleased
          to inform you
        </p>
        <p className="hiker4c">
          that <span className="bold">Nova Sportsmart Private Limited</span>{" "}
          will be providing a hike on your current CTC.
        </p>
        <p className="hikers5c">
          Please note that your current CTC is{" "}
          <span className="bold">{Global.Hike.annualSalary} INR</span>. After
          the increment, your new CTC will be{" "}
          <span className="bold">{Global.Hike.newannualSalary} INR</span>,
          effective from{" "}
          <span className="bold">{Global.Hike.effectiveDate}</span>.
        </p>
        <p className="hikers6c">
          You are one of the valued employees of{" "}
          <span className="bold">Nova Sportsmart Private Limited</span>, and we
          hope that this increment will motivate you to work with even greater
          passion and enthusiasm. Kindly contact the HR department for further
          details regarding your salary breakup.
        </p>
        <p className="hikers7c">
          We look forward to your valuable contributions to the organization and
          wish you a great career ahead.
        </p>

        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
          <img src="./images/SM_image.png" alt="ewded" className="gesstamps" />
        )}

        <p className="hikers9c">Sincerely,</p>
        <p className="hikers10c">Firdous Fatima Farooqui</p>
        <p className="hikers11c">HR Manager</p>
        <p className="hikers12c">hr@sportsmart.com</p>
        <p className="hikers13c">+91 – 6303170175</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const SportsHike = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className="print-button">
        Print this out!
      </button>
    </div>
  );
};

export default SportsHike;
