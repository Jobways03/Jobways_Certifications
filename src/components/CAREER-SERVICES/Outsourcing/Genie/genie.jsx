import React, { useContext, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import AuthContext from "../../../../context/AuthContext";
import "./genie.css";

const ComponentToPrint = React.forwardRef(({ showExtras }, ref) => {
  const Global = useContext(AuthContext);

  return (
    <div ref={ref}>
      <div className="pdf-invo">
        <img src="./images/genie.png" alt="ewded" className="i3" />
        <p className="inog">INVOICE</p>
        <p className="froog">From:</p>
        <p className="jplg">GENIE LAMP PRIVATE LIMITED</p>
        <p className="uniig">
          <span style={{ fontWeight: "bolder" }}>Address:</span> Unit-NO:
          7-140/2,
        </p>
        <p className="e5g">E 5, NAGENDRA NAGAR, SCIENTIST COLONY,</p>
        <p className="e6g">HABSIGUDA, HYDERABAD- 500 007</p>
        <p className="e7g">
          <span style={{ fontWeight: "bolder" }}>GSTIN: </span> 36AAHCG0113C1ZC
        </p>
        <p className="e8g">
          <span style={{ fontWeight: "bolder" }}>Place: </span> TELANGANA
        </p>
        <p className="to1g">To:</p>
        <p className="to2g">JOBWAYS LLC</p>
        <p className="to3g">
          <span style={{ fontWeight: "bolder" }}>Address:</span> 8 The Green,
          STE R DOVER,
        </p>
        <p className="to4g">DE 19901, USA.</p>
        <p className="to5g">
          <span style={{ fontWeight: "bolder" }}>EIN: </span>36-5033197
        </p>
        <p className="to6g">
          <span style={{ fontWeight: "bolder" }}>Place Of Supply: </span>USA
        </p>
        <p className="to7g" style={{ fontWeight: "bolder" }}>
          Date
        </p>
        <p className="to8g">Invoice</p>
        <p className="to9g" style={{ fontWeight: "bolder" }}>
          Service ID
        </p>
        <p className="to10g" style={{ fontWeight: "bolder" }}>
          Due Date
        </p>
        <p className="to11g">{Global.out.date}</p>
        <p className="to12g">GL-{Global.out.invoiceNumber}</p>
        <p className="to13g">{Global.out.invoiceNumber}</p>
        <p className="to14g">~</p>
        <p className="to15g" style={{ fontWeight: "bolder" }}>
          Bank Details
        </p>
        <p className="to16g" style={{ fontWeight: "bolder" }}>
          Bank Account Number
        </p>
        <p className="to17g" style={{ fontWeight: "bolder" }}>
          Bank Name
        </p>
        <p className="to18g" style={{ fontWeight: "bolder" }}>
          Bank Address
        </p>
        <p className="to19g" style={{ fontWeight: "bolder" }}>
          MICR Code
        </p>
        <p className="to20g" style={{ fontWeight: "bolder" }}>
          SWIFT Code
        </p>
        <p className="to21g" style={{ fontWeight: "bolder" }}>
          IFSC Code
        </p>
        <p className="to22g" style={{ fontWeight: "bolder" }}>
          PAN Number
        </p>
        <p className="qq1g">59294477777777</p>
        <p className="qq2g">HDFC Bank</p>
        <p className="qq3g">H No: 4-9-701, Plot No.12, Survey</p>
        <p className="qq4g">No.293 Hayatnagar, Near Bus Depo</p>
        <p className="qq5g">Stop, Pin 501505</p>
        <p className="qq6g">N/A</p>
        <p className="qq7g">HDFCINBB</p>
        <p className="qq8g">HDFC0001990</p>
        <p className="qq9g">AAHCG0113C</p>
        <p className="sd1g">Service Description</p>
        <p className="sd2g">Employment Services</p>
        <p className="rr1g">S.NO</p>
        <p className="rr2g">Description of Services</p>
        <p className="rr3g">QTY</p>
        <p className="rr4g">Rate</p>
        <p className="rr5g">Per</p>
        <p className="rr6g">Amount</p>
        <p className="vv1g">1</p>
        <p className="vv2g">Out-Sourcing</p>
        <p className="vv3g">1</p>
        <p className="vv4g">${Global.out.amount}.00</p>
        <p className="vv5g">Check</p>
        <p className="vv6g">${Global.out.amount}.00</p>
        <p className="vv7g">${Global.out.amount}.00</p>
        <p className="vv8g" style={{ fontWeight: "bolder" }}>
          Total GST (0%)
        </p>
        <p className="vv9g">0.00</p>
        <p className="vv10g">${Global.out.amount}.00</p>
        <p className="cc1g">Total</p>
        <p className="cc2g">Amount Chargeable (in words)</p>
        <p className="cc3g">E & OE.</p>
        <p className="cc4g">
          <span style={{ fontWeight: "bolder" }}>USD </span>
          {Global.out.amountInWords}
        </p>
        <p className="cc5g">HSN/ SAC</p>
        <p className="cc6g">Value</p>
        <p className="cc7g">Rate</p>
        <p className="cc8g">Amount</p>
        <p className="cc9g">Tax Amount</p>
        <p className="qa1g">998313</p>
        <p className="qa2g">0%</p>
        <p className="qa3g">0.00</p>
        <p className="qa4g">Total</p>
        <p className="qa5g">0.00</p>
        <p className="qa6g">Declaration:</p>
        <p className="qa7g">
          We declare that this invoice shows the actual price of the services
        </p>
        <p className="qa8g">
          described and that all particulars are true and correct
        </p>
        <p className="jb1g">for Jobways Point LLP</p>
        <p className="jb2g">PANYAM SUDHEER</p>
        <p className="jb3g">Designated Partner</p>
        <p className="jb4g">
          This is Computer Generated no need of Signature. Please
        </p>
        <p className="jb5g">contact to verify</p>
        <p className="con nunn">+91 63004 02669</p>
        <div className="lo"></div>
        <div className="color"></div>
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

const Genie = () => {
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

export default Genie;
