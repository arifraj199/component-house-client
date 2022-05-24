import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user.uid);
  return (
    <div>
      <h2 className="text-2xl font-bold text-left">My Profile</h2>
      <hr className="mt-4 mb-5 w-5/6 text-black" />
      <div class="hero justify-start">
        <div class="hero-content  flex-col lg:flex-row">
          <div class="avatar">
            <div class="w-44 rounded-xl">
              <img
                src={
                  user.photoURL ||
                  "https://api.lorem.space/image/face?hash=64318"
                }
                class="max-w-sm rounded-lg shadow-2xl"
                alt="user_image"
              />
            </div>
          </div>
          

          <div className="text-left">
            <h1 class="text-1xl">User Name:</h1>
            <span className="font-bold block text-xl mb-2">{user.displayName}</span>
            <h1 class="text-1xl">User Email:</h1>
            <span className="font-bold block text-xl mb-4">{user.email}</span>
            <button class="btn btn-active btn-secondary ">Update Profile</button>
          </div>
          
        </div>
        
      </div>
      {/* <div className="text-left ml-48">
      <button class="btn btn-active btn-secondary ">Update Profile</button>
      </div> */}
      
    </div>
  );
};

export default MyProfile;
