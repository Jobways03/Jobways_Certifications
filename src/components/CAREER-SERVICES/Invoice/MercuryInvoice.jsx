import React, { useContext, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./Invoice.css";
import AuthContext from "../../../context/AuthContext";

const ComponentToPrint = React.forwardRef(({showExtras}, ref) => {
  const Global = useContext(AuthContext);

  const tota = parseFloat(Global.formData.subTotal);
  const total = parseFloat(tota).toFixed(2);
  return (
    <div ref={ref}>
      <div className="pdf-invoice">
        <img src="./images/jj.png" alt="...Loading" className="i3" />
        <p className="eadd1">8 THE GREEN STE R</p>
        <p className="eadd2">Dover, Delaware - 19901</p>
        <p className="eadd3">Phone: +1 240 745 6327</p>
        <p className="eadd4">Email: Hr@Jobways.com</p>
        <p className="eadd5">Website: www.jobways.com</p>
        <p className="bill">BILL TO</p>
        <div className="lie"></div>
        <p className="namei">
          <span style={{ fontWeight: 900 }}>Name: </span>
          {Global.formData.name}
        </p>
        <p className="maili">
          <span style={{ fontWeight: 900 }}>Email: </span>
          {Global.formData.email}
        </p>
        <p className="phonei">
          <span style={{ fontWeight: 900 }}>Phone: </span>
          {Global.formData.phone}
        </p>
        <p className="addi">
          <span style={{ fontWeight: 900 }}>Address: </span>
          {Global.formData.address}
        </p>
        <p className="ii">INVOICE</p>
        <p className="datei">DATE</p>
        <p className="datej"> {Global.formData.date}</p>
        <p className="ini">INVOICE&nbsp;#</p>
        <p className="inj">JW-{Global.formData.invoiceNumber}</p>
        <p className="servicei">Service ID</p>
        <p className="servicej"> {Global.formData.invoiceNumber}</p>
        <p className="due">DUE DATE</p>
        <p className="duej">~</p>
        <p className="des">DESCRIPTION</p>
        <div className="lie2"></div>
        <p className="houri">HOURS</p>
        <p className="ratei">RATE</p>
        <p className="amti">AMOUNT</p>
        <p className="learn">{Global.formData.description}</p>
        <p className="hoursj">NA</p>
        <div className="middev1">{Global.formData.rate}.00</div>
        <div className="middev">{Global.formData.amount}.00 USD</div>
        {Global.formData.paymentType === "advance" ? (
          <p className="bold1">Advance Paid</p>
        ) : (
          <p className="bold2">Deduction of Advance Paid</p>
        )}
        {Global.formData.paymentType === "advance" ? (
          <div className="bold3">{Global.formData.advanceAmount}.00</div>
        ) : (
          <div className="bold4">{Global.formData.advanceAmount}.00</div>
        )}
        {Global.formData.paymentType === "advance" ? (
          <div className="bold5">{Global.formData.advanceAmount}.00 USD</div>
        ) : (
          <div className="bold6">{Global.formData.advanceAmount}.00 USD</div>
        )}
        {Global.formData.paymentType === "advance" ? (
          <p className="bold7">Due</p>
        ) : (
          <p className="bold8">Due Paid</p>
        )}
        {Global.formData.paymentType === "advance" ? (
          <div className="bold9">{Global.formData.dueAmount}.00</div>
        ) : (
          <div className="bold10">{Global.formData.dueAmount}.00</div>
        )}
        {Global.formData.paymentType === "advance" ? (
          <div className="bold11">{Global.formData.dueAmount}.00 USD</div>
        ) : (
          <div className="bold12">{Global.formData.dueAmount}.00 USD</div>
        )}

        <p className="trim">TOTAL</p>

        <div className="sta">{Global.formData.subTotal}.00 USD</div>
        <div className="triam">{total} USD</div>

        <p className="oc">OTHER COMMENTS</p>
        <p className="oc1">1. Total payment due in 0 Calendar days.</p>
        <p className="oc2">
          2. Please include the invoice number on your check or
        </p>
        <p className="oc3">Payments Description.</p>
        <p className="mac3">Make all checks payable to</p>
        <p className="mac4">Jobways LLC</p>
        <p className="tyf">Thank You for Your Business!</p>
        <p className="last1">JOBWAYS LLC</p>
        <p className="last2">+1 240 558 8717</p>
        <p className="last3">accounts@jobways.com</p>
        <p className="last4">www.jobways.com</p>
        <p className="last5">8 The Green, STE R DOVER, DE 19901, USA</p>
        <div className="empty2"></div>
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

        {/* <div className="empty3"></div>
        <div className="empty4"></div> */}
      </div>
    </div>
  );
});

const MercuryInvoice = () => {
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




export default MercuryInvoice;
