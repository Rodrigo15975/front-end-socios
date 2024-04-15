import { Button } from "@/components/Common";
import AppFormActividad from "@/components/GestionSocios/Actividad/PanelActividad/FormActividad/AppFormActividad";
import AppFormSector from "@/components/GestionSocios/Sector/PanelSector/FormSector/AppFormSector";
import AppFormTipoSocio from "@/components/GestionSocios/TipoSocio/PanelTipoSocio.tsx/FormTipoSocio/AppFormTipoSocio";
import { AppFormCargo, AppFormTipoUsuario } from "@/components/GestionUsuarios";
import { PathSubRouterProtected } from "@/router/enum/routerPaths";
import {
  storeActividad,
  storeCargo,
  storeSector,
  storeTipoSocio,
  storeTipoUsuario,
} from "@/store";
import { Fieldset } from "primereact/fieldset";
import { useNavigate } from "react-router-dom";

const ActionFastDashboard = () => {
  const navigate = useNavigate();
  const { setOpenFormTipoSocio } = storeTipoSocio();
  const { setOpenFormSector } = storeSector();
  const { setOpenFormActividad } = storeActividad();
  const { setOpenFormCargo } = storeCargo();
  const { setOpenFormTipoUsuario } = storeTipoUsuario();
  const navigateFormUsuario = () =>
    navigate(PathSubRouterProtected.ADD_USUARIOS);

  const navigateFormSocio = () => navigate(PathSubRouterProtected.ADD_SOCIOS);

  return (
    <>
      <article className="p-8">
        <Fieldset
          legend="Acciones Rapidas"
          className="border  font-robotoSlab text-text_primary shadow-md border-border_primary/40"
          toggleable
        >
          <div className="flex gap-4 max-xl:flex-wrap font-robotoSlab_500 w-full justify-evenly">
            <Button
              onClick={setOpenFormTipoSocio}
              type="button"
              label="Crear Tipo Socio"
              className="flex-[0_1_10rem] h-[2.5rem] border bg-bg_secondary/10 rounded-md hover:shadow-md transition border-border_four max-xl:flex-[0_1_15rem]"
            />
            <Button
              type="button"
              label="Crear Sector"
              onClick={setOpenFormSector}
              className="flex-[0_1_10rem] h-[2.5rem] border-border_primary shadow-md border rounded-md hover:shadow-none transition  bg-bg_five/50 max-xl:flex-[0_1_15rem]"
            />
            <Button
              type="button"
              onClick={setOpenFormActividad}
              label="Crear Actividad"
              className="flex-[0_1_10rem] h-[2.5rem] hover:bg-bg_three/80 transition border-border_three/50 shadow-md border rounded-md bg-bg_three/50 max-xl:flex-[0_1_15rem]"
            />
            <Button
              type="button"
              label="Crear Socio"
              onClick={navigateFormSocio}
              className="flex-[0_1_10rem] h-[2.5rem] bg-bg_secondary/30 transition hover:bg-bg_secondary/50 border shadow-md rounded-md text-text_primary border-border_four max-xl:flex-[0_1_15rem]"
            />
            <Button
              type="button"
              label="Crear Usuario"
              onClick={navigateFormUsuario}
              className="flex-[0_1_10rem] h-[2.5rem] border shadow bg-bg_five/20 hover:bg-bg_five/50 border-border_primary rounded-md max-xl:flex-[0_1_15rem]"
            />
            <Button
              type="button"
              label="Crear Cargo"
              onClick={setOpenFormCargo}
              className="flex-[0_1_10rem] h-[2.5rem] hover:bg-bg_three/50 transition border shadow rounded-md max-xl:flex-[0_1_15rem]"
            />
            <Button
              type="button"
              onClick={setOpenFormTipoUsuario}
              label="Crear Tipo Usuario"
              className="flex-[0_1_13rem] h-[2.5rem] hover:bg-bg_five transition  border rounded-md border-border_four max-xl:flex-[0_1_15rem]"
            />
          </div>
        </Fieldset>
        <AppFormTipoSocio />
        <AppFormActividad />
        <AppFormSector />
        <AppFormCargo />
        <AppFormTipoUsuario />
      </article>
    </>
  );
};

export default ActionFastDashboard;
