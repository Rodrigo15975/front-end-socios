// Nombres de las rutas(path)
export enum PathsPublic {
  // EXAMPLE
  INICIO = "/",
}
export enum PathsProtected {
  // EXAMPLE
  DASHBOARD = "/dashboard",
  TIPO_USUARIO = "/tipo-usuario",
  CARGO_USUARIO = "/cargo",
  USUARIOS = "/usuarios",
  SOCIOS = "/socios",
  TIPO_SOCIO = "tipo-socio",
  SECTOR = "/sector",
  ACTIVIDAD = "/actividad",
  REPORTEs = "/reportes",
  CONFIGURACION = "/configuracion",
}

export enum PathSubRouterProtected {
  ADD_USUARIOS = `${PathsProtected.USUARIOS}/add-usuarios`,
  ADD_SOCIOS = `${PathsProtected.SOCIOS}/add-socios`,
}
