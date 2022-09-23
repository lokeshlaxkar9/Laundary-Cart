import React from "react";
import "./SummaryRow.css";
function SummaryRow({ product, washtype }) {
  let washDetail = "";
  const price = { wash: 20, iron: 10, dryclean: 30, chemical: 40 };
  if (washtype.iron) washDetail += "Iron ";
  if (washtype.wash) washDetail += "Wash ";
  if (washtype.dryclean) washDetail += "DryClean ";
  if (washtype.chemical) washDetail += "Chemical ";
  let singlePrice =
    Number(washtype.wash) * price.wash +
    Number(washtype.iron) * price.iron +
    Number(washtype.dryclean) * price.dryclean +
    Number(washtype.chemical) * price.chemical;

  return (
    <div className="summary-individual-row">
      <div className="summary-individuals">{product.initial.name}</div>
      <div className="summary-individuals">{washDetail}</div>
      <div className="summary-individuals">
        <span id="summary-pain">
          {product.initial.qty} X {singlePrice} = {"    "}
        </span>
        {"   "}
        <span id="summary-pain-2">{product.initial.price}</span>
      </div>
    </div>
  );
}

export default SummaryRow;
