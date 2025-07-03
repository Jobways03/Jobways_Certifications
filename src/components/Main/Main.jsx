import React from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
const Main = () => {
  const navigate = useNavigate();
  const Global = useContext(AuthContext);
  // define which roles can see which paths
  const cards = [
    {
      label: "CAREER SERVICES",
      path: "/services",
      roles: ["ACCOUNTS"],
    },
    { label: "EBS - USA", path: "/Uspayroll", roles: ["EBS"] },
    {
      label: "EBS - INDIA",
      path: "/IndianMain",
      roles: ["HR", "EBS"],
    },
    { label: "EBS - CANADA", path: "/canada_Main", roles: ["EBS"] },
    {
      label: "CERTIFICATE OF INSURANCE",
      path: "/COIform",
      roles: ["EBS"],
    },
    {
      label: "SPORTSMART INVOICE",
      path: "/SM_Invoiceform",
      roles: ["ACCOUNTS"],
    },
  ];

  return (
    <div>
      <div className="payrolls-container" style={{marginTop:"100px"}}>
        {cards
          .filter((card) => card.roles.includes(Global.user.role))
          .map((card) => (
            <div
              key={card.path}
              className="card payroll"
              onClick={() => navigate(card.path)}
            >
              <h2>{card.label}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;