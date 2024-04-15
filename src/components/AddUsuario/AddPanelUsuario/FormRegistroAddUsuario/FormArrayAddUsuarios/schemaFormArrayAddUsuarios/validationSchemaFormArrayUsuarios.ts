import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";
// Esquema de validación para el input 'tipo_usuario'

// Esquema de validacion para el formulario array
export const validationSchemaFormArrayUsuario = Yup.object().shape({
  usuarios: Yup.array().of(
    Yup.object().shape({
      nombres: Yup.string()
        .matches(generalValidation.matchesLetras, "Nombres inválidos")
        .required("Requerido"),
      direccion: Yup.string()
        .matches(
          generalValidation.matchesDireccion,
          "Debe contener letras y números"
        )
        .min(4, "Minimo 4 digitos")
        .optional(),
      apellidos: Yup.string()
        .required("Requerido")
        .matches(generalValidation.matchesLetras, "Apellidos inválido")
        .min(3, "Mínimo"),
      dni: Yup.string()
        .matches(generalValidation.matchesDNI, messageValidation.msgDNI)
        .required("Requerido"),
      telefono: Yup.string()
        .matches(
          generalValidation.matchesPhones,
          "El teléfono debe tener 9 dígitos"
        )
        .optional(),
      contraseña: Yup.string()
        .matches(
          generalValidation.matchesLetrasAndNumbers,
          messageValidation.msgPassword
        )
        .required("Requerido")
        .min(4, "Mínimo de 4 caracteres")
        .max(50, "Máximo 50"),
      celular: Yup.string()
        .matches(
          generalValidation.matchesPhones,
          "El celular debe tener 9 dígitos"
        )
        .nullable()
        .required("Requerido"),
      tipo: Yup.string().required("Requerido"),
      cargo: Yup.string().required("Requerido"),
    })
  ),
});

export const validationSchemaFormEditUsuario = Yup.object().shape({
  nombres: Yup.string()
    .matches(generalValidation.matchesLetras, "Nombres inválidos")
    .required("Requerido"),

  direccion: Yup.string()
    .matches(
      generalValidation.matchesDireccion,
      "Debe contener letras y números"
    )
    .optional()
    .nullable(),

  apellidos: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, "Apellidos inválido")
    .min(3, "Mínimo"),

  dni: Yup.string()
    .matches(generalValidation.matchesDNI, messageValidation.msgDNI)
    .required("Requerido"),

  telefono: Yup.string()
    .matches(
      generalValidation.matchesPhones,
      "El teléfono debe tener 9 dígitos"
    )
    .optional()
    .nullable(),

  celular: Yup.string()
    .matches(generalValidation.matchesPhones, "El celular debe tener 9 dígitos")
    .nullable()
    .required("Requerido"),
});
