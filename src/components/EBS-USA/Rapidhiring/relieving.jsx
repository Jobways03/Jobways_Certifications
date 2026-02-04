import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/rnew3.png" alt="ewded" className="i3" />

        <h3 className="er1d">RELIEVING LETTER</h3>
        <p className="er1a">{Global.Relieve.name}</p>
        <p className="er2">Date: {Global.Relieve.date}</p>
        <p className="er3">
          This correspondence formally acknowledges your resignation from the
          position of <span className="bbn">{Global.Relieve.designation} </span>{" "}
          at <span className="bbn"> Rapid Hiring Solutions Inc</span>. Your
          resignation has been officially accepted, and your employment will
          conclude at the end of the business day on{" "}
          <span className="bbn">{Global.Relieve.endDate}</span>.
        </p>
        <p className="er4">
          We take this moment to thank you for your service to{" "}
          <span className="bbn"> Rapid Hiring Solutions Inc</span> from
          <span className="bbn"> {Global.Relieve.startDate}</span> to{" "}
          <span className="bbn">{Global.Relieve.endDate}</span>. We extend our
          best wishes for your continued success in your future pursuits.
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
        <p className="er7">Amith Chidre </p>
        <p className="er8">HR Manager</p>
        <p className="er9">hr@rpdhsinc.com</p>
        <p className="er10">Ph : 567 703 6317</p>

        <div className="ds1"></div>
      </div>
    </div>
  );
});

const RapidRelieving = () => {
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

export default RapidRelieving;


