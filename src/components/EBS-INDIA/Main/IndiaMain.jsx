// src/components/IndianMain.jsx
import React, { useContext } from "react";
import "./main.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const IndianMain = () => {
  const navigate = useNavigate();
  const Global = useContext(AuthContext);

  // define which roles can see which paths
  const cards = [
    {
      label: "JOBWAYS POINT",
      path: "/jobwaysBoxes",
      roles: ["HR", "EBS"],
    },
    { label: "GENIE LAMP", path: "/genielampBoxes", roles: ["EBS"] },
    { label: "GESHUR INFRA", path: "/geshurinfraBoxes", roles: ["EBS"] },
    { label: "GENESIS7 SOLUTIONS", path: "/genesisBoxes", roles: ["EBS"] },
    { label: "SPORTSMART", path: "/sportsmartBoxes", roles: ["HR", "EBS"] },
  ];

  return (
    <div>
      {/* only show cards allowed for this role */}
      <div className="homepage" style={{marginTop:"100px"}}>
        {cards
          .filter((card) => card.roles.includes(Global.user.role))
          .map((card) => (
            <div
              key={card.path}
              className="card"
              onClick={() => navigate(card.path)}
            >
              <h3>{card.label}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IndianMain;
