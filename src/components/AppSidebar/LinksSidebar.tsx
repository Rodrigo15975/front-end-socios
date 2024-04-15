import { PathsProtected } from "@/router/enum/routerPaths";
import { PropsSidebar } from "..";
import { LabelSidebar, LabelSubMenuSidebar } from "./labelPathSidebar";

import { AiOutlineUserAdd } from "react-icons/ai";
import { BsActivity } from "react-icons/bs";
import { GiModernCity } from "react-icons/gi";
import { GrDocumentConfig } from "react-icons/gr";
import { IoBusinessOutline } from "react-icons/io5";
import {
  PiFolderUserThin,
  PiUsersFourThin,
  PiUsersThree,
} from "react-icons/pi";
import { RiFolderUserLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TiBusinessCard } from "react-icons/ti";

const menu: PropsSidebar = {
  menu: [
    {
      icon: <RxDashboard />,
      label: LabelSidebar.DASHBOARD,
      path: PathsProtected.DASHBOARD,
    },
    {
      icon: <AiOutlineUserAdd />,
      label: LabelSidebar.USUARIOS,
      path: PathsProtected.USUARIOS,
      subMenu: [
        {
          iconSubMenu: <PiUsersThree />,
          labelSubMenu: LabelSidebar.GESTION_USUARIOS,

          icon: <RiFolderUserLine />,
          label: LabelSubMenuSidebar.TIPO_USUARIOS,
          path: PathsProtected.TIPO_USUARIO,
        },
        {
          icon: <PiFolderUserThin />,
          label: LabelSubMenuSidebar.CARGO_USUARIOS,
          path: PathsProtected.CARGO_USUARIO,
        },
      ],
    },
    {
      icon: <IoBusinessOutline />,
      label: LabelSidebar.SOCIOS,
      path: PathsProtected.SOCIOS,
      subMenu: [
        {
          iconSubMenu: <PiUsersFourThin />,
          labelSubMenu: LabelSidebar.GESTION_SOCIOS,
          icon: <TiBusinessCard />,
          label: LabelSubMenuSidebar.TIPO_SOCIOS,
          path: PathsProtected.TIPO_SOCIO,
        },
        {
          icon: <GiModernCity />,
          label: LabelSubMenuSidebar.SECTOR,
          path: PathsProtected.SECTOR,
        },
        {
          icon: <BsActivity />,
          label: LabelSubMenuSidebar.ACTIVIDAD,
          path: PathsProtected.ACTIVIDAD,
        },
      ],
    },
    // {
    //   icon: <TbReportSearch />,
    //   label: LabelSidebar.REPORTES,
    //   path: PathsProtected.REPORTEs,
    // },
    {
      icon: <GrDocumentConfig />,
      label: LabelSidebar.CONFIGURACION,
      path: PathsProtected.CONFIGURACION,
    },
  ],
};

export default menu;
