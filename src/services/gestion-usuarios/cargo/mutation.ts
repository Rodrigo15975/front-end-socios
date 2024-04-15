import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCargo, deleteCargo, updateCargo } from "./api";
import { CreateCargo, UpdateCargo } from "./types/typeCargo";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const useCreateCargo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateCargo) => createCargo(data),
    onMutate() {
      console.log("mutate");
    },
    onError(error) {
      console.log("error", error);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onSettled: async (_, error) => {
      if (error instanceof AxiosError) {
        return toast.warn(error.response?.data.message);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["cargos"] });
      }
    },
  });
};

export const useDeleteCargo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (_id: string) => deleteCargo(_id),
    onMutate() {
      console.log("mutate");
    },
    onError(error) {
      console.log("error", error);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onSettled: async (_, error) => {
      if (error instanceof AxiosError) {
        return toast.warn(error.response?.data.message);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["cargos"] });
      }
    },
  });
};

export const useUpdateCargo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateCargo) => updateCargo(data),
    onMutate() {
      console.log("mutate");
    },
    onError(error) {
      console.log("error", error);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onSettled: async (_, error) => {
      if (error instanceof AxiosError) {
        return toast.warn(error.response?.data.message);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["cargos"] });
      }
    },
  });
};
