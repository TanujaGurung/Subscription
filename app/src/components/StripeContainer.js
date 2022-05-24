import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentOption from "./PaymentOption";

const PUBLIC_KEY =
  "pk_test_51Kc8iQB6GMJd3WhhN9w1VNKhKol74KfnP3GiXpQ7YRHkL5onDGcPNJur2fao2p6oTi1uHT3KZevBHMtnhtEge8hR00QEOI9TxP";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentOption />
    </Elements>
  );
}
