import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { PartialEmpresa } from "./types/typeEmpresa";

export const createEmpresa = async (data: PartialEmpresa) =>
  await useMethods.POST<PartialEmpresa, PartialEmpresa>(
    `${PathServices.EMPRESA}`,
    data
  );

export const getEmpresa = async () =>
  await useMethods.GET<PartialEmpresa>(PathServices.EMPRESA);

export const updateEmpresa = async (data: PartialEmpresa) => {
  const { _id } = data;
  return await useMethods.PATCH<PartialEmpresa>(
    `${PathServices.EMPRESA}/${_id}`,
    data
  );
};
export const deleteEmpresa = async (data: PartialEmpresa) => {
  const { _id } = data;
  return await useMethods.DELETE<PartialEmpresa>(
    `${PathServices.EMPRESA}/${_id}`
  );
};
