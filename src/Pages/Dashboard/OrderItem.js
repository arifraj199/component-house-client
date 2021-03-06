import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

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
      <td>{order.itemName}</td>
      <td>${order.price}</td>
      <td>{order.quantity}</td>
      <td>
        {order.price && !order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            {" "}
            <button class="btn btn-outline btn-secondary font-bold">PAY</button>
          </Link>
        )}
        {order.price && order.paid && !order.approve && (
          <Link to={`/dashboard/payment/${order._id}`}>
            {" "}
            <button class="btn btn-error font-bold">Pending</button>
          </Link>
        )}
        {order.price && order.paid && order.approve && (
          <div>
            <span className="text-success">Shipped</span>
            <p>
              Transaction Id:{" "}
              <span className="text-success">{order?.transactionId}</span>
            </p>
          </div>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeleteItem(order)}
          disabled={order.paid}
          for="delete-modal"
          class="btn bg-red-800 modal-button"
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </label>
      </td>
    </tr>
  );
};

export default OrderItem;
