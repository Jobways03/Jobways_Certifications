import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

// ✅ Dummy data (MM/DD/YYYY format for all dates)
const employees = [
  {
    name: "Sudheer Panyam",
    employeeId: "JW20170918001",
    department: "Executive Management",
    designation: "Chief Executive Officer",
    location: "Hyderbad",
    dateOfJoining: "09/18/2017",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100663001910",
    ifscCode: "HDFC0001990",
    pan: "BQRPP6474R",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Gopi Sai Ram Kathroju",
    employeeId: "JW20230901001",
    department: "Executive Management",
    designation: "Managing Partner",
    location: "Hyderbad",
    dateOfJoining: "01/09/2023",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100589069502",
    ifscCode: "HDFC0001990",
    pan: "EXCPR4042G",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Bharath Gurrala",
    employeeId: "JW20230622001",
    department: "Finance and Accounts",
    designation: "Accounts Manager",
    location: "Hyderbad",
    dateOfJoining: "06/22/2023",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100728573906",
    ifscCode: "HDFC0009383",
    pan: "FWRPB9823E",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Ganeshwari Laayyee",
    employeeId: "JW20251201001",
    department: "Human Resource",
    designation: "Human Resource Analyst",
    location: "Hyderbad",
    dateOfJoining: "12/01/2025",
    gender: "FEMALE",
    bankName: "HDFC",
    accountNumber: "50100467023341",
    ifscCode: "HDFC0002019",
    pan: "BEAPL1814A",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Vinay Sirimilla",
    employeeId: "JW20240930003",
    department: "Information Technology Security and Administration",
    designation: "Network Administrator",
    location: "Hyderbad",
    dateOfJoining: "09/30/2024",
    gender: "MALE",
    bankName: "Bank of Baroda",
    accountNumber: "40310100012022",
    ifscCode: "BARB0NACHAR",
    pan: "NA",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Ashwini Chintapally",
    employeeId: "JW20250701001",
    department: "Corporate Project Governance and Delivery",
    designation: "General Supervisor",
    location: "Hyderbad",
    dateOfJoining: "01/13/2020",
    gender: "FEMALE",
    bankName: "HDFC",
    accountNumber: "50100589069515",
    ifscCode: "HDFC0001990",
    pan: "BVWPC9163J",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Shiva Mogilla",
    employeeId: "JW202202314001",
    department: "Digital Marketing",
    designation: "Content Manager",
    location: "Hyderbad",
    dateOfJoining: "12/01/2023",
    gender: "MALE",
    bankName: "NA",
    accountNumber: "NA",
    ifscCode: "NA",
    pan: "KFIPM4351F",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Imran Mohammed",
    employeeId: "JW20221031001",
    department: "Career Enablement Management",
    designation: "Service Leads Executive",
    location: "Hyderabad",
    dateOfJoining: "10/31/2022",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100590589281",
    ifscCode: "HDFC0001043",
    pan: "ANMPI3392L",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Prashanth Buthapilli",
    employeeId: "JW20240418001",
    department: "Resume Marketing Management",
    designation: "Resume Marketing Executive",
    location: "Hyderbad",
    dateOfJoining: "03/31/2025",
    gender: "MALE",
    bankName: "Jio Bank",
    accountNumber: "(00)1621711131317",
    ifscCode: "JIOP0000001",
    pan: "ISJPP9437B",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Ismail Shaik",
    employeeId: "JW20230622002",
    department: "Resume Marketing Management",
    designation: "Resume Marketing Executive",
    location: "Hyderbad",
    dateOfJoining: "06/22/2023",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100675134807",
    ifscCode: "HDFC0000811",
    pan: "SALPS1024R",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Kishan Kannaiah Raj Bhar",
    employeeId: "JW20220316001",
    department: "Resume Marketing Management",
    designation: "Resume Marketing Executive",
    location: "Hyderbad",
    dateOfJoining: "03/16/2022",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100589069745",
    ifscCode: "HDFC0001990",
    pan: "ELYPR0301C",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Afreen NA",
    employeeId: "JW20250616001",
    department: "Interview Supports",
    designation: "Mock Interviewer",
    location: "Hyderbad",
    dateOfJoining: "06/16/2025",
    gender: "FEMALE",
    bankName: "Kotak Mahindra",
    accountNumber: "4950900083",
    ifscCode: "KKBK0007450",
    pan: "EHUPA4907D",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Shiva Ganesh Tadaka",
    employeeId: "GL20220418001",
    department: "Career Support Management",
    designation: "Software Engineer",
    location: "Hyderbad",
    dateOfJoining: "04/18/2022",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100589069452",
    ifscCode: "HDFC0001990",
    pan: "BVSPT8732N",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Naureen Mohammed",
    employeeId: "NA",
    department: "Career Support Management",
    designation: "Interview Coordinator",
    location: "Hyderbad",
    dateOfJoining: "12/03/2024",
    gender: "FEMALE",
    bankName: "Equitas small finance",
    accountNumber: "10005466650",
    ifscCode: "EFSB0004002",
    pan: "CNPPT9455A",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Bhavani Laayyee",
    employeeId: "GL20240930001",
    department: "Interview Support",
    designation: "Mock Interviewer",
    location: "Hyderbad",
    dateOfJoining: "09/30/2024",
    gender: "FEMALE",
    bankName: "HDFC",
    accountNumber: "50100764940703",
    ifscCode: "HDFC0000521",
    pan: "BEAPL1788P",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Ganeshwari Laayyee",
    employeeId: "GL20240417001",
    department: "Interview Support",
    designation: "Interview Supporter",
    location: "Hyderbad",
    dateOfJoining: "04/17/2024",
    gender: "FEMALE",
    bankName: "HDFC",
    accountNumber: "50100467023341",
    ifscCode: "HDFC0002019",
    pan: "BEAPL1814A",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Sadiya Fatima",
    employeeId: "GL20260119001",
    department: "Interview Support",
    designation: "Mock Interviewer",
    location: "Hyderbad",
    dateOfJoining: "09/22/2025",
    gender: "FEMALE",
    bankName: "Jio Payments",
    accountNumber: "(00)3121711966873",
    ifscCode: "JIOP0000001",
    pan: "AGUPF2355B",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Joice Blessy Devarapalli",
    employeeId: "GL20250616001",
    department: "Interview Support",
    designation: "Interview Supporter",
    location: "Hyderbad",
    dateOfJoining: "05/05/2025",
    gender: "FEMALE",
    bankName: "Union bank",
    accountNumber: "129012010004690",
    ifscCode: "UBIN0812901",
    pan: "IHWPB3877B",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Ateeka Anjum",
    employeeId: "GL20250714001",
    department: "Interview Support",
    designation: "Mock Interviewer",
    location: "Hyderbad",
    dateOfJoining: "07/14/2025",
    gender: "FEMALE",
    bankName: "Union bank",
    accountNumber: "120512010001747",
    ifscCode: "UBIN0812056",
    pan: "DTYPA0053H",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Raju Madagoni",
    employeeId: "GL20250423002",
    department: "Interview Support",
    designation: "Interview Supporter",
    location: "Hyderbad",
    dateOfJoining: "04/23/2025",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100441600937",
    ifscCode: "HDFC0001043",
    pan: "EJQPM3194C",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Nirmal Nama",
    employeeId: "GL20220307001",
    department: "Employment Support Management",
    designation: "Service Leads Executive",
    location: "Hyderbad",
    dateOfJoining: "03/07/2022",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100302305701",
    ifscCode: "HDFC0001293",
    pan: "JPLPK8077N",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
  {
    name: "Ganesh Palvay",
    employeeId: "GL20240418001",
    department: "Payroll Services",
    designation: "Payroll Specialist",
    location: "Hyderbad",
    dateOfJoining: "04/18/2024",
    gender: "MALE",
    bankName: "HDFC",
    accountNumber: "50100709291130",
    ifscCode: "HDFC0009383",
    pan: "DZNPG4688F",
    conveyance: "1600",
    medical: "1250",
    foodAllowance: "1250",
  },
];

const employeeByName = employees.reduce((acc, e) => {
  acc[e.name] = e;
  return acc;
}, {});

const emptyPayslip = {
  name: "",
  month: "",
  year: "",
  employeeId: "",
  department: "",
  designation: "",
  location: "",
  dateOfJoining: "", // MM/DD/YYYY
  gender: "",
  bankName: "",
  accountNumber: "",
  ifscCode: "",
  pan: "",
  workingDays: "",
  lossOfPayDays: "",
  paidDays: "",
  basic: "",
  hra: "",
  conveyance: "",
  medical: "",
  foodAllowance: "",
  incentive: "",
  otherAllowances: "",
  professionalTax: "",
  amountInWords: "",
};

// ✅ helpers for MM/DD/YYYY <-> YYYY-MM-DD
const pad2 = (n) => String(n).padStart(2, "0");

const toISOFromMDY = (mdy) => {
  if (!mdy) return "";
  const parts = mdy.split("/");
  if (parts.length !== 3) return "";
  const [mm, dd, yyyy] = parts.map((x) => x.trim());
  if (!mm || !dd || !yyyy) return "";
  return `${yyyy}-${pad2(mm)}-${pad2(dd)}`;
};

const fromISOToMDY = (iso) => {
  if (!iso) return "";
  const [yyyy, mm, dd] = iso.split("-");
  if (!yyyy || !mm || !dd) return "";
  return `${pad2(mm)}/${pad2(dd)}/${yyyy}`;
};

const JobwaysPayslipform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const [mode, setMode] = useState("EXISTING"); // "EXISTING" | "NEW"
  const payslip = Global.jobwaysPayslip || emptyPayslip;

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setjobwaysPayslip((prev) => ({
      ...(prev || emptyPayslip),
      [name]: value,
    }));
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);

    if (newMode === "NEW") {
      Global.setjobwaysPayslip((prev) => ({
        ...(prev || emptyPayslip),
        name: "",
        employeeId: "",
        department: "",
        designation: "",
        location: "",
        dateOfJoining: "",
        gender: "",
        bankName: "",
        accountNumber: "",
        ifscCode: "",
        pan: "",
        conveyance: "",
        medical: "",
        foodAllowance: "",
      }));
    }
  };

  const handleExistingSelect = (e) => {
    const selectedName = e.target.value;

    Global.setjobwaysPayslip((prev) => {
      const current = { ...(prev || emptyPayslip) };
      const emp = employeeByName[selectedName];

      if (!selectedName) return { ...current, name: "" };

      if (emp) {
        return {
          ...current,
          name: emp.name,
          employeeId: emp.employeeId,
          department: emp.department,
          designation: emp.designation,
          location: emp.location,
          dateOfJoining: emp.dateOfJoining, // MM/DD/YYYY
          gender: emp.gender,
          bankName: emp.bankName,
          accountNumber: emp.accountNumber,
          ifscCode: emp.ifscCode,
          pan: emp.pan,
          conveyance: emp.conveyance,
          medical: emp.medical,
          foodAllowance: emp.foodAllowance,
        };
      }

      return { ...current, name: selectedName };
    });
  };

  const handleDateChange = (e) => {
    const iso = e.target.value; // YYYY-MM-DD
    const formattedDate = fromISOToMDY(iso); // MM/DD/YYYY

    Global.setjobwaysPayslip((prev) => ({
      ...(prev || emptyPayslip),
      [e.target.name]: formattedDate,
    }));
  };

  const handleClear = () => {
    Global.setjobwaysPayslip({ ...emptyPayslip });
    setMode("EXISTING");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/jobwayspayslip");
  };

  const lock = mode === "EXISTING";
  const dateValue = toISOFromMDY(payslip.dateOfJoining); // ✅ correct for MM/DD/YYYY

  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Payslip form</h1>

          <div className="form-group" style={{ display: "flex", gap: 12 }}>
            <button
              type="button"
              onClick={() => handleModeChange("EXISTING")}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #ddd",
                background: mode === "EXISTING" ? "#111" : "#fff",
                color: mode === "EXISTING" ? "#fff" : "#111",
                cursor: "pointer",
              }}
            >
              Select Existing
            </button>

            <button
              type="button"
              onClick={() => handleModeChange("NEW")}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #ddd",
                background: mode === "NEW" ? "#111" : "#fff",
                color: mode === "NEW" ? "#fff" : "#111",
                cursor: "pointer",
              }}
            >
              Add New
            </button>

            <button
              type="button"
              onClick={handleClear}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #ddd",
                background: "#fff",
                color: "#111",
                cursor: "pointer",
                marginLeft: "auto",
              }}
            >
              Clear
            </button>
          </div>

          {/* NAME */}
          <div className="form-group">
            <label>Name:</label>
            {mode === "EXISTING" ? (
              <select
                name="name"
                value={payslip.name}
                onChange={handleExistingSelect}
                required
              >
                <option value="">Select employee</option>
                {employees.map((e) => (
                  <option key={`${e.employeeId}-${e.name}`} value={e.name}>
                    {e.name}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name="name"
                value={payslip.name}
                onChange={handleChange}
                placeholder="Enter employee name"
                required
              />
            )}
          </div>

          {/* MONTH */}
          <div className="form-group">
            <label>Month:</label>
            <input
              type="text"
              name="month"
              value={payslip.month}
              onChange={handleChange}
              required
            />
          </div>

          {/* YEAR */}
          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={payslip.year}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMPLOYEE ID */}
          <div className="form-group">
            <label>Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={payslip.employeeId}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* DEPARTMENT */}
          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={payslip.department}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* DESIGNATION */}
          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              name="designation"
              value={payslip.designation}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* LOCATION */}
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={payslip.location}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* DATE OF JOINING */}
          <div className="form-group">
            <label>Date of Joining:</label>
            <input
              type="date"
              name="dateOfJoining"
              value={dateValue}
              onChange={handleDateChange}
              required
              disabled={lock} // ✅ better than readOnly for date inputs
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ddd",
                boxSizing: "border-box",
                marginBottom: "15px",
              }}
            />
          </div>

          {/* GENDER */}
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={payslip.gender}
              onChange={handleChange}
              required
              disabled={lock}
            >
              <option value="">Select</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          {/* BANK NAME */}
          <div className="form-group">
            <label>Bank Name:</label>
            <input
              type="text"
              name="bankName"
              value={payslip.bankName}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* ACCOUNT NUMBER */}
          <div className="form-group">
            <label>Account Number:</label>
            <input
              type="text"
              name="accountNumber"
              value={payslip.accountNumber}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* IFSC */}
          <div className="form-group">
            <label>IFSC Code:</label>
            <input
              type="text"
              name="ifscCode"
              value={payslip.ifscCode}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* PAN */}
          <div className="form-group">
            <label>PAN:</label>
            <input
              type="text"
              name="pan"
              value={payslip.pan}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* WORKING DAYS */}
          <div className="form-group">
            <label>Working Days:</label>
            <input
              type="text"
              name="workingDays"
              value={payslip.workingDays}
              onChange={handleChange}
              required
            />
          </div>

          {/* LOSS OF PAY */}
          <div className="form-group">
            <label>Loss of Pay Days:</label>
            <input
              type="text"
              name="lossOfPayDays"
              value={payslip.lossOfPayDays}
              onChange={handleChange}
              required
            />
          </div>

          {/* PAID DAYS */}
          <div className="form-group">
            <label>Paid Days:</label>
            <input
              type="text"
              name="paidDays"
              value={payslip.paidDays}
              onChange={handleChange}
              required
            />
          </div>

          {/* BASIC */}
          <div className="form-group">
            <label>Basic:</label>
            <input
              type="text"
              name="basic"
              value={payslip.basic}
              onChange={handleChange}
              required
            />
          </div>

          {/* HRA */}
          <div className="form-group">
            <label>HRA:</label>
            <input
              type="text"
              name="hra"
              value={payslip.hra}
              onChange={handleChange}
              required
            />
          </div>

          {/* CONVEYANCE */}
          <div className="form-group">
            <label>Conveyance:</label>
            <input
              type="text"
              name="conveyance"
              value={payslip.conveyance}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* MEDICAL */}
          <div className="form-group">
            <label>Medical:</label>
            <input
              type="text"
              name="medical"
              value={payslip.medical}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* FOOD */}
          <div className="form-group">
            <label>Food Allowance:</label>
            <input
              type="text"
              name="foodAllowance"
              value={payslip.foodAllowance}
              onChange={handleChange}
              required
              readOnly={lock}
            />
          </div>

          {/* INCENTIVE */}
          <div className="form-group">
            <label>Incentives:</label>
            <input
              type="text"
              name="incentive"
              value={payslip.incentive}
              onChange={handleChange}
              required
            />
          </div>

          {/* OTHER ALLOWANCES */}
          <div className="form-group">
            <label>Other Allowances:</label>
            <input
              type="text"
              name="otherAllowances"
              value={payslip.otherAllowances}
              onChange={handleChange}
              required
            />
          </div>

          {/* PROFESSIONAL TAX */}
          <div className="form-group">
            <label>Professional Tax:</label>
            <input
              type="text"
              name="professionalTax"
              value={payslip.professionalTax}
              onChange={handleChange}
              required
            />
          </div>

          {/* AMOUNT IN WORDS */}
          <div className="form-group">
            <label>Amount in Words:</label>
            <input
              type="text"
              name="amountInWords"
              value={payslip.amountInWords}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobwaysPayslipform;
