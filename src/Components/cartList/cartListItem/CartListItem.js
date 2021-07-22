import React from "react";

const CartListItem = ({ name, price, id, removeFromCart }) => {
  const removeCart = () => {
    
  };
  return (
    <li>
      <h3>{name}</h3>
      <p>{price}</p>
    </li>
  );
};

export default CartListItem;
