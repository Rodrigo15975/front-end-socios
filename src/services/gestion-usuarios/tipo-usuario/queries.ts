import { useQuery } from "@tanstack/react-query";
import { getTipoUsuario } from "./api";

export const useGetTipoUsuario = () => {
  return useQuery({
    queryKey: ["tipo-usuario"],
    queryFn: getTipoUsuario,
  });
};
