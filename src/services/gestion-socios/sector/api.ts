import { useMethods } from "@/adapters/methods";
import { PathServices } from "@/services/pathServices";
import {
  CreateSector,
  GetSector,
  Message,
  UpdateSector,
} from "./types/typeSector";

export const getSector = async () =>
  await useMethods.GET<GetSector[]>(PathServices.SECTOR);

export const createSector = async (data: CreateSector) =>
  await useMethods.POST<Message, CreateSector>(PathServices.SECTOR, data);

export const deteleSector = async (_id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.SECTOR}/${_id}`);

export const updateSector = async (data: UpdateSector) =>
  await useMethods.PATCH<Message>(`${PathServices.SECTOR}/${data._id}`, data);
