import { getCarts } from "@/api/api";
import Cart from "@/components/cart/Cart";
import React from "react";

const page = async () => {
  const carts = await getCarts();

  if (carts) return <Cart carts={carts} />;
};

export default page;
