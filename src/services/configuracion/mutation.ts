import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { createEmpresa, deleteEmpresa, updateEmpresa } from "./api";
import { PartialEmpresa } from "./types/typeEmpresa";

export const useCreateEmpresa = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: PartialEmpresa) => createEmpresa(data),
    onMutate() {
      console.log("mutate");
    },
    onError(error) {
      console.log("error", error);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onSettled(_, error) {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({ queryKey: ["empresa"] });
      }
    },
  });
};

export const useUpdateEmpresa = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: PartialEmpresa) => updateEmpresa(data),
    onError(error) {
      console.log(error);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onMutate() {
      console.log("mutate");
      // El ! hace que no sea nulo o undefined, sirve ya que algun momento sera undfined
      // const queryData = queryClient.getQueryData<PartialEmpresa>(["empresa"])!;
    },
    onSettled(_, error) {
      if (error) {
        return toast.error(error.message);
      }
      queryClient.invalidateQueries({
        queryKey: ["empresa"],
      });
    },
  });
};

export const useDeleteEmpresa = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: PartialEmpresa) => deleteEmpresa(data),
    onError(error) {
      console.log(error);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onMutate() {
      console.log("mutate");

      // El ! hace que no sea nulo o undefined, sirve ya que algun momento sera undfined
      // const queryData = queryClient.getQueryData<PartialEmpresa>(["empresa"])!;
    },
    onSettled(_, error) {
      if (error) {
        return toast.error(error.message);
      }
      queryClient.invalidateQueries({
        queryKey: ["empresa"],
      });
    },
  });
};
