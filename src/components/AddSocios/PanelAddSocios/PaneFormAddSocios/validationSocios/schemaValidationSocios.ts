import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";

// rEGISTRO IMPORTANTE
export const validationSchemaSocios = Yup.object().shape({
  ruc: Yup.string()
    .matches(generalValidation.matchesRuc, messageValidation.msgRuc)
    .required("Requerido"),

  dni: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesDNI, {
      message: messageValidation.msgDNI,
    }),

  razon_social: Yup.string()
    .matches(generalValidation.matchesRazonSocial, {
      message: `Razón social requerida`,
    })
    .required("Requerido"),

  correo: Yup.string()
    .matches(generalValidation.matchesEmail, {
      message: `${messageValidation.msgEmail}`,
    })
    .required("Requerido"),

  representante_legal: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: `El presentante legal ${messageValidation.msgLetras}`,
    }),

  fecha_inicio_actividades: Yup.date().required("Requerida"),

  telefono: Yup.string()
    .optional()
    .matches(generalValidation.matchesPhones, {
      message: `El teléfono ${messageValidation.msgPhones}`,
    }),

  actividad: Yup.string().required("Requerido"),

  celular: Yup.string()
    .matches(generalValidation.matchesPhones, {
      message: `El celular ${messageValidation.msgPhones}`,
    })
    .required("Requerido"),

  departamento: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: `El departamento ${messageValidation.msgLetras}`,
    }),

  provincia: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: `La provincia ${messageValidation.msgLetras}`,
    }),

  distrito: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: `El distrito ${messageValidation.msgLetras}`,
    }),

  direccion1: Yup.string()
    .matches(generalValidation.matchesDireccion, {
      message: `Dirección 1 ${messageValidation.msgDireccion}`,
    })
    .optional(),
  direccion2: Yup.string()
    .matches(generalValidation.matchesDireccion, {
      message: `Dirección 2 ${messageValidation.msgDireccion}`,
    })
    .optional(),
  partida_registral: Yup.string()
    .optional()
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: `La partida registral solo puede contener letras y números`,
    }),
  sector: Yup.string().required("Requerido"),
  tipo_socio: Yup.string().required("Requerido"),
});
