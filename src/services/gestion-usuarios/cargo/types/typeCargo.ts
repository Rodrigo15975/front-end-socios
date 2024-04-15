import {
  InitialValuesArrayFormularioCargo,
  InitialValuesInputsCargo,
} from "@/components/GestionUsuarios";

export interface CreateCargo extends InitialValuesArrayFormularioCargo {}

export interface GetCargos extends InitialValuesInputsCargo {
  _id: string;
}
export interface Message {
  message: string;
}

export type UpdateCargo = Partial<GetCargos & Message>;
