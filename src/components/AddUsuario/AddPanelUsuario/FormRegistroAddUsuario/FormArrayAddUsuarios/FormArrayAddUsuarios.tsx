import { PropsInputOptional } from "@/components/Common";
import { useFormikContext } from "formik";
import { FC } from "react";
import InputDniAddUsuarios from "./InputFormDniUsuarios/InputDniAddUsuarios";
import InputsFormArrayUsuarios from "./InputsFormUsuarios/InputsFormArrayUsuarios";
import { InitialValuesArrayFormUsuarios } from "./inputsArrayAddUsuarios/InputsArrayAddUsuarios";

const FormArrayAddUsuarios: FC<PropsInputOptional> = ({ fieldProps }) => {
  const { values } = useFormikContext<InitialValuesArrayFormUsuarios>();

  return (
    <>
      <div className="flex-[0_1_55rem] border border-border_four/30 rounded-lg">
        {values.usuarios.map((_, index) => (
          <div key={`form-array-${index}`} className="p-1 pb-8">
            <p className="p-4 font-robotoSlab_600 rounded-tr-md  rounded-tl-md bg-bg_secondary/50">
              Formulario
            </p>
            {/* Input Dni */}
            <InputDniAddUsuarios index={index} fieldProps={fieldProps} />
            {/* Inpust Generales */}
            <InputsFormArrayUsuarios index={index} fieldProps={fieldProps} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FormArrayAddUsuarios;
