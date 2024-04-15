import { useMethods } from "@/adapters/methods";
import { PathServices } from "@/services/pathServices";
import {
  CreateUsuario,
  GetUsuarios,
  Message,
  UpdateUsuario,
} from "./types/typesUsuarios";

export const getUsuario = async () =>
  await useMethods.GET<GetUsuarios[]>(PathServices.USUARIOS);

export const createUsuario = async (data: CreateUsuario) =>
  await useMethods.POST<Message, CreateUsuario>(PathServices.USUARIOS, data);

export const deleteUsuario = async (id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.USUARIOS}/${id}`);

export const updateUsuario = async (data: UpdateUsuario) =>
  await useMethods.PATCH<UpdateUsuario>(
    `${PathServices.USUARIOS}/${data._id}`,
    data
  );
