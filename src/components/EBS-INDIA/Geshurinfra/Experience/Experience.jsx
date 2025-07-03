import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Experience.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/geshur.png" alt="ewded" className="i3" />
        <h3 className="eded">EXPERIENCE LETTER</h3>
        <p className="expge1c">{Global.Experience.name}</p>
        <p className="expge2c">Date: {Global.Experience.date}</p>
        <p className="wwfxs">Subject: Experience letter</p>
        <p className="expge5cs">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This
          letter confirms the employment of{" "}
          <span className="bold"> {Global.Experience.name}</span> as a{" "}
          <span className="bold">{Global.Experience.designation}</span> with{" "}
          <span className="bold">Geshur Infra Private Limited</span> from{" "}
          <span className="bold">{Global.Experience.startDate}</span> to{"  "}
          <span className="bold">{Global.Experience.endDate}</span>.
        </p>
        <p className="expge6cs">
          During the tenure,{" "}
          <span className="bold"> {Global.Experience.name}</span> has shown
          {Global.Experience.gender == "He" ? <> himself</> : <> herself</>} to
          be a dedicated and hardworking employee.
        </p>
        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
          <img src="./images/bgrem.png" alt="ewded" className="gesstampss" />
        )}

        <p className="expge9csr">
          Employee ID :
          <span className="bold" style={{ textTransform: "uppercase" }}>
            {" "}
            {Global.Experience.empid}
          </span>
        </p>
        <p className="expge9cs">Sincerely,</p>
        <p className="expge10cs">Ashwini Chinta </p>
        <p className="expge11cs">HR Manager</p>
        <p className="expge12cs">HR@geshurinfra.com</p>
        <p className="expge13cs">+91 – 93989 73635</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const GeshurExperience = () => {
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

export default GeshurExperience;
