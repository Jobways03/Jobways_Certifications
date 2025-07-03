import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Experience.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/GenielampNew.png" alt="ewded" className="i3" />
        <h3 className="heaka">EXPERIENCE LETTER</h3>
        <p className="expg1b">{Global.Experience.name}</p>
        <p className="expg2b">Date: {Global.Experience.date}</p>
        <p className="rrrr">Regards,</p>
        <p className="expg5b">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This
          is to certify that{" "}
          <span className="bold"> {Global.Experience.name}</span> has been
          employed with <span className="bold">GENIE LAMP PVT LTD</span> as a{" "}
          <span className="bold">{Global.Experience.designation}</span> from{" "}
          <span className="bold">{Global.Experience.startDate}</span> to the{" "}
          <span className="bold">{Global.Experience.endDate}</span>. Throughout
          the tenure, <span>{Global.Experience.gender}</span> has demonstrated{" "}
          {Global.Experience.gender == "He" ? <> himself</> : <> herself</>} as
          a hardworking, honest, and dedicated employee.
        </p>

        <p className="expg99b">
          Employee ID :
          <span className="bold" style={{ textTransform: "uppercase" }}>
            {" "}
            {Global.Experience.empid}
          </span>
        </p>
        <p className="expg9b">Sincerely,</p>
        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
        <img src="./images/Geniestamp.png" alt="stamp" className="genstampss" />
      )}
        <p className="expg10b">Shiva Kumar</p>
        <p className="expg11b">HR Manager</p>
        <p className="expg12b"> hr@agenielamp.com</p>
        <p className="expg13b"> +91- 63004 02669</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const GenielampExperience = () => {
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

export default GenielampExperience;
