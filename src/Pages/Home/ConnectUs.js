import React from "react";

const ConnectUs = () => {
    
  return (
    <div class="hero min-h-screen bg-slate-50 ">
      <div class="hero-content flex-col lg:flex-row">
        <div class="text-center lg:text-left w-2/3">
          <h1 class="text-2xl lg:text-5xl font-bold">Feel Free to Message US</h1>
          <p class="py-6">
            Get our premium service for best output.We will provide you best service and make you trust worthy on us. <br />
            We take seriously our customers feedback and improve our service with day.  
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Message</span>
              </label>
              <textarea
                type="text"
                name='message'
                class="input input-bordered h-20"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
