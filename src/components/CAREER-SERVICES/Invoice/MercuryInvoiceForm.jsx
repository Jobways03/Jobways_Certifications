import React, { useContext, useState } from "react";
import "./Invoiceform.css"; // Make sure to create this CSS file in the same directory
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MercuryInvoiceform = () => {
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
    navigate("/MercuryInvoice");
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
          <label>Invoice Number</label>
          <input
            type="text"
            name="invoiceNumber"
            value={Global.formData.invoiceNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={Global.formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={Global.formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={Global.formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={Global.formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <select
            name="description"
            value={Global.formData.description}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="E-Learnings">E-Learnings</option>
            <option value="Resume Building">Resume Building</option>
            <option value="Mock Interviews">Mock Interviews</option>
            <option value="Job Supports">Job Supports</option>
            <option value="Resume Marketing Services">
              Resume Marketing Services
            </option>
          </select>
        </div>
        <div className="form-group">
          <label>Rate</label>
          <input
            type="text"
            name="rate"
            placeholder=".00 included"
            value={Global.formData.rate}
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
          <label>Payment Type</label>
          <select
            name="paymentType"
            value={Global.formData.paymentType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="advance">Advance</option>
            <option value="due">Due</option>
          </select>
        </div>

        <div className="form-group">
          <label>Advance </label>
          <input
            type="text"
            name="advanceAmount"
            placeholder=".00 included"
            value={Global.formData.advanceAmount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Due</label>
          <input
            type="text"
            name="dueAmount"
            placeholder=".00 included"
            value={Global.formData.dueAmount}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>SubTotal</label>
          <input
            type="text"
            name="subTotal"
            placeholder=".00 included"
            value={Global.formData.subTotal}
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
  );
};

export default MercuryInvoiceform;
