import React from "react";
import { useNavigate } from "react-router-dom";
import arif from "../../assets/arif.jpg";
import fruitInventory from "../../assets/fruit-inventory.png";
import rajPhoto from "../../assets/Wedding_photography.png";
import cameraHub from "../../assets/Screenshot 2022-05-26 165356.png";

const About = () => {
  return (
    <div>
      <div class="divider text-3xl w-4/5 mx-auto mb-8">My Profile</div>
      <div class="hero ">
        <div class="hero-content items-center flex-col lg:flex-row">
          <img
            src={arif}
            class="max-w-sm rounded-lg shadow-2xl lg:ml-10"
            alt="arif"
          />
          <div className="text-left mt-6 lg:mt-2 ml-4 lg:ml-6">
            <h1 class="text-lg font-bold mb-1">
              Name: <span className="font-normal">Arif Hossain</span>
            </h1>
            <h1 class="text-lg font-bold mb-1">
              Email: <span className="font-normal">karif9514@gmail.com</span>
            </h1>
            <h1 class="text-lg font-bold mb-1">
              Institute Name:
              <span className="font-normal">
                Bangabandhu Sheikh Mujibur Rahman Science and Technology
                University, Gopalganj
              </span>
            </h1>
            <h1 class="text-lg font-bold mb-1">
              Department:
              <span className="font-normal">
                {" "}
                Electrical and Electronic Engineering
              </span>
            </h1>
            <div>
              <h1 class="text-lg font-bold">Skills:</h1>
              <ul className="flex flex-col ml-12">
                <span>HTML</span>
                <progress
                  class="progress progress-primary w-72 mb-2"
                  value="90"
                  max="100"
                ></progress>
                <span>CSS</span>
                <progress
                  class="progress progress-primary w-72 mb-2"
                  value="85"
                  max="100"
                ></progress>
                <span>Java Script</span>
                <progress
                  class="progress progress-primary w-72 mb-2"
                  value="82"
                  max="100"
                ></progress>
                <span>React</span>
                <progress
                  class="progress progress-primary w-72 mb-2"
                  value="80"
                  max="100"
                ></progress>
                <span>React Router</span>
                <progress
                  class="progress progress-primary w-72 mb-2"
                  value="90"
                  max="100"
                ></progress>
                <span>Node JS</span>
                <progress
                  class="progress progress-primary w-72 mb-2"
                  value="70"
                  max="100"
                ></progress>
                <span>Mongodb</span>
                <progress
                  class="progress progress-primary w-72 mb-2"
                  value="65"
                  max="100"
                ></progress>
                <span>Firebase</span>
                <progress
                  class="progress progress-primary w-72 mb-2"
                  value="85"
                  max="100"
                ></progress>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="divider text-3xl w-4/5 mx-auto my-10">My Portfolio</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 my-10">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={fruitInventory} alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="card-actions justify-end">
              <a
                href="https://fruits-inventory.web.app/"
                target="_blank"
                class="btn btn-success"
              >
                {" "}
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={rajPhoto} alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="card-actions justify-end">
              <a
                href="https://weeding-photographer-b39e1.web.app/"
                target="_blank"
                class="btn btn-success"
              >
                {" "}
                Visit Website
              </a>
            </div>
          </div>
        </div>

        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={cameraHub} alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="card-actions justify-end">
              <a
                href="https://assignment-camera-hub.netlify.app/"
                target="_blank"
                class="btn btn-success"
              >
                {" "}
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
