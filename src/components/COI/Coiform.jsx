import React from "react";
import "./Coi.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Coiform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setCOIData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlecheck = (e) => {
    const { name, checked } = e.target;
    Global.setCOIData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const getfile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      Global.setCOIData((prevState) => ({
        ...prevState,
        co120: reader.result,
      }));
    };
  };

  const handlesubmit = () => {
    navigate("/coi");
  };

  return (
    <>
      <div className="pdf-offerd">
        <img src="./images/sm.jpg" alt="ewded" className="i3" />
        <input
          type="text"
          className="inp coi1 cor"
          name="co1"
          value={Global.COIData.co1}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi2 cor"
          name="co2"
          value={Global.COIData.co2}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi3 cor"
          name="co3"
          value={Global.COIData.co3}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi4 cor"
          name="co4"
          value={Global.COIData.co4}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi5 cor"
          name="co5"
          value={Global.COIData.co5}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi6 cor"
          name="co6"
          value={Global.COIData.co6}
          onChange={handleChange}
        />{" "}
        <input
          type="text"
          className="inp coi7 cor"
          name="co7"
          value={Global.COIData.co7}
          onChange={handleChange}
        />{" "}
        <input
          type="text"
          className="inp coi8 cor"
          name="co8"
          value={Global.COIData.co8}
          onChange={handleChange}
        />{" "}
        <input
          type="text"
          className="inp coi9 cor"
          name="co9"
          value={Global.COIData.co9}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi10 cor"
          name="co10"
          value={Global.COIData.co10}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi11 cor"
          name="co11"
          value={Global.COIData.co11}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi12 cor"
          name="co12"
          value={Global.COIData.co12}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi13 cor"
          name="co13"
          value={Global.COIData.co13}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi14 cor"
          name="co14"
          value={Global.COIData.co14}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi15 cor"
          name="co15"
          value={Global.COIData.co15}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi16 cor"
          name="co16"
          value={Global.COIData.co16}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi17 cor"
          name="co17"
          value={Global.COIData.co17}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi18 cor"
          name="co18"
          value={Global.COIData.co18}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi19 cor"
          name="co19"
          value={Global.COIData.co19}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi20 cor"
          name="co20"
          value={Global.COIData.co20}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi21 cor"
          name="co21"
          value={Global.COIData.co21}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi22 cor"
          name="co22"
          value={Global.COIData.co22}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi23 cor"
          name="co23"
          value={Global.COIData.co23}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi24 cor"
          name="co24"
          value={Global.COIData.co24}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi25 cor"
          name="co25"
          value={Global.COIData.co25}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi26 cor"
          name="co26"
          value={Global.COIData.co26}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi27 cor"
          name="co27"
          value={Global.COIData.co27}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi28 cor"
          name="co28"
          value={Global.COIData.co28}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi29 cor"
          name="co29"
          value={Global.COIData.co29}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi30 cor"
          name="co30"
          value={Global.COIData.co30}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi31 cor"
          name="co31"
          value={Global.COIData.co31}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi32 cor"
          name="co32"
          value={Global.COIData.co32}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi33 cor"
          name="co33"
          value={Global.COIData.co33}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi34 cor"
          name="co34"
          value={Global.COIData.co34}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi35 cor"
          name="co35"
          value={Global.COIData.co35}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi36 cor"
          name="co36"
          value={Global.COIData.co36}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi37 cor"
          name="co37"
          value={Global.COIData.co37}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi38 cor"
          name="co38"
          value={Global.COIData.co38}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi39 cor"
          name="co39"
          value={Global.COIData.co39}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi40 cor"
          name="co40"
          value={Global.COIData.co40}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi41 cor"
          name="co41"
          value={Global.COIData.co41}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi42 cor"
          name="co42"
          value={Global.COIData.co42}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi43 cor"
          name="co43"
          value={Global.COIData.co43}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi44 cor"
          name="co44"
          value={Global.COIData.co44}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi45 cor"
          name="co45"
          value={Global.COIData.co45}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi46 cor"
          name="co46"
          value={Global.COIData.co46}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi47 cor"
          name="co47"
          value={Global.COIData.co47}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi48 cor"
          name="co48"
          value={Global.COIData.co48}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi49 cor"
          name="co49"
          value={Global.COIData.co49}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi50 cor"
          name="co50"
          value={Global.COIData.co50}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi51 cor"
          name="co51"
          value={Global.COIData.co51}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi52 cor"
          name="co52"
          value={Global.COIData.co52}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi53 cor"
          name="co53"
          value={Global.COIData.co53}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi54 cor"
          name="co54"
          value={Global.COIData.co54}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi55 cor"
          name="co55"
          value={Global.COIData.co55}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi56 cor"
          name="co56"
          value={Global.COIData.co56}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi57 cor"
          name="co57"
          value={Global.COIData.co57}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi58 cor"
          name="co58"
          value={Global.COIData.co58}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi59 cor"
          name="co59"
          value={Global.COIData.co59}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi60 cor"
          name="co60"
          value={Global.COIData.co60}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi61 cor"
          name="co61"
          value={Global.COIData.co61}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi62 cor"
          name="co62"
          value={Global.COIData.co62}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi63 cor"
          name="co63"
          value={Global.COIData.co63}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi64 cor"
          name="co64"
          value={Global.COIData.co64}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi65 cor"
          name="co65"
          value={Global.COIData.co65}
          onChange={handleChange}
        />
        <textarea
          type="text"
          className="inp coi66 cor"
          name="co66"
          value={Global.COIData.co66}
          style={{ resize: "none" }}
          onChange={handleChange}
        />
        <textarea
          type="text"
          className="inp coi67 cor"
          name="co67"
          value={Global.COIData.co67}
          style={{ resize: "none" }}
          onChange={handleChange}
        />
        <textarea
          type="text"
          className="inp coi68 cor"
          name="co68"
          value={Global.COIData.co68}
          style={{ resize: "none" }}
          onChange={handleChange}
        />
        <textarea
          type="text"
          className="inp coi69 cor"
          name="co69"
          value={Global.COIData.co69}
          style={{ resize: "none" }}
          onChange={handleChange}
        />
        <textarea
          type="text"
          className="inp coi70 cor"
          name="co70"
          value={Global.COIData.co70}
          style={{ resize: "none" }}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi71 cor"
          name="co71"
          value={Global.COIData.co71}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi72 cor"
          name="co72"
          value={Global.COIData.co72}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi73 cor"
          name="co73"
          value={Global.COIData.co73}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi74 cor"
          name="co74"
          value={Global.COIData.co74}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi75 cor"
          name="co75"
          value={Global.COIData.co75}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi76 cor"
          name="co76"
          value={Global.COIData.co76}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi77 cor"
          name="co77"
          value={Global.COIData.co77}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi78 cor"
          name="co78"
          value={Global.COIData.co78}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi79 cor"
          name="co79"
          value={Global.COIData.co79}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi80 cor"
          name="co80"
          value={Global.COIData.co80}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi81 cor"
          name="co81"
          value={Global.COIData.co81}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi82 cor"
          name="co82"
          value={Global.COIData.co82}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi83 cor"
          name="co83"
          value={Global.COIData.co83}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi84 cor"
          name="co84"
          value={Global.COIData.co84}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi85 cor"
          name="co85"
          value={Global.COIData.co85}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi86 cor"
          name="co86"
          value={Global.COIData.co86}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi87 cor"
          name="co87"
          value={Global.COIData.co87}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi88 cor"
          name="co88"
          value={Global.COIData.co88}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi89 cor"
          name="co89"
          value={Global.COIData.co89}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi90 cor"
          name="co90"
          value={Global.COIData.co90}
          onChange={handleChange}
        />
        <textarea
          type="text"
          className="inp coi91 cor"
          name="co91"
          value={Global.COIData.co91}
          onChange={handleChange}
          style={{ resize: "none" }}
        />
        <textarea
          type="text"
          className="inp coi92 cor"
          name="co92"
          value={Global.COIData.co92}
          style={{ resize: "none" }}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi93 cor"
          name="co93"
          value={Global.COIData.co93}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi94 cor"
          name="co94"
          value={Global.COIData.co94}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi95 cor"
          name="co95"
          value={Global.COIData.co95}
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp coi96 cor"
          name="co96"
          value={Global.COIData.co96}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          className="inp coi97 cor"
          name="co97"
          checked={Global.COIData.co97}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi98 cor"
          name="co98"
          checked={Global.COIData.co98}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi99 cor"
          name="co99"
          checked={Global.COIData.co99}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi100 cor"
          name="co100"
          checked={Global.COIData.co100}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi101 cor"
          name="co101"
          checked={Global.COIData.co101}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi102 cor"
          name="co102"
          checked={Global.COIData.co102}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi103 cor"
          name="co103"
          checked={Global.COIData.co103}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi104 cor"
          name="co104"
          checked={Global.COIData.co104}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi105 cor"
          name="co105"
          checked={Global.COIData.co105}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi106 cor"
          name="co106"
          checked={Global.COIData.co106}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi107 cor"
          name="co107"
          checked={Global.COIData.co107}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi108 cor"
          name="co108"
          checked={Global.COIData.co108}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi109 cor"
          name="co109"
          checked={Global.COIData.co109}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi110 cor"
          name="co110"
          checked={Global.COIData.co110}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi111 cor"
          name="co111"
          checked={Global.COIData.co111}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi112 cor"
          name="co112"
          checked={Global.COIData.co112}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi113 cor"
          name="co113"
          checked={Global.COIData.co113}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi114 cor"
          name="co114"
          checked={Global.COIData.co114}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi115 cor"
          name="co115"
          checked={Global.COIData.co115}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi116 cor"
          name="co116"
          checked={Global.COIData.co116}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi117 cor"
          name="co117"
          checked={Global.COIData.co117}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi118 cor"
          name="co118"
          checked={Global.COIData.co118}
          onChange={handlecheck}
        />
        <input
          type="checkbox"
          className="inp coi119 cor"
          name="co119"
          checked={Global.COIData.co119}
          onChange={handlecheck}
        />
        <input
          type="file"
          className="inp coi120 cor"
          name=""
          id=""
          onChange={getfile}
        />
        <div className="ds111"></div>
      </div>
      <br />
      <h2>
        *
        <a
          href="https://pixelixe.com/image-cropper-online/crop-image.html"
          target="_blank"
          rel="noreferrer"
        >
          Click here
        </a>{" "}
        to crop the image for Signature
      </h2>
      <br />
      <button
        onClick={handlesubmit}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        SUBMIT
      </button>
    </>
  );
};

export default Coiform;
