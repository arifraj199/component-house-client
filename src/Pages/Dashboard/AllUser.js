import React, { useState } from "react";
import { useQuery } from "react-query";
import LoadSpinner from "../Shared/LoadSpinner";
import DeleteUserModal from "./DeleteUserModal";
import Users from "./Users";

const AllUser = () => {
  const [deleteIem, setDeleteItem] = useState(null);
  const { data: users, isLoading,refetch } = useQuery("users", () =>
    fetch("https://pure-sierra-39289.herokuapp.com/users",{
      method:"GET",
      headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => res.json())
  );


  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  return (
    <div class="overflow-x-auto">
      <h2 className="text-2xl text-left font-bold">Users</h2>
      <hr className="mt-4 w-5/6 mb-5 text-black" />
      <table class="table table-zebra w-full">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <Users key={index} user={user} index={index} setDeleteItem={setDeleteItem} refetch={refetch}></Users>
          ))}
        </tbody>
      </table>
      {deleteIem && (
            <DeleteUserModal
              deleteIem={deleteIem}
              setDeleteItem={setDeleteItem}
              refetch={refetch}
            ></DeleteUserModal>
          )}
    </div>
  );
};

export default AllUser;
