import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { createTipoUsuario, deleteTipoUsuario, updateTipoUsuario } from "./api";
import { CreateTipoUsuario, UpdateTipoUsuario } from "./types/typeTipoUsuario";

export const useCreateTipoUsuario = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTipoUsuario) => createTipoUsuario(data),
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
        toast.warn(error.response?.data.message);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["tipo-usuario"],
        });
      }
    },
  });
};

export const useDeleteTipoUsuario = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (_id: string) => deleteTipoUsuario(_id),
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
        console.log(error.response?.data.message);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["tipo-usuario"],
        });
      }
    },
  });
};

export const useUpdateTipoUsuario = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateTipoUsuario) => updateTipoUsuario(data),
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
        console.log(error.response?.data.message);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["tipo-usuario"],
        });
      }
    },
  });
};
