import React from "react";
import { priceFormatDots } from "../utils/priceFormat";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    // <div className="py-4">
    //   <img className="mr-4 h-24 float-left" src={imageUrl} alt="" />
    //   <div className="block h-24">
    //     <h3>{name}</h3>
    //     <div>{priceFormatDots(price)}</div>
    //     <span>{quantity}</span>
    //   </div>
    // </div>
    <div className="grid grid-cols-5 py-2 items-center">
      <img className="mr-4 h-24 float-left" src={imageUrl} alt="" />
      <h3 className="truncate">{name}</h3>
      <div className="text-center">{quantity}</div>
      <span className="text-center">{priceFormatDots(price)}</span>
      <div className="text-center">
        <button className="fas fa-times text-gray-500 hover:text-gray-900"></button>
      </div>
    </div>
  );
};

export default CheckoutItem;
