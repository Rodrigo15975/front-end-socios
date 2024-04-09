import { Typography } from "@/components/Common";
import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { storeCargo } from "@/store";
import { BiArrowBack } from "react-icons/bi";

const TitleFormCargo = () => {
  const { setOpenFormCargo } = storeCargo();
  return (
    <>
      <Typography
        className="text-xl font-robotoSlab_600 text-text_primary/w80"
        label="Nuevo Cargo"
      />
      <CommonTooltip title="Volver">
        <ButtonIcon onClick={setOpenFormCargo}>
          <BiArrowBack className="text-3xl cursor-pointer text-text_primary/80" />
        </ButtonIcon>
      </CommonTooltip>
    </>
  );
};

export default TitleFormCargo;
