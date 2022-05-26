import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const imageAPI = "abba58955c881135661a7c54bf264eca";

  const onSubmit = async (data, event) => {
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
        if (result.success) {
          const img = result.data.url;

          const productInfo = {
            name: data.name,
            price: data.price,
            minimum_order_quantity: data.minimum_order_quantity,
            available_quantity: data.available_quantity,
            description: data.description,
            picture: img,
          };

          const url = "https://pure-sierra-39289.herokuapp.com/component";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(productInfo),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.acknowledged === true) {
                toast.success("Product Added  Successfully");
                reset();
                navigate("/dashboard/manageproduct");
              } else {
                toast.error("Failed to Add Product");
              }
            });
        }
      });
  };
  return (
    <div className="my-14 w-4/5 lg:w-1/2 py-6 rounded-lg mx-auto shadow-xl">
      <h2 className="text-2xl text-purple-800 font-bold mb-4">Add A Product</h2>
      <form
        className=" lg:w-4/5 ml-8 lg:ml-18"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
            })}
            type="text"
            placeholder="Enter Product Name"
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
            <span className="label-text">Product Price</span>
          </label>
          <input
            {...register("price", {
              required: {
                value: true,
                message: "price is required",
              },
            })}
            type="number"
            placeholder="Enter Price"
            className="input input-bordered max-w-xs lg:max-w-md"
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="text-red-500">{errors.price?.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            {...register("minimum_order_quantity", {
              required: {
                value: true,
                message: "minimum quantity is required",
              },
            })}
            type="text"
            placeholder="Minimum Order Quantity"
            className="input input-bordered w-full max-w-xs lg:max-w-md"
          />
          <label className="label">
            {errors.minimum_order_quantity?.type === "required" && (
              <span className="text-red-500">
                {errors.minimum_order_quantity?.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            {...register("available_quantity", {
              required: {
                value: true,
                message: "available quantity is required",
              },
            })}
            type="text"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs lg:max-w-md"
          />
          <label className="label">
            {errors.available_quantity?.type === "required" && (
              <span className="text-red-500">
                {errors.available_quantity?.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: {
                value: true,
                message: "description is required",
              },
            })}
            type="text"
            placeholder="Product Description"
            className="input input-bordered w-full max-w-xs lg:max-w-md"
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="text-red-500">
                {errors.description?.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs lg:max-w-md">
          <label className="label">
            <span className="label-text">Product Photo</span>
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
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProducts;
