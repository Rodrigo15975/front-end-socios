import { Button } from "@/components/Common";
import storeGetDataRuc from "@/store/storeGetDatRuc/storeGetDataRuc";
import { Socio } from "@/types/typeSocios";
import { useFormikContext } from "formik";
import { FaRegSave } from "react-icons/fa";
import { GrClear } from "react-icons/gr";

const ButtonActionsFormAddSocios = () => {
  const { resetForm } = useFormikContext<Socio>();
  const { clearDataRuc } = storeGetDataRuc();
  const clearForm = () => (resetForm(), clearDataRuc());
  return (
    <>
      <div className="flex-[0_1_15rem] flex-col gap-8 items-end min-h-[12.5rem] flex ">
        <Button
          type="button"
          btnStyled
          label="Limpiar"
          onClick={clearForm}
          className="bg-bg_three h-[3rem] hover:text-text_primary hover:bg-bg_three/50 outline outline-1 outline-bg_secondary/50 text-text_default font-robotoSlab_500"
        >
          <GrClear />
        </Button>
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
