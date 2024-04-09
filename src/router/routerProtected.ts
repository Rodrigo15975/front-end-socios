import { IRouterProtected } from "./types/typeRouter";
import { PathSubRouterProtected, PathsProtected } from "./enum/routerPaths";
import {
  AppPageActividad,
  AppPageAddUsuario,
  AppPageCargo,
  AppPageConfiguracion,
  AppPageDashboard,
  AppPageReportes,
  AppPageSector,
  AppPageSocios,
  AppPageTipoSocio,
  AppPageTipoUsuario,
  AppPageUsuarios,
} from "@/pages";
import AppPageAddSocios from "@/pages/pageAddSocios/AppPageAddSocios";

// Ingresa tus rutas
export const routerProtected: IRouterProtected[] = [
  {
    Componente: AppPageDashboard,
    path: PathsProtected.DASHBOARD,
  },
  {
    Componente: AppPageUsuarios,
    path: PathsProtected.USUARIOS,
  },
  {
    Componente: AppPageTipoUsuario,
    path: PathsProtected.TIPO_USUARIO,
  },
  {
    Componente: AppPageCargo,
    path: PathsProtected.CARGO_USUARIO,
  },
  {
    Componente: AppPageSocios,
    path: PathsProtected.SOCIOS,
  },
  {
    Componente: AppPageTipoSocio,
    path: PathsProtected.TIPO_SOCIO,
  },
  {
    Componente: AppPageSector,
    path: PathsProtected.SECTOR,
  },
  {
    Componente: AppPageActividad,
    path: PathsProtected.ACTIVIDAD,
  },
  {
    Componente: AppPageReportes,
    path: PathsProtected.REPORTEs,
  },
  {
    Componente: AppPageConfiguracion,
    path: PathsProtected.CONFIGURACION,
  },
  {
    Componente: AppPageAddUsuario,
    path: PathSubRouterProtected.ADD_USUARIOS,
  },
  {
    Componente: AppPageAddSocios,
    path: PathSubRouterProtected.ADD_SOCIOS,
  },
];
