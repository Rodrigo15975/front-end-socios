import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { storeActividad } from "@/store";
import { IoAddSharp } from "react-icons/io5";

const ButtonAddActividad = () => {
  const { setOpenFormActividad } = storeActividad();
  return (
    <>
      <div className="min-h-[1rem] h-full flex items-end justify-end w-full">
        <CommonTooltip
          title="Agrega Actividad"
          className="flex-[0_1_10rem]"
        >
          <Button
            onClick={setOpenFormActividad}
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

export default ButtonAddActividad;
