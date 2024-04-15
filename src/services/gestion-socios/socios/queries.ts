import { useQuery } from "@tanstack/react-query";
import { getSocios } from "./apis";

export const useGetSocios = () => {
  return useQuery({
    queryKey: ["socios"],
    queryFn: getSocios,
  });
};
