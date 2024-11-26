"use client";

import Image from "next/image";
import { Carousel, Spinner } from "@material-tailwind/react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

import logo from "@/assets/logo.png";
import { useURLStore } from "@/hooks/url";
import { motion } from "motion/react"

export default function Home() {
  const url_store = useURLStore((state) => state);
  const url_form = useForm<{ url: string }>();
  const url_mutation = useMutation<string, Error, string>(url_store.shortenURL);

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
        <Carousel className="w-full h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-16 p-10 md:p-20">
            <div className="w-full h-auto flex flex-row justify-center items-center ">
              <h1 className="text-white text-4xl font-bold font-subtitle bg-transparent text-center">
                Shorten your URL
              </h1>
            </div>
            <form
              className="w-full h-full flex flex-col justify-center items-center gap-6 md:gap-12"
              onSubmit={url_form.handleSubmit((data: { url: string }) => {
                if (url_mutation.isSuccess) {
                  window.open(url_mutation.data, '_blank')
                  url_form.control._reset()
                  url_mutation.reset()
                } else {
                  url_mutation.mutate(data.url)
                }
              })}
            >
              <input
                className="w-full text-xl bg-transparent border-b-2 border-gray-500 outline-none focus:border-gray-100 transition-all duration-500 font-text p-4"
                placeholder="Enter URL"
                type="url"
                {...url_form.register("url", { required: true })}
              />
              <motion.button
                disabled={url_mutation.isLoading}
                type="submit"
                className="h-full rounded-md p-2 md:p-4 cursor-pointer"
                animate = {{
                  backgroundColor: 
                    url_mutation.isLoading ? "#9e9e9e" :
                    url_mutation.isSuccess ? "#00897b":
                    url_mutation.isError ? "#c62828" :
                    "#689f38",
                  width: url_mutation.isLoading ? "auto" : "100%",
                  borderRadius: url_mutation.isLoading ? "50%" : "10px",
                  cursor: url_mutation.isLoading ? "not-allowed" : "pointer",
                }}
                transition={{
                  width: {
                    duration: 0.2,
                  },
                  borderRadius: {
                    delay: url_mutation.isLoading ? 0.12 : 0,
                  }
                }}
              >
                {
                  url_mutation.isSuccess ?
                  (
                    <p className="font-text text-xl md:text-2xl">
                      {url_mutation.data}
                    </p>
                  )
                  : url_mutation.isError ?
                  (
                    <p className="font-text text-xl md:text-2xl">
                      {url_mutation.error.message}
                    </p>
                  )
                  : url_mutation.isLoading ?
                    (
                      <Spinner className="h-12 w-12"/>
                    )
                  : 
                    (
                      <p className="font-text text-xl md:text-2xl">
                        Shorten
                      </p>
                    )
                }
              </motion.button>
            </form>
          </div>
        </Carousel>
      </div>
    </main>
  );
}
