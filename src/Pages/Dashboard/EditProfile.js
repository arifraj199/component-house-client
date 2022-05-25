import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const EditProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const imageAPI = "abba58955c881135661a7c54bf264eca";

  const onSubmit = async (data, event) => {
      
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageAPI}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          const img = result.data.url;

          const updateInfo = {
            name: user?.displayName,
            email: user?.email,
            institute: data.institution,
            department: data.department,
            address: data.address,
            phone: data.phone,
            linkedin:data.linkedin,
            image: img,
          };

          const url = "http://localhost:5000/user";
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateInfo),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.acknowledged === true) {
                toast.success("Profile Updated Successfully");
                reset();
                navigate('/dashboard');
              } else {
                toast.error("Failed to Update Profile");
              }
            });
        }
      });
    event.target.reset();
  };
  return (
    <div className="my-14 w-4/5 lg:w-1/3 py-6 rounded-lg mx-auto shadow-xl">
      <h2 className="text-2xl text-purple-800 font-bold mb-4">
        Update Your Profile
      </h2>
      <form
        className=" lg:w-4/5 ml-8 lg:ml-18"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {})}
            type="text"
            value={user?.displayName}
            disabled
            placeholder="Enter Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="text-red-500">{errors.name?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {})}
            type="email"
            value={user?.email}
            disabled
            placeholder="Enter Email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Institution</span>
          </label>
          <input
            {...register("institution", {
              required: {
                value: true,
                message: "institution is required",
              },
            })}
            type="text"
            placeholder="Institution Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.institution?.type === "required" && (
              <span className="text-red-500">
                {errors.institution?.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Department</span>
          </label>
          <input
            {...register("department", {
              required: {
                value: true,
                message: "department is required",
              },
            })}
            type="text"
            placeholder="Department Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.department?.type === "required" && (
              <span className="text-red-500">{errors.department?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Address:</span>
          </label>
          <input
            {...register("address", {
              required: {
                value: true,
                message: "address is required",
              },
            })}
            type="text"
            placeholder="Your Address"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.address?.type === "required" && (
              <span className="text-red-500">{errors.address?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Contact</span>
          </label>
          <input
            {...register("phone", {
              required: {
                value: true,
                message: "phone number is required",
              },
            })}
            type="number"
            placeholder="Enter Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="text-red-500">{errors.phone?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">LinkedIn URL:</span>
          </label>
          <input
            {...register("linkedin", {
              required: {
                value: true,
                message: "linkedin is required",
              },
            })}
            type="text"
            placeholder="Your linkedin profile"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.linkedin?.type === "required" && (
              <span className="text-red-500">{errors.linkedin?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
            type="file"
            placeholder="Enter Image"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="text-red-500">{errors.image?.message}</span>
            )}
          </label>
        </div>

        <input
          className="btn btn-outline btn-secondary w-full max-w-xs mr-12"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default EditProfile;
