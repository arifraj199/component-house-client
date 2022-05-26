import React, { useState } from "react";
import { useQuery } from "react-query";
import LoadSpinner from "../Shared/LoadSpinner";
import ManageProductDelete from "./ManageProductDelete";
import Products from "./Products";

const ManageProducts = () => {
  const [deleteIem, setDeleteItem] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://pure-sierra-39289.herokuapp.com/component").then((res) => res.json())
  );

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Manage All Orders:{products?.length}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Products
            key={product._id}
            product={product}
            setDeleteItem={setDeleteItem}
            refetch={refetch}
          ></Products>
        ))}
      </div>
      {deleteIem && (
        <ManageProductDelete
          deleteIem={deleteIem}
          setDeleteItem={setDeleteItem}
          refetch={refetch}
        ></ManageProductDelete>
      )}
    </div>
  );
};

export default ManageProducts;
