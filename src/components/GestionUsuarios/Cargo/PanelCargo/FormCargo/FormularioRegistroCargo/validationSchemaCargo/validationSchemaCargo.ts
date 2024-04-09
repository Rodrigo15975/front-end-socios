import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";
// Esquema de validación para el input 'tipo_usuario'
const cargoSchema = Yup.string()
  .required("Requerido")
  .matches(generalValidation.matchesLetras, messageValidation.msgLetras)
  .min(2, "Mínimo 2 caracteres");

// Esquema de validacion para el formulario array
export const validationSchemaCargo = Yup.object().shape({
  cargos: Yup.array().of(
    Yup.object().shape({
      cargo: cargoSchema,
    })
  ),
});
