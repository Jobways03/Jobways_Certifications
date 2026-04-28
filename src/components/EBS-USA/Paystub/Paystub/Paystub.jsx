import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../../context/AuthContext";
import "./sdipaystub.css";

const EMPLOYER_INFO = {
  rapid: "Rapid Hiring Solutions Inc - 3000 Atrium Way Suite 200 Mt Laurel Township, NJ 08054",
  kacee: "Kacee Technologies services Inc - 17 Dillon Dr Dix Hills, NY 11746",
  jobways: "Jobways LLC - 8 The Green Suite R Dover, DE 19901",
};

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  const Emp = localStorage.getItem("Paycompany");

  // Backward-compat: derive flags from localStorage if not explicitly set on form
  const lsType = localStorage.getItem("PAYSTUB_TYPE");
  const lsFli = localStorage.getItem("FLI_TYPE");
  const includeSDI = Global.form.includeSDI || lsType === "SDI";
  const includeFLI = Global.form.includeFLI || lsFli === "FLI";
  const includeSUI = Global.form.includeSUI || false;
  const includePMFL = Global.form.includePMFL || false;

  const num = (v) => {
    const n = parseFloat(v);
    return isNaN(n) ? 0 : n;
  };

  const optionalTaxes = [
    includeSDI && {
      label: `${Global.form.state} – SDI`,
      current: Global.form.SDICurrent,
      ytd: Global.form.sdiYTD,
    },
    includeFLI && {
      label: `${Global.form.state} – FLI`,
      current: Global.form.FLICurrent,
      ytd: Global.form.FLIYTD,
    },
    includeSUI && {
      label: `${Global.form.state} – SUI`,
      current: Global.form.SUICurrent,
      ytd: Global.form.suiYTD,
    },
    includePMFL && {
      label: `${Global.form.state} – PMFL`,
      current: Global.form.PMFLCurrent,
      ytd: Global.form.pmflYTD,
    },
  ].filter(Boolean);

  const n = optionalTaxes.length;

  const baseTaxes = [
    Global.form.medicareCurrent,
    Global.form.socialSecurityCurrent,
    Global.form.federalTaxCurrent,
    Global.form.stateTaxCurrent,
  ];
  const baseYTDTaxes = [
    Global.form.medicareYTD,
    Global.form.socialSecurityYTD,
    Global.form.federalTaxYTD,
    Global.form.stateTaxYTD,
  ];

  const currenttotaltaxe =
    baseTaxes.reduce((s, v) => s + num(v), 0) +
    optionalTaxes.reduce((s, t) => s + num(t.current), 0);
  const currenttotaltaxes = currenttotaltaxe.toFixed(2);

  const YTDtotaltaxe =
    baseYTDTaxes.reduce((s, v) => s + num(v), 0) +
    optionalTaxes.reduce((s, t) => s + num(t.ytd), 0);
  const YTDtotaltaxes = YTDtotaltaxe.toFixed(2);

  const netCurrent = (num(Global.form.currentAmount) - currenttotaltaxe).toFixed(2);
  const netYTD = (num(Global.form.ytdGrossAmount) - YTDtotaltaxe).toFixed(2);

  // Top-section dynamic positions (state tax row sits at 41%)
  const topRow = (i) => `${42.5 + i * 1.5}%`;
  const topLine = `${43.8 + n * 1.5}%`;
  const topTotals = `${43.5 + n * 1.5}%`;
  const topNet = `${46 + n * 1.5}%`;
  // Cap top footer so it can't push past 54% (avoids colliding with the shifted bottom section)
  const topFooter = `${Math.min(51.5 + n * 1.5, 54)}%`;

  // Pull bottom section UP only enough to keep its footer ~3% above the logo (93.5%).
  // Soft shift = n*1.5 - 2, clamped at 0 so n=0/1 keep the original layout.
  // Reclaims wasted space below the footer instead of crushing the gap above.
  const bottomShift = Math.max(0, n * 1.5 - 2);
  const shifted = (originalTop) => `${originalTop - bottomShift}%`;

  // Bottom-section dynamic positions (state tax row originally at 78%)
  const botRow = (i) => `${79.5 + i * 1.5 - bottomShift}%`;
  const botLine = `${80.8 + n * 1.5 - bottomShift}%`;
  const botTotals = `${80.5 + n * 1.5 - bottomShift}%`;
  const botNet = `${83 + n * 1.5 - bottomShift}%`;
  const botFooter = `${88.5 + n * 1.5 - bottomShift}%`;

  const renderOptionalRow = (tax, topPct, keyPrefix) => (
    <React.Fragment key={`${keyPrefix}-${tax.label}`}>
      <p
        style={{ position: "absolute", top: topPct, left: "5%", fontSize: "50%" }}
      >
        {tax.label}
      </p>
      <p
        style={{ position: "absolute", top: topPct, right: "60%", fontSize: "50%" }}
      >
        - {tax.current}
      </p>
      <p
        style={{ position: "absolute", top: topPct, right: "51%", fontSize: "50%" }}
      >
        - {tax.ytd}
      </p>
    </React.Fragment>
  );

  return (
    <div ref={ref}>
      <div className="sdi-pdf-page">
        {/* TOP SECTION ============================================ */}
        <p id="sdi-date"> {Global.form.date}</p>
        <p id="sdi-amt1">***{Global.form.totalAmount}</p>
        <p id="sdi-fullname">{Global.form.fullName}</p>
        <p id="sdi-amt2"> {Global.form.amountInWords}</p>
        <p id="sdi-name1">{Global.form.fullName}</p>
        <p id="sdi-add">{Global.form.address}</p>
        <p id="sdi-period">
          Pay Period: {Global.form.payPeriodFrom} - {Global.form.payPeriodTo}
        </p>
        <p id="sdi-emp">Employee</p>
        <p id="sdi-ssn">SSN</p>
        <p id="sdi-status">Status(Fed/State)</p>
        <p id="sdi-allow">Allowances/Extra</p>
        <div id="sdi-line1"></div>
        <p id="sdi-name2">
          {Global.form.fullName},{Global.form.address}
        </p>
        <p id="sdi-ssn2">**-{Global.form.ssn}</p>
        <p id="sdi-status2">{Global.form.maritalStatus}/Withhold</p>
        <p id="sdi-allow2">Fed-0/0/{Global.form.state}-0/0</p>
        <p id="sdi-pay2">
          {" "}
          Pay Period: {Global.form.payPeriodFrom} - {Global.form.payPeriodTo}
        </p>
        <p id="sdi-pay3"> Pay Date: {Global.form.date}</p>
        <p id="sdi-earn">Earnings and Hours</p>
        <p id="sdi-hour">Hours</p>
        <p id="sdi-rate">Rate</p>
        <p id="sdi-current">Current</p>
        <p id="sdi-gross">YTD Gross</p>
        <div id="sdi-line2"></div>
        <p id="sdi-hour2">Hourly Rate</p>
        <p id="sdi-hour3">{Global.form.totalHours}:00</p>
        <p id="sdi-rate2">{Global.form.hourlyRate}.00</p>
        <p id="sdi-current2">{Global.form.currentAmount}</p>
        <p id="sdi-gross2">{Global.form.ytdGrossAmount}</p>
        <p id="sdi-tax">Taxes</p>
        <p id="sdi-current3">Current</p>
        <p id="sdi-gross3">YTD Amount</p>
        <div id="sdi-line3"></div>
        <p id="sdi-tax1">Medicare Withholdings</p>
        <p id="sdi-tax1-1">- {Global.form.medicareCurrent}</p>
        <p id="sdi-tax1-2">- {Global.form.medicareYTD}</p>
        <p id="sdi-tax2">Social Security Withholdings</p>
        <p id="sdi-tax2-1">- {Global.form.socialSecurityCurrent}</p>
        <p id="sdi-tax2-2">- {Global.form.socialSecurityYTD}</p>
        <p id="sdi-tax3">Federal Tax</p>
        <p id="sdi-tax3-1">- {Global.form.federalTaxCurrent}</p>
        <p id="sdi-tax3-2">- {Global.form.federalTaxYTD}</p>
        <p id="sdi-tax4">{Global.form.state} – State Tax</p>
        <p id="sdi-tax4-1">- {Global.form.stateTaxCurrent}</p>
        <p id="sdi-tax4-2">- {Global.form.stateTaxYTD}</p>

        {optionalTaxes.map((t, i) => renderOptionalRow(t, topRow(i), "top"))}

        <div
          style={{
            position: "absolute",
            top: topLine,
            left: "29%",
            backgroundColor: "black",
            height: "0.1px",
            width: "142px",
          }}
        ></div>
        <p style={{ position: "absolute", top: topTotals, right: "60%", fontSize: "50%" }}>
          - {currenttotaltaxes}
        </p>
        <p style={{ position: "absolute", top: topTotals, right: "51%", fontSize: "50%" }}>
          - {YTDtotaltaxes}
        </p>
        <p style={{ position: "absolute", top: topNet, left: "5%", fontSize: "50%" }}>
          Net Pay
        </p>
        <p style={{ position: "absolute", top: topNet, right: "60%", fontSize: "50%" }}>
          {netCurrent}
        </p>
        <p style={{ position: "absolute", top: topNet, right: "51%", fontSize: "50%" }}>
          {netYTD}
        </p>
        <p style={{ position: "absolute", top: topFooter, left: "5%", fontSize: "50%" }}>
          {EMPLOYER_INFO[Emp] || ""}
        </p>

        {/* BOTTOM SECTION (carbon copy) =========================== */}
        <p id="sdi-emps" style={{ top: shifted(62) }}>Employee</p>
        <p id="sdi-ssns" style={{ top: shifted(62) }}>SSN</p>
        <p id="sdi-statuss" style={{ top: shifted(62) }}>Status(Fed/State)</p>
        <p id="sdi-allows" style={{ top: shifted(62) }}>Allowances/Extra</p>
        <div id="sdi-line1s" style={{ top: shifted(64.5) }}></div>
        <p id="sdi-name2s" style={{ top: shifted(64) }}>
          {Global.form.fullName},{Global.form.address}
        </p>
        <p id="sdi-ssn2s" style={{ top: shifted(64) }}>**-{Global.form.ssn}</p>
        <p id="sdi-status2s" style={{ top: shifted(64) }}>{Global.form.maritalStatus}/Withhold</p>
        <p id="sdi-allow2s" style={{ top: shifted(64) }}>Fed-0/0/{Global.form.state}-0/0</p>
        <p id="sdi-pay2s" style={{ top: shifted(65.5) }}>
          {" "}
          Pay Period: {Global.form.payPeriodFrom} - {Global.form.payPeriodTo}
        </p>
        <p id="sdi-pay3s" style={{ top: shifted(65.5) }}> Pay Date: {Global.form.date}</p>
        <p id="sdi-earns" style={{ top: shifted(67) }}>Earnings and Hours</p>
        <p id="sdi-hours" style={{ top: shifted(67) }}>Hours</p>
        <p id="sdi-rates" style={{ top: shifted(67) }}>Rate</p>
        <p id="sdi-currents" style={{ top: shifted(67) }}>Current</p>
        <p id="sdi-grosss" style={{ top: shifted(67) }}>YTD Gross</p>
        <div id="sdi-line2s" style={{ top: shifted(69.15) }}></div>
        <p id="sdi-hour2s" style={{ top: shifted(68.7) }}>Hourly Rate</p>
        <p id="sdi-hour3s" style={{ top: shifted(68.7) }}>{Global.form.totalHours}:00</p>
        <p id="sdi-rate2s" style={{ top: shifted(68.7) }}>{Global.form.hourlyRate}.00</p>
        <p id="sdi-current2s" style={{ top: shifted(68.7) }}>{Global.form.currentAmount}</p>
        <p id="sdi-gross2s" style={{ top: shifted(68.7) }}>{Global.form.ytdGrossAmount}</p>
        <p id="sdi-taxs" style={{ top: shifted(71.5) }}>Taxes</p>
        <p id="sdi-current3s" style={{ top: shifted(71.5) }}>Current</p>
        <p id="sdi-gross3s" style={{ top: shifted(71.5) }}>YTD Amount</p>
        <div id="sdi-line3s" style={{ top: shifted(73.85) }}></div>
        <p id="sdi-tax1s" style={{ top: shifted(73.5) }}>Medicare Withholdings</p>
        <p id="sdi-tax1-1s" style={{ top: shifted(73.5) }}>- {Global.form.medicareCurrent}</p>
        <p id="sdi-tax1-2s" style={{ top: shifted(73.5) }}>- {Global.form.medicareYTD}</p>
        <p id="sdi-tax2s" style={{ top: shifted(75) }}>Social Security Withholdings</p>
        <p id="sdi-tax2-1s" style={{ top: shifted(75) }}>- {Global.form.socialSecurityCurrent}</p>
        <p id="sdi-tax2-2s" style={{ top: shifted(75) }}>- {Global.form.socialSecurityYTD}</p>
        <p id="sdi-tax3s" style={{ top: shifted(76.5) }}>Federal Tax</p>
        <p id="sdi-tax3-1s" style={{ top: shifted(76.5) }}>- {Global.form.federalTaxCurrent}</p>
        <p id="sdi-tax3-2s" style={{ top: shifted(76.5) }}>- {Global.form.federalTaxYTD}</p>
        <p id="sdi-tax4s" style={{ top: shifted(78) }}>{Global.form.state} – State Tax</p>
        <p id="sdi-tax4-1s" style={{ top: shifted(78) }}>- {Global.form.stateTaxCurrent}</p>
        <p id="sdi-tax4-2s" style={{ top: shifted(78) }}>- {Global.form.stateTaxYTD}</p>

        {optionalTaxes.map((t, i) => renderOptionalRow(t, botRow(i), "bot"))}

        <div
          style={{
            position: "absolute",
            top: botLine,
            left: "29%",
            backgroundColor: "black",
            height: "0.1px",
            width: "142px",
          }}
        ></div>
        <p style={{ position: "absolute", top: botTotals, right: "60%", fontSize: "50%" }}>
          - {currenttotaltaxes}
        </p>
        <p style={{ position: "absolute", top: botTotals, right: "51%", fontSize: "50%" }}>
          - {YTDtotaltaxes}
        </p>
        <p style={{ position: "absolute", top: botNet, left: "5%", fontSize: "50%" }}>
          Net Pay
        </p>
        <p style={{ position: "absolute", top: botNet, right: "60%", fontSize: "50%" }}>
          {netCurrent}
        </p>
        <p style={{ position: "absolute", top: botNet, right: "51%", fontSize: "50%" }}>
          {netYTD}
        </p>
        <p style={{ position: "absolute", top: botFooter, left: "5%", fontSize: "50%" }}>
          {EMPLOYER_INFO[Emp] || ""}
        </p>

        <img src="/images/logo.jpg" alt="loading..." id="sdi-imga" />
      </div>
    </div>
  );
});

const Paystub = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className="sdi-print-button" style={{ margin: "120px" , color: "#fff", backgroundColor: "#007bff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
        Print this out!
      </button>
    </div>
  );
};

export default Paystub;
