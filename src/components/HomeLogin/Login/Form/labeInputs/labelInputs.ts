import { DataInputs, InitialValuesFormLogin } from "./types/typesLabelInputs";

export const labelInputs: DataInputs[] = [
  {
    name: "dni",
    textPlaceHolder: "DNI",
    type: "text",
  },
  {
    name: "contraseña",
    textPlaceHolder: "Contraseña",
    type: "password",
  },
];

export const initialValuesFormLogin: InitialValuesFormLogin = {
  contraseña: "",
  dni: "",
};
