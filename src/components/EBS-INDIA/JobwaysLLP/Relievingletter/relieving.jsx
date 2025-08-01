import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./relie.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/JobwaysllpNew.png" alt="ewded" className="i3" />
        <h3 className="heak">RELIEVING LETTER</h3>
        <p className="rel1a">{Global.Relieve.name}</p>
        <p className="rel2a">Date: {Global.Relieve.date}</p>
        <p className="rel3ea">
          {" "}
          We hereby acknowledge the conclusion of your tenure at{" "}
          <span className="bold">Jobways Point LLP</span>.
        </p>
        <p className="rel4ea">
          During the period of your employment as a{" "}
          <span className="bold">{Global.Relieve.designation}</span> from{" "}
          <span className="bold">{Global.Relieve.startDate}</span> to{" "}
          <span className="bold">{Global.Relieve.endDate}</span>, we appreciate
          the dedication and contributions you have made to our organization.
        </p>
        <p className="rel5ea">
          Effective from the closing working hours of{" "}
          <span className="bold">{Global.Relieve.endDate}</span>, you are
          relieved from your duties at{" "}
          <span className="bold">Jobways Point LLP</span>.
        </p>
        <p className="rel6ea">
          We extend our best wishes to you for success and fulfillment in your
          future endeavors.
        </p>
        <p className="rel6ear">
          Employee ID :
          <span className="bold" style={{ textTransform: "uppercase" }}>
            {" "}
            {Global.Relieve.empid}
          </span>
        </p>
        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
          <img
            src="./images/jobwaysstamp.png"
            alt="stamp"
            className="jstampss"
          />
        )}

        <p className="rel9a">Sincerely,</p>
        <p className="rel10a">Firdous Fatima Farooqui</p>
        <p className="rel11a">HR Manager</p>
        <p className="rel12a"> hr.india@jobways.com</p>
        <p className="rel13a"> +91- 6303170175</p>

        <div className="ds1"></div>
      </div>
    </div>
  );
});

const JobwaysRelieving = () => {
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

export default JobwaysRelieving;
