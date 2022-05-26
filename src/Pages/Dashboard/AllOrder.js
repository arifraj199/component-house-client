import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const AllOrder = ({ order, index, setDeleteItem, refetch }) => {
  const { itemName, picture, quantity, price } = order;

  const handleApprove = (id) => {
    const approve = {
      approve: true,
    };
    const url = `https://pure-sierra-39289.herokuapp.com/order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(approve),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order send for shipping");
        refetch();
      });
  };

  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={picture} alt={itemName} />
          </div>
        </div>
      </td>
      <td>{itemName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        {!order.paid && <button className="btn btn-warning">Unpaid</button>}
        {order.paid && (
          <button
            onClick={() => handleApprove(order._id)}
            disabled={order.approve}
            className="btn btn-success"
          >
            Paid
          </button>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeleteItem(order)}
          for="remove-modal"
          class="btn bg-red-800 modal-button"
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </label>
      </td>
    </tr>
  );
};

export default AllOrder;
