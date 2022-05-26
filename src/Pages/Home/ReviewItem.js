import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ userReview }) => {
  const { name, company_name, review, ratings, picture } = userReview;
  console.log(userReview);
  return (
    <div class="card max-w-sm bg-base-100 shadow-xl">
      <figure class="px-10 pt-5 mb-1">
        <img src={picture} alt="Shoes" class="w-sm rounded-lg" />
      </figure>

      <div class="card-body items-center text-center">
        <h2 class="card-title text-lg">{name}</h2>
        <h2 class="card-title text-xl font-normal">{company_name}</h2>
        <p className="text-lg mt-0 pt-0">
          <small>
            Reviews: {ratings}{" "}
            <FontAwesomeIcon
              className="text-yellow-400"
              icon={faStarHalfStroke}
            ></FontAwesomeIcon>
          </small>
        </p>
        <p></p>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
