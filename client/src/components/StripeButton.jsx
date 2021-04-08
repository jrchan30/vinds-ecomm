import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { priceFormatDots } from "../utils/priceFormat";

const StripeButton = ({ price }) => {
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const stripePrice = price * 100;

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: stripePrice,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
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
