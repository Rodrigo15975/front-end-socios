import { useQuery } from "@tanstack/react-query";
import { getTipoSocio } from "./api";

export const useGetTipoSocio = () => {
  return useQuery({
    queryKey: ["tipo_socios"],
    queryFn: getTipoSocio,
  });
};
