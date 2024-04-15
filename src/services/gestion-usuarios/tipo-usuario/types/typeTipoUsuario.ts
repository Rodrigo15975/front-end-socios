import {
  InitialValuesArrayFormularioTipoUsuario,
  InitialValuesInputsTipoUsuario,
} from "@/components/GestionUsuarios";

export interface GetTipoUsuario extends InitialValuesInputsTipoUsuario {
  _id: string;
}

export interface Message {
  message: string;
}

export interface CreateTipoUsuario
  extends InitialValuesArrayFormularioTipoUsuario {}

export interface PropsUpdateTipoUsuario extends InitialValuesInputsTipoUsuario {
  _id: string;
}
export type UpdateTipoUsuario = Partial<PropsUpdateTipoUsuario & Message>;
