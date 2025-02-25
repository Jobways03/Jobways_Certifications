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
        <img src="./images/geshu.png" alt="ewded" className="i3" />
        <p className="geshur0">Pay Slip</p>
        <p className="geshur1">
          For {Global.geshurPayslip.month} {Global.geshurPayslip.year}
        </p>
        <p className="geshur2">{Global.geshurPayslip.name}</p>
        <p className="geshur3" style={{ fontWeight: "bolder" }}>
          Employee Number
        </p>
        <p className="geshur4">{Global.geshurPayslip.employeeId}</p>
        <p className="geshur5" style={{ fontWeight: "bolder" }}>
          PAN Number
        </p>
        <p className="geshur6">{Global.geshurPayslip.pan}</p>
        <p className="geshur7" style={{ fontWeight: "bolder" }}>
          Function
        </p>
        <p className="geshur8">{Global.geshurPayslip.function}</p>
        <p className="geshur9" style={{ fontWeight: "bolder" }}>
          Designation
        </p>
        <p className="geshur10">{Global.geshurPayslip.designation}</p>
        <p className="geshur11" style={{ fontWeight: "bolder" }}>
          Location
        </p>
        <p className="geshur12">{Global.geshurPayslip.location}</p>
        <p className="geshur13" style={{ fontWeight: "bolder" }}>
          Bank Details
        </p>
        <p className="geshur14">
          <span style={{ fontWeight: "bolder" }}>AC:</span>{" "}
          {Global.geshurPayslip.accountNumber}
        </p>
        <p className="geshur15">
          <span style={{ fontWeight: "bolder" }}>IFSC:</span>{" "}
          {Global.geshurPayslip.ifscCode}
        </p>
        <p className="geshur16">
          <span style={{ fontWeight: "bolder" }}>Bank:</span>{" "}
          {Global.geshurPayslip.bankName}
        </p>
        <p className="geshur17" style={{ fontWeight: "bolder" }}>
          Date of Joining
        </p>
        <p className="geshur18">{Global.geshurPayslip.dateOfJoining}</p>
        <p className="geshur19" style={{ fontWeight: "bolder" }}>
          Gender
        </p>
        <p className="geshur20">{Global.geshurPayslip.gender}</p>
        <p className="geshur21">Attendance Details</p>
        <p className="geshur22">Value</p>
        <p className="geshur23">Working Days</p>
        <p className="geshur24">{Global.geshurPayslip.workingDays}</p>
        <p className="geshur25">LOP Days</p>
        <p className="geshur26">{Global.geshurPayslip.lossOfPayDays}</p>
        <p className="geshur27">Paid Days</p>
        <p className="geshur28">{Global.geshurPayslip.paidDays}</p>
        <p className="geshur29">Earnings</p>
        <p className="geshur30">Basic</p>
        <p className="geshur31">HRA</p>
        <p className="geshur32">Conveyance</p>
        <p className="geshur33">Food Allowance</p>
        <p className="geshur34">Medical Allowance</p>
        <p className="geshur35">Special Allowances</p>
        <p className="geshur36">Total Earnings</p>
        <p className="geshur37">Amount</p>
        <p className="geshur38">{Global.geshurPayslip.basic}</p>
        <p className="geshur39">{Global.geshurPayslip.hra}</p>
        <p className="geshur40">{Global.geshurPayslip.conveyance}</p>
        <p className="geshur41">{Global.geshurPayslip.foodAllowance}</p>
        <p className="geshur42">{Global.geshurPayslip.medical}</p>
        <p className="geshur43">{Global.geshurPayslip.specialAllowances}</p>
        <p className="geshur44">{totalshow}</p>
        <p className="geshur45">Deductions</p>
        <p className="geshur46">Amount</p>
        <p className="geshur47">Professional Tax</p>
        <p className="geshur48">{Global.geshurPayslip.professionalTax}</p>
        <p className="geshur49" style={{ fontWeight: "bolder" }}>
          Total Deductions
        </p>
        <p className="geshur50">{Global.geshurPayslip.professionalTax}</p>
        <p className="geshur51">Net Amount</p>
        <p className="geshur52">{netshow}</p>
        <p className="geshur53">Amount (in words):</p>
        <p className="geshur54">
          INR{" "}
          <span style={{ fontWeight: "bolder" }}>
            {" "}
            {Global.geshurPayslip.amountInWords} Only
          </span>
        </p>
        <div className="geshur55"></div>
        <div className="geshur56"></div>
        <div className="geshur57"></div>
        <div className="geshur58"></div>
        <div className="geshur59"></div>
        <div className="geshur60"></div>
        <div className="geshur61"></div>
        <div className="geshur62"></div>
        <div className="geshur63"></div>
        <div className="geshur64"></div>
        <div className="geshur65"></div>
        <div className="geshur66"></div>
        <div className="geshur67"></div>
        <div className="geshur68"></div>
        <div className="geshur69"></div>
        <div className="geshur70"></div>
      </div>
    </div>
  );
});

const Geshurpayslip = () => {
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

export default Geshurpayslip;
