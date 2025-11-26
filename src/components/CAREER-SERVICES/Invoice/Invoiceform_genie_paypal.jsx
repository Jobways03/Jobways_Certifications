import React, { useContext, useState } from "react";
import "./Invoiceform.css"; // Make sure to create this CSS file in the same directory
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Invoiceform_Genie_Paypal = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Global.setFormData((prevState) => ({
        ...prevState,
        uploadedImage: file,
      }));
      setImagePreview(URL.createObjectURL(file)); // For image preview in the form
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Invoice_Genie_paypal");
  };

  return (
    <div className="employee-form-container">
      <form onSubmit={handleSubmit} className="invoice-form">
        <h1>Invoice form</h1>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            name="date"
            value={Global.formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Invoice Id</label>
          <input
            type="text"
            name="invoiceNumber"
            value={Global.formData.invoiceNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="text"
            name="amount"
            placeholder=".00 included"
            value={Global.formData.amount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Transaction ID</label>
          <input
            type="text"
            name="transactionID"
            value={Global.formData.transactionID}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Invoiceform_Genie_Paypal;
