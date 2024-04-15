import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { createTipoSocio, deleteTipoSocio, updateTipoSocio } from "./api";
import { CreateTipoSocio, UpdateTipoSocio } from "./types/typeTipoSocios";

export const useCreateTipoSocio = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTipoSocio) => createTipoSocio(data),
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
        queryKey: ["tipo_socios"],
      });
    },
    onSuccess(data) {
      toast.success(data.message);
    },
  });
};

export const useDeleteTipoSocio = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteTipoSocio(id),
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
        queryKey: ["tipo_socios"],
      });
    },
    onSuccess(data) {
      toast.success(data.message);
    },
  });
};

export const useUpdateTipoSocio = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateTipoSocio) => updateTipoSocio(data),
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
        queryKey: ["tipo_socios"],
      });
    },
    onSuccess(data) {
      toast.success(data.message);
    },
  });
};
