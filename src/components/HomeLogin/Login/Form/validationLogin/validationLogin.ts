import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";

// Esquema de validacion para el formulario array
export const validationSchemaLogin = Yup.object().shape({
  dni: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesDNI, messageValidation.msgDNI),
  contraseña: Yup.string()
    .matches(
      generalValidation.matchesLetrasAndNumbers,
      messageValidation.msgPassword
    )
    .required("Requerido")
    .min(4, "Mínimo de 4 caracteres")
    .max(50, "Máximo 50"),
});
