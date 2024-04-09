import { Typography } from "@/components/Common";
import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { storeTipoUsuario } from "@/store";
import { BiArrowBack } from "react-icons/bi";

const TitleFormTipoUsuario = () => {
  const { setOpenFormTipoUsuario } = storeTipoUsuario();
  return (
    <>
      <Typography
        className="text-xl font-robotoSlab_600 text-text_primary/80"
        label="Nuevo tipo de Usuario"
      />
      <CommonTooltip title="Volver">
        <ButtonIcon onClick={setOpenFormTipoUsuario}>
          <BiArrowBack className="text-3xl cursor-pointer text-text_primary/80" />
        </ButtonIcon>
      </CommonTooltip>
    </>
  );
};

export default TitleFormTipoUsuario;
