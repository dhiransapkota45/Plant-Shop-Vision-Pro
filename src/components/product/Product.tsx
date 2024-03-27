"use client";
import { PlantImage } from "@/assets/images";
import { Plus } from "lucide";
import Image from "next/image";
// import React from "react";
// import Slider from "../common/Slider";
// import useGetActiveElement from "@/hooks/useGetActiveElement";
// import { Plus } from "lucide";

// type Props = {
//   products: IProduct[];
// };

// const Product = ({ products }: Props) => {
//   const { activeElement } = useGetActiveElement({ length: products.length });
//   return (
//     <div className="h-full ">
//       <Slider activeElement={activeElement} products={products} />
//       <div className="   w-full absolute h-24 -bottom-12  z-10 flex justify-center">
//         <div className=" w-[420px]  text-black font-semibold text-lg rounded-full flex justify-evenly items-center bg-white bg-opacity-70 backdrop-blur-xl">
//           <div className=" flex  flex-col">
//             <div>{products[activeElement + 1]?.title}</div>
//             <div>${products[activeElement + 1]?.price}</div>
//           </div>
//           <div>
//             <button className=" bg-white rounded-3xl p-3">
//               Add to Cart
//               </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useState } from "react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  products: IProduct[];
};

const Product = ({ products }: Props) => {
  const [activeElement, setActiveElement] = useState(0);
  return (
    <div className=" h-full relative ">
      <Swiper
        className=" h-full"
        autoplay={true}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay]}
        onSnapIndexChange={(index) => setActiveElement(index.activeIndex)}
      >
        {products.map((product, index) => (
          <SwiperSlide className={`h-full py-6  `} key={product.title}>
            <div
              className={`flex flex-col  hover:shadow-xl rounded-xl  items-center  justify-center  animation h-full`}
            >
              <Image
                src={PlantImage}
                width={300}
                height={300}
                // src={product.image}
                className={` animation object-contain ${
                  activeElement + 1 === index ? " h-[400px]" : "h-[250px]"
                } `}
                alt={product.title}
              />
              <div className=" flex flex-col items-center justify-center">
                <div className=" font-semibold mt-4 mb-2 text-lg ">
                  {activeElement + 1 === index ? "" : product.title}
                </div>
                <div className=" font-semibold bold text-lg">
                  {activeElement + 1 === index ? "" : `$${product.price}`}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="   w-full absolute h-20 -bottom-10  z-10 flex justify-center">
        <div className=" text-sm w-[420px]   text-black font-semibold  rounded-full flex justify-evenly items-center bg-white bg-opacity-70 backdrop-blur-xl">
          <div className=" flex  flex-col">
            <div>{products[activeElement + 1]?.title}</div>
            <div>${products[activeElement + 1]?.price}</div>
          </div>
          <div>
            <button className=" bg-white rounded-3xl text-sm p-4 flex items-center"> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
