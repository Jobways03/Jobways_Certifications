import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";

const Outform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Global.setout((prevState) => ({
        ...prevState,
        uploadedImage: file,
      }));
      setImagePreview(URL.createObjectURL(file)); // For image preview in the form
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setout((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let path = localStorage.getItem("path");
    navigate(path);
  };
  return (
    <div>
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="invoice-form">
          <h1>form</h1>
          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={Global.setout.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Invoice Number</label>
            <input
              type="text"
              name="invoiceNumber"
              value={Global.setout.invoiceNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              placeholder=".00 included"
              value={Global.setout.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Amount in Words</label>
            <input
              type="text"
              name="amountInWords"
              value={Global.setout.amountInWords}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Transaction ID</label>
            <input
              type="text"
              name="transactionID"
              value={Global.setout.transactionID}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Upload Image</label>
            <input
              type="file"
              name="uploadedImage"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Outform;
