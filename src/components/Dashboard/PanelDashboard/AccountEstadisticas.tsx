import { useGetSocios } from "@/services/gestion-socios/socios/queries";
import { useGetUsuario } from "@/services/gestion-usuarios/usuarios/queries";
import ChartEstadisticas from "./Estadisticas/ChartEstadisticas";

const AccountEstadisticas = () => {
  const socios = useGetSocios();
  const usuarios = useGetUsuario();

  const onlyUsuario = usuarios.data?.filter(
    (usuario) => usuario.cargo !== "SIN TIPO"
  );
  const onlySocios = socios.data?.filter(
    (socio) => socio.id_tipo_socio.socio !== "NINGUNA"
  );

  return (
    <>
      <div className="flex-[0_1_48rem] gap-4 p-4 h-full flex justify-center border items-center  border-border_primary/50 rounded-md hover:shadow-xl transition shadow-md min-h-[45vh]">
        <ChartEstadisticas
          backgroundColor={["#ff1d688b", "#092beea6"]}
          dataSet={[onlyUsuario?.length, onlySocios?.length]}
          labels={["Usuarios", "Socios"]}
        />
      </div>
    </>
  );
};

export default AccountEstadisticas;
