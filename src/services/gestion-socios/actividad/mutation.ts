import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { createActividad, deleteActividad, updateActividad } from "./api";
import { CreateActividad, UpdateActividad } from "./types/typeActividad";

export const useCreateActividad = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateActividad) => createActividad(data),
    onError(error) {
      console.log(error);
    },
    onMutate() {
      console.log("mutate");
    },
    onSettled: async (_, error) => {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message);
      }
      await queryClient.invalidateQueries({
        queryKey: ["actividad"],
      });
    },
    onSuccess(data) {
      toast.success(data.message);
    },
  });
};

export const useDeleteActividad = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteActividad(id),
    onError(error) {
      console.log(error);
    },
    onMutate() {
      console.log("mutate");
    },
    onSettled: async (_, error) => {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message);
      }
      await queryClient.invalidateQueries({
        queryKey: ["actividad"],
      });
    },
    onSuccess(data) {
      toast.success(data.message);
    },
  });
};

export const useUpdateActividad = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateActividad) => updateActividad(data),
    onError(error) {
      console.log(error);
    },
    onMutate() {
      console.log("mutate");
    },
    onSettled: async (_, error) => {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message);
      }
      await queryClient.invalidateQueries({
        queryKey: ["actividad"],
      });
    },
    onSuccess(data) {
      toast.success(data.message);
    },
  });
};
