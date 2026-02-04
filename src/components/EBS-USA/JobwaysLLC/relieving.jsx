import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/job.png" alt="ewded" className="i3" />

        <h3 className="er1">RELIEVING LETTER</h3>
        <p className="er1a">{Global.Relieve.name}</p>
        <p className="er2">Date: {Global.Relieve.date}</p>
        <p className="er3">
          This is with reference to your resignation with you position of{" "}
          <span className="bbn">{Global.Relieve.designation} </span> from{" "}
          <span className="bbn">Jobways LLC</span>. Your resignation has been
          accepted and you are being relieved from the services of the company
          with effect from closing hours of{" "}
          <span className="bbn">{Global.Relieve.endDate}</span>.
        </p>
        <p className="er4">
          We are taking this opportunity to thank you for your association with
          us from <span className="bbn">{Global.Relieve.startDate}</span> to
          <span className="bbn"> {Global.Relieve.endDate}</span>. We wish you
          success for future endeavors.
        </p>
        {Global.Relieve.empid.length !== 0 ? (
          <p className="er4emp" style={{ fontWeight: "bold" }}>
            Employee ID :
            <span className="bold" style={{ textTransform: "uppercase" }}>
              {" "}
              {Global.Relieve.empid}
            </span>
          </p>
        ) : (
          ""
        )}
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

const JobllcRelieving = () => {
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

export default JobllcRelieving;
