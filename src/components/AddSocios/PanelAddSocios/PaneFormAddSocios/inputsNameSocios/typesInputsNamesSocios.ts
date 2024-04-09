import { InputDefaultNames } from "@/types/typeInputsDefault";
import { Socio } from "@/types/typeSocios";
import { ReactNode } from "react";

export interface InputsNamesSocios extends InputDefaultNames {
  ComponentType?: ReactNode;
}

export const inputInitialValuesSocios: Socio = {
  actividad: "",
  celular: "",
  correo: "",
  departamento: "",
  direccion1: "",
  direccion2: "",
  distrito: "",
  dni: "",
  fecha_inicio_actividades: "",
  fecha_inscripcion: "",
  partida_registral: "",
  provincia: "",
  razon_social: "",
  representante_legal: "",
  id_usuario: "",
  ruc: "",
  sector: "",
  telefono: "",
  tipo_socio: "",
};
