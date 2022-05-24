import React from "react";
import { useQuery } from "react-query";
import LoadSpinner from "../Shared/LoadSpinner";
import Users from "./Users";

const AllUser = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  return (
    <div class="overflow-x-auto">
      <h2 className="text-2xl">Users</h2>
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <Users key={index} user={user} index={index}></Users>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
