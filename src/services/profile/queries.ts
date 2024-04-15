import { useQuery } from "@tanstack/react-query";
import { getIdProfile, getProfile } from "./api";

export const useGetProfile = (userId: string) => {
  return useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getProfile(userId),
  });
};

export const useGetId = () => {
  return useQuery({
    queryKey: ["id"],
    queryFn: getIdProfile,
  });
};
