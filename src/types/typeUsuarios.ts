interface PropsPersona {
  dni: string;
  nombres: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  contraseña: string;
  celular: string;
}

export class Persona implements PropsPersona {
  apellidos: string = "";
  celular: string = "";
  contraseña: string = "";
  dni: string = "";
  direccion: string = "";
  nombres: string = "";
  telefono: string = "";
}
