import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../../context/AuthContext";
import "./sdipaystub.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  const Emp = localStorage.getItem("Paycompany");

  const currenttotaltaxe =
    parseFloat(Global.form.medicareCurrent) +
      parseFloat(Global.form.socialSecurityCurrent) +
      parseFloat(Global.form.federalTaxCurrent) +
      parseFloat(Global.form.stateTaxCurrent) +
      parseFloat(Global.form.FLICurrent) || 0;

  const currenttotaltaxes = parseFloat(currenttotaltaxe).toFixed(2);

  const YTDtotaltaxe =
    parseFloat(Global.form.medicareYTD) +
      parseFloat(Global.form.socialSecurityYTD) +
      parseFloat(Global.form.federalTaxYTD) +
      parseFloat(Global.form.stateTaxYTD) +
      parseFloat(Global.form.FLIYTD) || 0;

  const YTDtotaltaxes = parseFloat(YTDtotaltaxe).toFixed(2);

  return (
    <div ref={ref}>
      <div className="sdi-pdf-page">
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

        <p id="sdi-tax4-s">{Global.form.state} – FLI</p>
        <p id="sdi-tax4-1-s">- {Global.form.FLICurrent}</p>
        <p id="sdi-tax4-2-s">- {Global.form.FLIYTD}</p>

        <div id="sdi-line4"></div>
        <p id="sdi-tax5-1">- {currenttotaltaxes}</p>
        <p id="sdi-tax5-2">- {YTDtotaltaxes}</p>
        <p id="sdi-tax6">Net Pay</p>
        <p id="sdi-tax6-1">
          {parseFloat(
            parseInt(Global.form.currentAmount) - currenttotaltaxes
          ).toFixed(2) || 0}
        </p>
        <p id="sdi-tax6-2">
          {parseFloat(
            parseInt(Global.form.ytdGrossAmount) - YTDtotaltaxes
          ).toFixed(2) || 0}
        </p>
        <p id="sdi-p">
          {Emp === "rapid" ? (
            <>
              Rapid Hiring Solutions Inc - 3000 Atrium Way Suite 200 Mt Laurel
              Township, NJ 08054
            </>
          ) : Emp === "kacee" ? (
            <>
              Kacee Technologies services Inc - 17 Dillon Dr Dix Hills, NY 11746
            </>
          ) : Emp === "jobways" ? (
            <>Jobways LLC - 8 The Green Suite R Dover, DE 19901</>
          ) : (
            <></>
          )}
        </p>
        <p id="sdi-emps">Employee</p>
        <p id="sdi-ssns">SSN</p>
        <p id="sdi-statuss">Status(Fed/State)</p>
        <p id="sdi-allows">Allowances/Extra</p>
        <div id="sdi-line1s"></div>
        <p id="sdi-name2s">
          {Global.form.fullName},{Global.form.address}
        </p>
        <p id="sdi-ssn2s">**-{Global.form.ssn}</p>
        <p id="sdi-status2s">{Global.form.maritalStatus}/Withhold</p>
        <p id="sdi-allow2s">Fed-0/0/{Global.form.state}-0/0</p>
        <p id="sdi-pay2s">
          {" "}
          Pay Period: {Global.form.payPeriodFrom} - {Global.form.payPeriodTo}
        </p>
        <p id="sdi-pay3s"> Pay Date: {Global.form.date}</p>
        <p id="sdi-earns">Earnings and Hours</p>
        <p id="sdi-hours">Hours</p>
        <p id="sdi-rates">Rate</p>
        <p id="sdi-currents">Current</p>
        <p id="sdi-grosss">YTD Gross</p>
        <div id="sdi-line2s"></div>
        <p id="sdi-hour2s">Hourly Rate</p>
        <p id="sdi-hour3s">{Global.form.totalHours}:00</p>
        <p id="sdi-rate2s">{Global.form.hourlyRate}.00</p>
        <p id="sdi-current2s">{Global.form.currentAmount}</p>
        <p id="sdi-gross2s">{Global.form.ytdGrossAmount}</p>
        <p id="sdi-taxs">Taxes</p>
        <p id="sdi-current3s">Currrent</p>
        <p id="sdi-gross3s">YTD Amount</p>
        <div id="sdi-line3s"></div>
        <p id="sdi-tax1s">Medicare Withholdings</p>
        <p id="sdi-tax1-1s">- {Global.form.medicareCurrent}</p>
        <p id="sdi-tax1-2s">- {Global.form.medicareYTD}</p>
        <p id="sdi-tax2s">Social Security Withholdings</p>
        <p id="sdi-tax2-1s">- {Global.form.socialSecurityCurrent}</p>
        <p id="sdi-tax2-2s">- {Global.form.socialSecurityYTD}</p>
        <p id="sdi-tax3s">Federal Tax</p>
        <p id="sdi-tax3-1s">- {Global.form.federalTaxCurrent}</p>
        <p id="sdi-tax3-2s">- {Global.form.federalTaxYTD}</p>
        <p id="sdi-tax4s">{Global.form.state} – State Tax</p>
        <p id="sdi-tax4-1s">- {Global.form.stateTaxCurrent}</p>
        <p id="sdi-tax4-2s">- {Global.form.stateTaxYTD}</p>

        <p id="sdi-tax4s-s">{Global.form.state} – FLI</p>
        <p id="sdi-tax4-1s-s">- {Global.form.FLICurrent}</p>
        <p id="sdi-tax4-2s-s">- {Global.form.FLIYTD}</p>

        <div id="sdi-line4s"></div>
        <p id="sdi-tax5-1s">- {currenttotaltaxes}</p>
        <p id="sdi-tax5-2s">- {YTDtotaltaxes}</p>
        <p id="sdi-tax6s">Net Pay</p>
        <p id="sdi-tax6-1s">
          {" "}
          {parseFloat(
            parseInt(Global.form.currentAmount) - currenttotaltaxes
          ).toFixed(2) || 0}
        </p>
        <p id="sdi-tax6-2s">
          {" "}
          {parseFloat(
            parseInt(Global.form.ytdGrossAmount) - YTDtotaltaxes
          ).toFixed(2) || 0}
        </p>
        <p id="sdi-ps">
          {Emp === "rapid" ? (
            <>
              Rapid Hiring Solutions Inc - 3000 Atrium Way Suite 200 Mt Laurel
              Township, NJ 08054
            </>
          ) : Emp === "kacee" ? (
            <>
              Kacee Technologies services Inc - 17 Dillon Dr Dix Hills, NY 11746
            </>
          ) : Emp === "jobways" ? (
            <>Jobways LLC - 8 The Green Suite R Dover, DE 19901</>
          ) : (
            <></>
          )}
        </p>
        <img src="/images/logo.jpg" alt="loading..." id="sdi-imga" />
      </div>
    </div>
  );
});

const Paystubfli = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className="sdi-print-button">
        Print this out!
      </button>
    </div>
  );
};

export default Paystubfli;


