import React from "react";

const AllOrder = ({order,index}) => {
    const {itemName,picture,quantity,price} = order;
  return (
    <tr>
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
      <td><button className="btn btn-error">Remove</button></td>
    </tr>
  );
};

export default AllOrder;
