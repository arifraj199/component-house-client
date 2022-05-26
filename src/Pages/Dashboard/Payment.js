import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadSpinner from "../Shared/LoadSpinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3TBqIHyeV1ekq6xSRjZj3rUc0340c5nP3puaWFPZXKlYzgWLymq8Z9lKGrk9y2ygSpfGG7xGpdplYUiOybpbqJ00Oy2XFv5t"
);

const Payment = () => {
  const { id } = useParams();
  const { data: items, isLoading } = useQuery(["items", id], () =>
    fetch(`https://pure-sierra-39289.herokuapp.com/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }
  return (
    <div className="ml-12 mt-12">
      <div class="card text-left w-50 max-w-md bg-base-100 shadow-xl mb-2">
        <h2 className="text-cyan-700 text-2xl font-bold ml-2">Payment</h2>
        <hr className="w-7/5 mt-2" />
        <div class="card-body">
          <p>
            Welcome{" "}
            <span className="text-teal-500 font-semibold">
              {items[0]?.name}
            </span>
          </p>
          <p className="text-2xl">
            <span className="text-green-600 font-bold">
              {" "}
              {items[0]?.itemName}
            </span>
          </p>
          <p className="text-green-800 font-bold text-xl">
            Pay for: ${items[0]?.price}
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md  shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm items={items} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
