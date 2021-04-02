import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { priceFormatDots } from "../utils/priceFormat";

const StripeButton = ({ price }) => {
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const stripePrice = price * 100;

  const onToken = (token) => {
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="VINDS"
      billingAddress
      shippingAddress
      description={`Your total is ${priceFormatDots(price)}`}
      amount={stripePrice}
      currency="IDR"
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
