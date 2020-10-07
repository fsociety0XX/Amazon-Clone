import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";

var priceArray = [];
var sum = 0;
function SubTotal() {
  const [{ basket }] = useStateValue();

  const getBasketTotal = (bval) => {
    bval.map((data) => {
      priceArray.push(data.price);
    });
    sum = priceArray.reduce((a, b) => a + b, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{`${sum.toFixed(2)}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default SubTotal;
