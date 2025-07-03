import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./relie.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offer">
        <img src="./images/SM_Letterhead.png" alt="ewded" className="i3" />
        <h3 className="heakss">RELIEVING LETTER</h3>
        <p className="rel1c">{Global.Relieve.name}</p>
        <p className="rel2c">Date: {Global.Relieve.date}</p>
        <p className="wwf">Sub: Relieving from Employment</p>
        <p className="rel3c">
          {" "}
          This is to inform you that{" "}
          <span className="bold">Protathlitis Sportsmart LLP</span> has accepted
          your resignation as
        </p>
        <p className="rel4c">
          {" "}
          <span className="bold">{Global.Relieve.designation}</span> on{" "}
          <span className="bold">{Global.Relieve.endDate}</span>
        </p>
        <p className="rel5c">
          you are hereby relieved from your duties with effect from the close of
          business hours on{" "}
          <span className="bold">{Global.Relieve.startDate}</span> to{" "}
          <span className="bold">{Global.Relieve.endDate}</span>.
        </p>
        <p className="rel6c">
          We would like to take this opportunity to express our gratitude for
          your contributions during your tenure with BCL Sports LLP. Your
          dedication and hard work have been appreciated.
        </p>
        <p className="rel7c">
          Wishing you all the best in your future endeavors.
        </p>

        {sessionStorage.getItem("offerStamp") === "with_stamp" && (
          <img
            src="./images/SM_image.png"
            alt="ewded"
            className="gesstampsss"
          />
        )}
        <p className="rel9c">Sincerely,</p>
        <p className="rel10c">Fatima Farooqui Firdous </p>
        <p className="rel11c">HR Manager</p>
        <p className="rel12c">hr@sportsmart.com</p>
        <p className="rel13c">+91 – 9059445503</p>
        <div className="ds1"></div>
      </div>
    </div>
  );
});

const SportsRelieving = () => {
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

export default SportsRelieving;
