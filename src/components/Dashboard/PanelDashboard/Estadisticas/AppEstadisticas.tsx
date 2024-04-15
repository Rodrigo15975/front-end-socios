import { useGetActividad } from "@/services/gestion-socios/actividad/queries";
import { useGetSector } from "@/services/gestion-socios/sector/queries";
import { useGetTipoSocio } from "@/services/gestion-socios/tipo-socios/queries";
import ChartEstadisticas from "./ChartEstadisticas";
import { useGetTipoUsuario } from "@/services/gestion-usuarios/tipo-usuario/queries";
import { useGetCargos } from "@/services/gestion-usuarios/cargo/queries";

const AppEstadisticas = () => {
  const tipoUsuario = useGetTipoUsuario();
  const cargo = useGetCargos();

  const tipoSocio = useGetTipoSocio();
  const actividad = useGetActividad();
  const sector = useGetSector();

  const onlyTipoUsuario = tipoUsuario.data?.filter(
    (tipo) => tipo.tipo_usuario !== "SIN TIPO"
  );
  const onlyCargo = cargo.data?.filter((tipo) => tipo.cargo !== "SIN CARGO");
  console.log(onlyCargo);

  const onlyTiposSocios = tipoSocio.data?.filter(
    (tipoSocio) => tipoSocio.socio !== "NINGUNA"
  );
  const onlySectores = sector.data?.filter(
    (tipoSocio) => tipoSocio.sector !== "NINGUNA"
  );
  const onlyActividad = actividad.data?.filter(
    (tipoSocio) => tipoSocio.actividad !== "NINGUNA"
  );

  return (
    <>
      <div className="flex-[0_1_35rem] border-border_primary/50 rounded-md hover:shadow-xl transition items-center shadow-md border min-h-[45vh] flex justify-center">
        <ChartEstadisticas
          backgroundColor={["#305aff", "#f5ff9c", "#beffde"]}
          dataSet={[
            onlyTiposSocios?.length,
            onlySectores?.length,
            onlyActividad?.length,
          ]}
          labels={["Tipos socios", "Sector", "Actividad"]}
        />
      </div>
      <div className="flex-[0_1_35rem] border-border_primary/50 rounded-md hover:shadow-xl transition items-center shadow-md border min-h-[45vh] flex justify-center">
        <ChartEstadisticas
          backgroundColor={["#ffe884", "#9affcd"]}
          dataSet={[onlyTipoUsuario?.length, onlyCargo?.length]}
          labels={["Tipos Usuarios", "Cargos"]}
        />
      </div>
    </>
  );
};

export default AppEstadisticas;
