import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="component-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">
        <h2 className="text-4xl text-purple-500 text-left mb-6 font-bold">
          Dashboard
        </h2>

        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="component-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* sidebar content */}

          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          <li>
            {admin ? (
              <>
                <Link to="/dashboard/manageallorder">Manage All Orders</Link>
                <Link to="/dashboard/addproduct">Add a Products</Link>
                <Link to="/dashboard/manageproduct">Manage Products</Link>
                <Link to="/dashboard/alluser">All Users</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard/myorder">My Order</Link>
                <Link to="/dashboard/addreview">Add Review</Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
