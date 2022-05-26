import React from "react";
import { useNavigate } from "react-router-dom";

const Component = ({ component }) => {
  const {
    _id,
    name,
    price,
    picture,
    minimum_order_quantity,
    available_quantity,
    description,
  } = component;
  // console.log(component);
  const navigate = useNavigate();
  return (
    <div class="card w-max-lg bg-base-100 shadow-xl my-8">
      <figure>
        <img className="h-72 w-full" src={picture} alt="computer component" />
      </figure>
      <div class="p-10 text-left">
        <h2 class="card-title text-2xl">{name}</h2>
        <p className="text-xl font-semibold mt-2">
          Price: <span className="text-teal-500">${price}</span>
        </p>
        <p className=" mt-2">
          <span className="font-semibold">Minimum Order Quantity: </span>{" "}
          <span className="text-blue-600">{minimum_order_quantity}</span>
        </p>
        <p className=" mt-1">
          <span className="font-semibold">Available Quantity: </span>{" "}
          <span className="text-blue-600">{available_quantity}</span>
        </p>
        <p className=" mt-2">
          <small>{description}</small>
        </p>
        <div class="mt-4 justify-end">
          <button onClick={()=>navigate(`/purchase/${_id}`)} class="btn btn-primary w-full">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Component;
