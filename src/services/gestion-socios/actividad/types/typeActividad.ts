import {
  InitialValuesArrayFormularioActividad,
  InitialValuesInputsActividad,
} from "@/components/GestionSocios/Actividad/PanelActividad/FormActividad/FormularioRegistroActividad/inputsActividad/inputsActividad";

export interface PropsActividad extends InitialValuesArrayFormularioActividad {}

export interface CreateActividad extends PropsActividad {}

export interface GetActividad extends InitialValuesInputsActividad {
  _id: string;
}

export interface MessageCreateActividad {
  message: string;
}

export interface Message {
  message?: string;
}

export type UpdateActividad = Partial<GetActividad & Message>;
