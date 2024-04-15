import { useMethods } from "@/adapters/methods";
import { PathServices } from "@/services/pathServices";
import {
  CreateSocio,
  GetSocios,
  Message,
  UpdateSocio,
} from "./types/typesSocios";

export const getSocios = async () =>
  await useMethods.GET<GetSocios[]>(PathServices.SOCIO);

export const createSocio = async (data: CreateSocio) =>
  await useMethods.POST<Message, CreateSocio>(PathServices.SOCIO, data);

export const deleteSocio = async (id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.SOCIO}/${id}`);

export const updateSocio = async (data: UpdateSocio) =>
  await useMethods.PATCH<UpdateSocio>(
    `${PathServices.SOCIO}/${data._id}`,
    data
  );
