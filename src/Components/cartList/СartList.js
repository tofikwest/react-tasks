import React from "react";
import CartListItem from "./cartListItem/CartListItem";

const СartList = ({ cart, removeFromCart }) => {
  return (
    <ul className="cartList">
      {cart.map((product) => (
        <CartListItem
          {...product}
          key={product.id}
          removeFromCart={removeFromCart}
        />
      ))}
    </ul>
  );
};

export default СartList;
