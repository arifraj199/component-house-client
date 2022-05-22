import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen lg:px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className="rounded-md"
            width="600px"
            src="https://i.ibb.co/qFmkhFz/pexels-sergei-starostin-6636474.jpg"
            alt="computer component"
          />
          <div className="text-left">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Get <span className="text-purple-800">Computer Parts</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Explore Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
