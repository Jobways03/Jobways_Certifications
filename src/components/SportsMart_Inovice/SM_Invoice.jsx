import React, { useContext, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./SM_Invoice.css";
import AuthContext from "../../context/AuthContext";

const ComponentToPrint = React.forwardRef(({ showExtras }, ref) => {
  const Global = useContext(AuthContext);
console.log(Global.SM_FormData.paymentType);

  return (
    <div ref={ref}>
      <div className="SM_pdf-invoice">
        <img src="./images/SM_Invoice.png" alt="...Loading" className="SM_i3" />
        <p className="SM_eadd1">Yamjal, Hyderabad</p>
        <p className="SM_eadd2">Telangana</p>
        <p className="SM_eadd3">Phone: +91 9059445503</p>
        <p className="SM_eadd4">Email: shopnow@sportsmart.com</p>
        <p className="SM_eadd5">Website: www.sportsmart.com</p>
        <p className="SM_bill">BILL TO</p>
        <div className="SM_lie"></div>
        <p className="SM_namei">
          <span style={{ fontWeight: 900 }}>Name: </span>
          {Global.SM_FormData.name}
        </p>
        <p className="SM_maili">
          <span style={{ fontWeight: 900 }}>Email: </span>
          {Global.SM_FormData.email}
        </p>
        <p className="SM_phonei">
          <span style={{ fontWeight: 900 }}>Phone: </span>
          {Global.SM_FormData.phone}
        </p>
        <p className="SM_addi">
          <span style={{ fontWeight: 900 }}>Address: </span>
          {Global.SM_FormData.address}
        </p>
        {/* <p className="SM_ii">INVOICE</p> */}
        <p className="SM_datei">DATE</p>
        <p className="SM_datej"> {Global.SM_FormData.date}</p>
        <p className="SM_ini">INVOICE&nbsp;#</p>
        <p className="SM_inj">SM-{Global.SM_FormData.invoiceNumber}</p>
        <p className="SM_servicei">Service ID</p>
        <p className="SM_servicej"> {Global.SM_FormData.invoiceNumber}</p>
        <p className="SM_due">DUE DATE</p>
        <p className="SM_duej">~</p>
        <p className="SM_des">DESCRIPTION</p>
        <div className="SM_lie2"></div>
        <p className="SM_houri">Quantity</p>
        <p className="SM_ratei">Price</p>
        <p className="SM_amti">AMOUNT</p>

        <p className="SM_learn p1">{Global.SM_FormData.Description1}</p>
        <p className="SM_hoursj p1">{Global.SM_FormData.Quantity1}</p>
        <p className="SM_middev1 p1">{Global.SM_FormData.Price1}</p>
        {Global.SM_FormData.amount1 ? (
          <p className="SM_middev p1">{Global.SM_FormData.amount1} INR</p>
        ) : (
          ""
        )}

        <p className="SM_learn p2">{Global.SM_FormData.Description2}</p>
        <p className="SM_hoursj p2">{Global.SM_FormData.Quantity2}</p>
        <p className="SM_middev1 p2">{Global.SM_FormData.Price2}</p>

        {Global.SM_FormData.amount2 ? (
          <p className="SM_middev p2">{Global.SM_FormData.amount2} INR</p>
        ) : (
          ""
        )}

        <p className="SM_learn p3">{Global.SM_FormData.Description3}</p>
        <p className="SM_hoursj p3">{Global.SM_FormData.Quantity3}</p>
        <p className="SM_middev1 p3">{Global.SM_FormData.Price3}</p>
        {Global.SM_FormData.amount3 ? (
          <p className="SM_middev p3">{Global.SM_FormData.amount3} INR</p>
        ) : (
          ""
        )}
        <p className="SM_learn p4">{Global.SM_FormData.Description4}</p>
        <p className="SM_hoursj p4">{Global.SM_FormData.Quantity4}</p>
        <p className="SM_middev1 p4">{Global.SM_FormData.Price4}</p>
        {Global.SM_FormData.amount4 ? (
          <p className="SM_middev p4">{Global.SM_FormData.amount4} INR</p>
        ) : (
          ""
        )}

        <p className="SM_learn p5">{Global.SM_FormData.Description5}</p>
        <p className="SM_hoursj p5">{Global.SM_FormData.Quantity5}</p>
        <p className="SM_middev1 p5">{Global.SM_FormData.Price5}</p>
        {Global.SM_FormData.amount5 ? (
          <p className="SM_middev p5">{Global.SM_FormData.amount5} INR</p>
        ) : (
          ""
        )}

        {Global.SM_FormData.paymentType === "advance" ? (
          <p className="bold1">Advance Paid</p>
        ) : (
          <p className="bold2">Deduction of Advance Paid</p>
        )}
        {Global.SM_FormData.paymentType === "advance" ? (
          <div className="SM_bold3">{Global.SM_FormData.advanceAmount}</div>
        ) : (
          <div className="SM_bold4">{Global.SM_FormData.advanceAmount}</div>
        )}
        {Global.SM_FormData.paymentType === "advance" ? (
          <div className="SM_bold5">{Global.SM_FormData.advanceAmount} INR</div>
        ) : (
          <div className="SM_bold6">{Global.SM_FormData.advanceAmount} INR</div>
        )}
        {Global.SM_FormData.paymentType === "advance" ? (
          <p className="bold7">Due</p>
        ) : (
          <p className="bold8">Due Paid</p>
        )}
        {Global.SM_FormData.paymentType === "advance" ? (
          <div className="SM_bold9">{Global.SM_FormData.dueAmount}</div>
        ) : (
          <div className="SM_bold10">{Global.SM_FormData.dueAmount}</div>
        )}
        {Global.SM_FormData.paymentType === "advance" ? (
          <div className="SM_bold11">{Global.SM_FormData.dueAmount} INR</div>
        ) : (
          <div className="SM_bold12">{Global.SM_FormData.dueAmount} INR</div>
        )}
        <p className="SM_sti">SUBTOTAL</p>
        <p className="SM_tri">{Global.SM_FormData.gsthead}</p>
        <p className="SM_taxi">TOTAL</p>

        <div className="SM_sta">{Global.SM_FormData.subTotal} INR</div>
        {Global.SM_FormData.gstamount ?  <div className="SM_tria">{Global.SM_FormData.gstamount} INR</div> : ""}
        {/* <div className="SM_tria">{Global.SM_FormData.gstamount} INR</div> */}
        <div className="SM_taxia">{Global.SM_FormData.Total} INR</div>

        <div className="SM_toti"></div>
        <p className="SM_oc">OTHER COMMENTS</p>
        <p className="SM_oc1">1. Total payment due in 0 Calendar days.</p>
        <p className="SM_oc2">
          2. Please include the invoice number on your check or
        </p>
        <p className="SM_oc3">Payments Description.</p>
        <p className="SM_mac">Make all checks payable to</p>
        <p className="SM_mac1">Protathlitis Sportsmart LLP</p>
        <p className="SM_tyf">Thank You for Your Business!</p>
        <p className="SM_last1">: {Global.SM_FormData.gstin}</p>
        <p className="SM_last2">: {Global.SM_FormData.Store_Phone}</p>
        <p className="SM_last3">: {Global.SM_FormData.Store_Email}</p>
        <p className="SM_last4">: {Global.SM_FormData.Store_Address}</p>
      </div>
    </div>
  );
});

const SM_Invoice = () => {
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
      {/* <button onClick={handlePrintWithExtras} className="print-button">
        Toggle Transaction ID and Image
      </button> */}
    </div>
  );
};

export default SM_Invoice;
