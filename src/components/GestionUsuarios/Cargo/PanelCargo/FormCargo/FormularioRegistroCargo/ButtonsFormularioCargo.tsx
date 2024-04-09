import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useFormikContext } from "formik";
import { FC, useEffect } from "react";
import { FaWpforms } from "react-icons/fa6";
import { GiSave } from "react-icons/gi";
import { toast } from "react-toastify";
import { InitialValuesArrayFormularioCargo } from "./inputsCargo/inputsCargo";

type PropsPropsButtonsFormularioCargo = {
  onClick: () => void;
};

const ButtonsFormularioCargo: FC<PropsPropsButtonsFormularioCargo> = ({
  onClick,
}) => {
  const { values } = useFormikContext<InitialValuesArrayFormularioCargo>();

  useEffect(() => {
    if (values.cargos.length === 5) {
      toast.warning("Máximo 5 formularios", {
        position: "top-center",
      });
    }
  }, [values.cargos.length]);

  return (
    <>
      <CommonTooltip
        className="w-full flex bg-bg_three/50 items-center h-[2.5rem] rounded-full justify-center"
        title="Nuevo Formulario"
      >
        <Button
          type="button"
          disabled={values.cargos.length === 5}
          label="Nuevo formulario"
          className="w-full gap-2 h-full flex items-center justify-center cursor-pointer"
          onClick={onClick}
        >
          <FaWpforms className="text-xl text-text_primary/80" />
        </Button>
      </CommonTooltip>

      <Button
        type="submit"
        className="w-full flex items-center justify-center gap-2 text-text_primary  mt-4 bg-bg_primary h-[2.5rem]"
        btnDefault
        label="Registrar"
      >
        <GiSave />
      </Button>
    </>
  );
};

export default ButtonsFormularioCargo;
