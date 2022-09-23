import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import SideNav from "../SideNav/SideNav";
import OrderTable from "./OrderTable";
import "./CreateOrder.css";
import { useNavigate } from "react-router-dom";
function CreateOrder() {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="create-flex">
        <SideNav />
        <OrderTable />
      </div>
    </>
  );
}

export default CreateOrder;
