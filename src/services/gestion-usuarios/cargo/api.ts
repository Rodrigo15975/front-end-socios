import { useMethods } from "@/adapters/methods";
import {
  CreateCargo,
  GetCargos,
  Message,
  UpdateCargo,
} from "./types/typeCargo";
import { PathServices } from "@/services/pathServices";

export const getCargos = async () =>
  await useMethods.GET<GetCargos[]>(PathServices.CARGO);

export const createCargo = async (data: CreateCargo) =>
  await useMethods.POST<Message, CreateCargo>(PathServices.CARGO, data);

export const deleteCargo = async (_id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.CARGO}/${_id}`);

export const updateCargo = async (data: UpdateCargo) =>
  await useMethods.PATCH<UpdateCargo>(
    `${PathServices.CARGO}/${data._id}`,
    data
  );
