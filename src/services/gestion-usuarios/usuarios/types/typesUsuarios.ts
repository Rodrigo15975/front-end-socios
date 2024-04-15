import {
  InitialValues,
  InitialValuesArrayFormUsuarios,
} from "@/components/AddUsuario/AddPanelUsuario/FormRegistroAddUsuario/FormArrayAddUsuarios/inputsArrayAddUsuarios/InputsArrayAddUsuarios";

export interface CreateUsuario extends InitialValuesArrayFormUsuarios {}

export interface Message {
  message?: string;
}

export interface GetUsuarios extends Omit<InitialValues, "contraseña"> {
  _id: string;
  id_tipo: {
    tipo_usuario: string;
  };
  id_cargo: {
    cargo: string;
  };
}

interface InitialEditFormUsuarios extends Omit<InitialValues, "contraseña"> {
  _id: string;
}

export type PartialInitialEditFormUsuarios = Partial<InitialEditFormUsuarios>;


export interface PropsUpdateUsuario extends Omit<GetUsuarios, "contraseña"> {
  _id: string;
}


export type UpdateUsuario = Partial<PropsUpdateUsuario & Message>;
