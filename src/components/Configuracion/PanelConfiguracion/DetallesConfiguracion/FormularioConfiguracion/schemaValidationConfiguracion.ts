import { generalValidation } from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";

export const validationSchemaConfiguracion = Yup.object().shape({
  direccion: Yup.string()
    .required("La dirección es requerida")
    .matches(generalValidation.matchesLetras)
    .min(3, "Mínimo 3 caracteres"),
  nombre: Yup.string()
    .matches(generalValidation.matchesLetras, "Solo se permite letras")
    .required("El nombre es requerido")
    .min(3, "Mínimo 3 caracteres"),
  ruc: Yup.string()
    .matches(generalValidation.matchesRuc, "El RUC debe contener 11 dígitos")
    .required("El RUC es requerido"),
  celular: Yup.string()
    .matches(
      generalValidation.matchesPhones,
      "El número de celular debe contener 9 dígitos"
    )
    .required("El celular es requerido"),
  telefono: Yup.string()
    .matches(
      generalValidation.matchesPhones,
      "El número de teléfono debe contener 9 dígitos"
    )
    .required("El número de teléfono es requerido"),
});
