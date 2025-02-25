import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ComponentToPrint = React.forwardRef((props, ref) => {
  let head = localStorage.getItem("head");
  let text = localStorage.getItem("text");
  let Wtb = localStorage.getItem("WTB");
  let name = localStorage.getItem("name");
  let date = localStorage.getItem("date");

  const getBoldedText = (text, wordsToBold) => {
    if (!wordsToBold.trim()) return text;

    // Split the wordsToBold by commas and trim spaces
    const wordsArray = wordsToBold.split(",").map((word) => word.trim());
    // Create a regular expression pattern to match the words
    const pattern = new RegExp(`\\b(${wordsArray.join("|")})\\b`, "gi");

    // Split the text by the pattern
    const parts = text.split(pattern);

    return (
      <>
        {parts.map((part, index) =>
          wordsArray.includes(part) ? <strong key={index}>{part}</strong> : part
        )}
      </>
    );
  };

  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/geshur.png" alt="ewded" className="i3" />

        <div className="head1" style={{ textAlign: "center" }}>
          <h3 className="hhhh">{head}</h3>
        </div>
        <div className="det2">
          <div className="ttt3">{name}</div>
          <div className="ttt3">Date : {date}</div>
        </div>

        <div style={{ whiteSpace: "pre-wrap" }} className="ttt">
          {getBoldedText(text, Wtb)}
          <p className="ttt3" style={{ marginTop: "40px" }}>
            Sincerely,
          </p>
          <div>
            <img src="./images/bgrem.png" alt="stamp" className="ttt2" />
            <p className="ttt3 mar">Ashwini Chinta</p>
            <p className="ttt3 mar">HR Manager</p>
            <p className="ttt3 mar">HR@geshurinfra.com</p>
            <p className="ttt3 mar">+91 – 93989 73635</p>
          </div>
        </div>

        <div className="ds1"></div>
      </div>
    </div>
  );
});

const GeshurEdit = () => {
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

export default GeshurEdit;
