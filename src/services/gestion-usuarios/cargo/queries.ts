import { useQuery } from "@tanstack/react-query";
import { getCargos } from "./api";

export const useGetCargos = () => {
  return useQuery({
    queryKey: ["cargos"],
    queryFn: getCargos,
  });
};
