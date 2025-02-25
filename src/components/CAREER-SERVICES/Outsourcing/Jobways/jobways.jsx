import React, { useContext, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./jobways.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef(({showExtras}, ref) => {
  const Global = useContext(AuthContext);

  return (
    <div ref={ref}>
      <div className="pdf-invoice">
        <img src="./images/jobways.png" alt="ewded" className="i3" />
        <p className="ino">INVOICE</p>
        <p className="froo">From:</p>
        <p className="jpl">JOBWAYS POINT LLP</p>
        <p className="unii">
          <span style={{ fontWeight: "bolder" }}>Address:</span> Unit-NO:
          7-140/2,
        </p>
        <p className="e5">E 5, NAGENDRA NAGAR, SCIENTIST COLONY,</p>
        <p className="e6">HABSIGUDA, HYDERABAD- 500 007</p>
        <p className="e7">
          <span style={{ fontWeight: "bolder" }}>GSTIN: </span> 36AAHCG0113C1ZC
        </p>
        <p className="e8">
          <span style={{ fontWeight: "bolder" }}>Place: </span> TELANGANA
        </p>
        <p className="to1">To:</p>
        <p className="to2">JOBWAYS LLC</p>
        <p className="to3">
          <span style={{ fontWeight: "bolder" }}>Address:</span> 8 The Green,
          STE R DOVER,
        </p>
        <p className="to4">DE 19901, USA.</p>
        <p className="to5">
          <span style={{ fontWeight: "bolder" }}>EIN: </span>36-5033197
        </p>
        <p className="to6">
          <span style={{ fontWeight: "bolder" }}>Place Of Supply: </span>USA
        </p>
        <p className="to7" style={{ fontWeight: "bolder" }}>
          Date
        </p>
        <p className="to8">Invoice</p>
        <p className="to9" style={{ fontWeight: "bolder" }}>
          Service ID
        </p>
        <p className="to10" style={{ fontWeight: "bolder" }}>
          Due Date
        </p>
        <p className="to11">{Global.out.date}</p>
        <p className="to12">JW-{Global.out.invoiceNumber}</p>
        <p className="to13">{Global.out.invoiceNumber}</p>
        <p className="to14">~</p>
        <p className="to15">Bank Details</p>
        <p className="to16" style={{ fontWeight: "bolder" }}>
          Bank Account Number
        </p>
        <p className="to17" style={{ fontWeight: "bolder" }}>
          Bank Name
        </p>
        <p className="to18" style={{ fontWeight: "bolder" }}>
          Bank Address
        </p>
        <p className="to19" style={{ fontWeight: "bolder" }}>
          MICR Code
        </p>
        <p className="to20" style={{ fontWeight: "bolder" }}>
          SWIFT Code
        </p>
        <p className="to21" style={{ fontWeight: "bolder" }}>
          IFSC Code
        </p>
        <p className="to22" style={{ fontWeight: "bolder" }}>
          PAN Number
        </p>
        <p className="qq1">50200088465291</p>
        <p className="qq2">HDFC Bank</p>
        <p className="qq3">H No:4-9-701,Plot No.12, Survey No.293</p>
        <p className="qq4">Hayatnagar, Near Bus Depo Stop, Pin</p>
        <p className="qq5">501505</p>
        <p className="qq6">N/A</p>
        <p className="qq7">HDFCINBB</p>
        <p className="qq8">HDFC0001990</p>
        <p className="qq9">AATFJ7964R</p>
        <p className="sd1">Service Description</p>
        <p className="sd2">Employment Services</p>
        <p className="rr1">S.NO</p>
        <p className="rr2">Description of Services</p>
        <p className="rr3">QTY</p>
        <p className="rr4">Rate</p>
        <p className="rr5">Per</p>
        <p className="rr6">Amount</p>
        <p className="vv1">1</p>
        <p className="vv2">Out-Sourcing</p>
        <p className="vv3">1</p>
        <p className="vv4">${Global.out.amount}.00</p>
        <p className="vv5">Check</p>
        <p className="vv6">${Global.out.amount}.00</p>
        <p className="vv7">${Global.out.amount}.00</p>
        <p className="vv8" style={{ fontWeight: "bolder" }}>
          Total GST (0%)
        </p>
        <p className="vv9">0.00</p>
        <p className="vv10">${Global.out.amount}.00</p>
        <p className="cc1">Total</p>
        <p className="cc2">Amount Chargeable (in words)</p>
        <p className="cc3">E & OE.</p>
        <p className="cc4">
          <span style={{ fontWeight: "bolder" }}>USD </span>{" "}
          {Global.out.amountInWords}
        </p>
        <p className="cc5">HSN/ SAC</p>
        <p className="cc6">Value</p>
        <p className="cc7">Rate</p>
        <p className="cc8">Amount</p>
        <p className="cc9">Tax Amount</p>
        <p className="qa1">998313</p>
        <p className="qa2">0%</p>
        <p className="qa3">0.00</p>
        <p className="qa4">Total</p>
        <p className="qa5">0.00</p>
        <p className="qa6">Declaration:</p>
        <p className="qa7">
          We declare that this invoice shows the actual price of the services
        </p>
        <p className="qa8">
          described and that all particulars are true and correct
        </p>
        <p className="jb1">for Jobways Point LLP</p>
        <p className="jb2">PANYAM SUDHEER</p>
        <p className="jb3">Designated Partner</p>
        <p className="jb4">
          This is Computer Generated no need of Signature. Please
        </p>
        <p className="jb5">contact to verify</p>
        <p className="dd com">+91 70134 96618</p>
        <div className="loj"></div>
        {showExtras && (
          <>
            <div className="transaction-id">
              <p>Transaction ID: {Global.out.transactionID}</p>
            </div>
            {Global.out.uploadedImage && (
              <img
                src={URL.createObjectURL(Global.out.uploadedImage)}
                alt="Uploaded"
                className="uploaded-image"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
});

const Jobways = () => {
  const componentRef = useRef();
  const [showExtras, setShowExtras] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintWithExtras = () => {
    setShowExtras(!showExtras);
  };

  return (
    <div>
      <ComponentToPrint ref={componentRef} showExtras={showExtras} />
      <button onClick={handlePrint} className="print-button">
        Print Invoice
      </button>
      <button onClick={handlePrintWithExtras} className="print-button">
        Toggle Transaction ID and Image
      </button>
    </div>
  );

};

export default Jobways;
