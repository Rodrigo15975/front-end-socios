import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";

export const validationSchemaConfiguracion = Yup.object().shape({
  nombre: Yup.string()
    .matches(generalValidation.matchesLetras, "Solo se permite letras")
    .required("El nombre es requerido")
    .min(3, "Mínimo 3 caracteres"),
  ruc: Yup.string()
    .matches(generalValidation.matchesRuc, messageValidation.msgRuc)
    .required("El RUC es requerido"),
  celular: Yup.string()
    .matches(
      generalValidation.matchesPhones,
      "El número de celular debe contener 9 dígitos"
    )
    .required("El celular es requerido"),
  direccion: Yup.string().matches(
    generalValidation.matchesDireccion,
    "La direccion debe contener Letras y numeros"
  ),
  telefono: Yup.string().matches(
    generalValidation.matchesPhones,
    "El número de celular debe contener 9 dígitos"
  ),
});
