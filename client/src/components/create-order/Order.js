import React, { useEffect, useState } from "react";
import "./Order.css";
import washing from "./assets/washing-machine.png";
import ironing from "./assets/ironing-1.png";
import towel from "./assets/towel.png";
import bleachSelect from "./assets/bleach.png";
import washingSelect from "./assets/washing-machine-1.png";
import ironingSelect from "./assets/ironing.png";
import towelSelect from "./assets/towelSelect.png";
import bleach from "./assets/bleach-1.png";

function Order({ product }) {
  const price = { wash: 20, iron: 10, dryclean: 30, chemical: 40 };
  const [productPrice, setProductPrice] = useState(0);
  let singlePrice =
    Number(product.initial.washtype.wash) * price.wash +
    Number(product.initial.washtype.iron) * price.iron +
    Number(product.initial.washtype.dryclean) * price.dryclean +
    Number(product.initial.washtype.chemical) * price.chemical;
  useEffect(() => {
    // let singlePrice =
    //   Number(product.initial.washtype.wash) * price.wash +
    //   Number(product.initial.washtype.iron) * price.iron +
    //   Number(product.initial.washtype.dryclean) * price.dryclean +
    //   Number(product.initial.washtype.chemical) * price.chemical;

    setProductPrice(product.initial.qty * singlePrice);
  }, [product]);

  const [washState, setWashState] = useState(false);
  const [ironState, setIronState] = useState(false);
  const [towelState, setTowelState] = useState(false);
  const [bleachState, setBleachState] = useState(false);

  const span = (
    <span id="price-expression">
      {product.initial.qty} X {singlePrice} ={" "}
    </span>
  );

  return (
    <div className="order-row">
      <div className="order-row-items">
        <span id="product-name">{product.initial.name}</span>
      </div>
      <div className="order-row-items">
        <input
          type="number"
          name="qty"
          defaultValue={0}
          min={0}
          max={10}
          style={{ width: "2.5em", marginLeft: "3em" }}
          onChange={(e) => {
            const newVal = product.initial;
            product.method({
              ...newVal,
              qty: e.target.value,
              price: e.target.value * singlePrice,
            });
          }}
          onKeyPress={(e) => e.preventDefault()}
        />
      </div>
      <div className="order-row-items img-washtype">
        <img
          src={washState ? washingSelect : washing}
          alt=""
          onClick={() => {
            setWashState(!washState);
            const newVal = product.initial;
            const val = product.initial.washtype;
            product.method({
              ...newVal,
              washtype: { ...val, wash: !product.initial.washtype.wash },
            });
          }}
        />
        <img
          src={ironState ? ironingSelect : ironing}
          alt=""
          onClick={() => {
            setIronState(!ironState);
            const newVal = product.initial;
            const val = product.initial.washtype;
            product.method({
              ...newVal,
              washtype: { ...val, iron: !product.initial.washtype.iron },
            });
          }}
        />
        <img
          src={towelState ? towelSelect : towel}
          alt=""
          style={{ color: "blue" }}
          onClick={() => {
            setTowelState(!towelState);
            const newVal = product.initial;
            const val = product.initial.washtype;
            product.method({
              ...newVal,
              washtype: {
                ...val,
                dryclean: !product.initial.washtype.dryclean,
              },
            });
          }}
        />
        <img
          src={bleachState ? bleachSelect : bleach}
          alt=""
          onClick={() => {
            setBleachState(!bleachState);
            const newVal = product.initial;
            const val = product.initial.washtype;
            product.method({
              ...newVal,
              washtype: {
                ...val,
                chemical: !product.initial.washtype.chemical,
              },
            });
          }}
        />
      </div>
      <div className="order-row-items price-row">
        <p
          id="price"
          style={{
            marginLeft: "3em",
          }}
        >
          {productPrice ? span : "__"}
          {productPrice ? productPrice : ""}
        </p>
      </div>
    </div>
  );
}

export default Order;
