import { InitialValues } from "@/components/AddUsuario/AddPanelUsuario/FormRegistroAddUsuario/FormArrayAddUsuarios/inputsArrayAddUsuarios/InputsArrayAddUsuarios";

export interface PropsUpdateProfile extends Omit<InitialValues, "contraseña"> {
  _id: string;
}

export interface Message {
  message: string;
}

export type UpdateProfile = Partial<PropsUpdateProfile & Message>;

export type ContextQuery = {
  queryKey: string[];
  signal: AbortSignal;
  meta?: Record<string, unknown>;
};

export type GetId = {
  id: string;
};

interface User {
  _id: string;
  dni: string;
  nombres: string;
  apellidos: string;
  id_tipo: {
    _id: string;
    tipo_usuario: string;
  };
  id_cargo: {
    _id: string;
    cargo: string;
  };
  celular: string;
}
export type PartialUser = Partial<User>;
