import { Button } from "@/components/Common";
import { FaRegSave } from "react-icons/fa";

const ButtonActionsFormAddSocios = () => {
  return (
    <>
      <div className="flex-[0_1_15rem] items-end min-h-[12.5rem] flex ">
        <Button
          type="submit"
          btnStyled
          label="Enviar datos"
          className="bg-bg_secondary h-[3rem] hover:text-text_primary hover:bg-bg_secondary/50 outline outline-1 outline-bg_secondary/50 text-text_default font-robotoSlab_500"
        >
          <FaRegSave className="order-1" />
        </Button>
      </div>
    </>
  );
};

export default ButtonActionsFormAddSocios;
