import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import LoadSpinner from "../Shared/LoadSpinner";
import PlaceOrder from "./PlaceOrder";
import useAdmin from '../../hooks/useAdmin';

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [closeModal, setCloseModal] = useState(false);
  const restockRef = useRef(0);
  const [admin] = useAdmin(user);

  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery(["items", id], () =>
    fetch(`http://localhost:5000/purchase/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  

    const handleRestock = (id) =>{
        const reStockQuantity = restockRef.current.value;
        const available_quantity = items?.available_quantity;

        const totalAvailableQuantity = parseInt(available_quantity) + parseInt(reStockQuantity);
        const updateQuantity = {available_quantity:totalAvailableQuantity};

        fetch(`http://localhost:5000/update/${id}`,{
          method:"PUT",
          headers:{
            'content-type':'application/json',
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          },
          body:JSON.stringify(updateQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.acknowledged === true){
            toast.success('Update Quantity Successful');
            refetch();
          }
        });

        restockRef.current.value = '';      
    }

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img width="500" src={items?.picture} alt="Item" />
          <div className="text-left ml-4">
            <h1 class="text-3xl font-bold">{items?.name}</h1>
            <h2 className="text-2xl font-bold mt-2 my-6 text-emerald-500">
              ${items?.price}(per unit)
            </h2>

            <hr className=" mt-5 mb-8" />

            <p className="text-1xl font-semibold mb-2">
              Available Quantity: {items?.available_quantity}
            </p>
            <p className="text-1xl font-semibold">
              Minimum Order Quantity: {items?.minimum_order_quantity}
            </p>

            <p class="py-6">{items?.description}</p>
            <div>
              <label
                onClick={() => setCloseModal(true)}
                for="component-modal"
                class="btn btn-primary w-1/7"
              >
                Purchase Item
              </label>
            </div>
          </div>
        </div>
      </div>
      {closeModal && (
        <PlaceOrder
          items={items}
          refetch={refetch}
          setCloseModal={setCloseModal}
        ></PlaceOrder>
      )}
     {
       admin && 
      <div class="flex flex-col w-full border-opacity-50 bg-slate-300 pt-4 pb-8">
        <div class="divider text-3xl font-bold ">ReStock Quantity</div>
        <div class="grid h-20 card rounded-box place-items-center">
          <div className="flex">
            <input
              ref={restockRef}
              className="w-36 rounded-lg text-center"
              type="number"
              name=""
              id=""
            />
            <button onClick={()=>handleRestock(id)} className="btn btn-success ml-2">Restock</button>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Purchase;
