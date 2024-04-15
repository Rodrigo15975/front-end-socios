import {
  InitialValuesArrayFormularioTipoSocio,
  InitialValuesInputsTipoSocio,
} from "@/components/GestionSocios/TipoSocio/PanelTipoSocio.tsx/FormTipoSocio/FormularioRegistroTipoSocio/inputsTipoSocio/inputsTipoSocio";

export interface PropsTipoSocios
  extends InitialValuesArrayFormularioTipoSocio {}

export interface CreateTipoSocio extends PropsTipoSocios {}

export interface GetTipoSocios extends InitialValuesInputsTipoSocio {
  _id: string;
}

export interface MessageCreatipoSocio {
  message: string;
}

export interface Message {
  message?: string;
}

export type UpdateTipoSocio = Partial<GetTipoSocios & Message>;
