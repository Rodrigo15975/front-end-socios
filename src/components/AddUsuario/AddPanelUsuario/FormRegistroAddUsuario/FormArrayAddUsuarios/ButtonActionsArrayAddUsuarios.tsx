import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";

import { useFormikContext } from "formik";
import { FC, useEffect } from "react";
import { BsSave } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa6";
import { GrClearOption } from "react-icons/gr";

import { toast } from "react-toastify";
import { InitialValuesArrayFormUsuarios } from "./inputsArrayAddUsuarios/InputsArrayAddUsuarios";

type PropsButtonActionsArray = {
  push: () => void;
};

const ButtonActionsArrayAddUsuarios: FC<PropsButtonActionsArray> = ({
  push,
}) => {
  const { resetForm, values } =
    useFormikContext<InitialValuesArrayFormUsuarios>();

  useEffect(() => {
    if (values.usuarios.length === 5) {
      toast.warning("Máximo formularios 5", {
        position: "top-center",
      });
    }
  }, [values.usuarios.length]);

  return (
    <>
      <div className="flex-[0_1_20rem] sticky top-0 p-2 rounded-md border-border_primary/50 shadow flex flex-col gap-4 border">
        {/* Nuevo Form */}
        <CommonTooltip className="w-full h-[2.7rem]" title="Nuevo Formulario">
          <Button
            type="button"
            disabled={values.usuarios.length === 5}
            onClick={push}
            label="Nuevo"
            className="h-full font-robotoSlab_600 gap-2 hover:bg-bg_secondary transition flex items-center rounded-lg justify-center bg-bg_secondary/30 cursor-pointer w-full"
          >
            <FaWpforms className="text-2xl" />
          </Button>
        </CommonTooltip>
        {/* Reset form */}
        <CommonTooltip
          position="bottomRight"
          className="w-full h-[2.7rem]"
          title="Limpiar todo"
        >
          <Button
            type="button"
            label="Borrar"
            onClick={resetForm}
            className="h-full gap-2 hover:bg-bg_five transition flex items-center rounded-lg justify-center bg-bg_five/30 cursor-pointer w-full"
          >
            <GrClearOption className="text-2xl" />
          </Button>
        </CommonTooltip>
        {/* Enviar datos */}
        <Button
          className="w-full flex items-center justify-center gap-2 font-robotoSlab_600 transition-all rounded-lg bg-bg_three/80 hover:bg-bg_three/30 hover:outline hover:outline-black/50 outline-1 h-[2.7rem]"
          label="Guardar datos"
          type="submit"
        >
          <BsSave />
        </Button>
      </div>
    </>
  );
};

export default ButtonActionsArrayAddUsuarios;
