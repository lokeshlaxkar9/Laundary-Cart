import React from "react";
import { useEffect, useState } from "react";
import SideNav from "../SideNav/SideNav";
import Hdorder from "./Hdorder";
import Order from "./Order";
import "./Forder.css";
import Nsummary from "../newsummary/Nsummary";
import Alertbox from "./Alertbox";
import Footer2 from "../footer/Footer2";
import NavLogin from "../NavLogin/NavLogin";

const Forder = () => {
  const [alert, setalert] = useState(false);
  const [size, setsize] = useState(0);
  const [orderSummary, setorderSummary] = useState(false);
  const [orders, setorders] = useState([]);
  const userId = localStorage.getItem("userId");
  const [orderData, setOrderData] = useState({});
  const fetchData = () => {
    fetch(`http://localhost:8080/history/${userId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setorders(data.reverse());
        setsize(data.length);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavLogin />
      <div className="newtestspecial">
        <SideNav />
        <div className="newtest2">
          <Hdorder sizes={size} />
          <div className="post-container">
            {Array.isArray(orders)
              ? orders.map((element) => {
                  return (
                    <>
                      <Order
                        hisorder={element}
                        togglestate={setorderSummary}
                        currentstate={orderSummary}
                        alertstate={setalert}
                        presentstate={alert}
                        orderdata={orderData}
                        setOrderData={setOrderData}
                      />
                    </>
                  );
                })
              : null}
          </div>
        </div>
        {orderSummary && (
          <Nsummary
            togglestate={setorderSummary}
            currentstate={orderSummary}
            orderData={orderData}
            alert={alert}
            setalert={setalert}
          />
        )}
        {alert && (
          <Alertbox
            alertstate={setalert}
            presentstate={alert}
            orderData={orderData}
          />
        )}
      </div>
      <Footer2 />
    </>
  );
};

export default Forder;
