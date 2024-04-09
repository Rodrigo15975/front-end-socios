import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { PathSubRouterProtected } from "@/router/enum/routerPaths";
import { FaRegAddressCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ButtonAddSocios = () => {
  const navigate = useNavigate();

  const navigateAddSocios = () => navigate(PathSubRouterProtected.ADD_SOCIOS);

  return (
    <>
      <div className="flex justify-between bg-bg_five/10 items-end h-full">
        <CommonTooltip title="Nuevo Socio">
          <Button
            onClick={navigateAddSocios}
            label="Nuevo"
            className="flex p-4 bg-bg_three hover:bg-bg_three/50 rounded-md shadow-md hover:shadow-none transition font-robotoSlab_500 items-center justify-center gap-2"
            type="button"
          >
            <FaRegAddressCard />
          </Button>
        </CommonTooltip>

        <CommonTooltip title="Export Excel">
          <Button
            type="button"
            className="p-4 bg-bg_secondary hover:bg-bg_secondary/50 shadow-md hover:shadow-none transition rounded-md text-text_default font-robotoSlab_600"
          >
            Export
          </Button>
        </CommonTooltip>
      </div>
    </>
  );
};

export default ButtonAddSocios;
