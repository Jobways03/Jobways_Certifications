import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/rnew3.png" alt="ewded" className="i3" />
        <h3 className="er1">EXPERIENCE LETTER</h3>
        <p className="er1a">{Global.Experience.name}</p>
        <p className="er2">Date: {Global.Experience.date}</p>
        <p className="er3">
          This certificate acknowledges that{" "}
          <span className="bold"> {Global.Experience.name}</span> was employed
          by <span className="bb">Rapid Hiring Solutions Inc,</span> from{" "}
          <span className="bold">{Global.Experience.startDate}</span>, to{" "}
          <span className="bold">{Global.Experience.endDate}</span>, as a{" "}
          <span className="bold">{Global.Experience.designation}</span>.
          Throughout the period of employment,{" "}
          <span> {Global.Experience.gender}</span> proved to be dependable,
          punctual, and industrious.
        </p>
        <p className="er4">
          The management extends heartfelt thanks for the valuable contributions
          and wishes great success in all future endeavors.
        </p>
        {Global.Experience.empid.length !== 0 ? (
          <p className="er4emp" style={{ fontWeight: "bold" }}>
            Employee ID :
            <span className="bold" style={{ textTransform: "uppercase" }}>
              {" "}
              {Global.Experience.empid}
            </span>
          </p>
        ) : (
          ""
        )}
        <p className="er5">Sincerely,</p>
        <p className="er7">Amith Chidre </p>
        <p className="er8">HR Manager</p>
        <p className="er9"> hr@rpdhsinc.com</p>
        <p className="er10">Ph : 567 703 6317</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const RapidExperience = () => {
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

export default RapidExperience;
