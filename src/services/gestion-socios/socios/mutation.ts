import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSocio, UpdateSocio } from "./types/typesSocios";
import { createSocio, deleteSocio, updateSocio } from "./apis";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const useCreateSocio = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSocio) => createSocio(data),
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
        queryKey: ["socios"],
      });
    },
    onSuccess(data) {
      console.log(data);
      toast.success(data.message);
    },
  });
};

export const useUpdateSocio = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateSocio) => updateSocio(data),
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
        queryKey: ["socios"],
      });
    },
    onSuccess(data) {
      console.log(data);
      toast.success(data.message);
    },
  });
};

export const useDeleteSocio = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteSocio(id),
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
        queryKey: ["socios"],
      });
    },
    onSuccess(data) {
      console.log(data);
      toast.success(data.message);
    },
  });
};
