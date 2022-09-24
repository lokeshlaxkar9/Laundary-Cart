import React, { useState } from "react";
import "./OrderTable.css";
import Order from "./Order";
import OrderHeader from "./OrderHeader";
import Summary from "./Summary";
import ConfirmOrder from "./ConfirmOrder";
import { useNavigate } from "react-router-dom";
function OrderTable() {
  const navigate = useNavigate();
  const [shirt, setShirt] = useState({
    name: "Shirts",
    type: "shirt",
    qty: 0,
    washtype: { iron: false, wash: false, dryclean: false, chemical: false },
    price: 0,
  });
  const [tshirt, setTshirt] = useState({
    name: "T Shirts",
    type: "tshirt",
    qty: 0,
    washtype: { iron: false, wash: false, dryclean: false, chemical: false },
    price: 0,
  });
  const [trouser, setTrouser] = useState({
    name: "Trousers",
    type: "trouser",
    qty: 0,
    washtype: { iron: false, wash: false, dryclean: false, chemical: false },
    price: 0,
  });
  const [jeans, setJeans] = useState({
    name: "Jeans",
    type: "jeans",
    qty: 0,
    washtype: { iron: false, wash: false, dryclean: false, chemical: false },
    price: 0,
  });
  const [boxer, setBoxer] = useState({
    name: "Boxers",
    type: "boxer",
    qty: 0,
    washtype: { iron: false, wash: false, dryclean: false, chemical: false },
    price: 0,
  });
  const [jogger, setJogger] = useState({
    name: "Joggers",
    type: "jogger",
    qty: 0,
    washtype: { iron: false, wash: false, dryclean: false, chemical: false },
    price: 0,
  });

  const products = [
    {
      initial: shirt,
      method: setShirt,
    },
    {
      initial: tshirt,
      method: setTshirt,
    },
    {
      initial: trouser,
      method: setTrouser,
    },
    {
      initial: jeans,
      method: setJeans,
    },
    {
      initial: boxer,
      method: setBoxer,
    },
    {
      initial: jogger,
      method: setJogger,
    },
  ];
  const finalData = {
    shirt: shirt,
    tshirt: tshirt,
    jeans: jeans,
    trouser: trouser,
    boxer: boxer,
    jogger: jogger,
    orderid: "OR0001",
  };
  const [summary, setSummary] = useState(false);
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div className="order-table">
        <div className="order-table-header">Create Order</div>
        <OrderHeader />
        {products.map((product, index) => {
          return <Order product={product} key={index} />;
        })}
        <div className="order-button">
          <button id="proceed" onClick={() => setSummary(!summary)}>
            Proceed
          </button>
          <button id="cancel" onClick={() => navigate("/order1")}>
            Cancel
          </button>
        </div>
      </div>
      {confirm && <ConfirmOrder />}
      {summary && (
        <Summary
          handleToggle={{
            summary,
            setSummary,
            products,
            finalData,
            confirm,
            setConfirm,
          }}
        />
      )}
    </>
  );
}

export default OrderTable;
