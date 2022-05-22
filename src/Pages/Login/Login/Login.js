import React from "react";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let errorMessage;

  if (error || gError) {
    errorMessage = (
      <p className="text-red-500 text-sm">
        {error?.message} {gError?.message}
      </p>
    );
  }

  if (loading || gLoading) {
    return <p>Loading...</p>;
  }

  if (user || gUser) {
    console.log("user", user, gUser);
  }

  const onSubmit = (data, event) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    event.target.reset();
  };
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <div class="text-center lg:text-left">
          <img
            className=" flex-shrink-1 w-full max-w-xl rounded-lg"
            src="https://i.ibb.co/N9PwSHt/login.jpg"
            alt=""
          />
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-2xl pt-8 font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="card-body pt-0">
              <div className="form-control w-full max-w-xs">
                <label className="label">
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
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
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
              <div className="form-control w-full max-w-xs">
                <label className="label">
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
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-500 text-sm">
                      {errors.password?.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="Login"
              />
              {errorMessage}
              <div class="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline"
              >
                Google Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
