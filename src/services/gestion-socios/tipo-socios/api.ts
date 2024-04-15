import { useMethods } from "@/adapters/methods";
import { PathServices } from "@/services/pathServices";
import {
  CreateTipoSocio,
  GetTipoSocios,
  Message,
  MessageCreatipoSocio,
  UpdateTipoSocio,
} from "./types/typeTipoSocios";

export const getTipoSocio = async () =>
  await useMethods.GET<GetTipoSocios[]>(PathServices.TIPO_SOCIO);

export const createTipoSocio = async (data: CreateTipoSocio) =>
  await useMethods.POST<MessageCreatipoSocio, CreateTipoSocio>(
    PathServices.TIPO_SOCIO,
    data
  );

export const deleteTipoSocio = async (id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.TIPO_SOCIO}/${id}`);

export const updateTipoSocio = async (data: UpdateTipoSocio) =>
  await useMethods.PATCH<UpdateTipoSocio>(
    `${PathServices.TIPO_SOCIO}/${data._id}`,
    data
  );
