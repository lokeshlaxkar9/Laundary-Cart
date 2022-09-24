import React from "react";
import "./nsummary.css";
import { BsXLg } from "react-icons/bs";
const Nsummary = ({
  currentstate,
  togglestate,
  orderData,
  setalert,
  alert,
}) => {
  const randamArray = ["wash, iron", "dryclean, iron", "chemical, iron"];
  console.log(orderData);
  const shirtData = (
    <div className="os">
      <p className="osline1">Shirts</p>
      <p className="osline2">{randamArray[Math.floor(Math.random() * 3)]}</p>
      <p className="osline3">{orderData.shirt.price}</p>
    </div>
  );
  const tshirtData = (
    <div className="os">
      <p className="osline1">T shirts</p>
      <p className="osline2">{randamArray[Math.floor(Math.random() * 3)]}</p>
      <p className="osline3">{orderData.tshirt.price}</p>
    </div>
  );
  const trouserData = (
    <div className="os">
      <p className="osline1">Trouser</p>
      <p className="osline2">{randamArray[Math.floor(Math.random() * 3)]}</p>
      <p className="osline3">{orderData.trouser.price}</p>
    </div>
  );
  const jeansData = (
    <div className="os">
      <p className="osline1">Jeans</p>
      <p className="osline2">{randamArray[Math.floor(Math.random() * 3)]}</p>
      <p className="osline3">{orderData.jeans.price}</p>
    </div>
  );
  const boxerData = (
    <div className="os">
      <p className="osline1">boxer</p>
      <p className="osline2">{randamArray[Math.floor(Math.random() * 3)]}</p>
      <p className="osline3">{orderData.boxer.price}</p>
    </div>
  );
  const joggerData = (
    <div className="os">
      <p className="osline1">Jogger</p>
      <p className="osline2">{randamArray[Math.floor(Math.random() * 3)]}</p>
      <p className="osline3">{orderData.jogger.price}</p>
    </div>
  );

  return (
    <>
      <div className="nsummary_content">
        <div className="hnsummary">
          <p style={{ marginLeft: 10, color: "#FFFFFF" }}>Summary</p>
          <div
            className="canceln"
            style={{ marginTop: 15, marginRight: "10px" }}
          >
            <BsXLg
              color="#FFFFFF"
              onClick={() => {
                togglestate(!currentstate);
              }}
            />
          </div>
        </div>

        <div className="storelocdetails">
          <div className="sloaction">
            <p className="specialhe">Store Location</p>
            <p className="specialhe2">Jp Nagar</p>
          </div>
          <div className="saddress">
            <p className="specialhe">Store Address:</p>
            <p className="specialhe2">Near Phone booth, 10th road,</p>
          </div>
          <div className="snphone">
            <p className="specialhe">Phone</p>
            <p className="specialhe2">91 9999999999</p>
          </div>
        </div>
        <div className="osummarystatus"></div>

        <div className="ordersummarystatus">
          <p className="ohd">Order Detais</p>
          {orderData.shirt.price > 0 ? shirtData : ""}
          {orderData.tshirt.price > 0 ? tshirtData : ""}
          {orderData.trouser.price > 0 ? trouserData : ""}
          {orderData.jeans.price > 0 ? jeansData : ""}
          {orderData.boxer.price > 0 ? boxerData : ""}
          {orderData.jogger.price > 0 ? joggerData : ""}
          <div className="totalsummary">
            <p className="tapara1">Total:</p>
            <p className="tapara2">Rs {orderData.totalPrice}</p>
          </div>
        </div>

        <p className="iline">Address</p>
        <div className="nsummaryaddress">
          <p>Home</p>
          <div>#223, 10th road, Jp Nagar, Bangalore</div>
        </div>
        <div className="scbutton">
          <button
            className="csumary"
            onClick={() => {
              setalert(!alert);
              togglestate(!currentstate);
            }}
          >
            Cancel order
          </button>
        </div>
      </div>
    </>
  );
};

export default Nsummary;
