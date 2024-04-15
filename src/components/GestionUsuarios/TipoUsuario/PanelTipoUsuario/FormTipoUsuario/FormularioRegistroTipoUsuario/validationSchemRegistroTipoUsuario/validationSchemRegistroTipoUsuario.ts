import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";
// Esquema de validación para el input 'tipo_usuario'
const tipoUsuarioSchema = Yup.string()
  .required("Requerido")
  .min(2, "Minimo 2 caracteres")
  .matches(generalValidation.matchesLetras, messageValidation.msgLetras);

// Esquema de validacion para el formulario array
export const initialValuesArrayFormularioTipoUsuarioSchema = Yup.object().shape(
  {
    tipos_usuarios: Yup.array().of(
      Yup.object().shape({
        tipo_usuario: tipoUsuarioSchema,
      })
    ),
  }
);

// Esquema de validacion para el formulario array
export const schemaValidationFormEditTipoUsuario= Yup.object().shape({
  tipo_usuario: tipoUsuarioSchema,
});
