"use client";
import React, { useState } from "react";
import CartCard from "./CartCard";

type Props = {
  carts: IProduct[];
};

// Cart component that displays the cart items
const Cart = ({ carts }: Props) => {
  return (
    <div className="p-6 grid grid-cols-3 gap-3 overflow-auto  h-full ">
      {carts.length > 0 ? (
        carts.map((cart) => {
          return <CartCard cart={cart} />;
        })
      ) : (
        <div className=" col-span-3 font-semibold text-lg h-full flex justify-center items-center w-full">
          No items to display
        </div>
      )}
    </div>
  );
};

export default Cart;
