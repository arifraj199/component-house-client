import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
    useAuthState,
    useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import LoadSpinner from "../../Shared/LoadSpinner";
import { async } from "@firebase/util";
import { toast } from 'react-toastify';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
    auth
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailRef = useRef('');
  let errorMessage;
  const navigate = useNavigate();

  if (error || gError) {
    errorMessage = (
      <p className="text-red-500 text-sm">
        {error?.message} {gError?.message}
      </p>
    );
  }

  if (loading || gLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  if (user || gUser) {
    console.log("user", user, gUser);
    navigate('/');
  }

  const onSubmit = async(data, event) => {
    console.log(data);
    await signInWithEmailAndPassword(data.email, data.password);
    event.target.reset();
  };

  const handleReset = async ()=>{
    const email = emailRef.current.value;
      console.log(email);
    await sendPasswordResetEmail(email);
    if(email){
        toast.success('reset email send');
    }else{
        toast.error('please enter your email');
    }
    
  }
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <div class="text-center lg:text-left">
          <img
            className=" flex-shrink-1 w-full max-w-2xl rounded-lg"
            src="https://i.ibb.co/N9PwSHt/login.jpg"
            alt=""
          />
        </div>
        <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <h2 className="text-2xl pt-8 font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="card-body pt-0">
              <div className="form-control w-full max-w-md">
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
                  ref={emailRef}
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
                <p className="text-left pb-4">
                  <small>
                    Forget Password?{" "}
                    <Link onClick={handleReset} className="text-red-500" to="">
                      Reset
                    </Link>
                  </small>
                </p>
              </div>

              <input
                className="btn w-full max-w-md"
                type="submit"
                value="Login"
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
              Don't have an account?{" "}
              <Link className="text-red-500" to="/signup">
                Signup
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
