import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../redux/cart/cartActions";
import { priceFormatDots } from "../utils/priceFormat";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

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
      <div className="text-center">
        <button
          className={classnames("fas fa-angle-left", {
            "text-gray-500": quantity === 1,
          })}
          onClick={() => removeItem(cartItem)}
        ></button>
        <span className="mx-3">{quantity}</span>
        <button
          className="fas fa-angle-right"
          onClick={() => addItem(cartItem)}
        ></button>
      </div>
      <span className="text-center">{priceFormatDots(price)}</span>
      <div className="text-center">
        <button
          onClick={() => clearItem(cartItem)}
          className="fas fa-times text-gray-500 hover:text-gray-900"
        ></button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
