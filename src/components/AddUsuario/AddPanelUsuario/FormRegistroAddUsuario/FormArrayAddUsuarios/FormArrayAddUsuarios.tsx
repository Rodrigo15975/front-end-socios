import { Button, PropsInputOptional } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useFormikContext } from "formik";
import { FC } from "react";
import { IoTrashSharp } from "react-icons/io5";
import InputDniAddUsuarios from "./InputFormDniUsuarios/InputDniAddUsuarios";
import InputsFormArrayUsuarios from "./InputsFormUsuarios/InputsFormArrayUsuarios";
import { InitialValuesArrayFormUsuarios } from "./inputsArrayAddUsuarios/InputsArrayAddUsuarios";

const FormArrayAddUsuarios: FC<PropsInputOptional> = ({
  fieldProps,
  remove,
}) => {
  const { values } = useFormikContext<InitialValuesArrayFormUsuarios>();
  const removeFormAddUsuarios = (index: number) => remove && remove(index);

  return (
    <>
      <div className="flex-[0_1_55rem] border border-border_four/30 rounded-lg">
        {values.usuarios.map((_, index) => (
          <div key={`form-array-${index}`} className="p-1">
            <p className="p-2 font-robotoSlab_600 rounded-tr-md  rounded-tl-md bg-bg_secondary/50">
              Formulario - {index + 1}
            </p>
            {/* Input Dni */}
            <InputDniAddUsuarios index={index} fieldProps={fieldProps} />
            {/* Inpust Generales */}
            <InputsFormArrayUsuarios index={index} fieldProps={fieldProps} />
            {/* Botom de remover Form */}
            <div className="flex justify-end px-4 my-4">
              <CommonTooltip title="Eliminar Formulario">
                <Button
                  type="button"
                  className="cursor-pointer font-robotoSlab_500 gap-2 text-text_primary/50 flex"
                  label="Eliminar"
                  disabled={values.usuarios.length === 1}
                  onClick={() => removeFormAddUsuarios(index)}
                >
                  <IoTrashSharp className="text-2xl text-white bg-bg_secondary rounded-full" />
                </Button>
              </CommonTooltip>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FormArrayAddUsuarios;
