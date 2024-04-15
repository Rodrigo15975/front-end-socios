import { useQuery } from "@tanstack/react-query";
import { getActividad } from "./api";

export const useGetActividad = () => {
  return useQuery({
    queryKey: ["actividad"],
    queryFn: getActividad,
  });
};
