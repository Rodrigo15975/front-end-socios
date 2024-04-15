import {
  InitialValuesArrayFormularioSector,
  InitialValuesInputsSector,
} from "@/components/GestionSocios/Sector/PanelSector/FormSector/FormularioRegistroSector/inputsSector/inputsSector";

export interface PropsSector extends InitialValuesArrayFormularioSector {}

export interface CreateSector extends PropsSector {}

export interface GetSector extends InitialValuesInputsSector {
  _id: string;
}

export interface Message {
  message?: string;
}

export type UpdateSector = Partial<GetSector & Message>;
