import { ButtonIcon } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { storeConfiguracion } from "@/store";
import { capitalize } from "lodash";
import { BiEditAlt } from "react-icons/bi";
import AppFormularioEditarConfiguracion from "./FormularioEditarConfiguracion/AppFormularioEditarConfiguracion";
import { RiDeleteBinLine } from "react-icons/ri";
import FormularioDeleteConfiguracion from "./FormularioEditarConfiguracion/FormularioDeleteConfiguracion";
import { useGetEmpresa } from "@/services/configuracion";

const DetallesConfiguracion = () => {
  const { setOpenFormEditConfiguracion, setOpenDeleteConfiguracion } =
    storeConfiguracion();
  const { data } = useGetEmpresa();
  const { nombre, direccion } = data!;

  const nombreCapitalize = capitalize(nombre);
  const direccionCapitalize = capitalize(direccion);

  return (
    <>
      <div className="p-8">
        <div className="flex justify-end gap-4 mb-4">
          {data?.isRegisterEmpresa && (
            <>
              <CommonTooltip title="Editar información">
                <ButtonIcon
                  onClick={setOpenFormEditConfiguracion}
                  className="bg-bg_secondary/50 cursor-pointer rounded-sm shadow-md"
                >
                  <BiEditAlt className="text-3xl text-text_default" />
                </ButtonIcon>
              </CommonTooltip>
              <CommonTooltip title="Eliminar información">
                <ButtonIcon
                  onClick={setOpenDeleteConfiguracion}
                  className="bg-bg_three/50 cursor-pointer rounded-sm shadow-md"
                >
                  <RiDeleteBinLine className="text-3xl text-text_default" />
                </ButtonIcon>
              </CommonTooltip>
            </>
          )}
        </div>
        <div className="flex flex-wrap justify-center w-full gap-4">
          <p className="flex-[0_1_100%] min-h-[4rem] text-text_primary shadow-md rounded-lg hover:shadow-none transition border-border_four/30 font-robotoSlab_500 items-center px-4 flex gap-4  w-full justify-between border">
            <span className="flex-[0_1_12rem]">Ruc</span>
            <span className="flex-[0_1_40rem] text-center  font-robotoSlab_400 text-text_default bg-bg_secondary  rounded p-1">
              {data?.ruc}
            </span>
          </p>
          <p className=" text-text_primary shadow-md rounded-lg hover:shadow-none  transition border-border_four/30 font-robotoSlab_500 items-center px-4 flex gap-4 flex-[0_1_100%] min-h-[4rem] w-full justify-between border">
            <span className="flex-[0_1_12rem]">Nombre</span>
            <span className="flex-[0_1_40rem] text-center  font-robotoSlab_400 text-text_default bg-bg_secondary  rounded p-1">
              {nombreCapitalize}
            </span>
          </p>
          <p className=" text-text_primary shadow-md rounded-lg hover:shadow-none  transition border-border_four/30 font-robotoSlab_500 items-center px-4 flex gap-4 flex-[0_1_100%] min-h-[4rem] w-full justify-between border">
            <span className="flex-[0_1_12rem]">Dirección</span>
            <span className="flex-[0_1_40rem] text-center  font-robotoSlab_400 text-text_default bg-bg_secondary  rounded p-1">
              {direccionCapitalize}
            </span>
          </p>
          <p className=" text-text_primary shadow-md rounded-lg hover:shadow-none  transition border-border_four/30 font-robotoSlab_500 flex items-center px-4 gap-4 flex-[0_1_100%] min-h-[4rem] w-full justify-between border">
            <span className="flex-[0_1_12rem]">Celular</span>
            <span className="flex-[0_1_40rem] text-center  font-robotoSlab_400 text-text_default bg-bg_secondary  rounded p-1">
              {data?.celular}
            </span>
          </p>
          <p className=" text-text_primary shadow-md rounded-lg hover:shadow-none  transition border-border_four/30 font-robotoSlab_500 items-center px-4 flex gap-4 flex-[0_1_100%] min-h-[4rem] w-full justify-between border">
            <span className="flex-[0_1_12rem]">Teléfono</span>
            <span className="flex-[0_1_40rem] text-center font-robotoSlab_400 bg-bg_secondary rounded p-1 text-text_default">
              {data?.telefono}
            </span>
          </p>
        </div>
      </div>
      {/* Formulario para editar información */}
      <AppFormularioEditarConfiguracion />
      {/* Modal para eliminar informacion */}
      <FormularioDeleteConfiguracion />
    </>
  );
};

export default DetallesConfiguracion;
