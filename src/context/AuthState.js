import { useEffect, useState } from "react";
import GlobalData from "./AuthContext";
import { useNavigate } from "react-router-dom";

const USERS = [
  { email: "helpme.ebs@gamil.com", password: "Ebs@jobways", role: "EBS" },
  {
    email: "jobways.ac@gmail.com",
    password: "Accounts@jobways",
    role: "ACCOUNTS",
  },
  {
    email: "corpgroup.hr001@gmail.com",
    password: "Hr@jobways",
    role: "HR",
  },
];

const AuthState = ({ children }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const stored = sessionStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  // sync to sessionStorage whenever `user` changes
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("authUser", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("authUser");
    }
  }, [user]);

  const login = (email, password) => {
    const found = USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser(found);
      navigate("/");
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const [name, setname] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    date: "",
    totalAmount: "",
    amountInWords: "",
    address: "",
    payPeriodFrom: "",
    payPeriodTo: "",
    ssn: "",
    maritalStatus: "",
    payDate: "",
    totalHours: "",
    hourlyRate: "",
    currentAmount: "",
    ytdGrossAmount: "",
    medicareCurrent: "",
    medicareYTD: "",
    socialSecurityCurrent: "",
    socialSecurityYTD: "",
    federalTaxCurrent: "",
    federalTaxYTD: "",
    stateTaxCurrent: "",
    stateTaxYTD: "",
    state: "",
    employername: "",
    employerAddress: "",
    SDICurrent:"",
    sdiYTD:""
  });

  const [w2form, setw2form] = useState({
    year: "",
    date: "",
    ssn: "",
    employerNameAddressLine1: "",
    employerNameAddressLine2: "",
    employerNameAddressLine3: "",
    employeeNameAddressLine1: "",
    employeeNameAddressLine2: "",
    employeeNameAddressLine3: "",
    wages: "",
    federalIncomeTax: "",
    socialSecurityWages: "",
    socialSecurityTax: "",
    medicareWages: "",
    medicareTax: "",
    state: "",
    employersStateID: "",
    stateWages: "",
    stateIncomeTax: "",
    localWages: "",
    localIncomeTax: "",
    localityName: "",
  });

  const [formData, setFormData] = useState({
    date: "",
    invoiceNumber: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    rate: "",
    amount: "",
    paymentType: "",
    advanceRate: "",
    advanceAmount: "",
    dueRate: "",
    dueAmount: "",
    subTotal: "",
    internetFee: "",
    stripeFee: "",
    TransactionID: "",
    uploadedImage: null,
  });

