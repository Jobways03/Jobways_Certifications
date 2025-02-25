import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const Relievingform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setRelieve((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Genesis , Genielamp , Geshur , Jobways

  const handleSubmit = (e) => {
    e.preventDefault();

    let company = localStorage.getItem("company");
    if (company === "Genesis") {
      navigate("/genesisRelieving");
    } else if (company === "Genielamp") {
      navigate("/genielampRelieving");
    } else if (company === "Geshur") {
      navigate("/geshurRelieving");
    } else if (company === "Jobways") {
      navigate("/jobwaysRelieving");
    } else if (company === "sports") {
      navigate("/sportsRelieving");
    } else if (company === "JOBLLC") {
      navigate("/JobllcRelieving");
    } else if (company === "KACEE") {
      navigate("/KaceeRelieving");
    } else if (company === "RAPID") {
      navigate("/RapidRelieving");
    }
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
              value={Global.Relieve.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={Global.Relieve.date}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={Global.Relieve.designation}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="text"
              name="startDate"
              value={Global.Relieve.startDate}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="text"
              name="endDate"
              value={Global.Relieve.endDate}
              onChange={handleChange}
              placeholder="01st January 2000"
            />
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="empid"
              value={Global.Relieve.empid}
              onChange={handleChange}
              placeholder=""
            />
          </div>

          {localStorage.getItem("company") === "Genesis" ? (
            <>
              <div className="form-group">
                <label>Resignation letter Dated</label>
                <input
                  type="text"
                  name="ResignationDate"
                  value={Global.Relieve.ResignationDate}
                  onChange={handleChange}
                  placeholder="01st January 2000"
                />
              </div>
            </>
          ) : (
            <></>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Relievingform;
