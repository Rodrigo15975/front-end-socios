import { Typography } from "@/components/Common";
import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import storeTipoSocio from "@/store/storeGestionSocios/tipoSocio/storeTipoSocio";

import { BiArrowBack } from "react-icons/bi";

const TitleFormTipoSocio = () => {
  const { setOpenFormTipoSocio } = storeTipoSocio();
  return (
    <>
      <Typography
        className="text-xl font-robotoSlab_600 text-text_primary/w80"
        label="Nuevo tipo de Socio"
      />
      <CommonTooltip title="Volver">
        <ButtonIcon onClick={setOpenFormTipoSocio}>
          <BiArrowBack className="text-3xl cursor-pointer text-text_primary/80" />
        </ButtonIcon>
      </CommonTooltip>
    </>
  );
};

export default TitleFormTipoSocio;
