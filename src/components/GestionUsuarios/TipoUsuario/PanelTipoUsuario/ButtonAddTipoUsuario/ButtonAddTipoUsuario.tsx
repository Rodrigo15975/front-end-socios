import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { storeTipoUsuario } from "@/store";
import { IoAddSharp } from "react-icons/io5";

const ButtonAddTipoUsuario = () => {
  const { setOpenFormTipoUsuario } = storeTipoUsuario();
  return (
    <>
      <div className="flex items-end h-full justify-end">
        <CommonTooltip
          title="Agrega un tipo de usuario"
          className="flex-[0_1_10rem]"
        >
          <Button
            onClick={setOpenFormTipoUsuario}
            type="button"
            label="Crear"
            className="w-full flex items-center justify-center hover:bg-bg_five/50 transition hover:shadow-none bg-bg_five rounded-md shadow-md border font-robotoSlab_500  h-[2.5rem]"
          >
            <IoAddSharp className="text-xl rounded-full" />
          </Button>
        </CommonTooltip>
      </div>
    </>
  );
};

export default ButtonAddTipoUsuario;
