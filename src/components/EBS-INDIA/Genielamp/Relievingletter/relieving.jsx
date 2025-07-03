import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./relie.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/GenielampNew.png" alt="ewded" className="i3" />
        <h3 className="heaka">RELIEVING LETTER</h3>
        <p className="rel1b">{Global.Relieve.name}</p>
        <p className="rel2b">Date: {Global.Relieve.date}</p>
        <p className="rel3b">
          {" "}
          We are writing to formally inform you that you will be relieved from
          your position at
        </p>
        <p className="rel4b">
          <span className="bold">Genie Lamp Pvt Ltd</span>, effective from{" "}
          <span className="bold">{Global.Relieve.endDate}</span>.
        </p>
        <p className="rel5b">
          Throughout your tenure as a{" "}
          <span className="bold"> {Global.Relieve.designation}</span> from{" "}
          <span className="bold">{Global.Relieve.startDate}</span> to{" "}
          <span className="bold">{Global.Relieve.endDate}</span>, you have
          consistently demonstrated hard work, diligence, and honesty in the
          performance of your duties. Your contributions have been valued by the
          management, and we extend our sincere gratitude for your service to
          the company.
        </p>

        <p className="rel55b">
          Employee ID :
          <span className="bold" style={{ textTransform: "uppercase" }}>
            {" "}
            {Global.Relieve.empid}
          </span>
        </p>

        <p className="rel6b">
          We wish you the very best in all your future endeavors.
        </p>
        <p className="rel9b">Sincerely,</p>
        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
        <img
          src="./images/Geniestamp.png"
          alt="stamp"
          className="genstampsss"
        />
        )}
        <p className="rel10b">Shiva Kumar</p>
        <p className="rel11b">HR Manager</p>
        <p className="rel12b"> hr@agenielamp.com</p>
        <p className="rel13b"> +91- 63004 02669</p>

        <div className="ds1"></div>
      </div>
    </div>
  );
});

const GenielampRelieving = () => {
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

export default GenielampRelieving;
