import { Button } from "@/components/button"
import { useFileStore } from "@/hooks/file"
import { ImageResizeRequest } from "@/models/file"
import { downloadFile } from "@/tools/file"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"

export default function ImageResizerSection() {
  const { resizeImage } = useFileStore((state) => state)
  const { handleSubmit, control, register } = useForm<ImageResizeRequest>()
  const { data, error, isSuccess, reset, mutate, isLoading, isError } = useMutation<File, Error, ImageResizeRequest>(resizeImage)

  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-16 p-10 md:p-20">
      <div className="w-full h-auto flex flex-row justify-center items-center ">
        <h1 className="text-white text-4xl font-bold font-text bg-transparent text-center">
          Resize Image
        </h1>
      </div>
      <form
        className="w-full h-[40vh] overflow-y-scroll flex flex-col justify-start items-center gap-6 md:gap-12 py-5 px-4"
        onSubmit={handleSubmit((form_data: ImageResizeRequest) => {
          if(isSuccess) {
            downloadFile(data)
            control._reset()
            reset()
          } else {
            mutate(form_data)
          }
        })}
      >
        <div className="w-full flex flex-row flex-nowrap justify-start items-center">
          <label
            className="text-white font-text text-xl"
            htmlFor="width"
          >
            New Image Width
          </label>
        </div>
        <input
          id="width"
          className="w-full text-xl bg-transparent border-b-2 border-gray-500 outline-none focus:border-gray-100 transition-all duration-500 font-text p-4"
          placeholder="New width"
          required
          min={100}
          max={2000}
          type="number"
          {...register("width", { valueAsNumber: true })}
        />
        <div className="w-full flex flex-row flex-nowrap justify-start items-center">
          <label
            className="text-white font-text text-xl"
            htmlFor="height"
          >
            New Image Height
          </label>
        </div>
        <input
          id="height"
          className="w-full text-xl bg-transparent border-b-2 border-gray-500 outline-none focus:border-gray-100 transition-all duration-500 font-text p-4"
          placeholder="New height"
          min={100}
          max={2000}
          required
          type="number"
          {...register("height", { valueAsNumber: true })}
        />
        <input
          className="w-full text-xl bg-transparent border-b-2 border-gray-500 outline-none focus:border-gray-100 transition-all duration-500 font-text p-4"
          placeholder="Enter file"
          type="file"
          required
          multiple={false}
          accept=".jpeg"
          {...register("image")}
        />
        <Button.Submit
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          error={error}
          data={isSuccess ? "Download" : undefined}
          initial_label="Resize"
        />
      </form>
    </section>
  )
}