import React, { useEffect } from "react";
import "./orderh.css";
import { useNavigate } from "react-router-dom";
import searchlogo from "../images/search.svg";
const Hdorder = ({ sizes }) => {
  const navigate = useNavigate();
  !sizes && navigate("/blank");
  return (
    <>
      <div className="sbar">
        <div className="sline"> Order | {sizes} </div>
        <span className="sline sline2">
          <button className="cbotton" onClick={() => navigate("/create")}>
            Create
          </button>
        </span>
        <div className="sbox">
          <img
            src={searchlogo}
            alt="fblogo"
            className="imglogo"
            style={{ color: "#1D377E" }}
          />
        </div>
      </div>

      <div className="orderheader">
        <span className="oh1">Order Id</span>

        <span className="oh2">Order Date & Time</span>
        <span className="oh3">Store Location</span>
        <span className="oh4">City</span>

        <span className="oh5">Store Phone</span>
        <span className="oh6">Total Items</span>
        <span className="oh7">Price</span>
        <span className="oh8">Status</span>
        <span className="oh9">View</span>
      </div>
    </>
  );
};

export default Hdorder;
