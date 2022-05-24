import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PlaceOrder = ({ items, refetch, setCloseModal }) => {
  const [user] = useAuthState(auth);

  const { _id, available_quantity, minimum_order_quantity } = items;

  const [orderError, setOrderError] = useState("");

  const displayName = useRef("");
  const address = useRef("");
  const phoneNumber = useRef(0);
  const orderQuantity = useRef(0);

  const handleOrderQuantity = (event) => {
    event.preventDefault();
    const id = _id;
    const quantity = orderQuantity.current.value;
    console.log(quantity);
    if (quantity >= minimum_order_quantity && quantity <= available_quantity) {
      const { available_quantity, ...rest } = items;
      const newQuantity = parseInt(available_quantity) - parseInt(quantity);
      const newItem = { available_quantity: newQuantity, ...rest };

      //for quantity update
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
          if (data.success) {
            toast("order is set");
            setOrderError("");
            refetch();
          }
        });

      orderQuantity.current.value = "";

      // for send data to the server
      const userInfo = {
        name: displayName.current.value,
        email: user?.email,
        picture: items?.picture,
        itemName: items?.name,
        address: address.current.value,
        phone: phoneNumber.current.value,
        quantity: quantity,
      };

      //post user info
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      // console.log(userInfo);
      fetch("http://localhost:5000/purchase", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            toast.success("data send to the server");
            setCloseModal(false);
            refetch();
          }
        });
    } else {
      if (quantity < minimum_order_quantity) {
        setOrderError("You should have order more than minimum order");
      } else {
        setOrderError("You should have ordered less from available items");
      }
      orderQuantity.current.value = "";
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
              ref={displayName}
              value={user?.displayName}
              disabled
              placeholder="Enter Your Full Name"
              class="input input-bordered w-full max-w-xs my-3"
            />

            <input
              type="email"
              value={user?.email}
              disabled
              placeholder="email"
              class="input input-bordered w-full max-w-xs mb-3"
            />
            <input
              type="text"
              value={items?.name}
              disabled
              placeholder="Enter Your Full Name"
              class="input input-bordered w-full max-w-xs my-3"
            />
            <input
              type="text"
              ref={address}
              placeholder="Enter Your Address"
              class="input input-bordered w-full max-w-xs mb-3"
            />

            <input
              type="number"
              ref={phoneNumber}
              placeholder="Enter Your Phone Number"
              class="input input-bordered w-full max-w-xs mb-3"
            />

            <input
              type="number"
              placeholder="Order Quantity"
              ref={orderQuantity}
              class="input input-bordered w-full max-w-xs"
            />
            <p className="text-red-500 mb-3">
              <small>{orderError}</small>
            </p>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Order"
                className="btn w-full max-w-xs"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
