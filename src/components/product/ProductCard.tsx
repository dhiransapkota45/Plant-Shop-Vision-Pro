"use client"
import Image from "next/image";

type Props = {
  activeElement: number;
  index: number;
  product: IProduct;
};
// ProductCard component that displays the product card
const ProductCard = ({ activeElement, index, product }: Props) => {
  return (
      <div
        className={`flex flex-col  hover:shadow-xl rounded-xl  items-center  justify-center  animation h-full`}
      >
        <Image
          src={product?.image}
          width={300}
          height={300}
          className={` animation object-contain ${
            activeElement === index ? " h-[400px]" : "h-[250px]"
          } `}
          alt={product.title}
        />
        <div className=" flex flex-col items-center justify-center">
          <div className=" font-semibold mt-4 mb-2 text-lg ">
            {activeElement === index ? "" : product.title}
          </div>
          <div className=" font-semibold bold text-lg">
            {activeElement === index ? "" : `$${product.price}`}
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
