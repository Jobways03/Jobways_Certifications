import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/kacee.png" alt="ewded" className="i3" />

        <h3 className="er1d">RELIEVING LETTER</h3>
        <p className="er1a">{Global.Relieve.name}</p>
        <p className="er2">Date: {Global.Relieve.date}</p>
        <p className="er3">
          This letter is in reference to your resignation from the position of
          <span className="bbn"> {Global.Relieve.designation} </span> at{" "}
          <span className="bbn">Kacee Technologies services Inc</span>. We
          acknowledge and accept your resignation, and you will be relieved from
          your duties effective from the close of business on{" "}
          <span className="bbn">{Global.Relieve.endDate}</span>.
        </p>
        <p className="er4">
          We would like to take this opportunity to express our gratitude for
          your contributions during your tenure from{" "}
          <span className="bbn">{Global.Relieve.startDate}</span> to{" "}
          <span className="bbn">{Global.Relieve.endDate}</span>. We wish you the
          best in all your future endeavors.
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
        <p className="er7"> Akbar Khan </p>
        <p className="er8">HR Manager</p>
        <p className="er9"> hr@kaceetek.com</p>
        <p className="er10">Ph : (530) 712-3815</p>

        <div className="ds1"></div>
      </div>
    </div>
  );
});

const KaceeRelieving = () => {
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

export default KaceeRelieving;
