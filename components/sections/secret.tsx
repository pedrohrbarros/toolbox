import { useSecretStore } from "@/hooks/secret";
import { SecretRequest } from "@/models/secret";
import { Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Button } from "../button";
import { useState } from "react";

export default function SecretSection() {
  const { getSecret } = useSecretStore((state) => state);
  const { handleSubmit, control, register } = useForm<SecretRequest>({
    defaultValues: {
      length: 10
    }
  });
  const { data, error, isSuccess, reset, mutate, isLoading, isError } = useMutation<string, Error, SecretRequest>(getSecret);
  const [successfull_message, setSuccessfullMessage] = useState<string>("Copy to clipboard")

  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-16 p-10 md:p-20">
      <div className="w-full h-auto flex flex-row justify-center items-center ">
        <h1 className="text-white text-4xl font-bold font-text bg-transparent text-center">
          Generate secret
        </h1>
      </div>
      <form
        className="w-full h-full flex flex-col justify-center items-center flex-wrap gap-4"
        onSubmit={handleSubmit((form_data: SecretRequest) => {
          if (isSuccess) {
            navigator.clipboard.writeText(data)
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
          >
            Secret Length
          </label>
        </div>
        <input
          className="w-full text-xl bg-transparent border-b-2 border-gray-500 outline-none focus:border-gray-100 transition-all duration-500 font-text p-4"
          placeholder="Length"
          type="number"
          {...register("length", { required: true, min: 1, valueAsNumber: true })}
        />
        <div
          className="w-full h-auto flex flex-row justify-start items-start gap-4 flex-wrap"
        >
          <Checkbox
            className="mb-0"
            label={
              <p
                className="font-text text-white text-lg"
              >
                Special Characters
              </p>
            }
            color="green"
            defaultChecked
            ripple
            {...register("special_characters")}
          />
          <Checkbox
            label={
              <p
                className="font-text text-white text-lg"
              >
                Uppercase Characters
              </p>
            }
            color="green"
            defaultChecked
            ripple
            {...register("uppercase_characters")}
          />
          <Checkbox
            label={
              <p
                className="font-text text-white text-lg"
              >
                Lowcase Characters
              </p>
            }
            color="green"
            defaultChecked
            ripple
            {...register("lowcase_characters")}
          />
          <Checkbox
            label={
              <p
                className="font-text text-white text-lg"
              >
                Numbers
              </p>
            }
            color="green"
            defaultChecked
            ripple
            {...register("numbers")}
          />
        </div>
        <Button.Submit
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          error={error}
          initial_label="Generate"
          data={successfull_message}
        />
      </form>
    </section>
  )
}