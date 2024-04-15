import storeGetDataRuc from "@/store/storeGetDatRuc/storeGetDataRuc";
import { useMutation } from "@tanstack/react-query";
import { getRucData } from "./api";

export const useGetRucData = () => {
  const { updateDataRuc } = storeGetDataRuc();
  return useMutation({
    mutationFn: (ruc: string) => getRucData(ruc),
    onError(error) {
      console.log(error);
    },
    onMutate() {},
    onSuccess(data) {
      if (
        data.departamento !== undefined &&
        data.direccion !== undefined &&
        data.provincia !== undefined &&
        data.numeroDocumento !== undefined &&
        data.distrito !== undefined &&
        data.razonSocial !== undefined
      ) {
        updateDataRuc(data);
      }
    },
    onSettled: async (_, error) => {
      console.log(error);
    },
  });
};
