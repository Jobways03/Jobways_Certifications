import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Hike.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/JobwaysllpNew.png" alt="ewded" className="i3" />
        <h3 className="heak">HIKE LETTER</h3>
        <p className="hiker1a">{Global.Hike.name} </p>
        <p className="hiker2a">Date: {Global.Hike.date}</p>
        <p className="sds">Sub: Salary Increment</p>
        <p className="hiker3ea">
          {" "}
          We are pleased to inform you that your salary will be increased from
          <span className="bold"> {Global.Hike.annualSalary} INR</span> to
        </p>
        <p className="hiker4ea">
          <span className="bold">{Global.Hike.newannualSalary} INR</span>{" "}
          annually with effect from{" "}
          <span className="bold">{Global.Hike.effectiveDate}</span>.
        </p>
        <p className="hikers5ea">
          We would like to take this opportunity to wish you the very best for
          the future at <span className="bold">JOBWAYS POINT LLP</span> and
          congratulate you for outstanding performance.
        </p>
        <p className="hikers6ea">
          We wish you the very best in all your future endeavors.
        </p>
        <img src="./images/jobwaysstamp.png" alt="stamp" className="jstamp" />

        <p className="hikers9a">Sincerely,</p>
        <p className="hikers10a"> Ashwini Chintapally </p>
        <p className="hikers11a">HR Manager</p>
        <p className="hikers12a"> hr.india@jobways.com</p>
        <p className="hikers13a"> +91- 70134 96618</p>
       
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const JobwaysHike = () => {
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

export default JobwaysHike;
