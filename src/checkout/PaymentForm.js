/** @format */

import React from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe(
  "pk_test_51ITU15CqMVQEnFChiWx4TH0HiA4wMx5fsGHRAmB0IlNPiQmduiVymqkg7ZW2PCyCtZznLIEZBDVsffWFSDoa653A00G9lpRE0D"
);

const PaymentForm = ({
  token,
  shippingData,
  handleCapture,
  nextStep,
  backStep,
  timeout,
  data,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    console.log("s");
    if (!stripe || !elements) return console.log("s");

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      alert(error.message);
    } else {
      const orderData = {
        line_items: token.live.line_items,
        customer: {
          firstname: shippingData.firstname,
          lastname: shippingData.lastname,
          email: shippingData.email,
        },
        shipping: {
          name: "primary",
          shipping_address: shippingData.address,
          town_city: shippingData.city,
          country_state: shippingData.shippingSubdividion,
          postal_code: shippingData.pincode,
          country: shippingData.shippingCountry,
        },
        fulfillment: {
          shipping_method: shippingData.shippingOption,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      data(orderData);
      timeout();
      handleCapture(token.id, orderData);
      nextStep();
    }
  };
  return (
    <div className="payment-content">
      <Review token={token} />
      <h6>Your Payment</h6>
      <p className="card-p">Enter your Card Details <br /> (eg 4242*4   04/24 242 42242) </p>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <div className="card-layout">
                <CardElement className="card" />

                <br />
                <div className="order-btns">
                  <button className="back-btn" onClick={() => backStep()}>
                    Go back
                  </button>
                  <button type="submit" className="payment" disabled={!stripe}>
                    Pay {token.live.subtotal.formatted_with_symbol}
                  </button>
                </div>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
