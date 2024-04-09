import { ComponentType } from "react";
import {
  PathSubRouterProtected,
  PathsProtected,
  PathsPublic,
} from "../enum/routerPaths";

export interface IRoutePublic {
  path: PathsPublic;
  Componente: ComponentType;
}

export interface IRouterProtected {
  Componente: ComponentType;
  path: PathsProtected | PathSubRouterProtected;
}
