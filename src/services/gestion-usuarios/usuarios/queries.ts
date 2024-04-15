import { useQuery } from "@tanstack/react-query";
import { getUsuario } from "./apis";

export const useGetUsuario = () => {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: getUsuario,
  });
};
