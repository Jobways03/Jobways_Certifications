import React, { useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../../context/AuthContext";
import "./paystub.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const [formattedOutput, setFormattedOutput] = useState("");

  const Global = useContext(AuthContext);
  const Emp = localStorage.getItem("Paycompany");
  let arr = [
    Global.form.totalAmount,
    Global.form.hourlyRate,
    Global.form.currentAmount,
    Global.form.ytdGrossAmount,
    Global.form.medicareCurrent,
    Global.form.medicareYTD,
    Global.form.socialSecurityCurrent,
    Global.form.socialSecurityYTD,
    Global.form.federalTaxCurrent,
    Global.form.federalTaxYTD,
    Global.form.stateTaxCurrent,
    Global.form.stateTaxYTD,
  ];

  const isFLI = localStorage.getItem("FLI_TYPE") === "FLI";

  const lineLength = 50;
  const currenttotaltaxe =
    parseFloat(Global.form.medicareCurrent) +
      parseFloat(Global.form.socialSecurityCurrent) +
      parseFloat(Global.form.federalTaxCurrent) +
      parseFloat(Global.form.stateTaxCurrent) || 0;

  const currenttotaltaxes = parseFloat(currenttotaltaxe).toFixed(2);

  const YTDtotaltaxe =
    parseFloat(Global.form.medicareYTD) +
      parseFloat(Global.form.socialSecurityYTD) +
      parseFloat(Global.form.federalTaxYTD) +
      parseFloat(Global.form.stateTaxYTD) || 0;

  const YTDtotaltaxes = parseFloat(YTDtotaltaxe).toFixed(2);

  return (
    <div ref={ref}>
      <div className="pdf-page">
        <p id="date"> {Global.form.date}</p>
        <p id="amt1">***{Global.form.totalAmount}</p>
        <p id="fullname">{Global.form.fullName}</p>
        <p id="amt2"> {Global.form.amountInWords}</p>
        <p id="name1">{Global.form.fullName}</p>
        <p id="add">{Global.form.address}</p>
        <p id="period">
          Pay Period: {Global.form.payPeriodFrom} - {Global.form.payPeriodTo}
        </p>
        <p id="emp">Employee</p>
        <p id="ssn">SSN</p>
        <p id="status">Status(Fed/State)</p>
        <p id="allow">Allowances/Extra</p>
        <div id="line1"></div>
        <p id="name2">
          {Global.form.fullName},{Global.form.address}
        </p>
        <p id="ssn2">**-{Global.form.ssn}</p>
        <p id="status2">{Global.form.maritalStatus}/Withhold</p>
        <p id="allow2">Fed-0/0/{Global.form.state}-0/0</p>
        <p id="pay2">
          {" "}
          Pay Period: {Global.form.payPeriodFrom} - {Global.form.payPeriodTo}
        </p>
        <p id="pay3"> Pay Date: {Global.form.date}</p>
        <p id="earn">Earnings and Hours</p>
        <p id="hour">Hours</p>
        <p id="rate">Rate</p>
        <p id="current">Current</p>
        <p id="gross">YTD Gross</p>
        <div id="line2"></div>
        <p id="hour2">Hourly Rate</p>
        <p id="hour3">{Global.form.totalHours}:00</p>
        <p id="rate2">{Global.form.hourlyRate}.00</p>
        <p id="current2">{Global.form.currentAmount}</p>
        <p id="gross2">{Global.form.ytdGrossAmount}</p>
        <p id="tax">Taxes</p>
        <p id="current3">Current</p>
        <p id="gross3">YTD Amount</p>
        <div id="line3"></div>
        <p id="tax1">Medicare Withholdings</p>
        <p id="tax1-1">- {Global.form.medicareCurrent}</p>
        <p id="tax1-2">- {Global.form.medicareYTD}</p>
        <p id="tax2">Social Security Withholdings</p>
        <p id="tax2-1">- {Global.form.socialSecurityCurrent}</p>
        <p id="tax2-2">- {Global.form.socialSecurityYTD}</p>
        <p id="tax3">Federal Tax</p>
        <p id="tax3-1">- {Global.form.federalTaxCurrent}</p>
        <p id="tax3-2">- {Global.form.federalTaxYTD}</p>
        <p id="tax4">{Global.form.state} – State Tax</p>
        <p id="tax4-1">- {Global.form.stateTaxCurrent}</p>
        <p id="tax4-2">- {Global.form.stateTaxYTD}</p>
        <div id="line4"></div>
        <p id="tax5-1">- {currenttotaltaxes}</p>
        <p id="tax5-2">- {YTDtotaltaxes}</p>
        <p id="tax6">Net Pay</p>
        <p id="tax6-1">
          {parseFloat(
            parseInt(Global.form.currentAmount) - currenttotaltaxes
          ).toFixed(2) || 0}
        </p>
        <p id="tax6-2">
          {parseFloat(
            parseInt(Global.form.ytdGrossAmount) - YTDtotaltaxes
          ).toFixed(2) || 0}
        </p>
        <p id="p">
          {Emp == "rapid" ? (
            <>
              Rapid Hiring Solutions Inc - 3000 Atrium Way Suite 200 Mt Laurel
              Township, NJ 08054
            </>
          ) : Emp == "kacee" ? (
            <>
              Kacee Technologies services Inc - 17 Dillon Dr Dix Hills, NY 11746
            </>
          ) : Emp == "jobways" ? (
            <>Jobways LLC - 8 The Green Suite R Dover, DE 19901</>
          ) : (
            <></>
          )}
        </p>
        <p id="emps">Employee</p>
        <p id="ssns">SSN</p>
        <p id="statuss">Status(Fed/State)</p>
        <p id="allows">Allowances/Extra</p>
        <div id="line1s"></div>
        <p id="name2s">
          {Global.form.fullName},{Global.form.address}
        </p>
        <p id="ssn2s">**-{Global.form.ssn}</p>
        <p id="status2s">{Global.form.maritalStatus}/Withhold</p>
        <p id="allow2s">Fed-0/0/{Global.form.state}-0/0</p>
        <p id="pay2s">
          {" "}
          Pay Period: {Global.form.payPeriodFrom} - {Global.form.payPeriodTo}
        </p>
        <p id="pay3s"> Pay Date: {Global.form.date}</p>
        <p id="earns">Earnings and Hours</p>
        <p id="hours">Hours</p>
        <p id="rates">Rate</p>
        <p id="currents">Current</p>
        <p id="grosss">YTD Gross</p>
        <div id="line2s"></div>
        <p id="hour2s">Hourly Rate</p>
        <p id="hour3s">{Global.form.totalHours}:00</p>
        <p id="rate2s">{Global.form.hourlyRate}.00</p>
        <p id="current2s">{Global.form.currentAmount}</p>
        <p id="gross2s">{Global.form.ytdGrossAmount}</p>
        <p id="taxs">Taxes</p>
        <p id="current3s">Currrent</p>
        <p id="gross3s">YTD Amount</p>
        <div id="line3s"></div>
        <p id="tax1s">Medicare Withholdings</p>
        <p id="tax1-1s">- {Global.form.medicareCurrent}</p>
        <p id="tax1-2s">- {Global.form.medicareYTD}</p>
        <p id="tax2s">Social Security Withholdings</p>
        <p id="tax2-1s">- {Global.form.socialSecurityCurrent}</p>
        <p id="tax2-2s">- {Global.form.socialSecurityYTD}</p>
        <p id="tax3s">Federal Tax</p>
        <p id="tax3-1s">- {Global.form.federalTaxCurrent}</p>
        <p id="tax3-2s">- {Global.form.federalTaxYTD}</p>
        <p id="tax4s">{Global.form.state} – State Tax</p>
        <p id="tax4-1s">- {Global.form.stateTaxCurrent}</p>
        <p id="tax4-2s">- {Global.form.stateTaxYTD}</p>
        <div id="line4s"></div>
        <p id="tax5-1s">- {currenttotaltaxes}</p>
        <p id="tax5-2s">- {YTDtotaltaxes}</p>
        <p id="tax6s">Net Pay</p>
        <p id="tax6-1s">
          {" "}
          {parseFloat(
            parseInt(Global.form.currentAmount) - currenttotaltaxes
          ).toFixed(2) || 0}
        </p>
        <p id="tax6-2s">
          {" "}
          {parseFloat(
            parseInt(Global.form.ytdGrossAmount) - YTDtotaltaxes
          ).toFixed(2) || 0}
        </p>
        <p id="ps">
          {Emp == "rapid" ? (
            <>
              Rapid Hiring Solutions Inc - 3000 Atrium Way Suite 200 Mt Laurel
              Township, NJ 08054
            </>
          ) : Emp == "kacee" ? (
            <>
              Kacee Technologies services Inc - 17 Dillon Dr Dix Hills, NY 11746
            </>
          ) : Emp == "jobways" ? (
            <>Jobways LLC - 8 The Green Suite R Dover, DE 19901</>
          ) : (
            <></>
          )}
        </p>
        <img src="/images/logo.jpg" alt="loading..." id="imga" />
      </div>
    </div>
  );
});

const Paystub = () => {
  const componentRef = useRef();
  // console.log(form);
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

export default Paystub;
