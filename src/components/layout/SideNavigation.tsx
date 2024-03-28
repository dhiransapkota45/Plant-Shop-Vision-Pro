"use client"
import { routes } from "@/data/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {};

// SideNavigation component that displays the navigation links
const SideNavigation = (props: Props) => {
    const pathname = usePathname();
    return (
    <div className="md:flex hidden gap-4 shrink-0 backdrop-blur-lg bg-white bg-opacity-40 px-3 py-8 rounded-full flex-col ">
      {routes?.map((route) => (
        <Link
          href={route.link}
          className={`cursor-pointer animation bg-white bg-opacity-0 hover:bg-opacity-30 p-4 rounded-full ${pathname===route.link ? 'bg-opacity-30' : ''}`}
          key={route.link}
        >
          <Image
            className=" "
            width={25}
            height={25}
            src={route.icon}
            alt={route.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default SideNavigation;
