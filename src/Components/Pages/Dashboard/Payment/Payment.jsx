import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../Checkout/Checkout";
import { useParams } from "react-router-dom";
import CheckoutForm from "../Checkoutform.jsx/Checkoutform";
import { useState,useEffect } from "react";
// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { membership } = useParams();

  // console.log(membership);
  // console.log(membership);
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="text-4xl font-bold text-[#EAA334]">
        MEMBERSHIP PAYMENT
      </div>

      <div className="text-xl">Great minds need great meals</div>
      <div
        className="w-1/12
       -bold"
      >
        <hr></hr>
      </div>
      <div className="w-[500px] ">
        <Elements stripe={stripePromise}>
          <CheckoutForm membership={membership}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
