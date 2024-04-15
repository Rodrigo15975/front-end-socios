import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { fileUpload } from "./api";
import { PartialUpload } from "./types/typeFileUpload";

export const useUpload = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: PartialUpload) => fileUpload(data),
    onMutate() {
      console.log("mutate");
    },
    onError(error) {
      console.log(error);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onSettled(_, error) {
      if (error) {
        console.log(error);
        return toast.error(error.message);
      }
      queryClient.invalidateQueries({
        queryKey: ["empresa"],
      });
    },
  });
};
