"use client";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";
import { addCart } from "@/api/api";
import toast from "react-hot-toast";

type Props = {
  products: IProduct[];
};

// Product component that displays the products
const Product = ({ products }: Props) => {
  const [activeElement, setActiveElement] = useState(0);
  const addToCart = async () => {
    const response = await addCart(products[activeElement + 1]);
    if (response) {
      if (response === "Product already in cart") {
        return toast.error("Product already in cart");
      }
      toast.success("Product added to cart");
    } else {
      toast.error("Failed to add product to cart");
    }
  };
  return (
    <div className=" h-full relative ">
      <Swiper
        className=" h-full"
        autoplay={true}
        slidesPerView={
          products.length > 3 ? 3 : products.length > 1 ? products.length : 1
        }
        spaceBetween={30}
        modules={[Autoplay]}
        onSnapIndexChange={(index) => setActiveElement(index.activeIndex)}
      >
        {products.map((product, index) => (
          <SwiperSlide className={`h-full py-6 px-3  `}>
            <ProductCard
              activeElement={activeElement}
              index={index}
              product={product}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute h-20 -bottom-10  z-10 flex justify-center">
        <div className=" text-sm w-[420px]   text-black font-semibold  rounded-full flex justify-evenly items-center bg-white bg-opacity-70 backdrop-blur-xl">
          <div className=" flex  flex-col">
            <div>{products[activeElement + 1]?.title}</div>
            <div>${products[activeElement + 1]?.price}</div>
          </div>
          <div>
            <button
              onClick={addToCart}
              className=" bg-white rounded-3xl text-sm p-4 flex items-center"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
