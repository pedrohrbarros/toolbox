import { useDocumentStore } from "@/hooks/document"
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Button } from "../button";
import { downloadFile } from "@/tools/file";

export default function DocumentConverterSection() {
  const { convertWordToPDF } = useDocumentStore((state) => state)
  const { handleSubmit, control, register } = useForm<{ file: FileList }>();
  const { data, error, isSuccess, reset, mutate, isLoading, isError } = useMutation<File, Error, File>(convertWordToPDF);
  
  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-16 p-10 md:p-20">
      <div className="w-full h-auto flex flex-row justify-center items-center ">
        <h1 className="text-white text-4xl font-bold font-text bg-transparent text-center">
          Convert Word to PDF
        </h1>
      </div>
      <form
        className="w-full h-full flex flex-col justify-center items-center gap-6 md:gap-12"
        onSubmit={handleSubmit((form_data: { file: FileList }) => {
          if (isSuccess) {
            downloadFile(data)
            control._reset()
            reset()
          } else {
            mutate(form_data.file[0])
          }
        })}
      >
        <input
          className="w-full text-xl bg-transparent border-b-2 border-gray-500 outline-none focus:border-gray-100 transition-all duration-500 font-text p-4"
          placeholder="Enter file"
          type="file"
          {...register("file", { required: true })}
        />
        <Button.Submit
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          error={error}
          data={isSuccess ? "Download" : undefined}
          initial_label="Convert"
        />
      </form>
    </section>
  )
}