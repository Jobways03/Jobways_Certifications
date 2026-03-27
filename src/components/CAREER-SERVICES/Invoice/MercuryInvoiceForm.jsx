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

  const formPageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const formCardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '40px 36px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  };

  const formTitleStyle = {
    fontSize: '26px',
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: '32px',
    textAlign: 'center',
    paddingBottom: '16px',
    borderBottom: '3px solid #667eea',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '6px',
  };

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    fontSize: '14px',
    border: '1.5px solid #d1d5db',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f9fafb',
    transition: 'border-color 0.2s',
  };

  const selectStyle = {
    width: '100%',
    padding: '11px 14px',
    fontSize: '14px',
    border: '1.5px solid #d1d5db',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f9fafb',
    transition: 'border-color 0.2s',
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '700',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '12px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
  };

  return (
    <div style={formPageStyle}>
      <form onSubmit={handleSubmit} style={formCardStyle}>
        <h1 style={formTitleStyle}>Invoice form</h1>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Date</label>
          <input
            type="text"
            name="date"
            value={Global.formData.date}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Invoice Number</label>
          <input
            type="text"
            name="invoiceNumber"
            value={Global.formData.invoiceNumber}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={Global.formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={Global.formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={Global.formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Address</label>
          <input
            type="text"
            name="address"
            value={Global.formData.address}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Description</label>
          <select
            name="description"
            value={Global.formData.description}
            onChange={handleChange}
            style={selectStyle}
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
        <div style={formGroupStyle}>
          <label style={labelStyle}>Rate</label>
          <input
            type="text"
            name="rate"
            placeholder=".00 included"
            value={Global.formData.rate}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Amount</label>
          <input
            type="text"
            name="amount"
            placeholder=".00 included"
            value={Global.formData.amount}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Payment Type</label>
          <select
            name="paymentType"
            value={Global.formData.paymentType}
            onChange={handleChange}
            style={selectStyle}
          >
            <option value="">Select</option>
            <option value="advance">Advance</option>
            <option value="due">Due</option>
          </select>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Advance </label>
          <input
            type="text"
            name="advanceAmount"
            placeholder=".00 included"
            value={Global.formData.advanceAmount}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Due</label>
          <input
            type="text"
            name="dueAmount"
            placeholder=".00 included"
            value={Global.formData.dueAmount}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>SubTotal</label>
          <input
            type="text"
            name="subTotal"
            placeholder=".00 included"
            value={Global.formData.subTotal}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Transaction ID</label>
          <input
            type="text"
            name="transactionID"
            value={Global.formData.transactionID}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Upload Image</label>
          <input
            type="file"
            name="uploadedImage"
            accept="image/*"
            onChange={handleImageUpload}
            style={{...inputStyle, padding: '8px'}}
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" style={{maxWidth: '200px', marginTop: '10px', borderRadius: '8px'}} />
          )}
        </div>

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default MercuryInvoiceform;
