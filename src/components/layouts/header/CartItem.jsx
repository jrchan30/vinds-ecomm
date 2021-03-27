import React from "react";
import { priceFormatHuman } from "../../../utils/priceFormat";

const CartItem = ({ item: { id, imageUrl, name, price, quantity } }) => {
  return (
    <div className="flex py-2">
      <img className="mr-4 rounded-lg" src={imageUrl} alt={name} width="100" />
      <div className="truncate my-auto">
        <p className="font-semibold truncate">{name}</p>
        <p>{`${quantity} x ${priceFormatHuman(price)}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
