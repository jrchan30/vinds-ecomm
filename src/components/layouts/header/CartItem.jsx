import React from "react";
import priceFormat from "../../../utils/priceFormat";

const CartItem = ({ item: { id, imageUrl, name, price, quantity } }) => {
  return (
    <div className="flex py-2">
      <img className="mr-4 rounded-lg" src={imageUrl} alt={name} width="100" />
      <div className="truncate my-auto">
        <p className="font-semibold">{name}</p>
        <p>{`${quantity} x ${priceFormat(price)}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
