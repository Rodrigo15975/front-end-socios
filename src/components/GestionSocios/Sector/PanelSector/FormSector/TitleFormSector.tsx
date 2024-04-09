import { Typography } from "@/components/Common";
import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import storeSector from "@/store/storeGestionSocios/sector/storeSector";
import { BiArrowBack } from "react-icons/bi";

const TitleFormSector = () => {
  const { setOpenFormSector } = storeSector();
  return (
    <>
      <Typography
        className="text-xl font-robotoSlab_600 text-text_primary/w80"
        label="Nuevo Sector"
      />
      <CommonTooltip title="Volver">
        <ButtonIcon onClick={setOpenFormSector}>
          <BiArrowBack className="text-3xl cursor-pointer text-text_primary/80" />
        </ButtonIcon>
      </CommonTooltip>
    </>
  );
};

export default TitleFormSector;
