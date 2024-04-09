import { Button, Typography } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { PathsProtected } from "@/router/enum/routerPaths";
import { FaAddressBook } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const TitlePanelAddSocios = () => {
  const navigate = useNavigate();

  const backTable = () => navigate(PathsProtected.SOCIOS);
  return (
    <>
      <div className="w-full flex items-center justify-between max-h-[4rem] min-h-[3rem] ">
        <Typography
          className="text-2xl font-robotoSlab_500 flex items-center justify-center gap-2 text-text_three"
          label="Nuevo Socio"
        >
          <FaAddressBook />
        </Typography>
        <CommonTooltip title="Volver a la tabla" className="flex-[0_1_8rem]">
          <Button
            onClick={backTable}
            type="button"
            btnStyled
            className="w-full bg-bg_five border border-border_four/80 text-text_primary font-robotoSlab_600"
            label="Volver"
          />
        </CommonTooltip>
      </div>
    </>
  );
};

export default TitlePanelAddSocios;
