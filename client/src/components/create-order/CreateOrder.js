import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import SideNav from "../SideNav/SideNav";
import OrderTable from "./OrderTable";
import "./CreateOrder.css";
import { useNavigate } from "react-router-dom";
import NavLogin from "../NavLogin/NavLogin";
import Footer2 from "../footer/Footer2";
function CreateOrder() {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      console.log(userInfo);
      navigate("/login");
    }
  }, []);
  return (
    <>
      <NavLogin />
      <div className="create-flex">
        <SideNav />
        <OrderTable />
      </div>
      <Footer2 />
    </>
  );
}

export default CreateOrder;
