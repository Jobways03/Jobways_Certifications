import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/kacee.png" alt="ewded" className="i3" />
        <h3 className="er1">EXPERIENCE LETTER</h3>
        <p className="er1a">{Global.Experience.name}</p>
        <p className="er2">Date: {Global.Experience.date}</p>
        <p className="er3">
          This letter serves to verify that{" "}
          <span className="bold"> {Global.Experience.name}</span> was employed
          with <span className="bold">Kacee Technologies services Inc.</span>{" "}
          from <span className="bold">{Global.Experience.startDate}</span>, to{" "}
          <span className="bold">{Global.Experience.endDate}</span>, in the role
          of <span className="bold">{Global.Experience.designation}</span>.
          During the employment,{" "}
          <span> {Global.Experience.gender}</span> exhibited a
          strong work-ethic, reliability, and dedication.
        </p>
        <p className="er4">
          We appreciate the efforts and commitment during the tenure and wish
          success in all future undertakings.
        </p>
        <p className="er5">Sincerely,</p>
        <p className="er7"> Akbar Khan </p>
        <p className="er8">HR Manager</p>
        <p className="er9"> hr@kaceetek.com</p>
        <p className="er10">Ph : (530) 712-3815</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const KaceeExperience = () => {
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

export default KaceeExperience;
