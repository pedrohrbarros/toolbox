import { useURLStore } from "@/hooks/url";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Button } from "../button";
import { useState } from "react";

export default function URLSection() {
  const { shortenURL } = useURLStore((state) => state);
  const { handleSubmit, control, register } = useForm<{ url: string }>();
  const { data, error, isSuccess, reset, mutate, isLoading, isError } = useMutation<string, Error, string>(shortenURL);
  const [successfull_message, setSuccessfullMessage] = useState<string>("Copy to clipboard")

  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-16 p-10 md:p-20">
      <div className="w-full h-auto flex flex-row justify-center items-center ">
        <h1 className="text-white text-4xl font-bold font-text bg-transparent text-center">
          Shorten your URL
        </h1>
      </div>
      <form
        className="w-full h-full flex flex-col justify-center items-center gap-6 md:gap-12"
        onSubmit={handleSubmit((form_data: { url: string }) => {
          if (isSuccess) {
            navigator.clipboard.writeText(data)
            control._reset()
            setSuccessfullMessage("Copied!")
          } else {
            mutate(form_data.url)
          }
        })}
      >
        <input
          className="w-full text-xl bg-transparent border-b-2 border-gray-500 outline-none focus:border-gray-100 transition-all duration-500 font-text p-4"
          placeholder="Enter URL"
          type="url"
          onFocus={() => {
            reset()
            setSuccessfullMessage("Copy to clipboard")
          }}
          {...register("url", { required: true })}
        />
        <Button.Submit
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          error={error}
          initial_label="Shorten"
          data={successfull_message}
        />
      </form>
    </section>
  )
}