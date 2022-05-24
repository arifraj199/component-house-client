import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user.uid);
  return (
    <div>
      <h2 className="text-2xl font-bold text-left">My Profile</h2>
      <hr className="mt-4 w-5/6 text-black" />
      <div class="hero justify-start">
        <div class="hero-content items-start flex-col lg:flex-row">
          <div class="avatar">
            <div class="w-40 rounded-xl">
            <img
            src={
              user.photoURL || "https://api.lorem.space/image/face?hash=64318"
            }
            class="max-w-sm rounded-lg shadow-2xl"
            alt="user_image"
          />
            </div>
          </div>
         
          <div className="text-left">
            <h1 class="text-1xl">User ID:</h1>
            <span className="font-bold block mb-2">{user.uid}</span>
            <h1 class="text-1xl">User Name:</h1>
            <span className="font-bold block mb-2">{user.displayName}</span>
            <h1 class="text-1xl">User Email:</h1>
            <span className="font-bold block">{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
