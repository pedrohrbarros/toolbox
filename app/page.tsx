"use client";

import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

import logo from "@/assets/logo.png";
import { Section } from "@/components/sections";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log()
  })
  return (
    <main className="w-full min-h-screen h-full overflow-hidden flex flex-col justify-start items-center  bg-gradient-to-br from-teal-900 to-deep-purple-900">
      <div className="w-full h-[25vh] flex flex-row flex-nowrap justify-center items-center px-4 relative">
        <Image
          alt="Toolbox logo"
          className="absolute w-32 rotate-45"
          src={logo}
        />
        <h1 className="text-white font-title text-[5rem] uppercase z-10 tracking-widest">
          Toolbox
        </h1>
      </div>
      <div className="w-full min-h-[75vh] p-4 md:p-16">
        <Carousel className="w-full h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Section.URL key={1}/>
          <Section.Document key={2}/>
          <Section.Secret key={3}/>
        </Carousel>
      </div>
    </main>
  );
}
