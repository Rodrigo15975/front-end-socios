import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { GetId, PartialUser, UpdateProfile } from "./types/typeProfile";

export const updateProfile = async (data: UpdateProfile) => {
  // return console.log(data);

  return await useMethods.PATCH<UpdateProfile>(
    `${PathServices.USUARIOS}/${data?._id}`,
    data
  );
};
export const getProfile = async (id: string) =>
  await useMethods.GET<PartialUser>(`${PathServices.USUARIOS}/${id}`);

export const getIdProfile = async () =>
  await useMethods.GET<GetId>(`${PathServices.PROFILE}`);
