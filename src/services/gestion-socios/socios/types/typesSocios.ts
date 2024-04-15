import { Socio } from "@/types/typeSocios";

export interface GetSocios
  extends Omit<Socio, "id_usuario" | "actividad" | "sector" | "tipo_socio"> {
  _id: string;
  id_actividad: {
    actividad: string;
  };
  id_sector: {
    sector: string;
  };
  id_tipo_socio: {
    socio: string;
  };
  id_usuario: {
    nombres: string;
    apellidos: string;
    dni: string;
  };
  message?: string;
}

export interface Message {
  message: string;
}

export interface CreateSocio extends Socio {
  id_usuario: string;
}
export interface InitialEditFormSocios
  extends Omit<Socio, "id_usuario" | "fecha_inscripcion"> {
  _id: string;
}

export type PartialInitialEditFormSocios = Partial<InitialEditFormSocios>;

export type UpdateSocio = Partial<GetSocios>;
