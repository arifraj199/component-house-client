import React from "react";
import { useQuery } from "react-query";
import LoadSpinner from "../Shared/LoadSpinner";
import Products from "./Products";

const ManageProducts = () => {
    const {data:products,isLoading} = useQuery('products',()=>fetch('http://localhost:5000/component').then(res=>res.json()));

    if(isLoading){
        return <LoadSpinner></LoadSpinner>
    }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage All Orders:{products?.length}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
              products.map(product => <Products
                key={product._id}
                product={product}
              ></Products>)
          }
      </div>
    </div>
  );
};

export default ManageProducts;
