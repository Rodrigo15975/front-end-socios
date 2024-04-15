import { Persona } from "./typeUsuarios";

// Se herada de persona y se omiten datos para el socio

// Datos heredados
// dni: string;
// telefono: string;
// celular: string;

export interface Socio
  extends Omit<Persona, "direccion" | "nombres" | "apellidos" | "contraseña"> {
  // Datos heredados
  // dni: string;
  // telefono: string;
  // celular: string;
  ruc: string;
  razon_social: string;
  correo: string;
  representante_legal: string;
  departamento: string;
  provincia: string;
  distrito: string;
  fecha_inicio_actividades: string;
  fecha_inscripcion: string;
  direccion1: string;
  direccion2: string;
  partida_registral: string;
  tipo_socio: string;
  sector: string;
  actividad: string;
  id_usuario: string;
}
