import { useMethods } from "@/adapters/methods";
import { PathsProtected } from "@/router/enum/routerPaths";
import { PathServices } from "@/services/pathServices";
import {
  CreateActividad,
  GetActividad,
  Message,
  MessageCreateActividad,
  UpdateActividad,
} from "./types/typeActividad";

export const getActividad = async () =>
  await useMethods.GET<GetActividad[]>(PathServices.ACTIVIDAD);

export const deleteActividad = async (id: string) =>
  await useMethods.DELETE<Message>(`${PathsProtected.ACTIVIDAD}/${id}`);

export const createActividad = async (data: CreateActividad) =>
  await useMethods.POST<MessageCreateActividad, CreateActividad>(
    PathServices.ACTIVIDAD,
    data
  );

export const updateActividad = async (data: UpdateActividad) =>
  await useMethods.PATCH<UpdateActividad>(
    `${PathServices.ACTIVIDAD}/${data._id}`,
    data
  );
