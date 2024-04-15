import { InputDefaultNames } from "@/types/typeInputsDefault";
import { Socio } from "@/types/typeSocios";
import React from "react";

export interface InputsNamesSocios extends InputDefaultNames {
  ComponentType?: React.JSX.Element;
}

export const inputInitialValuesSocios: Socio = {
  ruc: "",
  dni: "",
  razon_social: "",
  correo: "",
  telefono: "",
  representante_legal: "",
  fecha_inicio_actividades: "",
  fecha_inscripcion: "",
  actividad: "",
  celular: "",
  departamento: "",
  provincia: "",
  distrito: "",
  direccion1: "",
  direccion2: "",
  partida_registral: "",
  id_usuario: "",
  sector: "",
  tipo_socio: "",
};
