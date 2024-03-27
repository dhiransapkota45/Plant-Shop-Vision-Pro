"use client";
import { useEffect, useState } from "react";

type Props = {
  length: number;
};

const useGetActiveElement = ({ length }: Props) => {
  const [activeElement, setActiveElement] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setActiveElement((activeElement +1) % length);
    }, 3000);

    return () => clearTimeout(timer);
  });
  return { activeElement };
};

export default useGetActiveElement;
