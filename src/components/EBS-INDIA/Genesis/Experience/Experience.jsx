import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Exp.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/geneis.png" alt="ewded" className="i3" />
        <h3 className="reline">EXPERIENCE LETTER</h3>
        <p className="gexp1">{Global.Experience.name}</p>
        <p className="rel2">Date: {Global.Experience.date}</p>
        <p className="gexp4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This
          letter confirms that{" "}
          <span className="bold"> {Global.Experience.name}</span> has been
          employed with <span className="bold">Genesis7 Solutions</span> as a{" "}
          <span className="bold">{Global.Experience.designation}</span> from{" "}
          <span className="bold">{Global.Experience.startDate}</span> to the{" "}
          <span className="bold">{Global.Experience.endDate}</span>.
        </p>
        <p className="gexp5">
          During the tenure,{" "}
          <span className="bold"> {Global.Experience.name}</span> exhibited
          commendable dedication and professionalism.
        </p>
        <p className="gexp9">
          Employee ID :
          <span className="bold" style={{ textTransform: "uppercase" }}>
            {" "}
            {Global.Experience.empid}
          </span>
        </p>
        <p className="expge9csr">Sincerely,</p>
        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
          <img
            src="./images/Genesisstamp.jpg"
            alt="stamp"
            className="gestampss"
          />
        )}

        <p className="gexp10">Sudheer Panyam</p>
        <p className="gexp11">HR Manager</p>
        <p className="gexp12">hr@genesis7solutions.com</p>
        <p className="gexp13">+91 96525 97929</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const GenesisExperience = () => {
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

export default GenesisExperience;
