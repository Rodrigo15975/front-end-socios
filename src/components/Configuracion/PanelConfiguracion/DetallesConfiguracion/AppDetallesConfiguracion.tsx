import { RiEdit2Fill } from "react-icons/ri";

import { BiDetail, BiImageAdd } from "react-icons/bi";
import InformacionConfiguracion from "./InformacionConfiguracion";
import AppFormularioConfiguracion from "./FormularioConfiguracion/AppFormularioConfiguracion";
import LogoConfiguracion from "./LogoConfiguracion";

const AppDetallesConfiguracion = () => {
  return (
    <>
      <div className="p-8 max-h-[79vh] overflow-y-auto flex mb-8 gap-4">
        <div className="w-full flex flex-wrap justify-between gap-4 min-h-[65vh]">
          <div className="flex-[0_1_70rem]  shadow border border-border_primary/50 min-h-[70vh] rounded-md">
            <InformacionConfiguracion
              iconTitle={<RiEdit2Fill />}
              title="Rellenar información"
            />
            <AppFormularioConfiguracion />
          </div>
          <div className="flex-[0_1_70rem] shadow border border-border_primary/50 min-h-[70vh] rounded-md">
            <LogoConfiguracion />
          </div>
        </div>
        <div className="w-full flex flex-wrap flex-[0_1_45rem] justify-end gap-4 min-h-[65vh]">
          <div className="flex-[0_1_25rem]  shadow border border-border_primary/50 min-h-[70vh] rounded-md">
            <InformacionConfiguracion
              title="Detalles"
              iconTitle={<BiDetail />}
            />
          </div>
          <div className="flex-[0_1_25rem] shadow border border-border_primary/50 min-h-[70vh] rounded-md">
            <InformacionConfiguracion
              iconTitle={<BiImageAdd />}
              title="Imagen"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetallesConfiguracion;
