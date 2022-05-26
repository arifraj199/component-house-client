import React from "react";
import { useQuery } from "react-query";
import LoadSpinner from "../Shared/LoadSpinner";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
    const {data:reviews,isLoading} = useQuery('reviews',()=>fetch('http://localhost:5000/review').then(res=>res.json()))

    if(isLoading){
        return <LoadSpinner></LoadSpinner>
    }
  return (
    <div className="my-6">
      <h2 className="text-4xl font-bold">Customers Review:{reviews?.length}</h2>
      <p className="text-slate-500">
        <small>Our precious customers review</small>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 lg:px-10">
          {
              reviews.map(userReview=><ReviewItem
                key={userReview._id}
                userReview={userReview}
              ></ReviewItem>)
          }
      </div>
    </div>
  );
};

export default Reviews;
