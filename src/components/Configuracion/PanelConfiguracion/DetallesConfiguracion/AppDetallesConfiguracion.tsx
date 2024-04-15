import { BiDetail, BiImageAdd } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";

import ErrorNetWork from "@/components/ErrorNetwork/ErrorNetWork";
import Loading from "@/components/Loading/Loading";
import DetallesConfiguracion from "./DetallesConfiguracion";
import { useGetEmpresa } from "@/services/configuracion";
import LogoDetallesConfiguracion from "./LogoDetallesConfiguracion";
import InformacionConfiguracion from "./InformacionConfiguracion";
import AppFormularioConfiguracion from "./FormularioConfiguracion/AppFormularioConfiguracion";
import LogoConfiguracion from "./FormularioLogo/LogoConfiguracion";

const AppDetallesConfiguracion = () => {
  const { data, isLoading, isError, error } = useGetEmpresa();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorNetWork error={error} />;

  return (
    <>
      <div className="p-8 max-h-[79vh] flex  overflow-y-auto mb-8 gap-6">
        <div className="w-full">
          <div className="w-full flex flex-wrap justify-between gap-4 min-h-[65vh]">
            {!data?.isRegisterEmpresa && (
              <div className="flex-[0_1_100%] shadow border border-border_primary/50 min-h-[70vh] rounded-md">
                <>
                  <InformacionConfiguracion
                    iconTitle={<RiEdit2Fill />}
                    title="Rellenar información"
                  />
                  <AppFormularioConfiguracion />
                </>
              </div>
            )}
            <div className="flex-[0_1_100%] shadow border border-border_primary/50 rounded-md">
              <LogoConfiguracion />
            </div>
          </div>
          <div className="w-full flex flex-wrap mt-4 flex-[0_1_45rem] justify-end gap-4 min-h-[65vh]">
            <div className="flex-[0_1_100%] shadow border border-border_primary/50 min-h-[70vh] rounded-md">
              <InformacionConfiguracion
                title="Detalles"
                iconTitle={<BiDetail />}
              />
              <DetallesConfiguracion />
            </div>
            <div className="flex-[0_1_100%] shadow border border-border_primary/50 min-h-[35vh] rounded-md">
              <InformacionConfiguracion
                iconTitle={<BiImageAdd />}
                title="Imagen"
              />
              <LogoDetallesConfiguracion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetallesConfiguracion;
