import { Button } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useFormikContext } from "formik";
import { FC, useEffect } from "react";
import { FaWpforms } from "react-icons/fa6";
import { GiSave } from "react-icons/gi";
import { InitialValuesArrayFormularioTipoUsuario } from "./inputsTipoUsuario/inputsTipoUsuario";
import { toast } from "react-toastify";

type PropsPropsButtonsFormularioTiposUsuarios = {
  onClick: () => void;
};

const ButtonsFormularioTipoUsuario: FC<
  PropsPropsButtonsFormularioTiposUsuarios
> = ({ onClick }) => {
  const { values } =
    useFormikContext<InitialValuesArrayFormularioTipoUsuario>();

  useEffect(() => {
    if (values.tipos_usuarios.length === 5) {
      toast.warning("Máximo 5 formularios");
    }
  }, [values.tipos_usuarios.length]);

  return (
    <>
      <Button
        type="submit"
        className="w-full flex items-center justify-center gap-2 text-text_primary  mb-4 bg-bg_primary h-[2.5rem]"
        btnDefault
        label="Registrar"
      >
        <GiSave />
      </Button>
      <CommonTooltip
        className="w-full flex bg-bg_three/20 hover:bg-bg_three transition items-center h-[2.5rem] rounded-full justify-center"
        title="Nuevo Formulario"
      >
        <Button
          type="button"
          disabled={values.tipos_usuarios.length === 5}
          label="Nuevo formulario"
          className="w-full gap-2 h-full flex items-center justify-center cursor-pointer"
          onClick={onClick}
        >
          <FaWpforms className="text-xl text-text_primary/80" />
        </Button>
      </CommonTooltip>
    </>
  );
};

export default ButtonsFormularioTipoUsuario;
