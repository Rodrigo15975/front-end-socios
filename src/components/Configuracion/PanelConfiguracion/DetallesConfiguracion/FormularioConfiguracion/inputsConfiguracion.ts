import { InputDefaultNames } from "@/types/typeInputsDefault";

export interface InputsConfiguracion extends InputDefaultNames {}

// Propiedades para el valor inicial del input
export interface PropsInitialInputsConfiguracion {
  ruc: string;
  nombre: string;
  direccion: string;
  telefono: string;
  celular: string;
}

// Valor inicial
export const initialInputsConfiguracion: PropsInitialInputsConfiguracion = {
  direccion: "",
  nombre: "",
  ruc: "",
  celular: "",
  telefono: "",
};

// Inputs
export const inputsLabelConfiguracion: InputsConfiguracion[] = [
  {
    name: "ruc",
    textPlaceHolder: "Ruc:",
  },
  {
    name: "nombre",
    textPlaceHolder: "Nombre:",
  },
  {
    name: "direccion",
    textPlaceHolder: "Direccion:",
  },
  {
    name: "telefono",
    textPlaceHolder: "Teléfono:",
  },
  {
    name: "celular",
    textPlaceHolder: "Célular:",
  },
];
