import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { routes } from "@/data/routes";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vision Pro: Plant Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-cover bg-no-repeat bg-[url('../assets/images/background.jpg')]">
          <div className="  container flex gap-10  justify-center items-center h-screen w-full ">
            <div className="flex gap-4 shrink-0 backdrop-blur-lg bg-white bg-opacity-40 px-3 py-8 rounded-full flex-col ">
              {routes?.map((route) => (
                <Link
                  href={route.link}
                  className=" cursor-pointer animation bg-white bg-opacity-0 hover:bg-opacity-60 p-4 rounded-full "
                  key={route.link}
                >
                  <Image
                    width={25}
                    height={25}
                    src={route.icon}
                    alt={route.title}
                  />
                </Link>
              ))}
            </div>
            <div className="  text-white max-h-[700px] h-full w-[700px]  shrink-0 flex-1    bg-white  rounded-2xl bg-opacity-40  backdrop-blur-lg">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
