import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Experience.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/JobwaysllpNew.png" alt="ewded" className="i3" />
        <h3 className="heak">EXPERIENCE LETTER</h3>
        <p className="exp1a">{Global.Experience.name}</p>
        <p className="exp2a">Date: {Global.Experience.date}</p>
        <p className="eees">Subject: Experience Letter</p>

        <p className="exp4ea">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This
          is to certify that{" "}
          <span className="bold"> {Global.Experience.name}</span> has served as
          a <span className="bold">{Global.Experience.designation}</span> with
          <span className="bold"> JOBWAYS POINT LLP</span> from{" "}
          <span className="bold">{Global.Experience.startDate}</span> to{" "}
          <span className="bold">{Global.Experience.endDate}</span>.
        </p>
        <p className="exp5ea">
          Throughout the employment,{" "}
          <span className="bold"> {Global.Experience.name}</span> consistently
          displayed hard work and dedication.
        </p>

        <p className="exp5ee">
          Employee ID :
          <span className="bold" style={{ textTransform: "uppercase" }}>
            {" "}
            {Global.Experience.empid}
          </span>
        </p>

        <p className="exp9a">Sincerely,</p>
        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
          <img
            src="./images/jobwaysstamp.png"
            alt="stamp"
            className="jstamps"
          />
        )}

        <p className="exp10a">Laayyee Ganeshwari</p>
        <p className="exp11a">HR Manager</p>
        <p className="exp12a">hr.india@jobways.com</p>
        <p className="exp13a">+91- 6303170175</p>

        <div className="ds1"></div>
      </div>
    </div>
  );
});

const JobwaysExperience = () => {
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

export default JobwaysExperience;
