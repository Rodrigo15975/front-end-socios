import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { PathsProtected } from "@/router/enum/routerPaths";
import { TbArrowBack } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const ButtonBackPanelUsuario = () => {
  const navigate = useNavigate();

  const backPanelUsuarios = () => navigate(PathsProtected.USUARIOS);
  return (
    <>
      <div className="flex p-6 justify-end items-end h-full">
        <CommonTooltip className="flex-[0_1_20rem]" title="Volver a la tabla">
          <Button
            onClick={backPanelUsuarios}
            type="button"
            btnStyled
            className="w-full bg-bg_secondary/80 hover:bg-bg_secondary transition text-text_default font-robotoSlab_500"
            label="Volver"
          >
            <TbArrowBack className="text-2xl" />
          </Button>
        </CommonTooltip>
        
      </div>
    </>
  );
};

export default ButtonBackPanelUsuario;
