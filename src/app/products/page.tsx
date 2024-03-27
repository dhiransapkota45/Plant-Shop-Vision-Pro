import { getProducts } from "@/api/api";
import Product from "@/components/product/Product";
import React from "react";

const page = async () => {
  const products = await getProducts();

  return (
    <div className=" h-full">
      {products?.length>0 && <Product products={products} />}
    </div>
  );
};

export default page;
