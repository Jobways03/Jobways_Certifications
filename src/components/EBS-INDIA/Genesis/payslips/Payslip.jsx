import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./payslip.css";
import AuthContext from "../../../../context/AuthContext";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const Global = useContext(AuthContext);

  const total =
    parseFloat(Global.genesisPayslip.basic) +
    parseFloat(Global.genesisPayslip.hra) +
    parseFloat(Global.genesisPayslip.conveyance) +
    parseFloat(Global.genesisPayslip.medical) +
    parseFloat(Global.genesisPayslip.foodAllowance) +
    parseFloat(Global.genesisPayslip.specialAllowances);

  const totalshow = parseFloat(total).toFixed(2);

  const net = totalshow - parseFloat(Global.genesisPayslip.professionalTax);
  const netshow = parseFloat(net).toFixed(2);

  return (
    <div ref={ref}>
      <div className="pdf-invoice">
        <img src="./images/sek.jpg" alt="ewded" className="i3" />
        <p className="gen1">
          For {Global.genesisPayslip.month} {Global.genesisPayslip.year}
        </p>
        <div className="gen333"></div>
        <p className="gen2">{Global.genesisPayslip.name}</p>
        <p className="gen3" style={{ fontWeight: "bolder" }}>
          Employee Number
        </p>
        <p className="gen4">{Global.genesisPayslip.employeeId}</p>
        <p className="gen5" style={{ fontWeight: "bolder" }}>
          PAN Number
        </p>
        <p className="gen6">{Global.genesisPayslip.pan}</p>
        <p className="gen7" style={{ fontWeight: "bolder" }}>
          Function
        </p>
        <p className="gen8">{Global.genesisPayslip.function}</p>
        <p className="gen9" style={{ fontWeight: "bolder" }}>
          Designation
        </p>
        <p className="gen10">{Global.genesisPayslip.designation}</p>
        <p className="gen11" style={{ fontWeight: "bolder" }}>
          Location
        </p>
        <p className="gen12">{Global.genesisPayslip.location}</p>
        <p className="gen13" style={{ fontWeight: "bolder" }}>
          Bank Details
        </p>
        <p className="gen14">
          {" "}
          <span style={{ fontWeight: "bolder" }}>AC:</span>{" "}
          {Global.genesisPayslip.accountNumber}
        </p>
        <p className="gen15">
          {" "}
          <span style={{ fontWeight: "bolder" }}>IFSC:</span>{" "}
          {Global.genesisPayslip.ifscCode}
        </p>
        <p className="gen16">
          {" "}
          <span style={{ fontWeight: "bolder" }}>Bank:</span>{" "}
          {Global.genesisPayslip.bankName}
        </p>
        <p className="gen17" style={{ fontWeight: "bolder" }}>
          Date of Joining
        </p>
        <p className="gen18">{Global.genesisPayslip.dateOfJoining}</p>
        <p className="gen19" style={{ fontWeight: "bolder" }}>
          Gender
        </p>
        <p className="gen20">{Global.genesisPayslip.gender}</p>
        <p className="gen21">Attendance Details</p>
        <p className="gen22">Value</p>
        <p className="gen23">Working Days</p>
        <p className="gen24">{Global.genesisPayslip.workingDays}</p>
        <p className="gen25">LOP Days</p>
        <p className="gen26">{Global.genesisPayslip.lossOfPayDays}</p>
        <p className="gen27">Paid Days</p>
        <p className="gen28">{Global.genesisPayslip.paidDays}</p>
        <p className="gen29">Earnings</p>
        <p className="gen30">Basic</p>
        <p className="gen31">HRA</p>
        <p className="gen32">Conveyance</p>
        <p className="gen33">Food Allowance</p>
        <p className="gen34">Medical Allowance</p>
        <p className="gen35">Special Allowances</p>
        <p className="gen36">Total Earnings</p>
        <p className="gen37">Amount</p>
        <p className="gen38">{Global.genesisPayslip.basic}</p>
        <p className="gen39">{Global.genesisPayslip.hra}</p>
        <p className="gen40">{Global.genesisPayslip.conveyance}</p>
        <p className="gen41">{Global.genesisPayslip.foodAllowance}</p>
        <p className="gen42">{Global.genesisPayslip.medical}</p>
        <p className="gen43">{Global.genesisPayslip.specialAllowances}</p>
        <p className="gen44">{totalshow}</p>
        <p className="gen45">Deductions</p>
        <p className="gen46">Amount</p>
        <p className="gen47">Professional Tax</p>
        <p className="gen48">{Global.genesisPayslip.professionalTax}</p>
        <p className="gen49">Total Deductions</p>
        <p className="gen50">{Global.genesisPayslip.professionalTax}</p>
        <p className="gen51">Net Amount</p>
        <p className="gen52">{netshow}</p>
        <p className="gen53">Amount (in words):</p>
        <p className="gen54">
          INR{" "}
          <span style={{ fontWeight: "bolder" }}>
            {Global.genesisPayslip.amountInWords} Only
          </span>
        </p>
      </div>
    </div>
  );
});

const Genesispayslip = () => {
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

export default Genesispayslip;
