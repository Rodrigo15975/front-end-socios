import { InputDefaultNames } from "@/types/typeInputsDefault";
import { ReactNode } from "react";
import { Prueba1, Prueba2 } from "./Prueba";

export interface InputsNamesAddUsuarios extends InputDefaultNames {
  Component?: ReactNode;
}

export const inputsNamesFormArrayUsuarios: InputsNamesAddUsuarios[] = [
  { name: "dni", textPlaceHolder: "dni" },
  { name: "nombres", textPlaceHolder: "Nombres" },
  { name: "apellidos", textPlaceHolder: "Apellidos" },
  { name: "direccion", textPlaceHolder: "Dirección" },
  {
    name: "tipo",
    textPlaceHolder: "Seleccione un Tipo",
    as: "select",
    Component: <Prueba1 />,
  },
  {
    name: "cargo",
    textPlaceHolder: "Seleccione un Cargo",
    as: "select",
    Component: <Prueba2 />,
  },
  { name: "telefono", textPlaceHolder: "Teléfono" },
  { name: "contraseña", textPlaceHolder: "Contraseña" },
  { name: "celular", textPlaceHolder: "Célular" },
];

// Valores iniciales del valor del input(name)
export interface InitialValues {
  dni: string;
  nombres: string;
  apellidos: string;
  direccion: string;
  tipo: string;
  cargo: string;
  telefono: string;
  contraseña: string;
  celular: string;
}

// Valores para el formulario array
export interface InitialValuesArrayFormUsuarios {
  usuarios: InitialValues[];
}

// Valores iniciales del array
export const initialArrayFormUsuarios: InitialValuesArrayFormUsuarios = {
  usuarios: [
    {
      dni: "",
      apellidos: "",
      cargo: "",
      celular: "",
      contraseña: "",
      direccion: "",
      nombres: "",
      telefono: "",
      tipo: "",
    },
  ],
};

// agregar Nuevo formulario
export const initialValuesPushArrayFormUsuarios: InitialValues = {
  dni: "",
  apellidos: "",
  cargo: "",
  celular: "",
  contraseña: "",
  direccion: "",
  nombres: "",
  telefono: "",
  tipo: "",
};
