import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="component-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">
        
      <h2 className="text-3xl text-purple-500">Welcome to Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="component-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
         {/* sidebar content */}
         <li>
            <Link to='/dashboard/profile'>My Profile</Link>
          </li>
          <li>
            <Link to='/dashboard/myorder'>My Order</Link>
          </li>
          <li>
            <Link to='/dashboard/addreview'>Add Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
