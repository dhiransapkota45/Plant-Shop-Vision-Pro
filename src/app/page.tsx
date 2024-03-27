"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  // for animation while component mounts
  const [animate, setAnimate] = useState(false)
  useEffect(()=>{
    setAnimate(true)
  }, [])
  return (
    <div className={`${animate ? "scale-100" : "scale-90"} animation flex font-semibold flex-col gap-y-7 justify-center items-center h-full`}>
      <div className="  text-3xl">
        Welcome to Apple Vision Pro: Experience the Future of Sight
      </div>
      <div className=" max-w-[550px] text-lg text-center">
        Unlock a world of possibilities with Apple Vision Pro. Explore
        groundbreaking features designed to enhance your vision and empower your
        independence.
      </div>
      <div>
        <Link href={"/products"} className=" py-4 px-8 rounded-full bg-white bg-opacity-20  backdrop-blur-md">
          Explore Products
        </Link>
      </div>
    </div>
  );
}
