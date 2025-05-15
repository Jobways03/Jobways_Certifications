import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./payslip.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);

  const total =
    parseFloat(Global.geshurPayslip.basic) +
    parseFloat(Global.geshurPayslip.hra) +
    parseFloat(Global.geshurPayslip.conveyance) +
    parseFloat(Global.geshurPayslip.medical) +
    parseFloat(Global.geshurPayslip.foodAllowance) +
    parseFloat(Global.geshurPayslip.specialAllowances);

  const totalshow = parseFloat(total).toFixed(2);

  const net = totalshow - parseFloat(Global.geshurPayslip.professionalTax);
  const netshow = parseFloat(net).toFixed(2);

  return (
    <div ref={ref}>
      <div className="pdf-invoice">
        <img src="./images/SM_Letterhead.png" alt="ewded" className="i3" />
        <p className="sports0">Pay Slip</p>
        <p className="sports1">
          For {Global.geshurPayslip.month} {Global.geshurPayslip.year}
        </p>
        <p className="sports2">{Global.geshurPayslip.name}</p>
        <p className="sports3">Employee Number</p>
        <p className="sports4">{Global.geshurPayslip.employeeId}</p>
        <p className="sports5">PAN Number</p>
        <p className="sports6">{Global.geshurPayslip.pan}</p>
        <p className="sports7">Function</p>
        <p className="sports8">{Global.geshurPayslip.function}</p>
        <p className="sports9">Designation</p>
        <p className="sports10">{Global.geshurPayslip.designation}</p>
        <p className="sports11">Location</p>
        <p className="sports12">{Global.geshurPayslip.location}</p>
        <p className="sports13">Bank Details</p>
        <p className="sports14">
          {" "}
          <span style={{ fontWeight: "bolder" }}>AC:</span>{" "}
          {Global.geshurPayslip.accountNumber}
        </p>
        <p className="sports15">
          {" "}
          <span style={{ fontWeight: "bolder" }}>IFSC:</span>{" "}
          {Global.geshurPayslip.ifscCode}
        </p>
        <p className="sports16">
          {" "}
          <span style={{ fontWeight: "bolder" }}>Bank:</span>{" "}
          {Global.geshurPayslip.bankName}
        </p>
        <p className="sports17">Date of Joining</p>
        <p className="sports18">{Global.geshurPayslip.dateOfJoining}</p>
        <p className="sports19">Gender</p>
        <p className="sports20">{Global.geshurPayslip.gender}</p>
        <p className="sports21">Attendance Details</p>
        <p className="sports22">Value</p>
        <p className="sports23">Working Days</p>
        <p className="sports24">{Global.geshurPayslip.workingDays}</p>
        <p className="sports25">LOP Days</p>
        <p className="sports26">{Global.geshurPayslip.lossOfPayDays}</p>
        <p className="sports27">Paid Days</p>
        <p className="sports28">{Global.geshurPayslip.paidDays}</p>
        <p className="sports29">Earnings</p>
        <p className="sports30">Basic</p>
        <p className="sports31">HRA</p>
        <p className="sports32">Conveyance</p>
        <p className="sports33">Food Allowance</p>
        <p className="sports34">Medical Allowance</p>
        <p className="sports35">Special Allowances</p>
        <p className="sports36">Total Earnings</p>
        <p className="sports37">Amount</p>
        <p className="sports38">{Global.geshurPayslip.basic}</p>
        <p className="sports39">{Global.geshurPayslip.hra}</p>
        <p className="sports40">{Global.geshurPayslip.conveyance}</p>
        <p className="sports41">{Global.geshurPayslip.foodAllowance}</p>
        <p className="sports42">{Global.geshurPayslip.medical}</p>
        <p className="sports43">{Global.geshurPayslip.specialAllowances}</p>
        <p className="sports44">{totalshow}</p>
        <p className="sports45">Deductions</p>
        <p className="sports46">Amount</p>
        <p className="sports47">Professional Tax</p>
        <p className="sports48">{Global.geshurPayslip.professionalTax}</p>
        <p className="sports49">Total Deductions</p>
        <p className="sports50">{Global.geshurPayslip.professionalTax}</p>
        <p className="sports51">Net Amount</p>
        <p className="sports52">{netshow}</p>
        <p className="sports53">Amount (in words):</p>
        <p className="sports54">
          INR{" "}
          <span style={{ fontWeight: "bolder" }}>
            {Global.geshurPayslip.amountInWords} Only
          </span>
        </p>
        <div className="sports55"></div>
        <div className="sports56"></div>
        <div className="sports57"></div>
        <div className="sports58"></div>
        <div className="sports59"></div>
        <div className="sports60"></div>
        <div className="sports61"></div>
        <div className="sports62"></div>
        <div className="sports63"></div>
        <div className="sports64"></div>
        <div className="sports65"></div>
        <div className="sports66"></div>
        <div className="sports67"></div>
        <div className="sports68"></div>
        <div className="sports69"></div>
        <div className="sports70"></div>
        <div className="sports71"></div>
        <div className="sports72"></div>
        <div className="sports73"></div>
        <div className="sports74"></div>
        <div className="sports75"></div>
        <div className="sports76"></div>
        <div className="sports77"></div>
        <div className="sports78"></div>
        <div className="sports79"></div>
        <div className="sports80"></div>
        <div className="sports81"></div>
        <div className="sports82"></div>
        <div className="sports83"></div>
        <div className="sports84"></div>
        <div className="sports85"></div>
        <div className="sports86"></div>
        <div className="sports87"></div>
        <div className="sports88"></div>
        <div className="sports89"></div>
        <div className="sports90"></div>
        <div className="sports91"></div>
      </div>
    </div>
  );
});

const Sportspayslip = () => {
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

export default Sportspayslip;
