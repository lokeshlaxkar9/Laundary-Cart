import React from "react";
import "./alertbox.css";
import dangerlogo from "../images/alert3.png";
import { BsXLg } from "react-icons/bs";
const Alertbox = ({ alertstate, presentstate, orderData }) => {
  return (
    <>
      <div className="alertcontainer">
        <div className="dialogbox">
          <div className="alertheader1">
            <div style={{ marginTop: 15, marginLeft: 10, color: "#FFFFFF" }}>
              Alert
            </div>
            <div style={{ marginTop: 15, marginRight: "10px" }}>
              {" "}
              <BsXLg
                color="#FFFFFF"
                onClick={() => {
                  alertstate(!presentstate);
                }}
              />
            </div>
          </div>
          <div className="alertbody">
            <div className="dangericon">
              <img
                src={dangerlogo}
                alt="dangerlogo"
                className="redlogo"
                style={{
                  width: 38,
                  marginTop: 26,
                  marginLeft: 15,
                  height: "50px",
                }}
              />
            </div>
            <div className="messagebox">
              <p className="messageline">
                Are you sure want to cancel the oreder
                <span style={{ color: "#5861AE" }}>
                  {" "}
                  No: {orderData.orderid}
                </span>
              </p>
            </div>
          </div>
          <button className="vbutton" onClick={() => alertstate(!presentstate)}>
            Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default Alertbox;
