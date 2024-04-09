import Home from "@/pages/pageHome/AppPageHome";
import { IRoutePublic } from "./types/typeRouter";
import { PathsPublic } from "./enum/routerPaths";

export const routerPublics: IRoutePublic[] = [
  {
    path: PathsPublic.INICIO,
    Componente: Home,
  },
];
