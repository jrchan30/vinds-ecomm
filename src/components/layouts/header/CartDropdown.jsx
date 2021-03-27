import React from "react";
import { connect } from "react-redux";

import CustomButton from "../../CustomButton";
import CartItem from "./CartItem";
import { selectCartItems } from "../../../redux/cart/cartSelectors";

const CartDropdown = ({ cartItems }) => {
  const renderCartList = () => {
    return cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ));
  };

  return (
    <div className="absolute right-0 top-10">
      <div className="block h-96 w-72 border-2 border-gray-600 bg-white rounded-lg p-4 shadow-lg">
        <div className="h-72 overflow-y-auto flex flex-col divide-y divide-gray-400">
          {renderCartList()}
        </div>
        <div className="mt-5">
          <CustomButton>Go to checkout</CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
