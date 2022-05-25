import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentOption from "./PaymentOption";

const stripeTestPromise = loadStripe(process.env.REACT_APP_API_KEY);

export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise} style={{width:"100%"}} >
      <PaymentOption amount={props.amount}/>
    </Elements>
  );
}
