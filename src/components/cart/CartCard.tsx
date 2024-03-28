import { removeCart } from "@/api/api";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
    cart: IProduct;
};

// CartCard component that displays the cart items
const CartCard = ({cart}: Props) => {
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const checkoutHandler = async () => {
    setLoading(true);
    setTimeout(() => {
      
    }, 2000);
    const response =  await removeCart(cart.id);
    if(response){
        toast.success("Checkout Successful")
    }
    setLoading(false);
  };

  const deleteHandler = async () => {
    setDeleteLoading(true);
    setTimeout(() => {
      
    }, 2000);
    const response =  await removeCart(cart.id);
    if(response){
        toast.success("Remove Successful")
    }
    setDeleteLoading(false);
  };
  return (
    <div
      className=" py-3 shadow-md flex flex-col rounded-md hover:shadow-lg animation justify-center items-center  flex-wrap "
      key={cart.id}
    >
      <Image
        className=" h-40 object-contain"
        src={cart?.image}
        alt={cart.title}
      />
      <div className=" font-semibold">{cart.title}</div>
      <div className=" font-medium mb-2">${cart.price}</div>
      <button
        onClick={deleteHandler}
        className=" mb-2 rounded-full flex items-center gap-1 disabled:bg-opacity-15 py-3 px-14 bg-red-600 font-semibold backdrop-blur-md bg-opacity-40"
      >
        {deleteLoading && <div className="spinner"></div>} Remove
      </button>
      <button
        disabled={loading}
        onClick={checkoutHandler}
        className=" rounded-full flex items-center gap-1 disabled:bg-opacity-15 py-3 px-12 bg-green-600 font-semibold backdrop-blur-md bg-opacity-40"
      >
        {loading && <div className="spinner"></div>} Checkout
      </button>
    </div>
  );
};

export default CartCard;
