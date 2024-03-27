import React from "react";
type Props = {
  detail: IProduct;
  index: number;
  activeElement: number;
};
const SliderItem = ({ detail, index, activeElement }: Props) => {
  return (
    <div
      className={`${
        activeElement + 1 === index ? " scale-100" : "scale-75"
      } w-full flex border border-red-700 flex-col items-center justify-center  overflow-hidden mr-2 duration-300 `}
    >
      <div className={`overflow-hidden`}>
        <img
          className={`w-full animation  object-contain`}
          src={detail.image}
          alt=""
        />
      </div>
      {activeElement + 1 !== index && (
        <div className=" flex flex-col items-center justify-center">
          <div className=" font-semibold mt-4 mb-2 text-lg ">
            {detail.title}
          </div>
          <div className=" font-semibold bold text-lg">${detail.price}</div>
        </div>
      )}
    </div>
  );
};

export default SliderItem;
