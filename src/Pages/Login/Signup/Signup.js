import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import LoadSpinner from "../../Shared/LoadSpinner";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [token] = useToken(user || gUser)
  let errorMessage;
  const navigate = useNavigate();

  if (error || gError || updateError) {
    errorMessage = (
      <p className="text-red-500 text-sm">
        {error?.message} {gError?.message} {updateError?.message}
      </p>
    );
  }

  if (loading || gLoading || updating) {
    return <LoadSpinner></LoadSpinner>;
  }

  if (token) {
    // console.log("user", user, gUser);
    navigate('/');
  }

  const onSubmit = async(data, event) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName:data.name});
    event.target.reset();
  };
  return (
    <div class="hero min-h-screen bg-base-100 my-12">
      <div class="hero-content flex-col lg:flex-row">
        <div class="text-center lg:text-left">
          <img
            className=" flex-shrink-1 w-full max-w-2xl rounded-lg"
            src="https://i.ibb.co/DLx5bC7/Signup.jpg"
            alt=""
          />
        </div>
        <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <h2 className="text-2xl pt-8 font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="card-body pt-0">
              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Enter Name"
                  className="input input-bordered w-full max-w-md"
                />
                <label className="label pb-0">
                  {errors.name?.type === "required" && (
                    <span className="text-red-500">{errors.name?.message}</span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-md">
                <label className="label pt-0">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                  type="email"
                  placeholder="Enter Email"
                  className="input input-bordered w-full max-w-md"
                />
                <label className="label pb-0">
                  {errors.email?.type === "required" && (
                    <span className="text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-md">
                <label className="label pt-0">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message:
                        "Minimum eight characters, at least one letter, one number and one special character",
                    },
                  })}
                  type="password"
                  placeholder="Enter Password"
                  className="input input-bordered w-full max-w-md"
                />
                <label className="label py-0">
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-500 text-sm">
                      {errors.password?.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn w-full max-w-md mt-4"
                type="submit"
                value="Sign Up"
              />
              {errorMessage}
              <div class="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline"
              >
                <img
                  className="mr-3"
                  src="https://i.ibb.co/PC8snZp/google.png"
                  alt=""
                />
                <span className="font-bold">Google Sign In</span>
              </button>
            </div>
          </form>

          <p className="pb-4 text-center">
            <small>
              Already have an account?{" "}
              <Link className="text-red-500" to="/login">
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
