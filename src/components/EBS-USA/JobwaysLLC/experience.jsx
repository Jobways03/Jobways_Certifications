import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./box.css";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/job.png" alt="ewded" className="i3" />
        <h3 className="er1">EXPERIENCE LETTER</h3>
        <p className="er1a">{Global.Experience.name}</p>
        <p className="er2">Date: {Global.Experience.date}</p>
        <p className="er3">
          This is to certify that{" "}
          <span className="bold"> {Global.Experience.name}</span> is working
          with <span className="bold">Jobways LLC </span> from{" "}
          <span className="bold">{Global.Experience.startDate}</span> to{"  "}
          <span className="bold">{Global.Experience.endDate}</span> and the
          designation is “
          <span className="bold">{Global.Experience.designation}</span>". During
          the service with us, <span> {Global.Experience.gender}</span> found to
          be punctual, sincere and hardworking.
        </p>
        <p className="er4">
          The management would like to thank you for the service with{" "}
          <span className="bold">Jobways LLC </span>
          and we wish you all the best in your future endeavors.
        </p>
        <p className="er5">Sincerely,</p>
        <p className="er7"> Sudheer Panyam </p>
        <p className="er8">HR Manager</p>
        <p className="er9"> hr@jobways.com</p>
        <p className="er10">Ph : 240 525 0547</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const JobwaysLLCExperience = () => {
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

export default JobwaysLLCExperience;
