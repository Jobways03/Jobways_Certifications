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
        <h1 style={formTitleStyle}>form</h1>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Date</label>
          <input
            type="text"
            name="date"
            value={Global.setout.date}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Invoice Number</label>
          <input
            type="text"
            name="invoiceNumber"
            value={Global.setout.invoiceNumber}
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
            value={Global.setout.amount}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Amount in Words</label>
          <input
            type="text"
            name="amountInWords"
            value={Global.setout.amountInWords}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Transaction ID</label>
          <input
            type="text"
            name="transactionID"
            value={Global.setout.transactionID}
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

export default Outform;
