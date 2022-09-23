import React from "react";
import "./OrderHeader.css";
function OrderHeader() {
  return (
    <div className="order-header">
      <div className="order-head">
        <span className="order-head-span">Product Types</span>
      </div>
      <div className="order-head">
        <span className="order-head-span">Quantity</span>
      </div>
      <div className="order-head">
        <span className="order-head-span">Wash Type</span>
      </div>
      <div className="order-head">
        <span className="order-head-span" style={{ paddingLeft: "2em" }}>
          Price
        </span>
      </div>
    </div>
  );
}

export default OrderHeader;
