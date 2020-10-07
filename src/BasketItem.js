import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import "./BasketItem.css";

function BasketItem() {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      {state.basket.length > 0
        ? state.basket.map((data) => (
            <>
              <img className="checkoutProduct__image" src={data.img} alt="" />

              <div className="checkoutProduct__info">
                <p className="checkoutProject__title">{data.title} </p>
                <p className="checkoutProject__price">
                  <small>$</small>
                  <strong>{data.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                  {Array(data.rating)
                    .fill()
                    .map(() => (
                      <p>✯</p>
                    ))}
                </div>
                <button onClick={() => removeFromBasket(data.id)}>
                  Remove from basket
                </button>
              </div>
            </>
          ))
        : ""}
    </div>
  );
}

export default BasketItem;
