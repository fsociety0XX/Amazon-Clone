import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import BasketItem from "./BasketItem";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <BasketItem />
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
