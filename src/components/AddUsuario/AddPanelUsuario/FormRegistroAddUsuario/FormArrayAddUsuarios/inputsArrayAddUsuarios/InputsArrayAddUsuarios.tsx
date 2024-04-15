import { InputDefaultNames } from "@/types/typeInputsDefault";
import React from "react";
import {
  Cargo,
  TipoUsuario,
  FormEditCargo,
  FormEditTipoUsuario,
} from "./CargoAndUsuario";

export interface InputsNamesAddUsuarios extends InputDefaultNames {
  Component?: React.JSX.Element;
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
    Component: <TipoUsuario />,
  },
  {
    name: "cargo",
    textPlaceHolder: "Seleccione un Cargo",
    as: "select",
    Component: <Cargo />,
  },
  { name: "telefono", textPlaceHolder: "Teléfono" },
  { name: "contraseña", textPlaceHolder: "Contraseña" },
  { name: "celular", textPlaceHolder: "Celular" },
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

export const InputsNameFormUsuariosEdit: InputsNamesAddUsuarios[] = [
  { name: "dni", textPlaceHolder: "DNI" },
  { name: "nombres", textPlaceHolder: "Nombres" },
  { name: "apellidos", textPlaceHolder: "Apellidos" },
  { name: "direccion", textPlaceHolder: "Dirección" },
  {
    name: "tipo",
    textPlaceHolder: "Seleccione un Tipo",
    as: "select",
    Component: <FormEditTipoUsuario />,
  },
  {
    name: "cargo",
    textPlaceHolder: "Seleccione un Cargo",
    as: "select",
    Component: <FormEditCargo />,
  },
  { name: "telefono", textPlaceHolder: "Teléfono" },
  { name: "celular", textPlaceHolder: "Célular" },
];
