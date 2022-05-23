import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [id]);

  const { _id, available_quantity, minimum_order_quantity } = items;
  //   console.log(id);
  // console.log(available_quantity,name);

  const orderQuantity = useRef(0);

  const handleOrderQuantity = (event) => {
    event.preventDefault();
    const id = _id;
    // console.log(id);
    const quantity = orderQuantity.current.value;
    console.log(quantity);
    if (quantity >= minimum_order_quantity && quantity <= available_quantity) {
      const { available_quantity, ...rest } = items;
      const newQuantity = parseInt(available_quantity) - parseInt(quantity);
      const newItem = { available_quantity: newQuantity, ...rest };
      //   newItem.items = items;
      setItems(newItem);
      //   console.log(newItem);

      fetch(`http://localhost:5000/purchase/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.success){
              toast("order is set")
          }
        });

      orderQuantity.current.value = "";
    } else {
    }
  };

  return (
    <div>
      <input type="checkbox" id="component-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="component-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-2xl mb-4 text-green-700">
            Please Provide Your Information
          </h3>
          <form onSubmit={handleOrderQuantity}>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              class="input input-bordered w-full max-w-xs my-3"
            />

            <input
              type="email"
              placeholder="email"
              class="input input-bordered w-full max-w-xs mb-3"
            />
            <input
              type="text"
              placeholder="Enter Your Address"
              class="input input-bordered w-full max-w-xs mb-3"
            />

            <input
              type="number"
              placeholder="Enter Your Phone Number"
              class="input input-bordered w-full max-w-xs mb-3"
            />

            <input
              type="number"
              placeholder="Order Quantity"
              ref={orderQuantity}
              class="input input-bordered w-full max-w-xs mb-3"
            />

            <input type="submit" value="Order" class="btn w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
