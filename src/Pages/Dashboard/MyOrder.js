import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import LoadSpinner from "../Shared/LoadSpinner";
import OrderItem from "./OrderItem";
import DeleteConfirmModal from "./DeleteConfirmModal";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [deleteIem, setDeleteItem] = useState(null);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://pure-sierra-39289.herokuapp.com/purchase?email=${user?.email}`,{
      method:"GET",
      headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-left">My Orders</h2>
      <hr className="mt-4 mb-5 w-5/6 text-black" />
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr className="text-center">
              <th>Avatar</th>
              <th>Item Name</th>
              <th>Total Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderItem
                key={index}
                order={order}
                setDeleteItem={setDeleteItem}
                refetch={refetch}
              ></OrderItem>
            ))}
          </tbody>
        </table>
        <div>
          {deleteIem && (
            <DeleteConfirmModal
              deleteIem={deleteIem}
              setDeleteItem={setDeleteItem}
              refetch={refetch}
            ></DeleteConfirmModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
