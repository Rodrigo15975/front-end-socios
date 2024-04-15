import { useQuery } from "@tanstack/react-query";
import { getSector } from "./api";

export const useGetSector = () => {
  return useQuery({
    queryKey: ["sector"],
    queryFn: getSector,
  });
};
