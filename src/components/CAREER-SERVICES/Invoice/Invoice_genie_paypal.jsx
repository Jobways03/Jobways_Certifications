import React, { useContext, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./Invoice.css";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef(({ showExtras }, ref) => {
  const Global = useContext(AuthContext);

  return (
    <div ref={ref}>
      <div className="pdf-invoice">
        <img
          src="./images/GenieLamp_paypal.png"
          alt="...Loading"
          className="i3"
        />
        <p className="eadd1-p">GENIE LAMP PRIVATE LIMITED</p>
        <p className="eadd1">Unit-NO: 7-140/2, E 5</p>
        <p className="eadd2">Nagendra Nagar, Habsiguda</p>
        <p className="eadd3">Phone: +91 78159 03117</p>
        <p className="eadd4">Email: contactus@agenielamp.com</p>
        <p className="eadd5">Website: https://agenielamp.com</p>
        <p className="bill">BILL TO</p>
        {/* <div className="lie"></div> */}
        <p className="namei">
          <span style={{ fontWeight: 900 }}>Name: </span>
          Multi International Clients
        </p>
        <p className="maili">
          <span style={{ fontWeight: 900 }}>Email: </span>
          &nbsp;&nbsp;NA
        </p>
        <p className="phonei">
          <span style={{ fontWeight: 900 }}>Phone: </span>
          &nbsp;&nbsp;NA
        </p>
        <p className="addi">
          <span style={{ fontWeight: 900 }}>Address: </span>
          &nbsp;NA
        </p>
        <p className="ii">INVOICE</p>
        <p className="datei">DATE</p>
        <p className="datej">{Global.formData.date}</p>
        <p className="ini">INVOICE&nbsp;#</p>
        <p className="inj">GL-{Global.formData.invoiceNumber}</p>
        <p className="servicei">TRANSACTION ID</p>
        <p className="servicej"> {Global.formData.transactionID}</p>
        <p className="due">DUE DATE</p>
        <p className="duej">~</p>
        <p className="des">DESCRIPTION</p>
        {/* <div className="lie2"></div> */}
        <p className="houri">HOURS</p>
        <p className="ratei">RATE</p>
        <p className="amti">AMOUNT</p>
        <p className="learn">Career Services</p>
        <p className="hoursj">&nbsp;-</p>
        <div className="middev1">&nbsp;-</div>
        <div className="middev">{Global.formData.amount} INR</div>

        <p className="sti">SUBTOTAL</p>
        <p className="tri">IGST</p>
        <p className="taxi">CGST</p>
        <p className="ifi">SGST</p>
        <div className="sta">{Global.formData.amount} INR</div>
        <div className="tria">NA</div>
        <div className="taxia">NA</div>
        <div className="ifia">NA</div>
        <p className="totii-p">TOTAL</p>
        <div className="toti-p">{Global.formData.amount} INR</div>
        <p className="oc">OTHER COMMENTS</p>
        <p className="oc1">1. Total payment due in 0 Calendar days.</p>
        <p className="oc2">
          2. Please include the invoice number on your check or
        </p>
        <p className="oc3">Payments Description.</p>
        <p className="mac-p">Export of Services under LUT – IGST not payable</p>

        <p className="mac1-p1">Make all checks payable to</p>
        <p className="mac1-p2g">Genielamp Private Limited</p>

        <p className="last1">GENIE LAMP PRIVATE LIMITED</p>
        <p className="last2">+91 78159 03117</p>
        <p className="last3">contactus@agenielamp.com</p>
        <p className="last4">https://agenielamp.com</p>
        <p className="last5">
          Unit-NO: 7-140/2,E 5, NAGENDRA NAGAR, HABSIGUDA, HYDERABAD- 500 007
        </p>
        {showExtras && (
          <>
            <div className="transaction-id">
              <p>Transaction ID: {Global.formData.transactionID}</p>
            </div>
            {Global.formData.uploadedImage && (
              <img
                src={URL.createObjectURL(Global.formData.uploadedImage)}
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

const Invoice_Genie_paypal = () => {
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
    </div>
  );
};

export default Invoice_Genie_paypal;