const [SM_FormData, setSM_FormData] = useState({
  date: "",
  invoiceNumber: "",
  duedate:"",
  name: "",
  email: "",
  phone: "",
  address: "",
  Description: "",
  Quantity: "",
  Price: "",
  amount: "",
  paymentType: "",
  advanceAmount: "0",
  dueAmount: "0",
  subTotal: "",
  gsthead: "",
  gstamount: "",
  Total: "",
  gstin: "",
  Store_Phone: "",
  Store_Email: "",
  Store_Address: "",

  // Dynamically added product fields
  Description1: "",
  Quantity1: "",
  Price1: "",
  amount1: "",

  Description2: "",
  Quantity2: "",
  Price2: "",
  amount2: "",

  Description3: "",
  Quantity3: "",
  Price3: "",
  amount3: "",

  Description4: "",
  Quantity4: "",
  Price4: "",
  amount4: "",

  Description5: "",
  Quantity5: "",
  Price5: "",
  amount5: "",
});

  const [out, setout] = useState({
    date: "",
    invoiceNumber: "",
    amount: "",
    amountInWords: "",
    TransactionID: "",
    uploadedImage: null,
  });

  const [Offerform, setOfferform] = useState({
    name: "",
    date: "",
    position: "",
    startDate: "",
    salaryPackage: "",
    workTime: "",
    namehead: "",
  });

  const [jobwaysPayslip, setjobwaysPayslip] = useState({
    name: "",
    month: "",
    year: "",
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
    workingDays: "",
    lossOfPayDays: "",
    paidDays: "",
    basic: "",
    hra: "",
    conveyance: "",
    medical: "",
    foodAllowance: "",
    otherAllowances: "",
    professionalTax: "",
    totalEarnings: "",
    totalDeductions: "",
    netAmount: "",
    amountInWords: "",
    incentive: "",
  });

  const [genesisPayslip, setgenesisPayslip] = useState({
    name: "",
    month: "",
    year: "",
    employeeId: "",
    function: "",
    designation: "",
    location: "",
    dateOfJoining: "",
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
    specialAllowances: "",
    professionalTax: "",
    totalEarnings: "",
    totalDeductions: "",
    netAmount: "",
    amountInWords: "",
  });

  const [geshurPayslip, setgeshurPayslip] = useState({
    name: "",
    month: "",
    year: "",
    employeeId: "",
    function: "",
    designation: "",
    location: "",
    dateOfJoining: "",
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
    specialAllowances: "",
    professionalTax: "",
    totalEarnings: "",
    totalDeductions: "",
    netAmount: "",
    amountInWords: "",
  });

  const [geniePayslip, setgeniePayslip] = useState({
    name: "",
    month: "",
    year: "",
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
    workingDays: "",
    lossOfPayDays: "",
    paidDays: "",
    basic: "",
    hra: "",
    conveyance: "",
    medical: "",
    foodAllowance: "",
    otherAllowances: "",
    professionalTax: "",
    totalEarnings: "",
    totalDeductions: "",
    netAmount: "",
    amountInWords: "",
  });

  const [geshurofferform, setgeshurofferform] = useState({
    name: "",
    firstname: "",
    date: "",
    position: "",
    joiningDate: "",
    basicSalary: "",
    hra: "",
    conveyance: "",
    foodAllowance: "",
    medicalAllowance: "",
    specialAllowances: "",
    professionalTax: "",
  });

  const [Hike, setHike] = useState({
    namehead: "",
    name: "",
    date: "",
    newannualSalary: "",
    annualSalary: "",
    effectiveDate: "",
  });

  const [Relieve, setRelieve] = useState({
    namehead: "",
    name: "",
    date: "",
    startDate: "",
    endDate: "",
    ResignationDate: "",
    designation: "",
    empid: "",
  });

  const [Experience, setExperience] = useState({
    name: "",
    date: "",
    startDate: "",
    endDate: "",
    designation: "",
    gender: "",
    empid: "",
  });

  const [USOffer, setUSOffer] = useState({
    name: "",
    date: "",
    socialSecurityNumber: "",
    position: "",
    salary: "",
    clientCompany: "",
    startDate: "",
  });

  const [COIData, setCOIData] = useState({
    co1: "",
    co2: "",
    co3: "",
    co4: "",
    co5: "",
    co6: "",
    co7: "",
    co8: "",
    co9: "",
    co10: "",
    co11: "",
    co12: "",
    co13: "",
    co14: "",
    co15: "",
    co16: "",
    co17: "",
    co18: "",
    co19: "",
    co20: "",
    co21: "",
    co22: "",
    co23: "",
    co24: "",
    co25: "",
    co26: "",
    co27: "",
    co28: "",
    co29: "",
    co30: "",
    co31: "",
    co32: "",
    co33: "",
    co34: "",
    co35: "",
    co36: "",
    co37: "",
    co38: "",
    co39: "",
    co40: "",
    co41: "",
    co42: "",
    co43: "",
    co44: "",
    co45: "",
    co46: "",
    co47: "",
    co48: "",
    co49: "",
    co50: "",
    co51: "",
    co52: "",
    co53: "",
    co54: "",
    co55: "",
    co56: "",
    co57: "",
    co58: "",
    co59: "",
    co60: "",
    co61: "",
    co62: "",
    co63: "",
    co64: "",
    co65: "",
    co66: "",
    co67: "",
    co68: "",
    co69: "",
    co70: "",
    co71: "",
    co72: "",
    co73: "",
    co74: "",
    co75: "",
    co76: "",
    co77: "",
    co78: "",
    co79: "",
    co80: "",
    co81: "",
    co82: "",
    co83: "",
    co84: "",
    co85: "",
    co86: "",
    co87: "",
    co88: "",
    co89: "",
    co90: "",
    co91: "",
    co92: "",
    co93: "",
    co94: "",
    co95: "",
    co96: "",
    co97: false,
    co98: false,
    co99: false,
    co100: false,
    co101: false,
    co102: false,
    co103: false,
    co104: false,
    co105: false,
    co106: false,
    co107: false,
    co108: false,
    co109: false,
    co110: false,
    co111: false,
    co112: false,
    co113: false,
    co114: false,
    co115: false,
    co116: false,
    co117: false,
    co118: false,
    co119: false,
    co120: "",
  });
  
  const [Edit, setEdit] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
  });

  const [t4, sett4] = useState({
    year: "",
    employerName: "",
    employerAddress1: "",
    employerAddress2: "",
    employeeName: "",
    employeeAddress1: "",
    employeeAddress2: "",
    province: "",
    socialInsuranceNumber: "",
    employmentIncome: "",
    cppContributions: "",
    eiPremiums: "",
    incomeTaxDeducted: "",
    eiInsurableEarnings: "",
    cppQppPensionableEarnings: "",
    exemption:"",
    employersaccountnumber:""
  });

  return (
    <GlobalData.Provider
      value={{
        COIData,
        setCOIData,
        USOffer,
        setUSOffer,
        Experience,
        setExperience,
        Relieve,
        setRelieve,
        geshurPayslip,
        setgeshurPayslip,
        genesisPayslip,
        setgenesisPayslip,
        geniePayslip,
        setgeniePayslip,
        Hike,
        setHike,
        geshurofferform,
        setgeshurofferform,
        jobwaysPayslip,
        setjobwaysPayslip,
        Offerform,
        setOfferform,
        out,
        setout,
        formData,
        setFormData,
        SM_FormData,
        setSM_FormData,
        w2form,
        setw2form,
        form,
        setForm,
        name,
        setname,
        phoneNumber,
        setphoneNumber,
        email,
        setemail,
        age,
        setage,
        address,
        setaddress,
        Edit,
        setEdit,
        t4,
        sett4,
        user,
        login,
        logout,
      }}
    >
      {children}
    </GlobalData.Provider>
  );
};
export default AuthState;
