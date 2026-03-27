import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SM_Invoiceform = () => {
  const Global = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    Global.setSM_FormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/SM_Invoice");
  };

  const productFields = [
    {
      product: "1",
      description: "Description1",
      quantity: "Quantity1",
      price: "Price1",
      amount: "amount1",
    },
    {
      product: "2",
      description: "Description2",
      quantity: "Quantity2",
      price: "Price2",
      amount: "amount2",
    },
    {
      product: "3",
      description: "Description3",
      quantity: "Quantity3",
      price: "Price3",
      amount: "amount3",
    },
    {
      product: "4",
      description: "Description4",
      quantity: "Quantity4",
      price: "Price4",
      amount: "amount4",
    },
    {
      product: "5",
      description: "Description5",
      quantity: "Quantity5",
      price: "Price5",
      amount: "amount5",
    },
    {
      product: "6",
      description: "Description6",
      quantity: "Quantity6",
      price: "Price6",
      amount: "amount6",
    },
    {
      product: "7",
      description: "Description7",
      quantity: "Quantity7",
      price: "Price7",
      amount: "amount7",
    },
    {
      product: "8",
      description: "Description8",
      quantity: "Quantity8",
      price: "Price8",
      amount: "amount8",
    },

  ];

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

  const sectionHeadingStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a2e',
    marginTop: '24px',
    marginBottom: '16px',
    borderBottom: '2px solid #e5e7eb',
    paddingBottom: '8px',
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
            value={Global.SM_FormData.date}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Invoice Number</label>
          <input
            type="text"
            name="invoiceNumber"
            value={Global.SM_FormData.invoiceNumber}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Due Date (If needed)</label>
          <input
            type="text"
            name="duedate"
            value={Global.SM_FormData.duedate}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Customer Name</label>
          <input
            type="text"
            name="name"
            value={Global.SM_FormData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Customer Email</label>
          <input
            type="email"
            name="email"
            value={Global.SM_FormData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Customer Phone</label>
          <input
            type="tel"
            name="phone"
            value={Global.SM_FormData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Customer Address</label>
          <input
            type="text"
            name="address"
            value={Global.SM_FormData.address}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {productFields.map((product, index) => (
          <div key={index} style={{marginBottom: '16px', padding: '16px', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
            <h3 style={sectionHeadingStyle}>Product - {product.product}</h3>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Description</label>
              <input
                type="text"
                name={product.description}
                value={Global.SM_FormData[product.description]}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Quantity</label>
              <input
                type="text"
                name={product.quantity}
                value={Global.SM_FormData[product.quantity]}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Price</label>
              <input
                type="text"
                name={product.price}
                value={Global.SM_FormData[product.price]}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Amount</label>
              <input
                type="text"
                name={product.amount}
                value={Global.SM_FormData[product.amount]}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>
        ))}

        <div style={formGroupStyle}>
          <label style={labelStyle}>Payment Type</label>
          <select
            name="paymentType"
            value={Global.SM_FormData.paymentType}
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
            placeholder=""
            value={Global.SM_FormData.advanceAmount}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Due</label>
          <input
            type="text"
            name="dueAmount"
            placeholder=""
            value={Global.SM_FormData.dueAmount}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>SubTotal</label>
          <input
            type="text"
            name="subTotal"
            placeholder=""
            value={Global.SM_FormData.subTotal}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>GST HEAD</label>
          <input
            type="text"
            name="gsthead"
            value={Global.SM_FormData.gsthead}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>GST AMOUNT</label>
          <input
            type="text"
            name="gstamount"
            value={Global.SM_FormData.gstamount}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Total</label>
          <input
            type="text"
            name="Total"
            placeholder=""
            value={Global.SM_FormData.Total}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>GSTIN</label>
          <input
            type="text"
            name="gstin"
            placeholder=""
            value={Global.SM_FormData.gstin}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Store Phone Number</label>
          <input
            type="text"
            name="Store_Phone"
            placeholder=""
            value={Global.SM_FormData.Store_Phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Store Email</label>
          <input
            type="text"
            name="Store_Email"
            placeholder=""
            value={Global.SM_FormData.Store_Email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Store Address</label>
          <input
            type="text"
            name="Store_Address"
            placeholder=""
            value={Global.SM_FormData.Store_Address}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default SM_Invoiceform;
