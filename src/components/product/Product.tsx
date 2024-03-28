"use client";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";
import { addCart } from "@/api/api";
import toast from "react-hot-toast";
import Image from "next/image";
import { PlusIcon } from "@/assets/icons";

type Props = {
  products: IProduct[];
};

// Product component that displays the products
const Product = ({ products }: Props) => {
  const [activeElement, setActiveElement] = useState(0);
  const addToCart = async () => {
    const response = await addCart(products[activeElement]);
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
        centeredSlides={true}
        className=" h-full"
        autoplay={true}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          850: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        modules={[Autoplay]}
        onSnapIndexChange={(index) => setActiveElement(index.activeIndex)}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id} className={`h-full py-6 px-3  `}>
            <ProductCard
              activeElement={activeElement}
              index={index}
              product={product}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute min-h-20 -bottom-10  z-10 flex justify-center">
        <div className=" text-xs sm:text-sm w-[420px]  py-4  text-black font-semibold  rounded-full flex flex-col justify-evenly items-center sm:flex-row bg-white bg-opacity-80 backdrop-blur-xl">
          <div className=" flex sm:flex-col mb-2">
            <div>{products[activeElement]?.title}</div>
            <div>${products[activeElement]?.price}</div>
          </div>
          <div>
            <button
              onClick={addToCart}
              className=" bg-green-400 flex gap-2 rounded-3xl text-xs sm:text-sm p-4 px-8  items-center"
            >
              <Image src={PlusIcon} width={20} height={20} alt="plus_icon" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
