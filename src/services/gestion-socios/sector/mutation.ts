import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { createSector, deteleSector, updateSector } from "./api";
import { CreateSector, UpdateSector } from "./types/typeSector";

export const useCreateSector = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSector) => createSector(data),
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
        queryKey: ["sector"],
      });
    },
    onSuccess(data) {
      toast.success(data.message);
    },
  });
};

export const useDeleteSector = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deteleSector(id),
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
        queryKey: ["sector"],
      });
    },
    onSuccess(data) {
      toast.success(data.message);
    },
  });
};

export const useUpdateSector = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateSector) => updateSector(data),
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
        queryKey: ["sector"],
      });
    },
    onSuccess(data) {
      toast.success(data.message);
    },
  });
};
