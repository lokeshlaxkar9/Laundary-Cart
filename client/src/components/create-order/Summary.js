import React from "react";
import "./Summary.css";
import axios from "axios";
import SummaryRow from "./SummaryRow";
function Summary({ handleToggle }) {
  let totalPrice = 0;
  let totalQuantity = 0;
  handleToggle.products.forEach((product) => {
    totalPrice += product.initial.price;
    totalQuantity += Number(product.initial.qty);
  });
  return (
    <div className="summary">
      <div className="summary-header">
        <span id="summary-heading">Summary</span>
        <span
          id="summary-canel"
          onClick={() => {
            handleToggle.setSummary(!handleToggle.summary);
          }}
        >
          X
        </span>
      </div>
      <div className="header-store">
        <p>
          Store Location:
          <br /> <span className="store-address">JP Nagar</span>
        </p>
        <p>
          Store Address: <br />
          <span className="store-address">Near Phone booth, 10th road,</span>
        </p>
        <p>
          Phone: <br /> <span className="store-address">9999999999</span>
        </p>
      </div>
      <div className="summary-order-table">
        <p>Order Details</p>
        <div className="summary-order-table-rows">
          {handleToggle.products.map((product, index) => {
            if (product.initial.qty > 0) {
              return (
                <SummaryRow
                  product={product}
                  washtype={product.initial.washtype}
                  key={index}
                />
              );
            }
          })}
          <div id="price-block">
            <p id="price-container">
              TOTAL: <span id="finalPrice">{totalPrice}</span>
            </p>
          </div>
        </div>
        <div className="summary-address">
          <p>Address</p>
          <div className="address-flex">
            <div className="home-address">
              <p className="home-name">Home</p>
              <p className="faltu">#223 10th road, JP Nagar, Banglore</p>
            </div>
            <div className="home-address">
              <p className="home-name">Other</p>
              <p className="faltu">#223 10th road, JP Nagar, Banglore</p>
            </div>
            <div id="add-new">Add New</div>
          </div>
        </div>
      </div>
      <footer className="summary-footer">
        <button
          id="summary-confirm"
          onClick={async () => {
            const userId = localStorage.getItem("userId");
            try {
              const data = await axios.post(
                "https://lpglaundry.herokuapp.com/neworder",
                {
                  ...handleToggle.finalData,
                  totalPrice: totalPrice,
                  totalQuantity: totalQuantity,
                  user: userId,
                }
              );
              if (data.status == 200) {
                // alert("Order Confirmed");
                handleToggle.setConfirm(!handleToggle.confirm);
                handleToggle.setSummary(!handleToggle.summary);
              }
            } catch (e) {
              console.log(e.message);
            }
          }}
        >
          Confirm
        </button>
      </footer>
    </div>
  );
}

export default Summary;
