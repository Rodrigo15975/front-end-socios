import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import storeConfiguration from "@/store/storeConfiguracion/storeConfiguracion";
import { IoSaveOutline } from "react-icons/io5";

const ButtonConfiguration = () => {
  const { setOpenFormConfiguration } = storeConfiguration();
  return (
    <>
      <CommonTooltip className="flex-[0_1_10rem]" title="Guardar configuración">
        <ButtonIcon
          onClick={setOpenFormConfiguration}
          className="bg-bg_five hover:bg-bg_primary/50 p-2 flex items-center rounded-md hover:text-text_default transition justify-center shadow-md cursor-pointer text-text_primary"
        >
          <IoSaveOutline className="text-3xl" />
        </ButtonIcon>
      </CommonTooltip>
    </>
  );
};

export default ButtonConfiguration;
