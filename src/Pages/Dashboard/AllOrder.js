import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AllOrder = ({order,index,setDeleteItem}) => {
    const {itemName,picture,quantity,price} = order;
  return (
    <tr className="text-center">
      <th>{index+1}</th>
      <td><div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={picture} alt={itemName} />
          </div>
        </div></td>
      <td>{itemName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td><button className="btn btn-secondary">Unpaid</button></td>
      <td><label
          onClick={() => setDeleteItem(order)}
          for="remove-modal"
          class="btn bg-red-800 modal-button"
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </label></td>
    </tr>
  );
};

export default AllOrder;
