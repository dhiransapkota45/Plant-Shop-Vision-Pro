import React from "react";
import { useState, useEffect } from "react";
import SliderItem from "./SliderItem";
import useGetActiveElement from "@/hooks/useGetActiveElement";

type Props = {
  products: IProduct[];
  activeElement : number
};

const Slider = ({ products, activeElement }: Props) => {
  return (
    <>
      <div className={`overflow-x-hidden  relative h-full  `}>
        <div
          style={{ width: products.length * 384, left: -activeElement * 384 }}
          className=" animation flex relative   items-center "
        >
          {products?.map((detail, index) => {
            return (
              <SliderItem
                activeElement={activeElement}
                detail={detail}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
