import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Hike.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  return (
    <div ref={ref}>
      <div className="pdf-offerds">
        <img
          src="./images/GenielampNew.png"
          alt="ewded"
          className="i3"
          style={{ height: "1190px" }}
        />
        <h3 className="heaks">HIKE LETTER</h3>
        <p className="hiker1b">{Global.Hike.name} </p>
        <p className="hiker2b">Date: {Global.Hike.date}</p>
        <p className="hiker3b">
          {" "}
          We are delighted to inform you that your dedication and hard work have
          been
        </p>
        <p className="hiker4b">
          recognized, and as a result, we are pleased to offer you an increase
          in salary amounting to an annual sum of{" "}
          <span className="bold"> {Global.Hike.newannualSalary} INR</span>.
        </p>
        <p className="hiker5b">
          We kindly request that you treat matters regarding your salary with
          confidentiality and refrain from discussing them with other employees.
        </p>
        <p className="hiker6b">
          This salary adjustment will come into effect from{" "}
          <span className="bold">{Global.Hike.effectiveDate}</span>.
        </p>
        <p className="hiker7b">
          We sincerely appreciate your continued commitment to excellence at
          <span className="bold"> GENIE LAMP PVT LTD</span>, and we extend our
          heartfelt congratulations on your exceptional performance!
        </p>
        <p className="hiker8b">
          We eagerly anticipate your continued contributions in your current
          role, and we are confident that together, we will further the success
          of <span className="bold">GENIE LAMP PVT LTD</span> as a leading
          organization. We wish you the very best in all your future endeavors.
        </p>
        <p className="hike9b">Sincerely,</p>
        <img src="./images/Geniestamp.png" alt="stamp" className="genstamps" />
        <p className="hike10b">Shiva Kumar</p>
        <p className="hike11b">HR Manager</p>
        <p className="hike12b"> hr@agenielamp.com</p>
        <p className="hike13b"> +91- 63004 02669</p>

        <div className="ds2"></div>
      </div>
    </div>
  );
});

const GenielampHike = () => {
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

export default GenielampHike;
