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
      <div className="flex justify-between  bg-bg_five/10 items-end h-full">
        <CommonTooltip title="Nuevo Socio" className="flex flex-[0_1_14rem]">
          <Button
            onClick={navigateAddSocios}
            label="Nuevo"
            className="flex flex-[0_1_14rem] h-[2.7rem] bg-bg_three hover:bg-bg_three/50 rounded-md shadow-md hover:shadow-none transition font-robotoSlab_500 items-center justify-center gap-2"
            type="button"
          >
            <FaRegAddressCard />
          </Button>
        </CommonTooltip>
      </div>
    </>
  );
};

export default ButtonAddSocios;
