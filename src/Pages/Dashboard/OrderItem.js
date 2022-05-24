
import React from "react";

const OrderItem = ({ order, setDeleteItem }) => {
  return (
    <tr className="text-center">
      <th>
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={order?.picture} alt={order?.itemName} />
          </div>
        </div>
      </th>
      <td>{order._id}</td>
      <td>{order.itemName}</td>
      <td>${order.price}</td>
      <td>{order.quantity}</td>
      <td>
        <button class="btn btn-outline btn-secondary font-bold">PAY</button>
      </td>
      <td>
        <label
          onClick={() => setDeleteItem(order)}
          for="delete-modal"
          class="btn bg-red-800 modal-button"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default OrderItem;
