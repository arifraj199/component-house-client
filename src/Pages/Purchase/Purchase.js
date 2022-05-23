import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadSpinner from "../Shared/LoadSpinner";
import PlaceOrder from "./PlaceOrder";

const Purchase = () => {
  const { id } = useParams();
  const [closeModal, setCloseModal] = useState(false);

  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery(["items", id], () =>
    fetch(`http://localhost:5000/purchase/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img width="500" src={items?.picture} alt="Item" />
          <div className="text-left ml-4">
            <h1 class="text-3xl font-bold">{items?.name}</h1>
            <h2 className="text-2xl font-bold mt-2 my-6 text-emerald-500">
              ${items?.price}(per unit)
            </h2>

            <hr className=" mt-5 mb-8" />

            <p className="text-1xl font-semibold mb-2">
              Available Quantity: {items?.available_quantity}
            </p>
            <p className="text-1xl font-semibold">
              Minimum Order Quantity: {items?.minimum_order_quantity}
            </p>

            <p class="py-6">{items?.description}</p>
            <div>
              <label
                onClick={() => setCloseModal(true)}
                for="component-modal"
                class="btn btn-primary w-1/7"
              >
                Purchase Item
              </label>
            </div>
          </div>
        </div>
      </div>
      {closeModal && (
        <PlaceOrder
          items={items}
          refetch={refetch}
          setCloseModal={setCloseModal}
        ></PlaceOrder>
      )}
    </div>
  );
};

export default Purchase;
