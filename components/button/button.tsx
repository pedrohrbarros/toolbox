import { Spinner } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function SubmitButton({
  isLoading,
  isSuccess,
  isError,
  data,
  error,
  initial_label
}: {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  data: string | undefined
  error: Error | null
  initial_label: string
}) {
  return (
    <motion.button
      disabled={isLoading}
      type="submit"
      className="h-full rounded-md p-2 md:p-4 cursor-pointer"
      animate={{
        backgroundColor:
          isLoading ? "#9e9e9e" :
            isSuccess ? "#00897b" :
              isError ? "#c62828" :
                "#689f38",
        width: isLoading ? "auto" : "100%",
        borderRadius: isLoading ? "50%" : "10px",
        cursor: isLoading ? "not-allowed" : "pointer",
      }}
      transition={{
        width: {
          duration: 0.2,
        },
        borderRadius: {
          delay: isLoading ? 0.12 : 0,
        }
      }}
    >
      {
        isSuccess ?
          (
            <p className="font-text text-xl md:text-2xl">
              {data}
            </p>
          )
          : isError ?
            (
              <p className="font-text text-xl md:text-2xl">
                {error?.message}
              </p>
            )
            : isLoading ?
              (
                <Spinner className="h-12 w-12" />
              )
              :
              (
                <p className="font-text text-xl md:text-2xl">
                  {initial_label}
                </p>
              )
      }
    </motion.button>
  )
}