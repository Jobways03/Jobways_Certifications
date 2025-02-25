import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Coi.css";
import AuthContext from "../../context/AuthContext";
import { RxCross1 } from "react-icons/rx";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);

  return (
    <div ref={ref}>
      <div className="pdf-offerd">
        <img src="./images/sm.jpg" alt="ewded" className="i3" />
        <input
          type="text"
          className="inp coi1 "
          value={Global.COIData.co1}
          readOnly
        />
        <input
          type="text"
          className="inp coi2 "
          value={Global.COIData.co2}
          readOnly
        />
        <input
          type="text"
          className="inp coi3"
          value={Global.COIData.co3}
          readOnly
        />
        <input
          type="text"
          className="inp coi4"
          value={Global.COIData.co4}
          readOnly
        />
        <input
          type="text"
          className="inp coi5"
          value={Global.COIData.co5}
          readOnly
        />
        <input
          type="text"
          className="inp coi6"
          value={Global.COIData.co6}
          readOnly
        />
        <input
          type="text"
          className="inp coi7"
          value={Global.COIData.co7}
          readOnly
        />
        <input
          type="text"
          className="inp coi8"
          value={Global.COIData.co9}
          readOnly
        />
        <input
          type="text"
          className="inp coi9"
          value={Global.COIData.co9}
          readOnly
        />
        <input
          type="text"
          className="inp coi10"
          value={Global.COIData.co10}
          readOnly
        />
        <input
          type="text"
          className="inp coi11"
          value={Global.COIData.co11}
          readOnly
        />
        <input
          type="text"
          className="inp coi12"
          value={Global.COIData.co12}
          readOnly
        />
        <input
          type="text"
          className="inp coi13"
          value={Global.COIData.co13}
          readOnly
        />
        <input
          type="text"
          className="inp coi14"
          value={Global.COIData.co14}
          readOnly
        />
        <input
          type="text"
          className="inp coi15"
          value={Global.COIData.co15}
          readOnly
        />
        <input
          type="text"
          className="inp coi16"
          value={Global.COIData.co16}
          readOnly
        />
        <input
          type="text"
          className="inp coi17"
          value={Global.COIData.co17}
          readOnly
        />
        <input
          type="text"
          className="inp coi18"
          value={Global.COIData.co18}
          readOnly
        />
        <input
          type="text"
          className="inp coi19"
          value={Global.COIData.co19}
          readOnly
        />
        <input
          type="text"
          className="inp coi20"
          value={Global.COIData.co20}
          readOnly
        />
        <input
          type="text"
          className="inp coi21"
          value={Global.COIData.co21}
          readOnly
        />
        <input
          type="text"
          className="inp coi22"
          value={Global.COIData.co22}
          readOnly
        />
        <input
          type="text"
          className="inp coi23"
          value={Global.COIData.co23}
          readOnly
        />
        <input
          type="text"
          className="inp coi24"
          value={Global.COIData.co24}
          readOnly
        />
        <input
          type="text"
          className="inp coi25"
          value={Global.COIData.co25}
          readOnly
        />
        <input
          type="text"
          className="inp coi26"
          value={Global.COIData.co26}
          readOnly
        />

        <input
          type="text"
          className="inp coi27"
          value={Global.COIData.co27}
          readOnly
        />
        <input
          type="text"
          className="inp coi28"
          value={Global.COIData.co28}
          readOnly
        />
        <input
          type="text"
          className="inp coi29"
          value={Global.COIData.co29}
          readOnly
        />
        <input
          type="text"
          className="inp coi30"
          value={Global.COIData.co30}
          readOnly
        />
        <input
          type="text"
          className="inp coi31"
          value={Global.COIData.co31}
          readOnly
        />
        <input
          type="text"
          className="inp coi32"
          value={Global.COIData.co32}
          readOnly
        />
        <input
          type="text"
          className="inp coi33"
          value={Global.COIData.co33}
          readOnly
        />
        <input
          type="text"
          className="inp coi34"
          value={Global.COIData.co34}
          readOnly
        />
        <input
          type="text"
          className="inp coi35"
          value={Global.COIData.co35}
          readOnly
        />
        <input
          type="text"
          className="inp coi36"
          value={Global.COIData.co36}
          readOnly
        />
        <input
          type="text"
          className="inp coi37"
          value={Global.COIData.co37}
          readOnly
        />
        <input
          type="text"
          className="inp coi38"
          value={Global.COIData.co38}
          readOnly
        />
        <input
          type="text"
          className="inp coi39"
          value={Global.COIData.co39}
          readOnly
        />
        <input
          type="text"
          className="inp coi40"
          value={Global.COIData.co40}
          readOnly
        />
        <input
          type="text"
          className="inp coi41"
          value={Global.COIData.co41}
          readOnly
        />
        <input
          type="text"
          className="inp coi42"
          value={Global.COIData.co42}
          readOnly
        />
        <input
          type="text"
          className="inp coi43"
          value={Global.COIData.co43}
          readOnly
        />
        <input
          type="text"
          className="inp coi44"
          value={Global.COIData.co44}
          readOnly
        />
        <input
          type="text"
          className="inp coi45"
          value={Global.COIData.co45}
          readOnly
        />
        <input
          type="text"
          className="inp coi46"
          value={Global.COIData.co46}
          readOnly
        />
        <input
          type="text"
          className="inp coi47"
          value={Global.COIData.co47}
          readOnly
        />
        <input
          type="text"
          className="inp coi48"
          value={Global.COIData.co48}
          readOnly
        />
        <input
          type="text"
          className="inp coi49"
          value={Global.COIData.co49}
          readOnly
        />
        <input
          type="text"
          className="inp coi50"
          value={Global.COIData.co50}
          readOnly
        />
        <input
          type="text"
          className="inp coi51"
          value={Global.COIData.co51}
          readOnly
        />
        <input
          type="text"
          className="inp coi52"
          value={Global.COIData.co52}
          readOnly
        />
        <input
          type="text"
          className="inp coi53"
          value={Global.COIData.co53}
          readOnly
        />
        <input
          type="text"
          className="inp coi54"
          value={Global.COIData.co54}
          readOnly
        />
        <input
          type="text"
          className="inp coi55"
          value={Global.COIData.co55}
          readOnly
        />
        <input
          type="text"
          className="inp coi56"
          value={Global.COIData.co56}
          readOnly
        />
        <input
          type="text"
          className="inp coi57"
          value={Global.COIData.co57}
          readOnly
        />
        <input
          type="text"
          className="inp coi58"
          value={Global.COIData.co58}
          readOnly
        />
        <input
          type="text"
          className="inp coi59"
          value={Global.COIData.co59}
          readOnly
        />
        <input
          type="text"
          className="inp coi60"
          value={Global.COIData.co60}
          readOnly
        />
        <input
          type="text"
          className="inp coi61"
          value={Global.COIData.co61}
          readOnly
        />
        <input
          type="text"
          className="inp coi62"
          value={Global.COIData.co62}
          readOnly
        />
        <input
          type="text"
          className="inp coi63"
          value={Global.COIData.co63}
          readOnly
        />
        <input
          type="text"
          className="inp coi64"
          value={Global.COIData.co64}
          readOnly
        />
        <input
          type="text"
          className="inp coi65"
          value={Global.COIData.co65}
          readOnly
        />
        <textarea
          type="text"
          className="inp coi66"
          value={Global.COIData.co66}
          style={{ resize: "none" }}
          readOnly
        />
        <textarea
          type="text"
          className="inp coi67"
          value={Global.COIData.co67}
          style={{ resize: "none" }}
          readOnly
        />
        <textarea
          type="text"
          className="inp coi68"
          value={Global.COIData.co68}
          style={{ resize: "none" }}
          readOnly
        />
        <textarea
          type="text"
          className="inp coi69"
          value={Global.COIData.co69}
          style={{ resize: "none" }}
          readOnly
        />
        <textarea
          type="text"
          className="inp coi70"
          value={Global.COIData.co70}
          style={{ resize: "none" }}
          readOnly
        />
        <input
          type="text"
          className="inp coi71"
          value={Global.COIData.co71}
          readOnly
        />
        <input
          type="text"
          className="inp coi72"
          value={Global.COIData.co72}
          readOnly
        />
        <input
          type="text"
          className="inp coi73"
          value={Global.COIData.co73}
          readOnly
        />
        <input
          type="text"
          className="inp coi74"
          value={Global.COIData.co74}
          readOnly
        />
        <input
          type="text"
          className="inp coi75"
          value={Global.COIData.co75}
          readOnly
        />
        <input
          type="text"
          className="inp coi76"
          value={Global.COIData.co76}
          readOnly
        />
        <input
          type="text"
          className="inp coi77"
          value={Global.COIData.co77}
          readOnly
        />
        <input
          type="text"
          className="inp coi78"
          value={Global.COIData.co78}
          readOnly
        />
        <input
          type="text"
          className="inp coi79"
          value={Global.COIData.co79}
          readOnly
        />
        <input
          type="text"
          className="inp coi80"
          value={Global.COIData.co80}
          readOnly
        />
        <input
          type="text"
          className="inp coi81"
          value={Global.COIData.co81}
          readOnly
        />
        <input
          type="text"
          className="inp coi82"
          value={Global.COIData.co82}
          readOnly
        />
        <input
          type="text"
          className="inp coi83"
          value={Global.COIData.co83}
          readOnly
        />
        <input
          type="text"
          className="inp coi84"
          value={Global.COIData.co84}
          readOnly
        />
        <input
          type="text"
          className="inp coi85"
          value={Global.COIData.co85}
          readOnly
        />
        <input
          type="text"
          className="inp coi86"
          value={Global.COIData.co86}
          readOnly
        />
        <input
          type="text"
          className="inp coi87"
          value={Global.COIData.co87}
          readOnly
        />
        <input
          type="text"
          className="inp coi88"
          value={Global.COIData.co88}
          readOnly
        />
        <input
          type="text"
          className="inp coi89"
          value={Global.COIData.co89}
          readOnly
        />
        <input
          type="text"
          className="inp coi90"
          value={Global.COIData.co90}
          readOnly
        />
        <textarea
          type="text"
          className="inp coi91"
          value={Global.COIData.co91}
          readOnly
          style={{ resize: "none" }}
        />
        <textarea
          type="text"
          className="inp coi92"
          value={Global.COIData.co92}
          readOnly
          style={{ resize: "none" }}
        />
        <input
          type="text"
          className="inp coi93"
          value={Global.COIData.co93}
          readOnly
        />
        <input
          type="text"
          className="inp coi94"
          value={Global.COIData.co94}
          readOnly
        />
        <input
          type="text"
          className="inp coi95"
          value={Global.COIData.co95}
          readOnly
        />
        <input
          type="text"
          className="inp coi96"
          value={Global.COIData.co96}
          readOnly
        />
        {Global.COIData.co97 ? (
          <div
            className="inp coi97"
            style={{ marginLeft: "5px", marginTop: "4px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co98 ? (
          <div
            className="inp coi98"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co99 ? (
          <div
            className="inp coi99"
            style={{ marginLeft: "5px", marginTop: "4px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co100 ? (
          <div
            className="inp coi100"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co101 ? (
          <div
            className="inp coi101"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co102 ? (
          <div
            className="inp coi102"
            style={{ marginLeft: "5px", marginTop: "4px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co103 ? (
          <div
            className="inp coi103"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co104 ? (
          <div
            className="inp coi104"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co105 ? (
          <div
            className="inp coi105"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co106 ? (
          <div
            className="inp coi106"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co107 ? (
          <div
            className="inp coi107"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co108 ? (
          <div
            className="inp coi108"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co109 ? (
          <div
            className="inp coi109"
            style={{ marginLeft: "5px", marginTop: "4px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co110 ? (
          <div
            className="inp coi110"
            style={{ marginLeft: "5px", marginTop: "4px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co111 ? (
          <div
            className="inp coi111"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co112 ? (
          <div
            className="inp coi112"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co113 ? (
          <div
            className="inp coi113"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co114 ? (
          <div
            className="inp coi114"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co115 ? (
          <div
            className="inp coi115"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co116 ? (
          <div
            className="inp coi116"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co117 ? (
          <div
            className="inp coi117"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co118 ? (
          <div
            className="inp coi118"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        {Global.COIData.co119 ? (
          <div
            className="inp coi119"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            <RxCross1 />
          </div>
        ) : (
          <></>
        )}
        <img src={Global.COIData.co120} alt="" className="inp coi121" />
        <div className="ds111"></div>
      </div>
    </div>
  );
});

const Coi = () => {
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

export default Coi;
