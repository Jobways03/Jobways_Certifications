import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./jobpay.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);
  const total =
    parseFloat(Global.jobwaysPayslip.basic) +
    parseFloat(Global.jobwaysPayslip.hra) +
    parseFloat(Global.jobwaysPayslip.conveyance) +
    parseFloat(Global.jobwaysPayslip.medical) +
    parseFloat(Global.jobwaysPayslip.foodAllowance) +
    parseFloat(Global.jobwaysPayslip.incentive) +
    parseFloat(Global.jobwaysPayslip.otherAllowances);

  const totalearning = parseFloat(total).toFixed(2);

  let net = totalearning - parseFloat(Global.jobwaysPayslip.professionalTax);
  let netamt = parseFloat(net).toFixed(2);
  return (
    <div ref={ref}>
      <div className="pdf-invoice">
        <img src="./images/jobpay.png" alt="ewded" className="i3" />
        <p className="job21">ATTENDANCE DETAILS</p>
        <p className="job22">VALUE</p>
        <p className="job23">WORKING DAYS</p>
        <p className="job24">{Global.jobwaysPayslip.workingDays}</p>
        <p className="job25">LOSS OF PAY DAYS</p>
        <p className="job26">{Global.jobwaysPayslip.lossOfPayDays}</p>
        <p className="job27">PAID DAYS</p>
        <p className="job28">{Global.jobwaysPayslip.paidDays}</p>
        <p className="job29">EARNINGS</p>
        <p className="job30">BASIC</p>
        <p className="job31">HRA</p>
        <p className="job32">CONVEYANCE</p>
        <p className="job33">MEDICAL</p>
        <p className="job34">FOOD ALLOWANCE</p>
        <p className="job35">INCENTIVE</p>
        <p className="job36">OTHER ALLOWANCE</p>
        <p className="job36a">TOTAL EARNINGS</p>
        <p className="job37">AMOUNT</p>
        <p className="job38">{Global.jobwaysPayslip.basic}</p>
        <p className="job39">{Global.jobwaysPayslip.hra}</p>
        <p className="job40">{Global.jobwaysPayslip.conveyance}</p>
        <p className="job41">{Global.jobwaysPayslip.medical}</p>
        <p className="job42">{Global.jobwaysPayslip.foodAllowance}</p>
        <p className="job43">{Global.jobwaysPayslip.incentive}</p>
        <p className="job44">{Global.jobwaysPayslip.otherAllowances}</p>
        <p className="job44a">{totalearning}</p>
        <p className="job45">DEDUCTIONS</p>
        <p className="job46">AMOUNT</p>
        <p className="job47">PROFESSIONAL TAX</p>
        <p className="job48">{Global.jobwaysPayslip.professionalTax}</p>
        <p className="job49">TOTAL DEDUCTIONS</p>
        <p className="job50">{Global.jobwaysPayslip.professionalTax}</p>
        <p className="job51">NET AMOUNT</p>
        <p className="job52">{netamt}</p>
        <p className="job53">AMOUNT (IN WORDS):</p>
        <p className="job54">INR {Global.jobwaysPayslip.amountInWords} only</p>
        <p className="job1">EMPLOYEE ID</p>
        <p className="job2">DEPARTMENT</p>
        <p className="job3">DESIGNATION</p>
        <p className="job4">LOCATION</p>
        <p className="job5">DATE OF JOINING</p>
        <p className="job6">GENDER</p>
        <p className="job7">BANK NAME</p>
        <p className="job8">ACCOUNT NUMBER</p>
        <p className="job9">IFSC CODE</p>
        <p className="job10">PAN</p>
        <p className="job11">: {Global.jobwaysPayslip.employeeId}</p>
        <p className="job12">: {Global.jobwaysPayslip.department}</p>
        <p className="job13">: {Global.jobwaysPayslip.designation}</p>
        <p className="job14">: {Global.jobwaysPayslip.location}</p>
        <p className="job15">: {Global.jobwaysPayslip.dateOfJoining}</p>
        <p className="job16">: {Global.jobwaysPayslip.gender}</p>
        <p className="job17">: {Global.jobwaysPayslip.bankName}</p>
        <p className="job18">: {Global.jobwaysPayslip.accountNumber}</p>
        <p className="job19">: {Global.jobwaysPayslip.ifscCode}</p>
        <p className="job20">: {Global.jobwaysPayslip.pan}</p>
        <p className="job21j">LLPIN: ACD-2095</p>
        <p className="job22j">Hyderabad-500007</p>
        <p className="job23j">Pay Slip</p>
        <p className="job24j">
          For {Global.jobwaysPayslip.month} {Global.jobwaysPayslip.year}
        </p>
        <p className="job25j">{Global.jobwaysPayslip.name}</p>
        <p className="job26j">COMPUTER GENERATED NO SIGNATURE IS REQUIRED</p>
      </div>
    </div>
  );
});

const Jobwayspayslip = () => {
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

export default Jobwayspayslip;
