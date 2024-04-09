import { generalValidation } from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";
// Esquema de validación para el input 'tipo_usuario'
const actividadSchema = Yup.string()
  .required("Requerido")
  .matches(generalValidation.matchesLetras, "Solo se permiten letras")
  .min(2, "Mínimo 2 caracteres");

// Esquema de validacion para el formulario array
export const validationSchemaActividad = Yup.object().shape({
  actividades: Yup.array().of(
    Yup.object().shape({
      actividad: actividadSchema,
    })
  ),
});
