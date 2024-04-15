import { InputsNamesSocios } from "../typesInputsNamesSocios";
import {
  RegisterFormSectorActvidadSocio,
  EditFormSectorActvidadSocio,
} from "../TipoSociosSectorActividad";

export const InpustNameSociosRegister = () => {
  const { Actividad, Sector, Socio } = RegisterFormSectorActvidadSocio();
  const { EditActividad, EditSector, EditSocio } =
    EditFormSectorActvidadSocio();
  const inputsNameSocios: InputsNamesSocios[] = [
    {
      name: "ruc",
      textPlaceHolder: "RUC",
    },
    {
      name: "tipo_socio",
      textPlaceHolder: "Tipo de Socio",
      ComponentType: <Socio />,
      as: "select",
    },
    {
      name: "razon_social",
      textPlaceHolder: "Razón Social",
    },
    {
      name: "sector",
      textPlaceHolder: "Sector",
      as: "select",
      ComponentType: <Sector />,
    },
    {
      name: "actividad",
      textPlaceHolder: "Actividad",
      as: "select",
      ComponentType: <Actividad />,
    },
    {
      name: "dni",
      textPlaceHolder: "DNI",
    },
    {
      name: "telefono",
      textPlaceHolder: "Teléfono",
    },
    {
      name: "correo",
      textPlaceHolder: "Correo",
    },
    {
      name: "representante_legal",
      textPlaceHolder: "Representate Legal",
    },
    {
      name: "departamento",
      textPlaceHolder: "Departamento",
    },
    {
      name: "provincia",
      textPlaceHolder: "Provincia",
    },
    {
      name: "distrito",
      textPlaceHolder: "Distrito",
    },
    {
      name: "fecha_inicio_actividades",
      textPlaceHolder: "Fecha inicio de actividades",
      type: "date",
    },
    {
      name: "celular",
      textPlaceHolder: "Celular",
    },
    {
      name: "direccion1",
      textPlaceHolder: "Dirección 1",
    },
    {
      name: "direccion2",
      textPlaceHolder: "Dirección 2",
    },
    {
      name: "partida_registral",
      textPlaceHolder: "Partida Registral",
    },
  ];

  const inputsNameSociosEditForm: InputsNamesSocios[] = [
    {
      name: "ruc",
      textPlaceHolder: "RUC",
    },
    {
      name: "tipo_socio",
      textPlaceHolder: "Tipo de Socio",
      ComponentType: <EditSocio />,
      as: "select",
    },
    {
      name: "razon_social",
      textPlaceHolder: "Razón Social",
    },
    {
      name: "sector",
      textPlaceHolder: "Sector",
      as: "select",
      ComponentType: <EditSector />,
    },
    {
      name: "actividad",
      textPlaceHolder: "Actividad",
      as: "select",
      ComponentType: <EditActividad />,
    },
    {
      name: "dni",
      textPlaceHolder: "DNI",
    },
    {
      name: "telefono",
      textPlaceHolder: "Teléfono",
    },
    {
      name: "correo",
      textPlaceHolder: "Correo",
    },
    {
      name: "representante_legal",
      textPlaceHolder: "Representate Legal",
    },
    {
      name: "departamento",
      textPlaceHolder: "Departamento",
    },
    {
      name: "provincia",
      textPlaceHolder: "Provincia",
    },
    {
      name: "distrito",
      textPlaceHolder: "Distrito",
    },
    {
      name: "fecha_inicio_actividades",
      textPlaceHolder: "Fecha inicio de actividades",
      type: "date",
    },
    {
      name: "celular",
      textPlaceHolder: "Celular",
    },
    {
      name: "direccion1",
      textPlaceHolder: "Dirección 1",
    },
    {
      name: "direccion2",
      textPlaceHolder: "Dirección 2",
    },
    {
      name: "partida_registral",
      textPlaceHolder: "Partida Registral",
    },
  ];

  return { inputsNameSocios, inputsNameSociosEditForm };
};
