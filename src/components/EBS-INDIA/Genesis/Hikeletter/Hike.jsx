import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Hike.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/geneis.png" alt="ewded" className="i3" />
        <h3 className="heakss">HIKE LETTER</h3>
        <p className="hike1">
         {Global.Hike.name}{" "}
        </p>
        <p className="hike2">Date: {Global.Hike.date}</p>
        <p className="hike3">
          {" "}
          We are pleased to inform you that{" "}
          <span className="bold">Genesis7 Solutions</span> has decided to
          increase your
        </p>
        <p className="hike4">
          annual salary from{" "}
          <span className="bold">{Global.Hike.annualSalary} INR</span> to
          <span className="bold"> {Global.Hike.newannualSalary} INR</span>,
          effective from{" "}
          <span className="bold">{Global.Hike.effectiveDate}</span>.
        </p>
        <p className="hike5">
          Your hard work, dedication, and valuable contributions to the company
          have not gone unnoticed. This increment is a token of appreciation for
          your efforts and commitment.
        </p>
        <p className="hike6">
          Your new salary reflects our recognition of your skills and the value
          you bring to our team. We believe that this increase will further
          motivate you to excel in your role and continue to contribute
          positively to the company's success.
        </p>
        <p className="hike7">
          Please feel free to contact the HR department for any further
          clarification or details regarding your updated salary structure.
        </p>
        <p className="hike8">
          Once again, congratulations on your well-deserved salary hike. We look
          forward to your continued excellence and success at{" "}
          <span className="bold">Genesis7 Solutions</span>.
        </p>
        <p className="hike9">Sincerely,</p>
        <img src="./images/Genesisstamp.jpg" alt="stamp" className="gestamps" />
        <p className="hike10">Sudheer Panyam</p>
        <p className="hike11">HR Manager</p>
        <p className="hike12">hr@genesis7solutions.com</p>
        <p className="hike13">+91- 9652 59 79 29</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const GenesisHike = () => {
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

export default GenesisHike;
