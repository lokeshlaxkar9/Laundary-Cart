import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import SideNav from "../SideNav/SideNav";
import Hdorder from "./Hdorder";
import Order from "./Order";
import "./Forder.css";

const Forder = () => {
  const [orders, setorders] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchData = () => {
    fetch(`http://localhost:8080/history/${userId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setorders(data.reverse());
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="newtestspecial">
        <SideNav />
        <div className="newtest2">
          <Hdorder />
          <div className="post-container">
            {Array.isArray(orders)
              ? orders.map((element) => {
                  return (
                    <>
                      <Order hisorder={element} />
                    </>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Forder;
