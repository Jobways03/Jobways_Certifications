import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Experience.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/SM_Letterhead.jpg" alt="ewded" className="i3" />
        <h3 className="eded">EXPERIENCE LETTER</h3>
        <p className="expge1c">{Global.Experience.name}</p>
        <p className="expge2c">Date: {Global.Experience.date}</p>
        <p className="wwfx">Subject: Experience letter</p>
        <p className="expge5c">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This
          letter confirms the employment of{" "}
          <span className="bold"> {Global.Experience.name}</span> as a{" "}
          <span className="bold">{Global.Experience.designation}</span> with{" "}
          <span className="bold">Nova Sportsmart Private Limited</span> from{" "}
          <span className="bold">{Global.Experience.startDate}</span> to the{" "}
          <span className="bold">{Global.Experience.endDate}</span>.
        </p>
        <p className="expge6c">
          During his tenure,{" "}
          <span className="bold"> {Global.Experience.name}</span> has shown
          himself to be a dedicated and hardworking employee.
        </p>

        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
          <img
            src="./images/novalogo.png"
            alt="ewded"
            style={{ top: "45%" }}
            className="gesstampss"
          />
        )}
        <p className="expge9c">Sincerely,</p>
        <p className="expge10c">Laayyee Ganeshwari</p>
        <p className="expge11c">HR Manager</p>
        <p className="expge12c">hr@sportsmart.com</p>
        <p className="expge13c">+91 – 6303170175</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const SportsExperience = () => {
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

export default SportsExperience;
