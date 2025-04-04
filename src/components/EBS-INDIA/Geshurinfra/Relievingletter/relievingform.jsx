import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const formatForInput = (dateStr, company) => {
  if (!dateStr) return "";

  let day, month, year;

  if (dateStr.includes("/")) {
    const parts = dateStr.split("/");
    if (["JOBLLC", "KACEE", "RAPID"].includes(company)) {
      [month, day, year] = parts; // US format
    } else {
      [day, month, year] = parts; // Indian format
    }
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  return dateStr;
};

const Relievingform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();
  const company = localStorage.getItem("company");

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (
      ["date", "startDate", "endDate", "ResignationDate"].includes(name) &&
      value
    ) {
      const [year, month, day] = value.split("-");

      if (["JOBLLC", "KACEE", "RAPID"].includes(company)) {
        formattedValue = `${month}/${day}/${year}`; // US Format
      } else {
        formattedValue = `${day}/${month}/${year}`; // Indian Format
      }
    }

    Global.setRelieve((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const companyRoutes = {
      Genesis: "/genesisRelieving",
      Genielamp: "/genielampRelieving",
      Geshur: "/geshurRelieving",
      Jobways: "/jobwaysRelieving",
      sports: "/sportsRelieving",
      JOBLLC: "/JobllcRelieving",
      KACEE: "/KaceeRelieving",
      RAPID: "/RapidRelieving",
    };

    navigate(companyRoutes[company] || "/");
  };

  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>Relieving Form</h1>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={Global.Relieve.name || ""}
              onChange={handleChange}
            />
          </div>

          {["date", "startDate", "endDate"].map((field) => (
            <div className="form-group" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type="date"
                name={field}
                value={formatForInput(Global.Relieve[field], company)}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={Global.Relieve.designation || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="empid"
              value={Global.Relieve.empid || ""}
              onChange={handleChange}
            />
          </div>

          {company === "Genesis" && (
            <div className="form-group">
              <label>Resignation letter Dated</label>
              <input
                type="date"
                name="ResignationDate"
                value={formatForInput(Global.Relieve.ResignationDate, company)}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
              />
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Relievingform;
