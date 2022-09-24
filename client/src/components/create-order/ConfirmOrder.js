import "./ConfirmOrder.css";
import React from "react";
import checkicon from "./assets/circle-check-regular.svg";
import { useNavigate } from "react-router-dom";
function ConfirmOrder() {
  const navigate = useNavigate();
  return (
    <>
      <div className="confirm-order-container">
        <div className="confirm-order-items">
          <div className="check-icon">
            <img src={checkicon} alt="" id="check-icon" />
          </div>
          <div className="confirm-heading">
            <h1>Your order is successful</h1>
          </div>
          <p id="track-msg">
            You can track the delivery in the 'Orders' section
          </p>
          <div className="btn-orders-final">
            <button
              id="final-container-btn"
              onClick={() => navigate("/order1")}
            >
              {" "}
              Go to Orders
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmOrder;
