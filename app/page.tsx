"use client";

import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";

import { Section } from "@/components/sections";

export default function Home() {

  return (
    <main className="w-full min-h-screen h-full overflow-hidden flex flex-col justify-start items-center  bg-gradient-to-br from-teal-900 to-deep-purple-900">
      <div className="w-full h-[25vh] flex flex-row flex-nowrap justify-center items-center px-4 relative">
        <Image
          alt="Toolbox logo"
          className="absolute w-32 rotate-45"
          src={require("@/assets/logo.png")}
        />
        <h1 className="text-white font-title text-[5rem] uppercase z-10 tracking-widest">
          Toolbox
        </h1>
      </div>
      <div className="w-full min-h-[75vh] p-4 md:p-16">
        <Carousel
          className="w-full h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 hidden md:block"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 hidden md:block"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <Section.URL key={1}/>
          <Section.File.Converter key={2}/>
          <Section.Secret key={3}/>
          <Section.File.ImageResize key={4}/>
        </Carousel>
      </div>
    </main>
  );
}
