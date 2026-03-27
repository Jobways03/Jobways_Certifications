import React from "react";
import "./Coi.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Coiform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setCOIData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlecheck = (e) => {
    const { name, checked } = e.target;
    Global.setCOIData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const getfile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      Global.setCOIData((prevState) => ({
        ...prevState,
        co120: reader.result,
      }));
    };
  };

  const handlesubmit = () => {
    navigate("/coi");
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
    maxWidth: '900px',
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

  const sectionHeadingStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a2e',
    marginTop: '24px',
    marginBottom: '16px',
    borderBottom: '2px solid #e5e7eb',
    paddingBottom: '8px',
  };

  // Build text input fields (co1-co65, co71-co96)
  const textFields = [];
  for (let i = 1; i <= 65; i++) {
    textFields.push(`co${i}`);
  }
  for (let i = 71; i <= 96; i++) {
    textFields.push(`co${i}`);
  }

  // Checkbox fields (co97-co119)
  const checkboxFields = [];
  for (let i = 97; i <= 119; i++) {
    checkboxFields.push(`co${i}`);
  }

  return (
    <div style={formPageStyle}>
      <div style={formCardStyle}>
        <h1 style={formTitleStyle}>Certificate of Insurance Form</h1>

        <h3 style={sectionHeadingStyle}>Text Fields (co1 - co65)</h3>
        {textFields.filter(f => {
          const num = parseInt(f.replace('co', ''));
          return num >= 1 && num <= 65;
        }).map((field) => (
          <div style={formGroupStyle} key={field}>
            <label style={labelStyle}>{field}</label>
            <input
              type="text"
              className={`inp ${field.replace('co', 'coi')} cor`}
              name={field}
              value={Global.COIData[field]}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        ))}

        <h3 style={sectionHeadingStyle}>Textarea Fields (co66 - co70)</h3>
        {['co66', 'co67', 'co68', 'co69', 'co70'].map((field) => (
          <div style={formGroupStyle} key={field}>
            <label style={labelStyle}>{field}</label>
            <textarea
              type="text"
              className={`inp ${field.replace('co', 'coi')} cor`}
              name={field}
              value={Global.COIData[field]}
              onChange={handleChange}
              style={{...inputStyle, minHeight: '120px', resize: 'vertical'}}
            />
          </div>
        ))}

        <h3 style={sectionHeadingStyle}>Text Fields (co71 - co90)</h3>
        {textFields.filter(f => {
          const num = parseInt(f.replace('co', ''));
          return num >= 71 && num <= 90;
        }).map((field) => (
          <div style={formGroupStyle} key={field}>
            <label style={labelStyle}>{field}</label>
            <input
              type="text"
              className={`inp ${field.replace('co', 'coi')} cor`}
              name={field}
              value={Global.COIData[field]}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        ))}

        <h3 style={sectionHeadingStyle}>Textarea Fields (co91 - co92)</h3>
        {['co91', 'co92'].map((field) => (
          <div style={formGroupStyle} key={field}>
            <label style={labelStyle}>{field}</label>
            <textarea
              type="text"
              className={`inp ${field.replace('co', 'coi')} cor`}
              name={field}
              value={Global.COIData[field]}
              onChange={handleChange}
              style={{...inputStyle, minHeight: '120px', resize: 'vertical'}}
            />
          </div>
        ))}

        <h3 style={sectionHeadingStyle}>Text Fields (co93 - co96)</h3>
        {textFields.filter(f => {
          const num = parseInt(f.replace('co', ''));
          return num >= 93 && num <= 96;
        }).map((field) => (
          <div style={formGroupStyle} key={field}>
            <label style={labelStyle}>{field}</label>
            <input
              type="text"
              className={`inp ${field.replace('co', 'coi')} cor`}
              name={field}
              value={Global.COIData[field]}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        ))}

        <h3 style={sectionHeadingStyle}>Checkbox Fields (co97 - co119)</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px', marginBottom: '20px'}}>
          {checkboxFields.map((field) => (
            <div key={field} style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <input
                type="checkbox"
                className={`inp ${field.replace('co', 'coi')} cor`}
                name={field}
                checked={Global.COIData[field]}
                onChange={handlecheck}
              />
              <label style={{fontSize: '14px', fontWeight: '600', color: '#374151'}}>{field}</label>
            </div>
          ))}
        </div>

        <h3 style={sectionHeadingStyle}>Signature Upload</h3>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Upload Signature Image (co120)</label>
          <input
            type="file"
            className="inp coi120 cor"
            name=""
            id=""
            onChange={getfile}
            style={{...inputStyle, padding: '8px'}}
          />
        </div>

        <br />
        <h2 style={sectionHeadingStyle}>
          *
          <a
            href="https://pixelixe.com/image-cropper-online/crop-image.html"
            target="_blank"
            rel="noreferrer"
            style={{color: '#667eea', textDecoration: 'underline'}}
          >
            Click here
          </a>{" "}
          to crop the image for Signature
        </h2>
        <br />
        <button
          onClick={handlesubmit}
          style={buttonStyle}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Coiform;
