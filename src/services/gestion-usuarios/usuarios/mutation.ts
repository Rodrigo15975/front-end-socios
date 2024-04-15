import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createUsuario, deleteUsuario, updateUsuario } from "./apis";
import { CreateUsuario, UpdateUsuario } from "./types/typesUsuarios";
import { AxiosError } from "axios";

export const useCreateUsuario = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateUsuario) => createUsuario(data),
    onMutate() {
      console.log("mutate");
    },
    onError(error) {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message);
      }
      console.log("error", error);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      }
    },
  });
};

export const useDeleteUsuario = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (_id: string) => deleteUsuario(_id),
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
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      }
    },
  });
};

export const useUpdateUsuario = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateUsuario) => updateUsuario(data),
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
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      }
    },
  });
};
