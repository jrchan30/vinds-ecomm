import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem";
import PageWrapperAnimate from "../../components/layouts/PageWrapperAnimate";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cartSelector";
import { priceFormatDots } from "../../utils/priceFormat";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <PageWrapperAnimate>
      <div className="mt-10">
        <div className="grid grid-cols-5 font-semibold">
          <span>Product</span>
          <span>Name</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Price</span>
          <span className="text-center">Remove</span>
        </div>
        <div className="grid grid-cols-1 divide-y divide-black">
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
      <div className="text-right font-bold text-2xl">
        Total: {priceFormatDots(total)}
      </div>
    </PageWrapperAnimate>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
