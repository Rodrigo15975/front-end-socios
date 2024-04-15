import { useMethods } from "@/adapters/methods";
import { PathServices } from "@/services/pathServices";
import {
  CreateTipoUsuario,
  GetTipoUsuario,
  Message,
  UpdateTipoUsuario,
} from "./types/typeTipoUsuario";

export const getTipoUsuario = async () =>
  await useMethods.GET<GetTipoUsuario[]>(PathServices.TIPO_USUARIO);

export const createTipoUsuario = async (data: CreateTipoUsuario) =>
  await useMethods.POST<Message, CreateTipoUsuario>(
    PathServices.TIPO_USUARIO,
    data
  );

export const deleteTipoUsuario = async (_id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.TIPO_USUARIO}/${_id}`);

export const updateTipoUsuario = async (data: UpdateTipoUsuario) =>
  await useMethods.PATCH<UpdateTipoUsuario>(
    `${PathServices.TIPO_USUARIO}/${data._id}`,
    data
  );
