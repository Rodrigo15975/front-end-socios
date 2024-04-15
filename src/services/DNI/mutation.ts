import { useMutation } from "@tanstack/react-query";
import StoreGetDataDni from "@/store/storeGetDataDni/storeGetDataDni";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { getDni } from "./api";

export const useGetDni = () => {
  const { updateDatDni } = StoreGetDataDni();
  return useMutation({
    mutationFn: (dni: string) => getDni(dni),
    onMutate() {},
    onError(error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
    onSettled(_, error) {
      console.log(error);
    },
    onSuccess(data) {
      if (
        data.apellidoMaterno !== undefined &&
        data.apellidoMaterno !== undefined &&
        data.nombres !== undefined &&
        data.numeroDocumento !== undefined
      ) {
        updateDatDni(data);
      }
    },
  });
};
