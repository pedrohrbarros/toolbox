import { useFileStore } from "@/hooks/file"
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Button } from "../../button";
import { downloadFile } from "@/tools/file";
import { DocumentConverterRequest } from "@/models/file";


export default function FileConverterSection() {
  const { convertFile } = useFileStore((state) => state)
  const { handleSubmit, control, register } = useForm<DocumentConverterRequest>();
  const { data, error, isSuccess, reset, mutate, isLoading, isError } = useMutation<File, Error, DocumentConverterRequest>(convertFile);
  
  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-16 p-10 md:p-20">
      <div className="w-full h-auto flex flex-row justify-center items-center ">
        <h1 className="text-white text-4xl font-bold font-text bg-transparent text-center">
          Convert your file
        </h1>
      </div>
      <form
        className="w-full h-[30vh] overflow-y-scroll flex flex-col justify-start items-center gap-6 md:gap-12 py-5 px-4"
        onSubmit={handleSubmit((form_data: DocumentConverterRequest) => {
          if (isSuccess) {
            downloadFile(data)
            control._reset()
            reset()
          } else {
            mutate(form_data)
          }
        })}
      >
        <input
          className="w-full text-xl bg-transparent border-b-2 border-gray-500 outline-none focus:border-gray-100 transition-all duration-500 font-text p-4"
          placeholder="Enter file"
          type="file"
          required
          multiple={false}
          accept=".docx"
          {...register("file")}
        />
        <label
          htmlFor = "expected_type"
          className="font-text text-xl w-full text-left"
        >
          Expected type:
        </label>
        <select
          id="expected_type"
          required
          className="w-full py-2 px-[1px] font-text bg-transparent border-[1px] rounded-md border-gray-500 text-white"
          {...register("expected_type")}
          defaultValue="pdf"
        >
          <option value="pdf">PDF</option>
          <option value="docx" disabled>Word</option>
          <option value="ppxt" disabled>PowerPoint</option>
          <option value="txt" disabled>Notes</option>
        </select>
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