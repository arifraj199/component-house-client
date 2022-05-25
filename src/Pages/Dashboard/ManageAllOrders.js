import React from "react";
import { useQuery } from "react-query";
import LoadSpinner from "../Shared/LoadSpinner";
import AllOrder from "./AllOrder";

const ManageAllOrders = () => {
  const { data: orders, isLoading } = useQuery("orders", () =>
    fetch("http://localhost:5000/order", {
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
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage All Orders:{orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                orders.map((order,index)=><AllOrder 
                    key={order._id}
                    order={order}
                    index={index}
                ></AllOrder>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
