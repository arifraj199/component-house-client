import React from "react";
import { toast } from "react-toastify";

const DeleteUserModal = ({ deleteIem, setDeleteItem, refetch }) => {
  const { _id } = deleteIem;
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
      headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("item is deleted");
          setDeleteItem(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-user-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h1 class="font-bold text-lg text-2xl">
            Are you want to delete this item?
          </h1>
          <p class="py-4 text-md text-red-600">
            Please make sure before deleting...
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error"
              for="delete-user-modal"
            >
              Delete
            </button>

            <label for="delete-user-modal" class="btn btn-warning">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
