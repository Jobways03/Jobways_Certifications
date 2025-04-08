import React, { useContext, useState } from "react";
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
    {
      product: "9",
      description: "Description9",
      quantity: "Quantity9",
      price: "Price9",
      amount: "amount9",
    },
    {
      product: "10",
      description: "Description10",
      quantity: "Quantity10",
      price: "Price10",
      amount: "amount10",
    },
  ];


  return (
    <div className="employee-form-container">
      <form onSubmit={handleSubmit} className="invoice-form">
        <h1>Invoice form</h1>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            name="date"
            value={Global.SM_FormData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Invoice Number</label>
          <input
            type="text"
            name="invoiceNumber"
            value={Global.SM_FormData.invoiceNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Due Date (If needed)</label>
          <input
            type="text"
            name="duedate"
            value={Global.SM_FormData.duedate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            name="name"
            value={Global.SM_FormData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Customer Email</label>
          <input
            type="email"
            name="email"
            value={Global.SM_FormData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Customer Phone</label>
          <input
            type="tel"
            name="phone"
            value={Global.SM_FormData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Customer Address</label>
          <input
            type="text"
            name="address"
            value={Global.SM_FormData.address}
            onChange={handleChange}
          />
        </div>

        {productFields.map((product, index) => (
          <div className="box1s" key={index}>
            <div className="form-group">
              <label>Product - {product.product}</label>
              <input
                type="text"
                name={product.description}
                value={Global.SM_FormData[product.description]}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input
                type="text"
                name={product.quantity}
                value={Global.SM_FormData[product.quantity]}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                name={product.price}
                value={Global.SM_FormData[product.price]}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                name={product.amount}
                value={Global.SM_FormData[product.amount]}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}

        <div className="form-group">
          <label>Payment Type</label>
          <select
            name="paymentType"
            value={Global.SM_FormData.paymentType}
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
            placeholder=""
            value={Global.SM_FormData.advanceAmount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Due</label>
          <input
            type="text"
            name="dueAmount"
            placeholder=""
            value={Global.SM_FormData.dueAmount}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>SubTotal</label>
          <input
            type="text"
            name="subTotal"
            placeholder=""
            value={Global.SM_FormData.subTotal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>GST HEAD</label>
          <input
            type="text"
            name="gsthead"
            value={Global.SM_FormData.gsthead}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>GST AMOUNT</label>
          <input
            type="text"
            name="gstamount"
            value={Global.SM_FormData.gstamount}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Total</label>
          <input
            type="text"
            name="Total"
            placeholder=""
            value={Global.SM_FormData.Total}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>GSTIN</label>
          <input
            type="text"
            name="gstin"
            placeholder=""
            value={Global.SM_FormData.gstin}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Store Phone Number</label>
          <input
            type="text"
            name="Store_Phone"
            placeholder=""
            value={Global.SM_FormData.Store_Phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Store Email</label>
          <input
            type="text"
            name="Store_Email"
            placeholder=""
            value={Global.SM_FormData.Store_Email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Store Address</label>
          <input
            type="text"
            name="Store_Address"
            placeholder=""
            value={Global.SM_FormData.Store_Address}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SM_Invoiceform;
