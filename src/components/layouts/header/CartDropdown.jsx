import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../../CustomButton";
import CartItem from "./CartItem";
import { selectCartItems } from "../../../redux/cart/cartSelector";
import { toggleCartHidden } from "../../../redux/cart/cartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const baseStylesContainer =
    "block w-72 border-2 border-gray-600 bg-white rounded-lg p-4 shadow-lg";

  const renderCartList = () => {
    return cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ));
  };

  const showItems = () => (
    <div className={`${baseStylesContainer} h-96`}>
      <div className="h-72 overflow-y-auto flex flex-col divide-y divide-gray-400">
        {renderCartList()}
      </div>
      <div className="mt-5">
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          Go to checkout
        </CustomButton>
      </div>
    </div>
  );

  const showEmptyMessage = () => (
    <div className={`${baseStylesContainer}`}>
      <span>Your cart is empty</span>
    </div>
  );

  return (
    <div className="absolute right-0 top-10">
      {cartItems.length > 0 ? showItems() : showEmptyMessage()}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
