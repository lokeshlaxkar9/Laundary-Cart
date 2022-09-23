import React from "react";
import "./order.css";
import { useNavigate } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";

const Order = ({ hisorder }) => {
  const navigate = useNavigate();
  return (
    <>
      {hisorder.status === "Redy to pickup" ? (
        <div className="orderdata">
          <div className="od1" style={{ marginLeft: 40 }}>
            {hisorder.orderid}
          </div>
          <div className="od2" style={{ marginLeft: 10 }}>
            {hisorder.updatedAt}
          </div>
          <div className="od3" style={{ marginLeft: 85 }}>
            {hisorder.StoreLocation}
          </div>
          <div className="od4" style={{ marginLeft: 85 }}>
            {hisorder.City}
          </div>
          <div className="od5" style={{ marginLeft: 40 }}>
            {hisorder.StorePhone}
          </div>
          <div className="od6">{hisorder.totalitem}</div>
          <div className="od7">{hisorder.price}</div>
          <div className="od8">{hisorder.status}</div>
          <div className="od9" style={{ color: "red" }}>
            Cancel Order
          </div>
          <div
            className="od10"
            style={{ marginLeft: 40 }}
            onClick={() => navigate("/")}
          >
            {" "}
            <BsFillEyeFill style={{ backgroundColor: "white" }} />{" "}
          </div>
        </div>
      ) : (
        <div className="orderdata">
          <div className="od1" style={{ marginLeft: 40 }}>
            {hisorder.orderid}
          </div>
          <div className="od2" style={{ marginLeft: 10 }}>
            {hisorder.updatedAt}
          </div>
          <div className="od3" style={{ marginLeft: 85 }}>
            {hisorder.StoreLocation}
          </div>
          <div className="od4" style={{ marginLeft: 85 }}>
            {hisorder.City}
          </div>
          <div className="od5" style={{ marginLeft: 40 }}>
            {hisorder.StorePhone}
          </div>
          <div className="od6">{hisorder.totalitem}</div>
          <div className="od7">{hisorder.price}</div>
          <div className="od8">{hisorder.status}</div>
          <div className="od9"></div>
          <div className="od10" style={{ marginLeft: 40 }}>
            <BsFillEyeFill />
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
