import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Payslip.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);

  const total =
    parseFloat(Global.geniePayslip.basic) +
    parseFloat(Global.geniePayslip.hra) +
    parseFloat(Global.geniePayslip.conveyance) +
    parseFloat(Global.geniePayslip.medical) +
    parseFloat(Global.geniePayslip.foodAllowance) +
    parseFloat(Global.geniePayslip.otherAllowances);
  
    const totalshow = parseFloat(total).toFixed(2)

    console.log(totalshow);

    const net = totalshow - parseFloat(Global.geniePayslip.professionalTax);
    const netshow = parseFloat(net).toFixed(2)

  return (
    <div ref={ref}>
      <div className="pdf-invoice">
        <img src="./images/aa.png" alt="ewded" className="i3" />
        <p className="genie1">
          For {Global.geniePayslip.month} {Global.geniePayslip.year}
        </p>
        <p className="genie2">{Global.geniePayslip.name}</p>
        <p className="genie3" style={{ fontWeight: "bolder" }}>
          Employee Number
        </p>
        <p className="genie4">: {Global.geniePayslip.employeeId}</p>
        <p className="genie5" style={{ fontWeight: "bolder" }}>
          Income Tax Number (PAN){" "}
        </p>
        <p className="genie6">: {Global.geniePayslip.pan}</p>
        <p className="genie7" style={{ fontWeight: "bolder" }}>
          Function
        </p>
        <p className="genie8">: {Global.geniePayslip.department}</p>
        <p className="genie9" style={{ fontWeight: "bolder" }}>
          Designation
        </p>
        <p className="genie10">: {Global.geniePayslip.designation}</p>
        <p className="genie11" style={{ fontWeight: "bolder" }}>
          Location
        </p>
        <p className="genie12">: {Global.geniePayslip.location}</p>
        <p className="genie13" style={{ fontWeight: "bolder" }}>
          Bank Details
        </p>
        <p className="genie14">: {Global.geniePayslip.bankName}</p>
        <p className="genie15">
          : Acc No. : {Global.geniePayslip.accountNumber}
        </p>
        <p className="genie16">: IFSC : {Global.geniePayslip.ifscCode}</p>
        <p className="genie17" style={{ fontWeight: "bolder" }}>
          Date of Joining
        </p>
        <p className="genie18">: {Global.geniePayslip.dateOfJoining}</p>
        <p className="genie19" style={{ fontWeight: "bolder" }}>
          Gender
        </p>
        <p className="genie20">: {Global.geniePayslip.gender}</p>
        <p className="genie21">Attendance Details</p>
        <p className="genie22">Value</p>
        <p className="genie23">Days in Month</p>
        <p className="genie24">{Global.geniePayslip.workingDays}</p>
        <p className="genie25">LOP Days</p>
        <p className="genie26">{Global.geniePayslip.lossOfPayDays}</p>
        <p className="genie27">Paid Days</p>
        <p className="genie28">{Global.geniePayslip.paidDays}</p>
        <p className="genie29">Earnings</p>
        <p className="genie30">Basic</p>
        <p className="genie31">HRA</p>
        <p className="genie32">Conveyance</p>
        <p className="genie33">Medical </p>
        <p className="genie34">Food Allowance</p>
        <p className="genie35">Other Allowance</p>
        <p className="genie36">Total Earnings</p>
        <p className="genie37">Amount</p>
        <p className="genie38">{Global.geniePayslip.basic}</p>
        <p className="genie39">{Global.geniePayslip.hra}</p>
        <p className="genie40">{Global.geniePayslip.conveyance}</p>
        <p className="genie41">{Global.geniePayslip.medical}</p>
        <p className="genie42">{Global.geniePayslip.foodAllowance}</p>
        <p className="genie43">{Global.geniePayslip.otherAllowances}</p>
        <p className="genie44">{totalshow}</p>
        <p className="genie45">Deductions</p>
        <p className="genie46">Amount</p>
        <p className="genie47">Professional Tax</p>
        <p className="genie48">{Global.geniePayslip.professionalTax}</p>
        <p className="genie49">Total Deductions</p>
        <p className="genie50">{Global.geniePayslip.professionalTax}</p>
        <p className="genie51">Net Amount</p>
        <p className="genie52">{netshow}</p>
        <p className="genie53">Amount (in words):</p>
        <p className="genie54">
          INR{" "}
          <span style={{ fontWeight: "bolder" }}>
            {Global.geniePayslip.amountInWords} Rupees Only
          </span>
        </p>
        <div className="genie55"></div>
        <p className="genie56">GENIE LAMP PVT LTD</p>
        <p className="genie57">CIN: U74999TG2017PTC119605</p>
        <p className="genie58">Hyderabad-500007</p>
        <p className="genie59">Pay Slip</p>
      </div>
    </div>
  );
});

const Genielamppayslip = () => {
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

export default Genielamppayslip;
