import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AddReviews = () => {
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

    const image = data.picture[0];
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

          const reviewInfo = {
            name: data.name,
            company_name: data.company_name,
            review:data.review,
            ratings: data.ratings,
            picture: img,
          };

          const url = "http://localhost:5000/review";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(reviewInfo),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.acknowledged === true) {
                toast.success("Review Added Successfully");
                reset();
                navigate("/");
              } else {
                toast.error("Failed to Add Product");
              }
            });
        }
      });
  };
  return (
    <div className="my-14 w-4/5 lg:w-1/2 py-6 rounded-lg mx-auto shadow-xl">
      <h2 className="text-2xl text-purple-800 font-bold mb-4">Add A Review</h2>
      <form
        className=" lg:w-4/5 ml-8 lg:ml-18"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
            })}
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full max-w-xs lg:max-w-md"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="text-red-500">{errors.name?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            {...register("company_name", {
              required: {
                value: true,
                message: "company name is required",
              },
            })}
            type="text"
            placeholder="Enter company name"
            className="input input-bordered max-w-xs lg:max-w-md"
          />
          <label className="label">
            {errors.company_name?.type === "required" && (
              <span className="text-red-500">{errors.company_name?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Your Review</span>
          </label>
          <textarea
            {...register("review", {
              required: {
                value: true,
                message: "review is required",
              },
            })}
            type="text"
            placeholder="Your Review"
            className="input input-bordered h-16 w-full max-w-xs lg:max-w-md"
          />
          <label className="label">
            {errors.review?.type === "required" && (
              <span className="text-red-500">
                {errors.review?.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input
            {...register("ratings", {
              required: {
                value: true,
                message: "Ratings is required",
              },
            })}
            type="number"
            placeholder="Your ratings"
            className="input input-bordered w-full max-w-xs lg:max-w-md"
          />
          <label className="label">
            {errors.ratings?.type === "required" && (
              <span className="text-red-500">
                {errors.ratings?.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Your Photo</span>
          </label>
          <input
            {...register("picture", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
            type="file"
            placeholder="Enter Image"
            className="input input-bordered w-full max-w-xs lg:max-w-md"
          />
          <label className="label">
            {errors.picture?.type === "required" && (
              <span className="text-red-500">{errors.picture?.message}</span>
            )}
          </label>
        </div>

        <input
          className="btn btn-outline btn-secondary w-full max-w-xs lg:max-w-md mr-12"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReviews;
