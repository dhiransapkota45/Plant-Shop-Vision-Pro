"use client"
import { PlantImage } from "@/assets/images";
import Image from "next/image";

type Props = {
  activeElement: number;
  index: number;
  product: IProduct;
};

const ProductCard = ({ activeElement, index, product }: Props) => {
  return (
      <div
        className={`flex flex-col  hover:shadow-xl rounded-xl  items-center  justify-center  animation h-full`}
      >
        <Image
          src={PlantImage}
          width={300}
          height={300}
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
  );
};

export default ProductCard;
