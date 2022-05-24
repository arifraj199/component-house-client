import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  // const userName = user.split(' ')[0];
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="navbar bg-base-100 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              {user ? (
                <>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link onClick={logout} to="/login">
                  <span className="font-bold">Logout {user?.displayName?.toUpperCase().split(' ')[0]}</span>
                  </Link>
                  {/* <p className=" btn-sm ml-3 w-7/12  bg-slate-600 text-white">
                    {user?.displayName}
                  </p> */}
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Component House
        </Link>
      </div>
      <div className="navbar-center lg:navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {user ? (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <Link style={{"borderRadius":"20px","font-size":"14px"}} className=" btn btn-outline btn-secondary " onClick={logout} to="/login">
                  <span className="font-bold ">SignOut {user?.displayName?.toUpperCase().split(' ')[0]}</span>
                </Link>
                {/* <Link className=" btn-sm mt-2 bg-slate-600 text-white" to="">
                  {user?.displayName}
                </Link> */}
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          tabIndex="1"
          for="component-drawer"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
