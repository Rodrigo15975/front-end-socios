import { generalValidation } from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";
// Esquema de validación para el input 'tipo_usuario'
const sectorSchema = Yup.string()
  .required("Requerido")
  .matches(generalValidation.matchesLetras, "Solo se permiten letras")
  .min(2, "Mínimo 2 caracteres");

// Esquema de validacion para el formulario array
export const validationSchemaSector = Yup.object().shape({
  sectores: Yup.array().of(
    Yup.object().shape({
      sector: sectorSchema,
    })
  ),
});
