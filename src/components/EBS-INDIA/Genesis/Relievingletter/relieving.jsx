import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./relie.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/geneis.png" alt="ewded" className="i3" />
        <h3 className="reline">RELIEVING LETTER</h3>
        <p className="rel1">{Global.Relieve.name}</p>
        <p className="rel2">Date: {Global.Relieve.date}</p>
        <p className="rel4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With
          reference to your resignation letter dated{" "}
          <span className="bold">{Global.Relieve.ResignationDate}</span>, we
          hereby accept your resignation and agree to relieve you from your
          duties on <span className="bold">{Global.Relieve.endDate}</span>. We
          confirm that you have worked at{" "}
          <span className="bold">Genesis7 Solutions</span> from{" "}
          <span className="bold">{Global.Relieve.startDate}</span> to{" "}
          <span className="bold">{Global.Relieve.endDate}</span>, as a{" "}
          <span className="bold">{Global.Relieve.designation}</span>.
        </p>
        <p className="rel5">
          During your employment with us, we found you to be hardworking,
          diligent, and honest in performing your duties.
        </p>
        <p className="rel6">
          The management would like to thank you for your service with the
          company, and we wish you all the best in your future endeavors.
        </p>
        <p className="rel9r">
          Employee ID :
          <span className="bold" style={{ textTransform: "uppercase" }}>
            {" "}
            {Global.Relieve.empid}
          </span>
        </p>

        <p className="rel9">Sincerely,</p>
        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
          <img
            src="./images/Genesisstamp.jpg"
            alt="stamp"
            className="gestampsss"
          />
        )}

        <p className="rel10">Sudheer Panyam</p>
        <p className="rel11">HR Manager</p>
        <p className="rel12">hr@genesis7solutions.com</p>
        <p className="rel13">+91- 96525 97929</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const GenesisRelieving = () => {
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

export default GenesisRelieving;
